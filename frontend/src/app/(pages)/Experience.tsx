import { BriefcaseBusiness } from "lucide-react";
import ExperienceList from "@/components/specific/ExperienceList";

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section__heading">
        <BriefcaseBusiness className="section__icon" aria-hidden="true" />
        Experience
      </h2>
      <article className="section__content">
        <ExperienceList />
      </article>
    </section>
  );
}

export default Experience;
