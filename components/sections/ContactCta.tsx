import { FiArrowUpRight } from 'react-icons/fi';

import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { site, socials } from '@/data/site';

import styles from '@/styles/ContactCta.module.css';

interface ContactCtaProps {
  index: string;
  /** Show the full channel list (used on the contact page). */
  detailed?: boolean;
}

const ContactCta = ({ index, detailed = false }: ContactCtaProps) => {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          index={index}
          id="contact-title"
          title={
            <>
              Let’s <em>talk</em>
            </>
          }
          meta={site.availability}
        />

        <div className={styles.grid}>
          <Reveal className={styles.pitch}>
            <p className={`display ${styles.statement}`}>
              Have a product to build, or a team that needs a frontend developer who cares about
              the details?
            </p>
            <a href={`mailto:${site.email}`} className={styles.email}>
              <span className={styles.emailText}>{site.email}</span>
              <span className={styles.emailIcon} aria-hidden="true">
                <FiArrowUpRight />
              </span>
            </a>
            <p className={styles.note}>
              Email is the best way to reach me. For everything else, the links alongside.
            </p>
          </Reveal>

          <Reveal className={styles.channels} delay={120}>
            <p className="eyebrow">Elsewhere</p>
            <ul className={styles.list}>
              {socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.channel}
                  >
                    <span className={styles.channelLabel}>{social.label}</span>
                    {detailed && <span className={`mono ${styles.handle}`}>@{social.handle}</span>}
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            {detailed && (
              <dl className={styles.details}>
                <div>
                  <dt className="eyebrow">Based in</dt>
                  <dd>{site.location}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Open to</dt>
                  <dd>New opportunities and connections</dd>
                </div>
              </dl>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
