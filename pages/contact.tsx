import PageIntro from '@/components/PageIntro';
import ContactCta from '@/components/sections/ContactCta';
import { site } from '@/data/site';

const ContactPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title={
          <>
            Say <em>hello.</em>
          </>
        }
        lead={`${site.availability}. Reach out about frontend roles, product work or a website you need built, and I’ll get back to you.`}
      />
      <ContactCta index="01" detailed />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: 'Contact',
      description:
        'Get in touch with Kushal Khanal, frontend developer in Kathmandu, Nepal, by email, GitHub, LinkedIn or social media.',
    },
  };
}

export default ContactPage;
