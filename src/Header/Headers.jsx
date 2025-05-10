import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Counter from "../LanguageSwitcher/Counter.jsx";
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.jsx';

function Header() {
    const { t, i18n } = useTranslation();

    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">
                <Link to="/" className="logo d-flex align-items-center me-auto">
                    <h1 className="sitename">{t('site.name', 'eNno')}</h1>
                </Link>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><Link to="/" className="active">{t('nav.home')}</Link></li>
                        <li><Link to="/about">{t('nav.about')}</Link></li>
                        <li><Link to="/services">{t('nav.services')}</Link></li>
                        <li><Link to="/portfolio">{t('nav.portfolio')}</Link></li>
                        <li><Link to="/team">{t('nav.team')}</Link></li>
                        <li className="dropdown">
                            <Link to="#"><span>{t('nav.dropdown')}</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                            <ul>
                                <li><Link to="#">{t('nav.dropdown1')}</Link></li>
                                <li className="dropdown">
                                    <Link to="#"><span>{t('nav.deepDropdown')}</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                                    <ul>
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <li key={num}>
                                                <Link to="#">{t('nav.deepDropdownItem', { number: num })}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                {[2, 3, 4].map((num) => (
                                    <li key={num}>
                                        <Link to="#">{t('nav.dropdownItem', { number: num })}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li><Link to="/contact">{t('nav.contact')}</Link></li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                <div className="d-flex align-items-center gap-4">
                    <Counter />
                    <p className="mb-0">
                        {t('currentDate', {
                            date: new Date().toLocaleDateString(i18n.language)
                        })}
                    </p>
                    <LanguageSwitcher />
                    <Link to="#" className="btn-getstarted">
                        {t('nav.getStarted')}
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header