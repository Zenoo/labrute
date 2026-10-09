import React, { useMemo } from 'react';
import { matchRoutes, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { SEO } from './SEO';
import { routes } from '../routes';

type RouteHandle = {
  shouldIndex?: boolean;
};

export const RouteSEO = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation('seo');

  const matches = matchRoutes(routes, location.pathname) ?? [];
  const match = matches[matches.length - 1];
  const shouldNoIndex = (match?.route.handle as RouteHandle | undefined)?.shouldIndex === false;

  const seo = useMemo(() => {
    if (!match) return null;

    const normalized = location.pathname.replace(/\d+/g, ':id').replace(/\/+$/, '') || '/';
    const brand = t('common:MyBrute');
    const robots = shouldNoIndex ? 'noindex,nofollow' : 'index,follow';

    const routeId = match.route.id ?? match.route.path;
    const titleKey = `seo:${routeId}.title`;
    const descriptionKey = `seo:${routeId}.description`;

    if (!i18n.exists(titleKey) || !i18n.exists(descriptionKey)) {
      console.warn(`[SEO] Missing SEO details for route "${normalized}"`);

      return {
        title: t('seo:fallback.title', { brand }),
        description: t('seo:fallback.description', { brand }),
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

  const locale = (i18n.resolvedLanguage || document.documentElement.lang || 'en').split('-')[0];

  return seo ? (
    <SEO
      title={seo.title}
      description={seo.description}
      robots={seo.robots}
      siteName={seo.brand}
      locale={locale}
    />
  ) : null;
};
