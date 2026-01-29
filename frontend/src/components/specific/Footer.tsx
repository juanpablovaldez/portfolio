import Link from "next/link";
import { Linkedin, Github, Mail, Instagram, X } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-info">
          <p className="copyright">
            &copy; {currentYear} Leonardo Valdez. All rights reserved.
          </p>
        </div>

        <div className="footer-social">
          <ul className="social-links" aria-label="Social media links">
            <li>
              <Link
                href="https://linkedin.com/in/leonardo-valdez"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="social-link"
              >
                <Linkedin size={20} aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Orbitado"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="social-link"
              >
                <Github size={20} aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/juanpabloovaldez"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="social-link"
              >
                <Instagram size={20} aria-hidden="true" />
              </Link>
            </li>
            <div className="footer-contact">
              <Link
                href="mailto:contact@vleonardojuanpablo.com"
                className="contact-link"
                aria-label="Send me an email"
              >
                <Mail size={20} aria-hidden="true" />
                <span>Contact Me</span>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
