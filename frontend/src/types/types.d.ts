export interface NavLinkProps {
  name: string;
  url: string;
}

export type Theme = "light" | "dark";

export interface MenuContextType {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface ExpandableTextProps {
  text: string;
  maxLength?: number;
  className?: string;
}

export interface Project {
  img: string;
  title: string;
  description: string;
  features: string[];
  github: string;
  demo: string;
  technologies: string[];
}

export interface CardProps {
  project: Project;
}
