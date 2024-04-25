import { createStore } from 'nanostores';

// Define el estado inicial del menú como inactivo (false)
export const menuStore = createStore(false);

// Define un método para activar o desactivar el menú
export function toggleMenu() {
  menuStore.set((prevState) => !prevState);
}
