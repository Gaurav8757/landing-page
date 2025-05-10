# Internationalization (i18n) Guide

This document explains how the internationalization system works in our React application.

## Overview

Our application uses `react-i18next` for internationalization, supporting multiple languages (English, Spanish, and French) with automatic language detection and switching capabilities.

## File Structure

```
src/
├── Jsons/              # Translation files
│   ├── en.json        # English translations
│   ├── es.json        # Spanish translations
│   └── fr.json        # French translations
├── utils/
│   └── i18n.jsx       # i18n configuration
└── LanguageSwitcher/  # Language switching components
    └── LanguageSwitcher.jsx
```

## Language Detection

The application automatically detects the user's preferred language using the following methods (in order of priority):

1. URL Query Parameter (`?lng=es`)
2. Cookie Storage
3. localStorage
4. Browser Language
5. Fallback to English if no preference is detected

## Usage in Components

### Basic Translation

```jsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return <h1>{t('welcome.heading')}</h1>;
}
```

### Dynamic Values

```jsx
// With variables
{t('counter.label', { count: 5 })}

// With dates
{t('currentDate', { 
  date: new Date().toLocaleDateString(i18n.language) 
})}
```

### Changing Language

```jsx
const { i18n } = useTranslation();

// Change language programmatically
const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};
```

## Translation Files Structure

Example of translation file structure (en.json):

```json
{
  "site": {
    "name": "eNno"
  },
  "welcome": {
    "heading": "Welcome to our React App!",
    "message": "This is a demonstration of i18next with React and Vite."
  },
  "nav": {
    "home": "Home",
    "about": "About"
  }
}
```

## URL-based Language Switching

Users can change the language by adding a query parameter to the URL:
- English: `/?lng=en`
- Spanish: `/?lng=es`
- French: `/?lng=fr`

## Persistence

Language preferences are automatically saved in:
1. Browser cookies (valid for 30 days)
2. localStorage

## Adding New Languages

To add a new language:

1. Create a new translation file in `src/Jsons/` (e.g., `de.json` for German)
2. Add the translations following the existing JSON structure
3. Update the i18n configuration in `src/utils/i18n.jsx`:

```jsx
resources: {
  en: { translation: enTranslations },
  es: { translation: esTranslations },
  fr: { translation: frTranslations },
  de: { translation: deTranslations }  // New language
}
```

4. Add the language option to the LanguageSwitcher component

## Best Practices

1. Use nested keys for better organization (e.g., `nav.home` instead of `navHome`)
2. Keep translation keys in camelCase
3. Use variables for dynamic content: `{t('greeting', { name: username })}`
4. Use pluralization when needed: 
   ```json
   {
     "counter": {
       "label": "{{count}} item",
       "label_plural": "{{count}} items"
     }
   }
   ```

## Debugging

During development, the i18n system will log debugging information to the console. This is enabled when `NODE_ENV === 'development'`.

## Common Issues

1. **Missing Translations**: If a translation key is missing, the key itself will be displayed
2. **Language Not Changing**: Check if the language resource file is properly imported and configured
3. **Plural Forms Not Working**: Ensure you have both singular and plural forms defined with `_plural` suffix
