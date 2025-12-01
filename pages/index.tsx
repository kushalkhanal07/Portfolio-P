// import { useState, useEffect } from 'react';
import Link from 'next/link';
import { VscArrowRight } from 'react-icons/vsc';

import styles from '@/styles/HomePage.module.css';

export default function HomePage() {

  return (
    <div className={styles.heroLayout}>
      <div className={styles.container}>

        <div className={styles.infoSection}>
          <h1 className={styles.developerName}>
            Kushal <span className={styles.accentText}>Khanal</span>
          </h1>

          <div className={styles.developerRole}>Full Stack Web Developer</div>

          <p className={styles.bio}>
            I am a full-stack web developer with over 1 year of frontend and 3 months of backend experience, currently working full-time at web experts nepal. I specialize in building scalable e-commerce platforms using React, Next.js, TypeScript, Node.js.
          </p>

          <div className={styles.actionLinks}>
            <Link href="/projects" className={styles.primaryLink}>
              View Projects <VscArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.decorElements}>
        <div className={styles.codeFlare}></div>
        <div className={styles.gridLines}></div>
        <div className={styles.codeBlock1}>{'{'}</div>
        <div className={styles.codeBlock2}>{'}'}</div>
        <div className={styles.codeBlock3}>{'<>'}</div>
        <div className={styles.codeBlock4}>{'/>'}</div>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
        <div className={styles.codeSymbol1}>{'()'}</div>
        <div className={styles.codeSymbol2}>{'[]'}</div>
        <div className={styles.codeSymbol3}>{'=>'}</div>
        <div className={styles.dotPattern}></div>
        <div className={styles.mobileAccent}></div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
