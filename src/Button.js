import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./App.css";

export default function SwitchButton() {
  const theme = useContext(ThemeContext);
  const { darkMode, toggleTheme } = theme;

  return (
    <button className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} onClick={toggleTheme}>
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}