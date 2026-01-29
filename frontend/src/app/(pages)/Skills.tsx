import { Suspense } from "react";
import { Code2, Wrench, Languages } from "lucide-react";
import SkillsSkeleton from "@/components/skeletons/SkillsSkeleton";
import { getStrapiData } from "@/lib/strapi";

const categoryConfig = {
  core: {
    title: "Core Technologies",
    icon: Code2,
  },
  tools: {
    title: "Tools & Platforms",
    icon: Wrench,
  },
  languages: {
    title: "Languages",
    icon: Languages,
  },
} as const;

async function SkillsList() {
  const skills = await getStrapiData<Skill[]>("skills?sort=order");

  // Group skills by category
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      const category = skill.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    },
    {} as Record<Skill["category"], Skill[]>,
  );

  const categories: Skill["category"][] = ["core", "tools", "languages"];

  return (
    <div className="skills">
      {categories.map((category) => {
        const categorySkills = groupedSkills[category];
        if (!categorySkills || categorySkills.length === 0) return null;

        const config = categoryConfig[category];
        const Icon = config.icon;

        return (
          <div key={category} className="skills__category">
            <h3 className="skills__category-title">
              <Icon className="skills__category-icon" aria-hidden="true" />
              {config.title}
            </h3>
            <ul className="skills__list">
              {categorySkills.map((skill) => (
                <li key={skill.id} className="skills__item">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section__heading">Skills</h2>
      <article className="section__content">
        <Suspense fallback={<SkillsSkeleton />}>
          <SkillsList />
        </Suspense>
      </article>
    </section>
  );
}

export default Skills;
