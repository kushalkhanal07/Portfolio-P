import Hero from '@/components/sections/Hero';
import FeaturedWork from '@/components/sections/FeaturedWork';
import AboutTeaser from '@/components/sections/AboutTeaser';
import ContactCta from '@/components/sections/ContactCta';
import { featuredProjects } from '@/data/projects';
import { site } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork
        index="01"
        projects={featuredProjects}
        title={
          <>
            Selected <em>work</em>
          </>
        }
        meta="Three production projects"
        action={{ href: '/projects', label: 'All work' }}
      />
      <AboutTeaser />
      <ContactCta index="03" />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: `${site.role} in ${site.location}`,
      description: site.description,
    },
  };
}
