import { hasMaxLink, MAX_URL, PHONE } from "../data/contacts.js";
import { asset, homePath } from "../utils/asset.js";
import "./Footer.css";

const NAV_ITEMS = [
  { id: "solutions", label: "Решения" },
  { id: "projects", label: "Проекты" },
  { id: "team", label: "О команде" },
  { id: "contacts", label: "Контакты" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <a
            className="site-footer__logo"
            href={homePath}
            aria-label="AeroLux — на главную"
          >
            <img
              src={asset("/images/aerolux-logo-transparent.png")}
              alt="AeroLux"
              width={938}
              height={827}
              decoding="async"
            />
          </a>
          <p className="site-footer__tagline">Натяжные потолки и освещение</p>
          <p className="site-footer__location">Москва и Московская область</p>
        </div>

        <nav className="site-footer__nav" aria-label="Разделы сайта">
          <ul className="site-footer__nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a className="site-footer__nav-link" href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__contacts">
          <p className="site-footer__contacts-title">Связаться с нами</p>
          <a className="site-footer__phone" href={PHONE.href}>
            {PHONE.label}
          </a>
          {hasMaxLink ? (
            <a
              className="site-footer__max"
              href={MAX_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Написать в MAX
            </a>
          ) : null}
        </div>
      </div>

      <div className="site-footer__bottom">
        <p className="site-footer__copy">© AeroLux, 2026</p>
      </div>
    </footer>
  );
}

export default Footer;
