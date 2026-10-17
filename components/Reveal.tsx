import { createElement, useEffect, useRef, useState } from 'react';

import styles from '@/styles/Reveal.module.css';

interface RevealProps {
  children: React.ReactNode;
  as?: 'div' | 'section' | 'article' | 'li' | 'figure' | 'header';
  /** Extra delay in milliseconds, useful for staggering siblings. */
  delay?: number;
  className?: string;
}

/**
 * Fades and lifts its children into view the first time they enter the
 * viewport. Content stays visible when JavaScript is unavailable or the
 * user prefers reduced motion (see Reveal.module.css).
 */
const Reveal = ({ children, as = 'div', delay = 0, className = '' }: RevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `${styles.reveal} ${shown ? styles.shown : ''} ${className}`.trim(),
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children
  );
};

export default Reveal;
