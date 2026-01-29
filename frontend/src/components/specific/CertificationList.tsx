import { Award, Github, Link2 } from "lucide-react";
import Link from "next/link";
import { getStrapiData } from "@/lib/strapi";

async function CertificationList() {
  const certifications = await getStrapiData<Certification[]>(
    "certifications?sort=order",
  );

  return (
    <div className="education__list--certifications">
      <div className="education__header">
        <Award className="education__icon" aria-hidden="true" />
        <h3 className="education__title">Licenses and Certificates</h3>
      </div>
      <div className="education__certifications-wrapper">
        <ol className="education__list--container">
          {certifications.map((certification) => (
            <li key={certification.id} className="education__cert-item">
              <div
                className="education__cert-card"
                role="group"
                aria-label={certification.course}
              >
                <div className="education__cert-content">
                  <h3 className="education__title--certification">
                    {certification.course}
                  </h3>
                  <h4 className="education__institution--certification">
                    {certification.institution}
                  </h4>
                </div>
                <div className="education__cert-links">
                  {certification.certificateUrl && (
                    <Link
                      href={certification.certificateUrl}
                      aria-label={`Link to the ${certification.course} certificate.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="education__cert-link"
                    >
                      <Link2 className="education__icon--certification" />
                    </Link>
                  )}
                  {certification.projectUrl && (
                    <Link
                      href={certification.projectUrl}
                      aria-label={`Link to the ${certification.course} project.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="education__cert-link"
                    >
                      <Github className="education__icon--certification" />
                    </Link>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default CertificationList;
