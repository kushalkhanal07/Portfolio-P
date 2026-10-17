import Image from 'next/image';
import Link from 'next/link';
import { FiArrowDown } from 'react-icons/fi';

import { facts, intro } from '@/data/profile';
import { site } from '@/data/site';

import styles from '@/styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`eyebrow ${styles.eyebrow}`}>
            <span className={styles.pulse} aria-hidden="true" />
            {site.role} · {site.location}
          </p>

          <h1 id="hero-title" className={`display ${styles.title}`}>
            Frontend developer building <em>scalable,</em> data-driven products.
          </h1>

          <p className={styles.lead}>{intro.lead}</p>

          <div className={styles.actions}>
            <a href="#work" className="btn btnPrimary">
              View selected work
              <FiArrowDown aria-hidden="true" />
            </a>
            <Link href="/contact" className="btn">
              Get in touch
            </Link>
          </div>
        </div>

        <figure className={styles.portrait}>
          <div className={styles.portraitPlate}>
            <Image
              src="/Kushal.jpeg"
              alt={`Portrait of ${site.name}`}
              width={800}
              height={800}
              priority
              sizes="(max-width: 900px) 70vw, 360px"
              className={styles.portraitImg}
            />
          </div>
          <figcaption className={`mono ${styles.caption}`}>
            <span>{site.name}</span>
            <span>{site.availability}</span>
          </figcaption>
        </figure>
      </div>

      <div className={`container ${styles.facts}`}>
        <dl>
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="eyebrow">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
