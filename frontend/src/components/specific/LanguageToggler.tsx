import { Globe } from "lucide-react";

function LanguageToggler() {
  return (
    <li className="nav__item">
      <button className="nav__toggler" aria-label="Toggle language">
        <Globe className="nav__icon" aria-hidden="true" />
      </button>
    </li>
  );
}

export default LanguageToggler;
