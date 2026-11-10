"use client";

import { type FormEvent, useEffect, useState } from "react";
import {
  MENU_ITEMS_EVENT,
  readMenuItems,
  saveMenuItems,
  type MenuItem,
} from "@/lib/menu-items";

export function MenuTitleManager() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [title, setTitle] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      setMenuItems(readMenuItems());
      setIsLoaded(true);
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Não foi possível carregar os títulos do menu.",
      );
    }

    const syncMenuItems = () => {
      try {
        setMenuItems(readMenuItems());
      } catch (loadError) {
        setError(
          loadError instanceof Error
            ? loadError.message
            : "Não foi possível carregar os títulos do menu.",
        );
      }
    };

    window.addEventListener(MENU_ITEMS_EVENT, syncMenuItems);
    window.addEventListener("storage", syncMenuItems);
    return () => {
      window.removeEventListener(MENU_ITEMS_EVENT, syncMenuItems);
      window.removeEventListener("storage", syncMenuItems);
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedTitle = title.trim();
    if (!normalizedTitle) {
      setError("Introduza um título antes de o adicionar.");
      return;
    }

    const id = crypto.randomUUID();
    const newItem = {
      id,
      title: normalizedTitle,
      sectionId: `menu-${id}`,
    };

    try {
      const updatedItems = [...menuItems, newItem];
      saveMenuItems(updatedItems);
      setMenuItems(updatedItems);
      setTitle("");
      setError("");
      setMessage(`"${normalizedTitle}" foi adicionado ao menu.`);
    } catch (saveError) {
      setError(
        saveError instanceof Error
          ? saveError.message
          : "Não foi possível guardar o novo título.",
      );
    }
  };

  const removeItem = (itemToRemove: MenuItem) => {
    try {
      const updatedItems = menuItems.filter((item) => item.id !== itemToRemove.id);
      saveMenuItems(updatedItems);
      setMenuItems(updatedItems);
      setError("");
      setMessage(`"${itemToRemove.title}" foi removido do menu.`);
    } catch (saveError) {
      setError(
        saveError instanceof Error
          ? saveError.message
          : "Não foi possível remover este título.",
      );
    }
  };

  return (
    <div className="menu-manager">
      <form className="menu-manager__form" onSubmit={handleSubmit}>
        <label htmlFor="menu-title">Novo título/menu</label>
        <div className="menu-manager__add">
          <input
            id="menu-title"
            maxLength={60}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Ex.: Publicações"
            value={title}
          />
          <button disabled={!isLoaded} type="submit">
            Adicionar título
          </button>
        </div>
      </form>

      <h2>Títulos atuais</h2>
      {menuItems.length === 0 ? (
        <p className="menu-manager__empty">Ainda não existem títulos no menu.</p>
      ) : (
        <ul className="menu-manager__list">
          {menuItems.map((item) => (
            <li className="menu-manager__item" key={item.id}>
              <span>{item.title}</span>
              <button onClick={() => removeItem(item)} type="button">
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
      {error && (
        <p aria-live="assertive" className="menu-manager__feedback menu-manager__feedback--error" role="alert">
          {error}
        </p>
      )}
      {message && !error && (
        <p aria-live="polite" className="menu-manager__feedback" role="status">
          {message}
        </p>
      )}
    </div>
  );
}
