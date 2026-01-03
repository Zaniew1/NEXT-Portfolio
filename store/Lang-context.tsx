'use client';

import {
  createContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'en' | 'pl';

type LangContextType = {
  lang: Language;
  changeLang: (lang: Language) => void;
};

export const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangContextProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation('global');

  const [lang, setLang] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'pl';
    return (localStorage.getItem('lang') as Language) ?? 'pl';
  });

  // 🔁 Sync i18n with state
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const changeLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  );
}
