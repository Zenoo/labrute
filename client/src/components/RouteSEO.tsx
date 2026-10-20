import React, { useMemo } from 'react';
import { matchRoutes, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { routes } from '../routes';
import { Host } from '../utils/host';
import { Helmet } from '@dr.pogodin/react-helmet';

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

type RouteHandle = {
  shouldIndex?: boolean;
};

export const RouteSEO = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation('seo');

  const matches = matchRoutes(routes, location.pathname) ?? [];
  const match = matches[matches.length - 1];
  const shouldNoIndex = (match?.route.handle as RouteHandle | undefined)?.shouldIndex === false;

  const locale = (i18n.resolvedLanguage || document.documentElement.lang || 'en').split('-')[0];
  const canonical = `${domainByHost[Host.MyBrute]}${location.pathname}`;
  const language = locale || document.documentElement.lang || 'en';
  const ogLocale = localeByLang[language] || localeByLang.en;

  const seo = useMemo(() => {
    if (!match) return null;

    // Avoid false missing-key warnings while the seo namespace is still loading.
    if (!i18n.hasLoadedNamespace('seo')) {
      return null;
    }

    const normalized = location.pathname.replace(/\d+/g, ':id').replace(/\/+$/, '') || '/';
    const brand = t('common:MyBrute');
    const robots = shouldNoIndex ? 'noindex,nofollow' : 'index,follow';

    const routeId = match.route.id ?? match.route.path;

    if (shouldNoIndex) {
      return {
        title: t(`title.${routeId}`, { brand }),
        robots,
        brand,
      };
    }

    const titleKey = `${routeId}.title`;
    const descriptionKey = `${routeId}.description`;

    if (!i18n.exists(titleKey, { ns: 'seo' }) || !i18n.exists(descriptionKey, { ns: 'seo' })) {
      console.warn(`[SEO] Missing SEO details for route "${normalized}" (${routeId})`);

      return {
        title: t('fallback.title', { brand }),
        description: t('fallback.description', { brand }),
        robots,
        brand,
      };
    }

    const params: Partial<Record<string, string>> = {
      brand
    };

    switch (routeId) {
      case 'ranking/rank':
        params.rank = t(`lvl_${match?.params?.rank ?? ''}`);
        break;
      case 'cell':
      case 'tournament':
      case 'destiny':
      case 'tournaments':
      case 'achievements':
      case 'dojo':
        params.name = match?.params?.bruteName ?? '';
        break;
    }

    return {
      title: t(titleKey, params),
      description: t(descriptionKey, params),
      robots,
      brand,
    };
  }, [i18n, location.pathname, match, shouldNoIndex, t]);

  const resolvedSiteName = seo?.brand || 'MyBrute';

  return (seo) ? (
    <Helmet prioritizeSeoTags>
      <title>{seo.title}</title>
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={seo.robots || 'index,follow'} />
      <meta name="googlebot" content={seo.robots || 'index,follow'} />
      {/* OPEN GRAPH */}
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={resolvedSiteName} />
      <meta property="og:title" content={seo.title} />
      {seo.description && <meta property="og:description" content={seo.description} />}
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:image" content="/logo512.png" />
      <meta property="og:image:alt" content={resolvedSiteName} />
      {/* TWITTER */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      <meta name="twitter:image" content="/logo512.png" />
      <meta name="twitter:image:alt" content={resolvedSiteName} />
      <meta name="twitter:site" content={resolvedSiteName} />
      {seo.description && <meta name="description" content={seo.description} />}
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
  ) : null;
};
