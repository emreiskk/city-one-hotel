import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { languages, languageList, defaultLanguage } from '../locales';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'city_one_hotel_lang';

const pageTitles = {
  tr: "City One Hotel Kayseri | 4 Yıldızlı Konfor, SPA & Erciyes Kayak Oteli",
  en: "City One Hotel Kayseri | 4-Star Luxury, SPA & Mount Erciyes Ski Hotel",
  de: "City One Hotel Kayseri | 4-Sterne-Luxus, SPA & Erciyes Skihotel",
  ru: "City One Hotel Kayseri | 4-звездочный отель, СПА и горнолыжный отдых в Эрджиесе"
};

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && languages[saved]) return saved;

      // Detect browser language
      const browserLang = navigator.language?.toLowerCase() || '';
      if (browserLang.startsWith('ru')) return 'ru';
      if (browserLang.startsWith('de')) return 'de';
      if (browserLang.startsWith('en')) return 'en';
      if (browserLang.startsWith('tr')) return 'tr';
    } catch {
      // Fallback in case localStorage is blocked
    }
    return defaultLanguage;
  });

  const setLanguage = (langCode) => {
    if (languages[langCode]) {
      setCurrentLang(langCode);
      try {
        localStorage.setItem(STORAGE_KEY, langCode);
      } catch {
        // Safe fallback
      }
    }
  };

  // Sync html lang attribute and page title
  useEffect(() => {
    document.documentElement.lang = currentLang;
    if (pageTitles[currentLang]) {
      document.title = pageTitles[currentLang];
    }
  }, [currentLang]);

  const content = useMemo(() => {
    return languages[currentLang] || languages[defaultLanguage];
  }, [currentLang]);

  const value = useMemo(() => ({
    currentLang,
    lang: currentLang,
    setLanguage,
    content,
    t: content,
    languageList,
    languages
  }), [currentLang, content]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    // If used outside provider, gracefully fall back to default Turkish
    return {
      currentLang: defaultLanguage,
      lang: defaultLanguage,
      setLanguage: () => {},
      content: languages[defaultLanguage],
      t: languages[defaultLanguage],
      languageList,
      languages
    };
  }
  return context;
};
