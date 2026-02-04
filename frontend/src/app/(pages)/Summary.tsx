import { Suspense } from "react";
import { Download, Mail } from "lucide-react";
import Link from "next/link";
import HeroSkeleton from "@/components/skeletons/HeroSkeleton";
import { getStrapiData, getStrapiMediaUrl } from "@/lib/strapi";

async function HeroContent() {
  const hero = await getStrapiData<Hero>("hero?populate=resume");

  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - hero.yearsOfExperienceStart;
  const resumeUrl = getStrapiMediaUrl(hero.resume);

  return (
    <>
      <article className="summary__content">
        <h1 className="summary__title">{hero.title}</h1>
        <p className="summary__text">
          {hero.bio.replace("{years}", String(yearsOfExperience))}
        </p>
      </article>
      <article className="summary__actions">
        {resumeUrl && (
          <a
            href={resumeUrl}
            download="Juan Pablo Valdez - Software Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            aria-label="Download Resume in PDF format of Juan Pablo Valdez"
          >
            <Download className="btn__icon" />
            <span>{hero.ctaPrimaryLabel}</span>
          </a>
        )}
        <Link
          href={`mailto:${hero.email}`}
          className="btn btn--secondary"
          aria-label="Send a mail to Juan Pablo Valdez"
        >
          <Mail className="btn__icon" />
          <span>{hero.ctaSecondaryLabel}</span>
        </Link>
      </article>
    </>
  );
}

function Summary() {
  return (
    <section id="summary" className="summary">
      <Suspense fallback={<HeroSkeleton />}>
        <HeroContent />
      </Suspense>
    </section>
  );
}

export default Summary;
