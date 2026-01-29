import { GraduationCap } from "lucide-react";
import { educationList } from "@/constants/educationList";

function EducationList() {
  return (
    <div className="education__container">
      <ol className="education__list">
        {educationList.map((education) => (
          <li key={education.course} className="education__item">
            <div className="education__icon-wrapper">
              <GraduationCap className="education__icon" aria-hidden="true" />
            </div>
            <div className="education__details">
              <h3 className="education__title">{education.course}</h3>
              <h4 className="education__institution">{education.institution}</h4>
              <time className="education__date">{education.date}</time>
              {education.achievements.length > 0 && (
                <ul className="education__achievements">
                  {education.achievements.map((achievement, index) => (
                    <li key={index} className="education__description">
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default EducationList;
