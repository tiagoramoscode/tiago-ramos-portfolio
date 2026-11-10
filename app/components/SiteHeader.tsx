"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  DEFAULT_MENU_ITEMS,
  MENU_ITEMS_EVENT,
  readMenuItems,
  type MenuItem,
} from "@/lib/menu-items";

export function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const [menuItems, setMenuItems] = useState(DEFAULT_MENU_ITEMS);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [menuError, setMenuError] = useState("");

  useEffect(() => {
    const updateMenuItems = () => {
      try {
        setMenuItems(readMenuItems());
        setMenuError("");
      } catch (error) {
        setMenuError(
          error instanceof Error
            ? error.message
            : "Não foi possível carregar os títulos do menu.",
        );
      }
    };

    updateMenuItems();
    window.addEventListener(MENU_ITEMS_EVENT, updateMenuItems);
    window.addEventListener("storage", updateMenuItems);
    return () => {
      window.removeEventListener(MENU_ITEMS_EVENT, updateMenuItems);
      window.removeEventListener("storage", updateMenuItems);
    };
  }, []);

  useEffect(() => {
    const navigation = navigationRef.current;
    const header = headerRef.current;
    if (!navigation || !header) return;

    const measureOverflow = () => {
      const links = Array.from(navigation.children);
      const navigationBounds = navigation.getBoundingClientRect();
      const firstLinkBounds = links[0]?.getBoundingClientRect();
      const lastLinkBounds = links.at(-1)?.getBoundingClientRect();
      const clippedAtStart =
        firstLinkBounds !== undefined &&
        firstLinkBounds.left < navigationBounds.left - 2;
      const clippedAtEnd =
        lastLinkBounds !== undefined &&
        lastLinkBounds.right > navigationBounds.right + 2;

      setIsOverflowing(
        navigation.scrollWidth > navigation.clientWidth + 2 ||
          clippedAtStart ||
          clippedAtEnd,
      );
    };

    measureOverflow();
    const observer = new ResizeObserver(measureOverflow);
    observer.observe(header);
    observer.observe(navigation);
    window.addEventListener("resize", measureOverflow);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measureOverflow);
    };
  }, [menuItems, pathname]);

  useEffect(() => {
    if (!isDrawerOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsDrawerOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isDrawerOpen]);

  const menuHref = (item: MenuItem) =>
    pathname === "/" ? `#${item.sectionId}` : `/#${item.sectionId}`;

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header__inner">
        {isOverflowing && (
          <button
            aria-controls="site-menu-drawer"
            aria-expanded={isDrawerOpen}
            aria-label={isDrawerOpen ? "Fechar menu" : "Abrir menu"}
            className="site-header__menu-button"
            onClick={() => setIsDrawerOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        )}
        <Link aria-label="Tiago Ramos — início" className="site-header__brand" href="/">
          <img alt="" className="site-header__logo" height="40" src="/logo.png" width="40" />
          <span className="site-header__identity">
            <span className="site-header__title">Tiago Ramos</span>
            <span className="site-header__tagline">Art &amp; Technology</span>
          </span>
        </Link>
        <nav
          aria-label="Navegação principal"
          aria-hidden={isOverflowing}
          className="site-header__navigation"
          inert={isOverflowing}
          ref={navigationRef}
        >
          {menuItems.map((item) => (
            <a href={menuHref(item)} key={item.id}>
              {item.title}
            </a>
          ))}
        </nav>
      </div>
      {menuError && (
        <p aria-live="polite" className="site-header__error" role="status">
          {menuError}
        </p>
      )}
      {isOverflowing && isDrawerOpen && (
        <div className="site-menu-drawer">
          <button
            aria-label="Fechar menu"
            className="site-menu-drawer__backdrop"
            onClick={closeDrawer}
            type="button"
          />
          <aside
            aria-label="Menu de navegação"
            aria-modal="true"
            className="site-menu-drawer__panel"
            id="site-menu-drawer"
            role="dialog"
          >
            <button
              aria-label="Fechar menu"
              className="site-menu-drawer__close"
              onClick={closeDrawer}
              type="button"
            >
              Fechar
            </button>
            <nav aria-label="Navegação lateral" className="site-menu-drawer__navigation">
              {menuItems.map((item) => (
                <a href={menuHref(item)} key={item.id} onClick={closeDrawer}>
                  {item.title}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
