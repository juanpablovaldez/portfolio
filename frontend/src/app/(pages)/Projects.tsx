import Card from "@/components/common/Card";
import { projects } from "@/constants/projects";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section__heading">Projects</h2>
      <article className="projects">
        {projects.map((project) => (
          <Card key={project.title} project={project} />
        ))}
      </article>
    </section>
  );
}

export default Projects;
