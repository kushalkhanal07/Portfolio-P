import ProjectFeature from '@/components/ProjectFeature';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import type { Project } from '@/types';

import styles from '@/styles/FeaturedWork.module.css';

interface FeaturedWorkProps {
  projects: Project[];
  index: string;
  title: React.ReactNode;
  meta?: string;
  action?: { href: string; label: string };
  id?: string;
}

const FeaturedWork = ({ projects, index, title, meta, action, id = 'work' }: FeaturedWorkProps) => {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <SectionHeading index={index} id={`${id}-title`} title={title} meta={meta} action={action} />
        <div className={styles.list}>
          {projects.map((project, position) => (
            <Reveal key={project.slug}>
              <ProjectFeature project={project} index={position + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
