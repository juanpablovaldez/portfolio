import { Suspense } from "react";
import Card from "@/components/common/Card";
import ProjectsSkeleton from "@/components/skeletons/ProjectsSkeleton";
import {
  getStrapiData,
  flattenTextItems,
  flattenTechnologies,
  getStrapiMediaUrl,
} from "@/lib/strapi";
import { Project } from "@/types/types";

interface ProjectsListProps {
  projects: Project[];
}

function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <>
      {projects.map((project) => (
        <Card key={project.title} project={project} />
      ))}
    </>
  );
}

async function Projects() {
  const strapiProjects = await getStrapiData<StrapiProject[]>(
    "projects?populate=*&sort=order",
  );

  if (!strapiProjects || strapiProjects.length === 0) {
    return null;
  }

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
    <section id="projects" className="projects-section">
      <h2 className="section__heading">Projects</h2>
      <article className="projects">
        <Suspense fallback={<ProjectsSkeleton />}>
          <ProjectsList projects={projects} />
        </Suspense>
      </article>
    </section>
  );
}

export default Projects;
