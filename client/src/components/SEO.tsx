// react-seo types are not up to date, so we redeclare them here

import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';
import { Host } from '../utils/host';
import React from 'react';

const DOMAIN = 'https://mybrute.eternaltwin.org';

const langCodes: { url: string, langCode: string }[] = [
  { url: `https://${Host.LaBrute}.eternaltwin.org`, langCode: 'fr' },
  { url: `https://${Host.MyBrute}.eternaltwin.org`, langCode: 'en' },
  { url: `https://${Host.ElBruto}.eternaltwin.org`, langCode: 'es' },
  { url: `https://${Host.MeinBrutalo}.eternaltwin.org`, langCode: 'de' },
];

export type SEOProps = {
  title: string;
  description?: string;
};

export const SEO = ({
  title,
  description,
}: SEOProps) => {
  const location = useLocation();

  const canonical = `${DOMAIN}${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      {/* OPEN GRAPH */}
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:locale" content={document.documentElement.lang} />
      <meta property="og:image" content="/logo512.png" />
      <meta property="og:image:alt" content="MyBrute" />
      {/* TWITTER */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content="/logo512.png" />
      <meta name="twitter:image:alt" content="MyBrute" />
      {description && <meta name="description" content={description} />}
      {/* ALTERNATIVES */}
      {langCodes.map(({ url, langCode }) => (
        <link
          key={langCode}
          rel="alternate"
          hrefLang={langCode}
          href={`${url}${location.pathname}`}
        />
      ))}
    </Helmet>
  );
};
