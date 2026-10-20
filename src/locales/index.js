import { tr } from './tr';
import { en } from './en';
import { de } from './de';
import { ru } from './ru';

export const languages = {
  tr,
  en,
  de,
  ru
};

export const languageList = [
  { code: 'tr', label: 'TR', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', label: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'DE', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', label: 'RU', name: 'Русский', flag: '🇷🇺' }
];

export const defaultLanguage = 'tr';

export { tr, en, de, ru };
