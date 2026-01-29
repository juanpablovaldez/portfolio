import CertificationList from "@/components/specific/CertificationList";
import EducationList from "@/components/specific/EducationList";

function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section__heading">Education</h2>
      <article className="education section__content">
        <EducationList />
        <CertificationList />
      </article>
    </section>
  );
}

export default Education;
