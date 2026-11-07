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
  const callRef = useRef(null);
  const menuId = useId();

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
              aria-controls={menuId}
              aria-haspopup="menu"
              onClick={() => setCallOpen((value) => !value)}
            >
              Позвонить <span aria-hidden="true">↗</span>
            </button>

            {callOpen ? (
              <div
                id={menuId}
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
      </div>
    </header>
  );
}

export default Header;
