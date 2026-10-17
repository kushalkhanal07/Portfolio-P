import ProjectRow from '@/components/ProjectRow';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import type { Project } from '@/types';

import styles from '@/styles/MoreWork.module.css';

interface MoreWorkProps {
  projects: Project[];
  index: string;
  /** Number the rows continue from, so the index stays continuous. */
  startAt?: number;
}

const MoreWork = ({ projects, index, startAt = 1 }: MoreWorkProps) => {
  return (
    <section id="more-work" className="section" aria-labelledby="more-work-title">
      <div className="container">
        <SectionHeading
          index={index}
          id="more-work-title"
          title={
            <>
              More <em>work</em>
            </>
          }
          meta="Company and business websites"
        />
        <ol className={styles.rows}>
          {projects.map((project, position) => (
            <Reveal as="li" key={project.slug} delay={position * 60}>
              <ProjectRow project={project} index={startAt + position} />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default MoreWork;
