import { FiMoon, FiSun } from 'react-icons/fi';

import styles from '@/styles/ThemeToggle.module.css';

/**
 * Swaps the `data-theme` attribute on <html> and remembers the choice.
 * The icons are swapped with CSS so the button renders identically on the
 * server and the client regardless of the stored theme.
 */
const ThemeToggle = () => {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can be unavailable in private browsing; the theme still applies.
    }
  };

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label="Toggle colour theme"
      title="Toggle colour theme"
    >
      <FiSun className={styles.sun} aria-hidden="true" />
      <FiMoon className={styles.moon} aria-hidden="true" />
    </button>
  );
};

export default ThemeToggle;
