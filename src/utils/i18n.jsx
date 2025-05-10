import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files from the Jsons folder
import enTranslations from '../Jsons/en.json';
import esTranslations from '../Jsons/es.json';
import frTranslations from '../Jsons/fr.json';

/**
 * i18n Configuration and Setup
 * 
 * This file configures internationalization for the React application.
 * Here's how the different parts work together:
 * 
 * 1. Language Files:
 *    - Located in src/Jsons/{locale}.json
 *    - Contains key-value pairs for each translated string
 *    - Example: { "welcome": "Welcome" } in en.json
 *              { "welcome": "Bienvenido" } in es.json
 * 
 * 2. Usage in Components:
 *    ```jsx
 *    import { useTranslation } from 'react-i18next';
 *    
 *    function MyComponent() {
 *      const { t, i18n } = useTranslation();
 *      
 *      // Using translations
 *      return <h1>{t('welcome')}</h1>;
 *      
 *      // Changing language
 *      const changeLanguage = (lng) => {
 *        i18n.changeLanguage(lng);
 *      };
 *    }
 *    ```
 * 
 * 3. Language Detection:
 *    - Tries detection methods in the following order:
 *      a. URL query parameter (?lng=es)
 *      b. Cookie
 *      c. localStorage
 *      d. Browser language
 */

i18n
  // Configure automatic language detection
  .use(LanguageDetector)
  // Enables React integration
  .use(initReactI18next)
  .init({
    // Available languages and their translations
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
      fr: { translation: frTranslations }
    },
    // Default language if detection fails
    fallbackLng: 'en',
    // Default language detection settings
    detection: {
      // Order of detection methods
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      // Cache the language selection in both cookie and localStorage
      caches: ['cookie', 'localStorage'],
      // Cookie settings
      cookieMinutes: 43200, // 30 days
      // Query string settings
      lookupQuerystring: 'lng',
    },
    // React already escapes values by default
    interpolation: {
      escapeValue: false
    },
    // Other useful settings
    react: {
      useSuspense: true // Enable suspense mode for better loading handling
    },
    // Enable debugging in development
    debug: process.env.NODE_ENV === 'development'
  });

export default i18n;