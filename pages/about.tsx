import Image from 'next/image';

import PageIntro from '@/components/PageIntro';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import ContactCta from '@/components/sections/ContactCta';
import { bio } from '@/data/profile';
import { site } from '@/data/site';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title={
          <>
            Kushal <em>Khanal</em>
          </>
        }
        lead={bio[0]}
      >
        <figure className={styles.portrait}>
          <div className={styles.plate}>
            <Image
              src="/Kushal.jpeg"
              alt={`Portrait of ${site.name}`}
              width={800}
              height={800}
              priority
              sizes="(max-width: 900px) 60vw, 320px"
              className={styles.image}
            />
          </div>
          <figcaption className={`mono ${styles.caption}`}>
            <span>{site.role}</span>
            <span>{site.location}</span>
          </figcaption>
        </figure>
      </PageIntro>

      <section className={`section ${styles.story}`} aria-label="Introduction">
        <div className="container">
          <div className={styles.storyGrid}>
            <p className="eyebrow">In short</p>
            <p className={`display ${styles.statement}`}>{bio[1]}</p>
          </div>
        </div>
      </section>

      <Experience />
      <Skills />
      <ContactCta index="04" />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: 'About',
      description:
        'About Kushal Khanal: a frontend developer from Kathmandu, Nepal with 2+ years of experience in React, Next.js and TypeScript.',
    },
  };
}

export default AboutPage;
