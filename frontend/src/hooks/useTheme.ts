import { useContext } from "react";
import { ThemeContextProps } from "@/types/types";
import { ThemeContext } from "@/context/themeContext";

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
