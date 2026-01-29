"use client";
import { useMenu } from "@/hooks/useMenu";
import { Menu, X } from "lucide-react";

function NavToggler() {
  const { isMenuOpen, toggleMenu } = useMenu();
  
  return (
    <li className="nav__item--mobile">
      <button
        type="button"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        className="nav__toggler"
        onClick={() => toggleMenu()}
      >
        {isMenuOpen ? (
          <X className="nav__icon" aria-hidden="true" />
        ) : (
          <Menu className="nav__icon" aria-hidden="true" />
        )}
      </button>
    </li>
  );
}

export default NavToggler;
