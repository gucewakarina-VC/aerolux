import { useEffect, useId, useRef, useState } from "react";
import { hasMaxLink, MAX_URL, PHONES } from "../data/contacts.js";
import { asset, homePath } from "../utils/asset.js";
import "./Header.css";

const NAV_ITEMS = [
  { id: "solutions", label: "Решения" },
  { id: "projects", label: "Проекты" },
  { id: "team", label: "О команде" },
  { id: "contacts", label: "Контакты" },
];

function Header() {
  const [callOpen, setCallOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const callRef = useRef(null);
  const headerRef = useRef(null);
  const callMenuId = useId();
  const mobileMenuId = useId();

  useEffect(() => {
    if (!callOpen) return undefined;

    const onPointerDown = (event) => {
      if (!callRef.current?.contains(event.target)) {
        setCallOpen(false);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setCallOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [callOpen]);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setMobileOpen(false);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const onChange = (event) => {
      if (!event.matches) {
        setMobileOpen(false);
      } else {
        setCallOpen(false);
      }
    };

    onChange(media);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      ref={headerRef}
      className={`site-header${mobileOpen ? " is-mobile-open" : ""}`}
    >
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
                <a className="site-header__nav-link" href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          {hasMaxLink ? (
            <a
              className="btn btn--ghost site-header__max"
              href={MAX_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Написать в MAX
            </a>
          ) : null}

          <div className="site-header__call-wrap" ref={callRef}>
            <button
              type="button"
              className="btn btn--ghost site-header__call"
              aria-expanded={callOpen}
              aria-controls={callMenuId}
              aria-haspopup="menu"
              onClick={() => setCallOpen((value) => !value)}
            >
              Позвонить <span aria-hidden="true">↗</span>
            </button>

            {callOpen ? (
              <div
                id={callMenuId}
                className="site-header__call-menu"
                role="menu"
                aria-label="Выберите, кому позвонить"
              >
                {PHONES.map((person) => (
                  <a
                    key={person.id}
                    className="site-header__call-option"
                    href={person.href}
                    role="menuitem"
                    onClick={() => setCallOpen(false)}
                  >
                    <span className="site-header__call-name">{person.name}</span>
                    <span className="site-header__call-number">{person.label}</span>
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="site-header__mobile-tools">
          {hasMaxLink ? (
            <a
              className="btn btn--ghost site-header__max-short"
              href={MAX_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              MAX
            </a>
          ) : null}

          <button
            type="button"
            className="site-header__burger"
            aria-expanded={mobileOpen}
            aria-controls={mobileMenuId}
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span className="site-header__burger-line" aria-hidden="true" />
            <span className="site-header__burger-line" aria-hidden="true" />
            <span className="site-header__burger-line" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        id={mobileMenuId}
        className="site-header__panel"
        hidden={!mobileOpen}
      >
        <nav className="site-header__panel-nav" aria-label="Мобильная навигация">
          <ul className="site-header__panel-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  className="site-header__panel-link"
                  href={`#${item.id}`}
                  onClick={closeMobile}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__panel-call">
          <p className="site-header__panel-label">Позвонить</p>
          <ul className="site-header__panel-phones">
            {PHONES.map((person) => (
              <li key={person.id}>
                <a
                  className="site-header__panel-phone"
                  href={person.href}
                  onClick={closeMobile}
                >
                  <span className="site-header__panel-phone-name">
                    {person.name}
                  </span>
                  <span className="site-header__panel-phone-number">
                    {person.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
