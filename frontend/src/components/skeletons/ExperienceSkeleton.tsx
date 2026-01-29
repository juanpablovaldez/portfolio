export default function ExperienceSkeleton() {
  return (
    <div
      className="experience__list"
      aria-busy="true"
      aria-label="Loading experience"
    >
      {[1, 2, 3].map((i) => (
        <div key={i} className="experience-skeleton__item">
          <div className="experience-skeleton__header">
            <div
              className="skeleton skeleton--title"
              style={{ width: "80%" }}
            />
            <div className="skeleton skeleton--text" style={{ width: "60%" }} />
            <div className="skeleton skeleton--text" style={{ width: "40%" }} />
          </div>
          <div className="experience-skeleton__content">
            <div className="skeleton skeleton--text" />
            <div className="skeleton skeleton--text" />
            <div className="skeleton skeleton--text" style={{ width: "85%" }} />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginTop: "0.5rem",
              }}
            >
              {[1, 2, 3, 4].map((j) => (
                <div key={j} className="skeleton skeleton--tag" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
