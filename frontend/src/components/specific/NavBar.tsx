import ThemeSwitcher from "./ThemeSwitcher";
import NavToggler from "./NavToggler";
import NavList from "./NavList";
import Link from "next/link";

function NavBar() {
  const availableSections = {
    summary: true,
    experience: true,
    education: true,
    projects: true,
    skills: true,
    contact: true,
  };

  return (
    <div className="nav-container">
      <header className="header">
        <div className="container">
          <nav className="nav">
            <h1 className="nav__logo">
              <Link
                href="/"
                aria-label="Link to the home page and Juan Pablo Valdez Logo."
              >
                JV
              </Link>
            </h1>
            <Link
              href="/#main-content"
              className="sr-only"
              aria-label="Link to skip to main content"
            >
              Skip to main content
            </Link>
            <NavList availableSections={availableSections} />
            <ul className="nav__list--togglers">
              <ThemeSwitcher />
              <NavToggler />
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
