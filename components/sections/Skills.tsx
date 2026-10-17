import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { skills } from '@/data/profile';

import styles from '@/styles/Skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          index="03"
          id="skills-title"
          title={
            <>
              Tools I <em>work with</em>
            </>
          }
          meta="Everyday stack"
        />

        <ul className={styles.grid}>
          {skills.map((group, index) => (
            <Reveal as="li" key={group.label} className={styles.group} delay={(index % 4) * 70}>
              <p className={`eyebrow ${styles.label}`}>
                <span className="mono">{String(index + 1).padStart(2, '0')}</span>
                {group.label}
              </p>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
