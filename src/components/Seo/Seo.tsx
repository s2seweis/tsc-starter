// Seo.tsx
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
}

const Seo: React.FC<SEOProps> = ({ title, description, ogImage }) => {
  return (
    <Head>
      {/* Title */}
      <title>{title}</title>

      {/* Meta tags */}
      <meta name="description" content={description} />

      {/* Open Graph tags */}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      {/* Twitter Card tags (optional) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Head>
  );
};

export default Seo;
