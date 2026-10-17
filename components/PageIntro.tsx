import styles from '@/styles/PageIntro.module.css';

interface PageIntroProps {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  children?: React.ReactNode;
}

/** Hero-sized opening for the inner pages. */
const PageIntro = ({ eyebrow, title, lead, children }: PageIntroProps) => {
  return (
    <header className={styles.intro}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</p>
          <h1 className={`display ${styles.title}`}>{title}</h1>
          {lead && <p className={styles.lead}>{lead}</p>}
        </div>
        {children && <div className={styles.aside}>{children}</div>}
      </div>
    </header>
  );
};

export default PageIntro;
