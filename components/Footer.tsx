import Link from 'next/link';
import { FiArrowUp, FiArrowUpRight } from 'react-icons/fi';

import { navLinks, site, socials } from '@/data/site';

import styles from '@/styles/Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandBlock}>
          <p className={`display ${styles.wordmark}`}>
            Kushal <em>Khanal</em>
          </p>
          <p className={styles.tagline}>
            {site.role} · {site.location}
          </p>
        </div>

        <nav aria-label="Footer" className={styles.col}>
          <p className="eyebrow">Pages</p>
          <ul>
            {[{ label: 'Home', href: '/' }, ...navLinks].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.col}>
          <p className="eyebrow">Elsewhere</p>
          <ul>
            {socials.map((social) => (
              <li key={social.href}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="underline">
                  {social.label}
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <p className="eyebrow">Say hello</p>
          <ul>
            <li>
              <a href={`mailto:${site.email}`} className="underline">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className="mono">
          © {year} {site.name}. Built with Next.js.
        </p>
        <a href="#main" className={`mono ${styles.top}`}>
          Back to top
          <FiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
