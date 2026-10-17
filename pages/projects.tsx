import PageIntro from '@/components/PageIntro';
import FeaturedWork from '@/components/sections/FeaturedWork';
import MoreWork from '@/components/sections/MoreWork';
import ContactCta from '@/components/sections/ContactCta';
import { featuredProjects, otherProjects, projects } from '@/data/projects';

const ProjectsPage = () => {
  return (
    <>
      <PageIntro
        eyebrow={`Work · ${projects.length} projects`}
        title={
          <>
            Things I’ve <em>shipped.</em>
          </>
        }
        lead="Production websites and product interfaces built with React, Next.js and TypeScript. Each one links to the live site."
      />
      <FeaturedWork
        index="01"
        projects={featuredProjects}
        title={
          <>
            Featured <em>projects</em>
          </>
        }
        meta="Case studies"
      />
      <MoreWork index="02" projects={otherProjects} startAt={featuredProjects.length + 1} />
      <ContactCta index="03" />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: 'Work',
      description:
        'Selected projects by Kushal Khanal: Net Zero Careers Job Portal, AakashTech, Expert Education and more, built with React, Next.js and TypeScript.',
    },
  };
}

export default ProjectsPage;
