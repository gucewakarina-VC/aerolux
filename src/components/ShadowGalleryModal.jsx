import { useEffect, useId, useRef, useState } from "react";
import { SHADOW_GALLERY } from "../data/shadowGallery.js";
import "./ShadowGalleryModal.css";

function ShadowGalleryModal({ open, onClose, returnFocusRef }) {
  const [index, setIndex] = useState(0);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const touchStartX = useRef(null);
  const titleId = useId();
  const total = SHADOW_GALLERY.length;
  const current = SHADOW_GALLERY[index];

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setIndex(0);

    const focusTimer = window.setTimeout(() => {
      closeRef.current?.focus();
    }, 0);

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((value) => (value - 1 + total) % total);
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((value) => (value + 1) % total);
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
  }, [open, onClose, returnFocusRef, total]);

  useEffect(() => {
    if (!open) return undefined;

    const preload = [index, (index + 1) % total, (index - 1 + total) % total];
    preload.forEach((itemIndex) => {
      const image = new Image();
      image.src = SHADOW_GALLERY[itemIndex].full;
    });
  }, [open, index, total]);

  if (!open) return null;

  const goPrev = () => setIndex((value) => (value - 1 + total) % total);
  const goNext = () => setIndex((value) => (value + 1) % total);

  const onTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event) => {
    if (touchStartX.current == null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 48) return;
    if (delta > 0) goPrev();
    else goNext();
  };

  return (
    <div className="shadow-gallery" role="presentation" onClick={onClose}>
      <div
        ref={dialogRef}
        className="shadow-gallery__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="shadow-gallery__close"
          aria-label="Закрыть галерею"
          onClick={onClose}
        >
          Закрыть
        </button>

        <div className="shadow-gallery__header">
          <p className="shadow-gallery__eyebrow">Решения</p>
          <h2 id={titleId} className="shadow-gallery__title">
            Теневые потолки
          </h2>
          <p className="shadow-gallery__lead">
            Примеры наших работ: детали потолка, освещение и сочетания с
            интерьером
          </p>
        </div>

        <div
          className="shadow-gallery__stage"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            className="shadow-gallery__nav shadow-gallery__nav--prev"
            aria-label="Предыдущее фото"
            onClick={goPrev}
          >
            ‹
          </button>

          <div className="shadow-gallery__frame">
            <img
              key={current.id}
              className="shadow-gallery__photo"
              src={current.full}
              alt={current.alt}
              decoding="async"
            />
          </div>

          <button
            type="button"
            className="shadow-gallery__nav shadow-gallery__nav--next"
            aria-label="Следующее фото"
            onClick={goNext}
          >
            ›
          </button>
        </div>

        <div className="shadow-gallery__meta">
          <p className="shadow-gallery__counter" aria-live="polite">
            {index + 1} / {total}
          </p>

          <ul className="shadow-gallery__thumbs" aria-label="Миниатюры">
            {SHADOW_GALLERY.map((item, itemIndex) => {
              const active = itemIndex === index;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`shadow-gallery__thumb${active ? " is-active" : ""}`}
                    aria-label={`Фото ${itemIndex + 1}`}
                    aria-current={active ? "true" : undefined}
                    onClick={() => setIndex(itemIndex)}
                  >
                    <img
                      src={item.thumb}
                      alt=""
                      width={80}
                      height={60}
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShadowGalleryModal;
