import { experienceList } from "@/constants/experienceList";
import TagList from "@/components/common/TagList";
import ExpandableContainer from "../common/ExpandableContainer";
import Link from "next/link";

function ExperienceList() {
  return (
    <ol className="experience__list">
      {experienceList.map(
        ({
          company,
          companyUrl,
          position,
          startDate,
          endDate,
          description,
          technologies,
          softSkills,
        }) => (
          <li key={company} className="experience__item">
            <div className="experience__header">
              <h3 className="experience__role">{position}</h3>
              <h4 className="experience__company">
                {companyUrl ? (
                  <Link
                    href={companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience__company-link"
                  >
                    {company}
                  </Link>
                ) : (
                  company
                )}
              </h4>
              <time className="experience__date">
                {startDate} - {endDate}
              </time>
            </div>
            <div className="experience__description">
              <ExpandableContainer maxHeight={100}>
                {description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </ExpandableContainer>
              <TagList list={technologies} />
              <TagList list={softSkills} />
            </div>
          </li>
        )
      )}
    </ol>
  );
}

export default ExperienceList;
