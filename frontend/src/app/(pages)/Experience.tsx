import { Suspense } from "react";
import { BriefcaseBusiness } from "lucide-react";
import ExperienceList from "@/components/specific/ExperienceList";
import ExperienceSkeleton from "@/components/skeletons/ExperienceSkeleton";
import { getStrapiData } from "@/lib/strapi";

async function Experience() {
  const experiences = await getStrapiData<WorkExperience[]>(
    "work-experiences?populate=*&sort=order",
  );

  if (!experiences || experiences.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="section">
      <h2 className="section__heading">
        <BriefcaseBusiness className="section__icon" aria-hidden="true" />
        Experience
      </h2>
      <article className="section__content">
        <Suspense fallback={<ExperienceSkeleton />}>
          <ExperienceList />
        </Suspense>
      </article>
    </section>
  );
}

export default Experience;
