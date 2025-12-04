"use client";

import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded-lg border border-slate-400 dark:border-slate-600 text-sm bg-white dark:bg-slate-800"
    >
      {theme === "dark" ? "☀️ Modo claro" : "🌙 Modo escuro"}
    </button>
  );
}