import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiArrowUpRight } from 'react-icons/fi';

import ThemeToggle from '@/components/ThemeToggle';
import { navLinks, site, socials } from '@/data/site';

import styles from '@/styles/Nav.module.css';

const Nav = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Compact, blurred header once the page has been scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on('routeChangeStart', close);
    return () => router.events.off('routeChangeStart', close);
  }, [router.events]);

  // Lock scrolling, move focus into the menu and close on Escape while open.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstLinkRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const media = window.matchMedia('(min-width: 900px)');
    const onMedia = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    media.addEventListener('change', onMedia);

    const toggle = toggleRef.current;
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      media.removeEventListener('change', onMedia);
      toggle?.focus();
    };
  }, [open]);

  const isActive = (href: string) => router.pathname === href;

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${open ? styles.menuOpen : ''}`}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label={`${site.name}, home`}>
          <span className={styles.mark} aria-hidden="true" />
          <span className={styles.brandName}>{site.name}</span>
        </Link>

        <nav aria-label="Primary" className={styles.desktopNav}>
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.link}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <a href={`mailto:${site.email}`} className={`btn btnPrimary ${styles.cta}`}>
            Get in touch
          </a>
          <button
            ref={toggleRef}
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className={styles.burger} aria-hidden="true">
              <span />
              <span />
            </span>
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.overlay} ${open ? styles.overlayOpen : ''}`}
        inert={!open}
      >
        <nav aria-label="Mobile" className={`container ${styles.overlayInner}`}>
          <ol className={styles.overlayLinks}>
            {[{ label: 'Home', href: '/' }, ...navLinks].map((link, index) => (
              <li key={link.href} style={{ transitionDelay: `${80 + index * 60}ms` }}>
                <Link
                  href={link.href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  className={`display ${styles.overlayLink}`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  <span className={`mono ${styles.overlayIndex}`}>0{index + 1}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ol>

          <div className={styles.overlayFooter}>
            <a href={`mailto:${site.email}`} className={styles.overlayEmail}>
              {site.email}
            </a>
            <ul className={styles.overlaySocials}>
              {socials.map((social) => (
                <li key={social.href}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.label}
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
