import Image from 'next/image';

// import { Project } from '@/types';

import styles from '@/styles/ProjectCard.module.css';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={100}
            height={100}
            className={styles.logo}
          />
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div>
          <div>
            <p className={styles.titleContent}>Frontend</p>
            <div className={styles.flexButton}>
              {project?.frontend?.map((language) => {
                return <>
                  <button className={styles.textButton}>{language}</button>
                </>
              })}
            </div>
            {project?.payment.length > 0 && <p className={styles.titleContent}>Payment</p>}
            <div className={styles.flexButton}>
              {project?.payment?.map((payment) => {
                return <>
                  <button className={styles.textButton}>{payment}</button>
                </>
              })}
            </div>
            {project?.stateManagement && <p className={styles.titleContent}>State Management</p>}
            <div className={styles.flexButton}>
              
                  <button className={styles.textButton}>{project.stateManagement}</button>
                
            </div>
            {project?.backend.length > 0 && <p className={styles.titleContent}>Backend</p>}
            {
              project?.backend.length > 0 && project.backend.map((language, idx) => <button key={idx} className={styles.textButton}>{language}</button>)
            }
            {project?.database && <p className={styles.titleContent}>Database</p>}
            {project?.database && <button className={styles.textButton}>MongoDB</button>}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
