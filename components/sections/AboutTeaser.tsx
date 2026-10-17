import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { bio, experience } from '@/data/profile';

import styles from '@/styles/AboutTeaser.module.css';

const AboutTeaser = () => {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          index="02"
          id="about-title"
          title={
            <>
              About <em>me</em>
            </>
          }
          meta="Kathmandu, Nepal"
          action={{ href: '/about', label: 'Full profile' }}
        />

        <div className={styles.grid}>
          <Reveal className={styles.story}>
            <p className={`display ${styles.statement}`}>{bio[0]}</p>
            <p className={styles.paragraph}>{bio[1]}</p>
            <Link href="/about" className={`btn ${styles.more}`}>
              More about me
              <FiArrowRight aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal className={styles.timeline} delay={120}>
            <p className="eyebrow">Experience</p>
            <ol className={styles.roles}>
              {experience.map((entry) => (
                <li key={entry.company} className={styles.role}>
                  <span className={`mono ${styles.dates}`}>
                    {entry.start} — {entry.end}
                  </span>
                  <span className={styles.company}>{entry.company}</span>
                  <span className={styles.position}>{entry.role}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
