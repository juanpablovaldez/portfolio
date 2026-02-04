import CertificationList from "@/components/specific/CertificationList";
import EducationList from "@/components/specific/EducationList";
import { getStrapiData } from "@/lib/strapi";

async function Education() {
  const [educations, certifications] = await Promise.all([
    getStrapiData<Education[]>("educations?populate=*&sort=order"),
    getStrapiData<Certification[]>("certifications?sort=order"),
  ]);

  const hasEducation = educations && educations.length > 0;
  const hasCertifications = certifications && certifications.length > 0;

  if (!hasEducation && !hasCertifications) {
    return null;
  }

  return (
    <section id="education" className="section">
      <h2 className="section__heading">Education</h2>
      <article className="education section__content">
        <EducationList educations={educations} />
        <CertificationList certifications={certifications} />
      </article>
    </section>
  );
}

export default Education;
