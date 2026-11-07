import { asset, homePath } from "../utils/asset.js";
import "./Header.css";

const NAV_ITEMS = [
  { id: "solutions", label: "Решения" },
  { id: "projects", label: "Проекты" },
  { id: "team", label: "О команде" },
  { id: "contacts", label: "Контакты" },
];

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__logo" href={homePath} aria-label="AeroLux — на главную">
          <img
            src={asset("/images/aerolux-logo-transparent.png")}
            alt="AeroLux"
            width={938}
            height={827}
            decoding="async"
          />
        </a>

        <nav className="site-header__nav" aria-label="Разделы сайта">
          <ul className="site-header__nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                {item.id === "solutions" ||
                item.id === "team" ||
                item.id === "projects" ||
                item.id === "contacts" ? (
                  <a className="site-header__nav-link" href={`#${item.id}`}>
                    {item.label}
                  </a>
                ) : (
                  <span className="site-header__nav-item" aria-disabled="true">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btn--ghost site-header__call" href="tel:+79772560473">
          Позвонить <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
