export interface MenuItem {
  id: string;
  title: string;
  sectionId: string;
}

export const DEFAULT_MENU_ITEMS: MenuItem[] = [
  { id: "about", title: "Sobre", sectionId: "about" },
  { id: "work", title: "Projetos", sectionId: "work" },
  { id: "services", title: "Serviços", sectionId: "services" },
  { id: "contact", title: "Contacto", sectionId: "contact" },
];

const STORAGE_KEY = "tiago-portfolio-menu-items";
export const MENU_ITEMS_EVENT = "portfolio-menu-items-change";

export function readMenuItems(): MenuItem[] {
  const storedItems = window.localStorage.getItem(STORAGE_KEY);
  if (storedItems === null) return DEFAULT_MENU_ITEMS;

  const parsedItems: unknown = JSON.parse(storedItems);
  if (
    !Array.isArray(parsedItems) ||
    !parsedItems.every(
      (item): item is MenuItem =>
        typeof item === "object" &&
        item !== null &&
        "id" in item &&
        typeof item.id === "string" &&
        "title" in item &&
        typeof item.title === "string" &&
        "sectionId" in item &&
        typeof item.sectionId === "string",
    )
  ) {
    throw new Error("Os títulos guardados no menu têm um formato inválido.");
  }

  return parsedItems;
}

export function saveMenuItems(items: MenuItem[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(MENU_ITEMS_EVENT));
}
