"use client";
import { createContext, useEffect, useState } from "react";
import { Theme, ThemeContextProps, ThemeProviderProps } from "@/types/types";
import { getCookie, setCookie } from "@/utils/cookies";
import { setThemeCookie } from "@/app/actions";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const dataTheme = document.documentElement.getAttribute(
      "data-theme"
    ) as Theme;
    const cookieTheme = getCookie("theme") as Theme;

    const initialTheme = dataTheme || cookieTheme || "light";
    setThemeState(initialTheme);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);

    setCookie("theme", newTheme, 365);
    setThemeCookie(newTheme).catch(console.error);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
