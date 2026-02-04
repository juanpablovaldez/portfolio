"use client";
import { navbarLinks } from "@/constants/menuData";
import { useMenu } from "@/hooks/useMenu";
import { NavLinkProps } from "@/types/types";
import Link from "next/link";

interface NavListProps {
  availableSections: {
    summary: boolean;
    experience: boolean;
    education: boolean;
    projects: boolean;
    skills: boolean;
    contact: boolean;
  };
}

function NavList({ availableSections }: NavListProps) {
  const { isMenuOpen, toggleMenu } = useMenu();

  // Filter links to only show sections with content
  const visibleLinks = navbarLinks.filter((link: NavLinkProps) => {
    const sectionName = link.name.toLowerCase() as keyof typeof availableSections;
    return availableSections[sectionName] !== false;
  });

  return (
    <ul className={`nav__list ${isMenuOpen ? "open" : "close"}`}>
      {visibleLinks.map((link: NavLinkProps) => (
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
