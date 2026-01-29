"use client";
import { createContext, useState } from "react";
import { MenuContextType } from "@/types/types";

export const MenuContext = createContext<MenuContextType | undefined>(
  undefined
);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
