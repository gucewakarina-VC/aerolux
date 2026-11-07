import { useId, useState } from "react";
import { asset } from "../utils/asset.js";
import "./Effect.css";

const TECHNOLOGIES = {
  "one-vision": {
    id: "one-vision",
    label: "One Vision",
    title: "One Vision — изображение, которое появляется со светом",
    lead: "Фотопечать нанесена на обратную сторону полотна. Когда подсветка выключена, потолок выглядит ровным и белым. При включении света скрытый рисунок становится видимым.",
    available: true,
    offSrc: asset("/images/hidden-pattern-off.png"),
    onSrc: asset("/images/hidden-pattern-on.png"),
    offWidth: 939,
    offHeight: 1675,
    onWidth: 939,
    onHeight: 1676,
    photoPosition: "50% 22%",
  },
  "double-vision": {
    id: "double-vision",
    label: "Double Vision",
    title: "Double Vision — изображение с эффектом глубины",
    lead: "Рисунок наносится на обе стороны полотна. При включении подсветки изображения визуально дополняют друг друга, создавая эффект объёма и глубины.",
    available: false,
  },
};

function BulbIcon() {
  return (
    <svg
      className="effect__bulb"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M9 21h6M10 17h4M12 3a6 6 0 0 0-3.5 10.8c.7.55 1.1 1.2 1.25 2.2h4.5c.15-1 .55-1.65 1.25-2.2A6 6 0 0 0 12 3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Effect() {
  const [techId, setTechId] = useState("one-vision");
  const [lit, setLit] = useState(false);
  const hintId = useId();
  const switcherId = useId();
  const tech = TECHNOLOGIES[techId];

  const selectTech = (nextId) => {
    if (nextId === techId) return;
    setTechId(nextId);
    setLit(false);
  };

  return (
    <section className="effect" id="effect" aria-labelledby="effect-title">
      <div className="effect__intro">
        <div className="effect__copy">
          <p className="effect__eyebrow">03 / Эффект</p>
          <h2 id="effect-title" className="effect__title">
            {tech.title}
          </h2>
        </div>
        <p className="effect__lead">{tech.lead}</p>
      </div>

      <div
        className="effect__switcher"
        role="tablist"
        aria-label="Технология потолка"
        id={switcherId}
      >
        {Object.values(TECHNOLOGIES).map((item) => {
          const selected = item.id === techId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              className={`effect__switch${selected ? " is-active" : ""}`}
              aria-selected={selected}
              onClick={() => selectTech(item.id)}
            >
              <span className="effect__switch-label">{item.label}</span>
              {!item.available ? (
                <span className="effect__switch-note">Пример скоро появится</span>
              ) : null}
            </button>
          );
        })}
      </div>

      {tech.available ? (
        <>
          <div className={`effect__compare${lit ? " is-lit" : ""}`}>
            <div className="effect__panel effect__panel--left">
              <img
                className="effect__photo effect__photo--off"
                src={tech.offSrc}
                alt=""
                width={tech.offWidth}
                height={tech.offHeight}
                style={{ objectPosition: tech.photoPosition }}
                decoding="async"
              />
              <img
                className="effect__photo effect__photo--on"
                src={tech.onSrc}
                alt=""
                width={tech.onWidth}
                height={tech.onHeight}
                style={{ objectPosition: tech.photoPosition }}
                decoding="async"
              />
              <span className="effect__caption">
                {lit ? "С подсветкой" : "Без подсветки"}
              </span>
            </div>

            <button
              type="button"
              className="effect__toggle"
              aria-pressed={lit}
              aria-describedby={hintId}
              aria-label={lit ? "Выключить подсветку" : "Включить подсветку"}
              onClick={() => setLit((value) => !value)}
            >
              <BulbIcon />
            </button>

            <div className="effect__panel effect__panel--right">
              <img
                className="effect__photo"
                src={tech.onSrc}
                alt=""
                width={tech.onWidth}
                height={tech.onHeight}
                style={{ objectPosition: tech.photoPosition }}
                decoding="async"
              />
              <span className="effect__caption">С подсветкой</span>
            </div>
          </div>

          <p id={hintId} className="effect__hint">
            Нажмите на лампочку, чтобы включить подсветку
          </p>
        </>
      ) : (
        <div className="effect__soon" role="status">
          <p className="effect__soon-label">Пример скоро появится</p>
        </div>
      )}
    </section>
  );
}

export default Effect;
