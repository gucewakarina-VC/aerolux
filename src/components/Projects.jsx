import { useEffect, useId, useRef, useState } from "react";
import { asset } from "../utils/asset.js";
import "./Projects.css";

const PROJECTS = [
  {
    id: "hall",
    src: asset("/images/project-hall.png"),
    title: "Геометрия света",
    alt: "Коридор с геометрическими световыми линиями на потолке",
    width: 1448,
    height: 1086,
    featured: true,
  },
  {
    id: "kitchen",
    src: asset("/images/project-kitchen.png"),
    title: "Световые сценарии",
    alt: "Кухня-гостиная с трековым освещением и световыми нишами",
    width: 1448,
    height: 1086,
  },
  {
    id: "living",
    src: asset("/images/project-living-room.png"),
    title: "Архитектура потолка",
    alt: "Гостиная с геометрическими световыми линиями на глянцевом потолке",
    width: 1448,
    height: 1086,
  },
];

function Projects() {
  const [activeId, setActiveId] = useState(null);
  const closeRef = useRef(null);
  const titleId = useId();
  const active = PROJECTS.find((item) => item.id === activeId) ?? null;

  useEffect(() => {
    if (!active) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveId(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <section className="projects" id="projects" aria-labelledby={titleId}>
      <div className="projects__intro">
        <p className="projects__eyebrow">Реализованные проекты</p>
        <h2 id={titleId} className="projects__title">
          Пространства, в которых свет решает всё
        </h2>
        <p className="projects__lead">
          Реальные объекты. Наши работы по установке натяжных потолков и
          освещения.
        </p>
      </div>

      <ul className="projects__gallery">
        {PROJECTS.map((item) => (
          <li
            key={item.id}
            className={`projects__item${item.featured ? " projects__item--featured" : ""}`}
          >
            <button
              type="button"
              className="projects__trigger"
              onClick={() => setActiveId(item.id)}
              aria-label={`Открыть фото: ${item.title}`}
            >
              <span className="projects__media">
                <img
                  className="projects__photo"
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="projects__name">{item.title}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="projects__action">
        <a className="btn btn--primary projects__cta" href="tel:+79772560473">
          Обсудить свой проект
        </a>
      </div>

      {active ? (
        <div
          className="projects__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActiveId(null)}
        >
          <button
            ref={closeRef}
            type="button"
            className="projects__close"
            aria-label="Закрыть просмотр"
            onClick={() => setActiveId(null)}
          >
            Закрыть
          </button>
          <figure
            className="projects__figure"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              className="projects__full"
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
            />
            <figcaption className="projects__caption">{active.title}</figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}

export default Projects;
