import type { AppProps } from 'next/app';
import { Instrument_Serif, JetBrains_Mono, Manrope } from 'next/font/google';

import Layout from '@/components/Layout';
import Head from '@/components/Head';

import '@/styles/globals.css';

const sans = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-sans' });
const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
});

interface PageProps {
  title?: string;
  description?: string;
}

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <>
      <Head title={pageProps.title} description={pageProps.description} />
      <Layout fontClassName={`${sans.variable} ${display.variable} ${mono.variable}`}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
