import NextHead from 'next/head';
import { useRouter } from 'next/router';

import { site } from '@/data/site';

interface CustomHeadProps {
  title?: string;
  description?: string;
}

const CustomHead = ({ title, description }: CustomHeadProps) => {
  const { asPath } = useRouter();
  const fullTitle = title ? `${title} · ${site.name}` : `${site.name} · ${site.role}`;
  const metaDescription = description ?? site.description;
  const path = asPath.split(/[?#]/)[0];
  const canonical = `${site.url}${path === '/' ? '' : path}`;
  const image = `${site.url}/Kushal.jpeg`;

  return (
    <NextHead>
      <title>{fullTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={site.keywords} />
      <meta name="author" content={site.name} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={`${site.name} · Portfolio`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`Portrait of ${site.name}`} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
    </NextHead>
  );
};

export default CustomHead;
