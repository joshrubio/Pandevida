import 'server-only';
import type { Locale } from './i18n-config';

const dictionaries = {
    english: () => import('./dictionaries/en.json').then((module) => module.default),
    spanish: () => import('./dictionaries/es.json').then((module) => module.default),
    arabic: () => import('./dictionaries/ar.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
    dictionaries[locale]?.() ?? dictionaries.english();
