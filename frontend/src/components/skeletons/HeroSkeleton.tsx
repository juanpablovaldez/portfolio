export default function HeroSkeleton() {
  return (
    <div
      className="hero-skeleton"
      aria-busy="true"
      aria-label="Loading hero section"
    >
      <div className="skeleton hero-skeleton__title" />
      <div className="skeleton hero-skeleton__text" />
      <div className="skeleton hero-skeleton__text" />
      <div className="skeleton hero-skeleton__text" />
      <div className="hero-skeleton__actions">
        <div className="skeleton skeleton--button" style={{ width: "10rem" }} />
        <div className="skeleton skeleton--button" style={{ width: "8rem" }} />
      </div>
    </div>
  );
}
