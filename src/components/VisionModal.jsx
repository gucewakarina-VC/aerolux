import { useEffect, useId, useRef, useState } from "react";
import { VISION_TECHNOLOGIES } from "../data/vision.js";
import "./VisionModal.css";

function VisionModal({ open, onClose, returnFocusRef }) {
  const [techId, setTechId] = useState("one-vision");
  const [lit, setLit] = useState(false);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const titleId = useId();
  const tech = VISION_TECHNOLOGIES[techId];

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setTechId("one-vision");
    setLit(false);

    const focusTimer = window.setTimeout(() => {
      closeRef.current?.focus();
    }, 0);

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll(
        'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      returnFocusRef?.current?.focus?.();
    };
  }, [open, onClose, returnFocusRef]);

  if (!open) return null;

  const selectTech = (nextId) => {
    if (nextId === techId) return;
    setTechId(nextId);
    setLit(false);
  };

  return (
    <div
      className="vision-modal"
      role="presentation"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className="vision-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="vision-modal__close"
          aria-label="Закрыть окно"
          onClick={onClose}
        >
          Закрыть
        </button>

        <div className="vision-modal__content">
          <p className="vision-modal__eyebrow">Эффект света</p>
          <h2 id={titleId} className="vision-modal__title">
            Потолок, который меняется со светом
          </h2>

          <div
            className="vision-modal__tabs"
            role="tablist"
            aria-label="Технология потолка"
          >
            {Object.values(VISION_TECHNOLOGIES).map((item) => {
              const selected = item.id === techId;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`vision-tab-${item.id}`}
                  className={`vision-modal__tab${selected ? " is-active" : ""}`}
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectTech(item.id)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                      event.preventDefault();
                      const ids = Object.keys(VISION_TECHNOLOGIES);
                      const index = ids.indexOf(item.id);
                      const next =
                        event.key === "ArrowRight"
                          ? ids[(index + 1) % ids.length]
                          : ids[(index - 1 + ids.length) % ids.length];
                      selectTech(next);
                      document.getElementById(`vision-tab-${next}`)?.focus();
                    }
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            aria-labelledby={`vision-tab-${tech.id}`}
            className="vision-modal__panel"
          >
            <h3 className="vision-modal__tech-title">{tech.title}</h3>
            <p className="vision-modal__lead">{tech.lead}</p>

            {tech.hasDemo ? (
              <div className="vision-modal__demo">
                <div
                  className="vision-modal__state"
                  role="group"
                  aria-label="Состояние подсветки"
                >
                  <button
                    type="button"
                    className={`vision-modal__state-btn${!lit ? " is-active" : ""}`}
                    aria-pressed={!lit}
                    onClick={() => setLit(false)}
                  >
                    Без подсветки
                  </button>
                  <button
                    type="button"
                    className={`vision-modal__state-btn${lit ? " is-active" : ""}`}
                    aria-pressed={lit}
                    onClick={() => setLit(true)}
                  >
                    С подсветкой
                  </button>
                </div>

                <div
                  className={`vision-modal__stage${lit ? " is-lit" : ""}`}
                >
                  <img
                    className="vision-modal__photo vision-modal__photo--off"
                    src={tech.offSrc}
                    alt="Потолок без внутренней подсветки"
                    width={tech.width}
                    height={tech.height}
                    decoding="async"
                  />
                  <img
                    className="vision-modal__photo vision-modal__photo--on"
                    src={tech.onSrc}
                    alt="Потолок со включённой подсветкой и скрытым рисунком"
                    width={tech.width}
                    height={tech.height}
                    decoding="async"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionModal;
