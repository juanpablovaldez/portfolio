import { Globe } from "lucide-react";

function LanguageToggler() {
  return (
    <li className="nav__item">
      <div className="nav__toggler">
        <Globe className="nav__icon" />
      </div>
    </li>
  );
}

export default LanguageToggler;
