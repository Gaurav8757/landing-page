import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const languages = [
    { value: "en", text: "English" },
    { value: "hi", text: "Hindi" },
    { value: "gu", text: "Gujarati" }, // Fixed spelling of Gujarati
    { value: "bn", text: "Bengali" },
];

function Header() {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language || "en");

    const handleChange = (e) => {
        const newLang = e.target.value;
        setLang(newLang);
        i18n.changeLanguage(newLang);
        
        // Update URL without full page reload
        const url = new URL(window.location.href);
        url.searchParams.set('lng', newLang);
        window.history.pushState({}, '', url);
    };

    const currentLanguage = languages.find(l => l.value === lang)?.text || 'English';

    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">
                <Link to="/" className="logo d-flex align-items-center me-auto">
                    <h1 className="sitename">eNno</h1>
                </Link>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><Link to="#hero" className="active">{t('Home')}</Link></li>
                        <li><Link to="#about">About</Link></li>
                        <li><Link to="#services">Services</Link></li>
                        <li><Link to="#portfolio">Portfolio</Link></li>
                        <li><Link to="#team">Team</Link></li>
                        <li className="dropdown">
                            <Link to="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                            <ul>
                                <li><Link to="#">Dropdown 1</Link></li>
                                <li className="dropdown">
                                    <Link to="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                                    <ul>
                                        <li><Link to="#">Deep Dropdown 1</Link></li>
                                        <li><Link to="#">Deep Dropdown 2</Link></li>
                                        <li><Link to="#">Deep Dropdown 3</Link></li>
                                        <li><Link to="#">Deep Dropdown 4</Link></li>
                                        <li><Link to="#">Deep Dropdown 5</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="#">Dropdown 2</Link></li>
                                <li><Link to="#">Dropdown 3</Link></li>
                                <li><Link to="#">Dropdown 4</Link></li>
                            </ul>
                        </li>
                        <li><Link to="#contact">Contact</Link></li>
                        <li className="dropdown">
                            <Link to="#"><span>{currentLanguage}</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                            <ul>
                                {languages.map((option) => (
                                    <li key={option.value} className='ps-2 py-2'> 
                                        <button 
                                            className={`dropdown-item cursor-pointer ${lang === option.value ? 'active ' : ''}`}
                                            value={option.value}
                                            onClick={handleChange}
                                        >
                                            {option.text}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                <Link to="#" className="btn-getstarted">{t('get_started')}</Link>
            </div>
        </header>
    );
}

export default Header;