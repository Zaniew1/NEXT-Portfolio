'use client'

import { I18nextProvider } from 'react-i18next'
import eng from '../../../data/translations/en/global.json';
import pl from '../../../data/translations/pl/global.json';
import i18next from "i18next";


export function LangProviders({ children }: { children: React.ReactNode }) {
      i18next.init({
        interpolation: { escapeValue: false }, // React already does escaping
        lng: 'pl', // language to use
        resources: {
          pl: {
            global: pl
          },
          en: {
            global: eng
          },
        },
      });
  return (
    <I18nextProvider i18n={i18next}>
      {children}
    </I18nextProvider>
  )
}