import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'KushalKhanal.com.np',
    href: 'https://nitinranganath.com',
  },
  {
    social: 'email',
    link: 'khanalkushal22@gmail.com',
    href: 'mailto:khanalkushal22@gmail.com',
  },
  {
    social: 'github',
    link: 'github/kushal',
    href: 'https://github.com/kushalkhanal07',
  },
  {
    social: 'linkedin',
    link: 'linkedin/kushal',
    href: 'https://www.linkedin.com/in/kushal-khanal-268b792b7',
  },
  {
    social: 'instagram',
    link: 'instagram/kushal',
    href: 'https://www.instagram.com/kushal_khanal__/',
  },
  {
    social: 'facebook',
    link: 'facebook/kushal',
    href: 'https://www.facebook.com/kushal.khanal.792',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
