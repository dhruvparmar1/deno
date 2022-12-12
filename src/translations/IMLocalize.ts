import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import {getItem, setItem} from 'stores/utils';

import en from './en';
import fr from './fr';

const LANGUAGES = {
  en,
  fr,
};

const LANG_CODES = Object.keys(LANGUAGES);

const LANGUAGE_DETECTOR = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    const language = getItem('user-language');

    // if error fetching stored data or no language was stored
    // display errors when in DEV mode as console statements
    if (!language) {
      console.log('No language is set, choosing English as fallback');

      const findBestAvailableLanguage =
        RNLocalize.findBestAvailableLanguage(LANG_CODES);
      callback(findBestAvailableLanguage.languageTag || 'en');
      return;
    }
    callback(language);
  },
  init: () => {},
  cacheUserLanguage: language => {
    setItem('user-language', language);
  },
};

i18n
  // detect language
  .use(LANGUAGE_DETECTOR)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // set options
  .init({
    resources: LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });
