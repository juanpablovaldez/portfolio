import { GraduationCap } from "lucide-react";
import { getStrapiData, flattenTextItems } from "@/lib/strapi";

async function EducationList() {
  const educations = await getStrapiData<Education[]>(
    "educations?populate=*&sort=order",
  );

  if (!educations || educations.length === 0) {
    return null;
  }

  return (
    <div className="education__container">
      <ol className="education__list">
        {educations.map((education) => {
          const achievements = flattenTextItems(education.achievements);
          return (
            <li key={education.id} className="education__item">
              <div className="education__icon-wrapper">
                <GraduationCap className="education__icon" aria-hidden="true" />
              </div>
              <div className="education__details">
                <h3 className="education__title">{education.course}</h3>
                <h4 className="education__institution">
                  {education.institution}
                </h4>
                <time className="education__date">{education.date}</time>
                {achievements.length > 0 && (
                  <ul className="education__achievements">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="education__description">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default EducationList;
