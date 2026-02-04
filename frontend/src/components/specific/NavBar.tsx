import ThemeSwitcher from "./ThemeSwitcher";
import NavToggler from "./NavToggler";
import NavList from "./NavList";
import Link from "next/link";
import { getStrapiData } from "@/lib/strapi";

async function NavBar() {
  const [experiences, educations, certifications, projects, skills] =
    await Promise.all([
      getStrapiData<WorkExperience[]>("work-experiences?populate=*&sort=order"),
      getStrapiData<Education[]>("educations?populate=*&sort=order"),
      getStrapiData<Certification[]>("certifications?sort=order"),
      getStrapiData<StrapiProject[]>("projects?populate=*&sort=order"),
      getStrapiData<Skill[]>("skills?sort=order"),
    ]);

  const availableSections = {
    summary: true,
    experience: experiences && experiences.length > 0,
    education:
      (educations && educations.length > 0) ||
      (certifications && certifications.length > 0),
    projects: projects && projects.length > 0,
    skills: skills && skills.length > 0,
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
