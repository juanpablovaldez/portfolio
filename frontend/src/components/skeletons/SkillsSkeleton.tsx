export default function SkillsSkeleton() {
  const categories = [
    { name: "Core Technologies", count: 8 },
    { name: "Tools & Platforms", count: 6 },
    { name: "Languages", count: 4 },
  ];

  return (
    <div
      className="skills-skeleton"
      aria-busy="true"
      aria-label="Loading skills"
    >
      {categories.map((category, i) => (
        <div key={i} className="skills-skeleton__category">
          <div
            className="skeleton skeleton--heading"
            style={{ width: "25%" }}
          />
          <div className="skills-skeleton__list">
            {Array.from({ length: category.count }).map((_, j) => (
              <div
                key={j}
                className="skeleton skeleton--tag"
                style={{ width: `${Math.random() * 3 + 4}rem` }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
