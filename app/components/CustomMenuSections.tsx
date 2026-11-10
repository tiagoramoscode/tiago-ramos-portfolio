"use client";

import { useEffect, useState } from "react";
import {
  DEFAULT_MENU_ITEMS,
  MENU_ITEMS_EVENT,
  readMenuItems,
  type MenuItem,
} from "@/lib/menu-items";

export function CustomMenuSections() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(DEFAULT_MENU_ITEMS);

  useEffect(() => {
    const updateMenuItems = () => {
      try {
        setMenuItems(readMenuItems());
      } catch (error) {
        console.error("Não foi possível carregar as secções personalizadas.", error);
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

  const defaultIds = new Set(DEFAULT_MENU_ITEMS.map((item) => item.id));
  const customItems = menuItems.filter((item) => !defaultIds.has(item.id));

  return customItems.map((item) => (
    <section
      aria-labelledby={`${item.sectionId}-title`}
      className="section portfolio-section portfolio-section--custom"
      id={item.sectionId}
      key={item.id}
    >
      <div className="section__inner">
        <p className="portfolio-section__eyebrow">Secção personalizável</p>
        <h2 id={`${item.sectionId}-title`}>{item.title}</h2>
        <p>
          Adicione aqui o conteúdo que melhor apresenta o seu trabalho, a sua
          experiência ou os seus serviços.
        </p>
      </div>
    </section>
  ));
}
