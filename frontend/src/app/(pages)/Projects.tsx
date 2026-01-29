import { Suspense } from "react";
import Card from "@/components/common/Card";
import ProjectsSkeleton from "@/components/skeletons/ProjectsSkeleton";
import {
  getStrapiData,
  flattenTextItems,
  flattenTechnologies,
  getStrapiMediaUrl,
} from "@/lib/strapi";

async function ProjectsList() {
  const strapiProjects = await getStrapiData<StrapiProject[]>(
    "projects?populate=*&sort=order",
  );

  // Transform Strapi data to match existing Project interface
  const projects = strapiProjects.map((project) => ({
    img: getStrapiMediaUrl(project.image) || "/placeholder.png",
    title: project.title,
    description: project.description,
    features: flattenTextItems(project.features),
    github: project.githubUrl,
    demo: project.demoUrl,
    technologies: flattenTechnologies(project.technologies),
  }));

  return (
    <>
      {projects.map((project) => (
        <Card key={project.title} project={project} />
      ))}
    </>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section__heading">Projects</h2>
      <article className="projects">
        <Suspense fallback={<ProjectsSkeleton />}>
          <ProjectsList />
        </Suspense>
      </article>
    </section>
  );
}

export default Projects;
