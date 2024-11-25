import Head from "next/head";

const MetaTags = ({ 
  title = "Default Title", 
  description = "Default Description", 
  keywords = "default, keywords", 
  noIndex = false 
}) => {
  return (
    <Head>
      {/* Title */}
      <title>{title}</title>

      {/* Description */}
      <meta name="description" content={description} />

      {/* Keywords */}
      <meta name="keywords" content={keywords} />

      {/* Robots Meta Tag for SEO */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph / Social Media Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      {/* Additional Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default MetaTags;
