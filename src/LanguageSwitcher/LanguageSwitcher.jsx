import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Store the language preference
    localStorage.setItem('i18nextLng', lng);
  };

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' }
  ];

  return (
    <div className="language-switcher d-flex gap-2">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          className={`btn ${i18n.language === code ? 'btn-primary' : 'btn-outline-primary'}`}
          aria-label={t('language.switch', { language: label })}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;