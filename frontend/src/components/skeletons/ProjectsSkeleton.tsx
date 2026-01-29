export default function ProjectsSkeleton() {
  return (
    <div
      className="projects-skeleton"
      aria-busy="true"
      aria-label="Loading projects"
    >
      {[1, 2, 3].map((i) => (
        <div key={i} className="projects-skeleton__card">
          <div className="skeleton skeleton--image" />
          <div className="projects-skeleton__content">
            <div
              className="skeleton skeleton--title"
              style={{ width: "70%" }}
            />
            <div className="skeleton skeleton--text" />
            <div className="skeleton skeleton--text" />
            <div className="skeleton skeleton--text" style={{ width: "60%" }} />
            <div className="projects-skeleton__tags">
              {[1, 2, 3, 4, 5].map((j) => (
                <div key={j} className="skeleton skeleton--tag" />
              ))}
            </div>
            <div className="projects-skeleton__links">
              <div
                className="skeleton skeleton--button"
                style={{ width: "5rem" }}
              />
              <div
                className="skeleton skeleton--button"
                style={{ width: "6rem" }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
