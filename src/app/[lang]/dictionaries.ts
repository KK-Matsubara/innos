import 'server-only'

const dictionaries = {
  ja: () => import('@/dictionaries/en.json').then((module) => module.default),
  en: () => import('@/dictionaries/ja.json').then((module) => module.default),
}

export type locale = 'ja' | 'en'
export const getDictionary = async (locale: locale) => dictionaries[locale]()