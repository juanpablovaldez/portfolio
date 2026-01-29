import { Mail, Phone } from "lucide-react";
import Link from "next/link";

function Contact() {
  return (
    <section id="contact" className="contact">
      <article className="contact__content">
        <h2 className="contact__title">Let's Connect</h2>
        <p className="contact__text">
          I'm always open to discussing new opportunities and projects. Feel
          free to reach out - I'd love to hear from you!
        </p>
      </article>
      <article className="contact__actions">
        <Link
          href="mailto:vleonardojuanpablo@icloud.com"
          className="btn btn--primary"
          aria-label="Email Leonardo Valdez"
        >
          <Mail className="btn__icon" />
          <span>Send me an email</span>
        </Link>
        <Link
          href="tel:+5493816134310"
          className="btn btn--secondary"
          aria-label="Call Leonardo Valdez"
        >
          <Phone className="btn__icon" />
          <span>Call me</span>
        </Link>
      </article>
    </section>
  );
}

export default Contact;
