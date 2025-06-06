import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Cognixis - Online Tech Internships & Certifications',
  description = 'Join Cognixis for online internships in web development, mobile app development, AI/ML, and data science. Get certified and enhance your career with hands-on experience.',
  keywords = 'online internships, tech internships, web development internship, AI ML internship, data science internship, Cognixis, tech certification',
  ogImage = '/cog-logo-updated-icon.jpg',
  ogUrl = '',
  twitterHandle = '@cognixis',
  canonicalUrl = ''
}) => {
  const siteUrl = 'https://cognixis.com'; // Replace with your actual domain
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullOgUrl = ogUrl ? `${siteUrl}${ogUrl}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Cognixis" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Helmet>
  );
};

export default SEO; 