import type { CSSProperties } from 'react';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

import { hostname } from '@/lib/url';
import type { Project } from '@/types';

import styles from '@/styles/ProjectFeature.module.css';

interface ProjectFeatureProps {
  project: Project;
  index: number;
}

const layoutClass = {
  feature: styles.layoutFeature,
  split: styles.layoutSplit,
  'split-reverse': styles.layoutSplitReverse,
};

/**
 * Case-study style presentation for a featured project. The whole card is
 * clickable through the stretched title link; everything else is decorative.
 */
const ProjectFeature = ({ project, index }: ProjectFeatureProps) => {
  const layout = project.layout ?? 'split';
  const number = String(index).padStart(2, '0');

  return (
    <article
      id={project.slug}
      className={`${styles.feature} ${layoutClass[layout]}`}
      style={{ '--pa': project.accent } as CSSProperties}
    >
      <div className={styles.media}>
        <div className={styles.plate}>
          <div className={styles.shot}>
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={project.imageWidth}
              height={project.imageHeight}
              sizes={
                layout === 'feature'
                  ? '(max-width: 640px) 150vw, (max-width: 1300px) 110vw, 1400px'
                  : '(max-width: 640px) 150vw, (max-width: 900px) 125vw, 900px'
              }
              className={styles.img}
            />
          </div>
        </div>
        <p className={`mono ${styles.caption}`}>
          <span>{hostname(project.link)}</span>
          {project.role && <span>{project.role}</span>}
        </p>
      </div>

      <div className={styles.body}>
        <div className={styles.head}>
          <p className={`eyebrow ${styles.eyebrow}`}>
            <span className={styles.dot} aria-hidden="true" />
            <span>{number}</span>
            <span className={styles.category}>{project.category}</span>
          </p>
          <h3 className={`display ${styles.title}`}>
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
        </div>

        <div className={styles.details}>
          <p className={styles.desc}>{project.description}</p>

          {project.highlights && project.highlights.length > 0 && (
            <p className={`mono ${styles.highlights}`}>{project.highlights.join('  ·  ')}</p>
          )}

          {project.stack.length > 0 && (
            <ul className={styles.tags} aria-label="Technologies">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          <span className={styles.cta} aria-hidden="true">
            Visit live site
            <FiArrowUpRight />
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProjectFeature;
