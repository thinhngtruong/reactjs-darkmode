import { createContext } from "react";

const initialState = {
  darkMode: false,
  toggleTheme: () => {},
};

export const ThemeContext = createContext(initialState);
