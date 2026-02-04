import Link from "next/link";
import TagList from "@/components/common/TagList";
import ExpandableContainer from "../common/ExpandableContainer";
import {
  getStrapiData,
  flattenTextItems,
  flattenTechnologies,
  flattenSkillItems,
} from "@/lib/strapi";

async function ExperienceList() {
  const experiences = await getStrapiData<WorkExperience[]>(
    "work-experiences?populate=*&sort=order",
  );

  if (!experiences || experiences.length === 0) {
    return null;
  }

  return (
    <ol className="experience__list">
      {experiences.map(
        ({
          id,
          company,
          companyUrl,
          position,
          startDate,
          endDate,
          description,
          technologies,
          softSkills,
        }) => (
          <li key={id} className="experience__item">
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
                {flattenTextItems(description).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </ExpandableContainer>
              <TagList list={flattenTechnologies(technologies)} />
              <TagList list={flattenSkillItems(softSkills)} />
            </div>
          </li>
        ),
      )}
    </ol>
  );
}

export default ExperienceList;
