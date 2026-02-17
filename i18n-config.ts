export const i18n = {
    defaultLocale: 'arabic',
    locales: ['english', 'spanish', 'arabic'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
