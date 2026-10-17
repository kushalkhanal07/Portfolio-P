import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

import styles from '@/styles/Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
  /** Class names from next/font that expose the --font-* custom properties. */
  fontClassName?: string;
}

const Layout = ({ children, fontClassName = '' }: LayoutProps) => {
  return (
    <div className={`${styles.root} ${fontClassName}`}>
      <a href="#main" className="skipLink">
        Skip to content
      </a>
      <Nav />
      <main id="main" className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
