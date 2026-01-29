export default function EducationSkeleton() {
  return (
    <div
      className="education-skeleton"
      aria-busy="true"
      aria-label="Loading education"
    >
      {/* Education section */}
      <div className="education-skeleton__section">
        <div className="education-skeleton__item">
          <div
            className="skeleton skeleton--icon"
            style={{ width: "3rem", height: "3rem", flexShrink: 0 }}
          />
          <div className="education-skeleton__details">
            <div
              className="skeleton skeleton--title"
              style={{ width: "50%" }}
            />
            <div className="skeleton skeleton--text" style={{ width: "30%" }} />
            <div className="skeleton skeleton--text" style={{ width: "20%" }} />
            <div style={{ marginTop: "0.5rem" }}>
              <div className="skeleton skeleton--text" />
              <div
                className="skeleton skeleton--text"
                style={{ width: "90%" }}
              />
              <div
                className="skeleton skeleton--text"
                style={{ width: "80%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Certifications section */}
      <div className="education-skeleton__section">
        <div
          className="skeleton skeleton--heading"
          style={{ width: "30%", marginBottom: "1.5rem" }}
        />
        <div className="education-skeleton__cert-grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="education-skeleton__cert-card">
              <div
                className="skeleton skeleton--title"
                style={{ width: "80%" }}
              />
              <div
                className="skeleton skeleton--text"
                style={{ width: "60%" }}
              />
              <div
                style={{ display: "flex", gap: "0.5rem", marginTop: "auto" }}
              >
                <div className="skeleton skeleton--icon" />
                <div className="skeleton skeleton--icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
