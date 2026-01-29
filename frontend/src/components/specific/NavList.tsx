"use client";
import { navbarLinks } from "@/constants/menuData";
import { useMenu } from "@/hooks/useMenu";
import { NavLinkProps } from "@/types/types";
import Link from "next/link";

function NavList() {
  const { isMenuOpen, toggleMenu } = useMenu();
  return (
    <ul className={`nav__list ${isMenuOpen ? "open" : "close"}`}>
      {navbarLinks.map((link: NavLinkProps) => (
        <li key={link.name} className="nav__item">
          <Link href={link.url} className="nav__link" onClick={toggleMenu}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavList;
