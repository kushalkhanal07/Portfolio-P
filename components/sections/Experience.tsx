import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { education, experience } from '@/data/profile';

import styles from '@/styles/Experience.module.css';

const Experience = () => {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          index="02"
          id="experience-title"
          title={
            <>
              Where I’ve <em>worked</em>
            </>
          }
          meta="2024 — present"
        />

        <ol className={styles.timeline}>
          {experience.map((entry, index) => (
            <Reveal as="li" key={entry.company} className={styles.entry} delay={index * 80}>
              <div className={styles.when}>
                <span className={`mono ${styles.dates}`}>
                  {entry.start} — {entry.end}
                </span>
              </div>
              <div className={styles.what}>
                <h3 className={styles.company}>{entry.company}</h3>
                <p className={styles.role}>{entry.role}</p>
                <p className={styles.summary}>{entry.summary}</p>
                <ul className={styles.bullets}>
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className={styles.education}>
          <p className="eyebrow">Education</p>
          <div className={styles.educationBody}>
            <div>
              <h3 className={styles.company}>{education.degree}</h3>
              <p className={styles.role}>
                {education.school}, {education.place}
              </p>
            </div>
            <span className={`mono ${styles.dates}`}>
              {education.start} — {education.end}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
