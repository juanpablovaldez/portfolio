"use client";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <li className="nav__theme-switcher">
      <button
        type="button"
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        className="nav__toggler"
        onClick={toggleTheme}
        title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {theme === "dark" ? (
          <Moon className="nav__icon" aria-hidden="true" />
        ) : (
          <Sun className="nav__icon" aria-hidden="true" />
        )}
      </button>
    </li>
  );
}

export default ThemeSwitcher;
