import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url }) => {
  const siteUrl = 'https://qfitgymqatar.com';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "QFit Gym",
    "image": `${siteUrl}/logo.png`,
    "description": description || "Premium fitness center in Mansoura, Qatar.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mansoura",
      "addressLocality": "Doha",
      "addressRegion": "Doha",
      "addressCountry": "QA"
    },
    "telephone": "+974-50350222",
    "url": fullUrl,
    "sameAs": [
      "https://www.instagram.com/qfitgym/"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title ? `${title} | QFit Gym Qatar` : 'QFit Gym | Premium Fitness Center in Mansoura, Qatar'}</title>
      <meta name="description" content={description || "Join QFit Gym in Mansoura, Qatar. Premium fitness center featuring state-of-the-art equipment, certified personal trainers, and dedicated ladies & gents sections."} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical Link */}
      <link rel="canonical" href={fullUrl} />

      {/* OpenGraph Tags (Facebook/LinkedIn) */}
      <meta property="og:title" content={title ? `${title} | QFit Gym` : 'QFit Gym | Premium Fitness'} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${siteUrl}/hero-bg.jpg`} />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | QFit Gym` : 'QFit Gym | Premium Fitness'} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/hero-bg.jpg`} />

      {/* Structured Data (JSON-LD) for Local Business SEO */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
