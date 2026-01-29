import Link from "next/link";
import { Metadata } from "next";

// Export metadata for SEO
export const metadata: Metadata = {
  title: "Page Not Found | Leonardo Valdez - Frontend Engineer",
  description: "The page you're looking for doesn't exist. Return to the homepage.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section 
      className="not-found" 
      aria-labelledby="not-found-title"
    >
      <div className="not-found__container">
        <h1 
          id="not-found-title"
          className="not-found__title"
        >
          404
        </h1>
        <h2 className="not-found__subtitle">Page Not Found</h2>
        <p className="not-found__description">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn btn--primary not-found__button">
          Back to Home
        </Link>
      </div>
    </section>
  );
} 