// react-seo types are not up to date, so we redeclare them here

import { Helmet } from '@dr.pogodin/react-helmet';
import { useLocation } from 'react-router';
import { Host } from '../utils/host';
import React from 'react';

const domainByHost: Record<string, string> = {
  [Host.LaBrute]: `https://${Host.LaBrute}.eternaltwin.org`,
  [Host.MyBrute]: `https://${Host.MyBrute}.eternaltwin.org`,
  [Host.ElBruto]: `https://${Host.ElBruto}.eternaltwin.org`,
  [Host.MeinBrutalo]: `https://${Host.MeinBrutalo}.eternaltwin.org`,
};

const localeByLang: Record<string, string> = {
  de: 'de_DE',
  en: 'en_US',
  es: 'es_ES',
  fr: 'fr_FR',
  pt: 'pt_PT',
  ru: 'ru_RU',
};

const langCodes: { url: string, langCode: string }[] = [
  { url: `https://${Host.LaBrute}.eternaltwin.org`, langCode: 'fr' },
  { url: `https://${Host.MyBrute}.eternaltwin.org`, langCode: 'en' },
  { url: `https://${Host.ElBruto}.eternaltwin.org`, langCode: 'es' },
  { url: `https://${Host.MeinBrutalo}.eternaltwin.org`, langCode: 'de' },
];

export type SEOProps = {
  title: string;
  description?: string;
  robots?: string;
  siteName?: string;
  locale?: string;
};

export const SEO = ({
  title,
  description,
  robots,
  siteName,
  locale,
}: SEOProps) => {
  const location = useLocation();

  const canonical = `${domainByHost[Host.MyBrute]}${location.pathname}`;
  const language = locale || document.documentElement.lang || 'en';
  const ogLocale = localeByLang[language] || localeByLang.en;

  const resolvedSiteName = siteName || 'MyBrute';

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robots || 'index,follow'} />
      <meta name="googlebot" content={robots || 'index,follow'} />
      {/* OPEN GRAPH */}
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={resolvedSiteName} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:image" content="/logo512.png" />
      <meta property="og:image:alt" content={resolvedSiteName} />
      {/* TWITTER */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content="/logo512.png" />
      <meta name="twitter:image:alt" content={resolvedSiteName} />
      <meta name="twitter:site" content={resolvedSiteName} />
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
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${domainByHost[Host.MyBrute]}${location.pathname}`}
      />
    </Helmet>
  );
};
