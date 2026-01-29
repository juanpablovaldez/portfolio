import { Download, Mail } from "lucide-react";
import Link from "next/link";

function Summary() {
  const currentYear = new Date().getFullYear();
  return (
    <section id="summary" className="summary">
      <article className="summary__content">
        <h1 className="summary__title">Frontend Engineer</h1>
        <p className="summary__text">
          Frontend Engineer with over {currentYear - 2022} years of experience
          specializing in Next.js and React.js. Passionate about building
          secure, scalable, accesible and high-performance applications, I have
          consistently reduced load times by up to 35% and boosted user
          engagement by 40% in previous roles.
        </p>
      </article>
      <article className="summary__actions">
        <a
          href="/resume.pdf"
          download="Valdez Leonardo - Frontend Engineer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
          aria-label="Download Resume in PDF format of Leonardo Valdez"
        >
          <Download className="btn__icon" />
          <span>Download Resume</span>
        </a>
        <Link
          href="mailto:vleonardojuanpablo@icloud.com"
          className="btn btn--secondary"
          aria-label="Send a mail to Leonardo Valdez"
        >
          <Mail className="btn__icon" />
          <span>Contact Me</span>
        </Link>
      </article>
    </section>
  );
}

export default Summary;
