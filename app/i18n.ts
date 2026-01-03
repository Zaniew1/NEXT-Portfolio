import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/data/translations/en/global.json';
import pl from '@/data/translations/pl/global.json';

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { global: en },
        pl: { global: pl },
      },
      lng: 'pl',
      fallbackLng: 'pl',
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
