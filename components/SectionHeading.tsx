import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

import styles from '@/styles/SectionHeading.module.css';

interface SectionHeadingProps {
  index: string;
  title: React.ReactNode;
  id?: string;
  meta?: string;
  action?: { href: string; label: string };
}

const SectionHeading = ({ index, title, id, meta, action }: SectionHeadingProps) => {
  return (
    <header className={styles.heading}>
      <span className={`mono ${styles.index}`} aria-hidden="true">
        {index}
      </span>
      <h2 id={id} className={`display ${styles.title}`}>
        {title}
      </h2>
      <div className={styles.side}>
        {meta && <p className={styles.meta}>{meta}</p>}
        {action && (
          <Link href={action.href} className={styles.action}>
            {action.label}
            <FiArrowRight aria-hidden="true" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default SectionHeading;
