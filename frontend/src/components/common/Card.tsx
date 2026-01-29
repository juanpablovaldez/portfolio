import TagList from "@/components/common/TagList";
import { ExternalLink, GithubIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CardProps } from "@/types/types";
import ExpandableText from "./ExpandableText";

function Card({ project }: CardProps) {
  return (
    <div className="projects__card">
      <figure className="projects__image">
        <Link
          href={project.demo}
          aria-label={`Link to the ${project.title} demo.`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
            src={project.img} 
            alt={`${project.title} project screenshot`} 
            width={640} 
            height={360}
            className="projects__img"
            loading="lazy"
          />
        </Link>
      </figure>
      <section className="projects__content">
        <div>
          <h3 className="projects__heading">{project.title}</h3>
          <ExpandableText
            className="projects__text"
            text={project.description}
            maxLength={150}
          />
          <TagList list={project.technologies} />
          <div className="projects__links">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to the ${project.title} code.`}
              className="projects__link"
            >
              <GithubIcon className="projects__icon" /> <span>Code</span>
            </Link>
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to the ${project.title} demo.`}
              className="projects__link"
            >
              <ExternalLink className="projects__icon" />
              <span>Live Demo</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
