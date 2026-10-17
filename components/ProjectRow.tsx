import type { CSSProperties } from 'react';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

import { hostname } from '@/lib/url';
import type { Project } from '@/types';

import styles from '@/styles/ProjectRow.module.css';

interface ProjectRowProps {
  project: Project;
  index: number;
}

/** Compact index-style row for the smaller projects. Rendered inside a list item. */
const ProjectRow = ({ project, index }: ProjectRowProps) => {
  return (
    <article className={styles.row} style={{ '--pa': project.accent } as CSSProperties}>
      <span className={`mono ${styles.num}`} aria-hidden="true">
        {String(index).padStart(2, '0')}
      </span>

      <div className={styles.thumb}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          sizes="180px"
        />
      </div>

      <div className={styles.text}>
        <p className={`eyebrow ${styles.category}`}>{project.category}</p>
        <h3 className={styles.title}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {project.title}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </h3>
        <p className={styles.desc}>{project.description}</p>
      </div>

      <div className={styles.meta}>
        {project.stack.length > 0 && (
          <ul className={styles.tags} aria-label="Technologies">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <span className={`mono ${styles.host}`}>{hostname(project.link)}</span>
      </div>

      <span className={styles.arrow} aria-hidden="true">
        <FiArrowUpRight />
      </span>
    </article>
  );
};

export default ProjectRow;
