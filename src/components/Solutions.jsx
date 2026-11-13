import { useEffect, useRef, useState } from "react";
import { asset } from "../utils/asset.js";
import VisionModal from "./VisionModal.jsx";
import "./Solutions.css";

const SERVICES = [
  {
    id: "shadow",
    title: "Теневые потолки",
    image: asset("/images/shadow-ceiling.png"),
    position: "left bottom",
    width: 1774,
    height: 887,
  },
  {
    id: "floating",
    title: "Парящие потолки",
    image: asset("/images/floating-ceiling.png"),
    position: "center 46%",
  },
  {
    id: "light-lines",
    title: "Световые линии",
    image: asset("/images/light-lines.png"),
    position: "62% 46%",
  },
  {
    id: "track",
    title: "Трековое освещение",
    image: asset("/images/track-lighting.png"),
    position: "center",
    width: 1755,
    height: 896,
  },
  {
    id: "niche",
    title: "Скрытая ниша для штор",
    image: asset("/images/hidden-cornice.png"),
    position: "48% 55%",
  },
  {
    id: "vision",
    title: "One Vision / Double Vision",
    subtitle: "Рисунок, который меняется со светом",
    cta: "Посмотреть, как работает →",
    image: asset("/images/hidden-pattern-off.png"),
    position: "50% 28%",
    width: 939,
    height: 1675,
    opensVision: true,
  },
  {
    id: "walls",
    title: "Натяжные стены",
    image: asset("/images/stretch-walls.png"),
    position: "center 58%",
    width: 1280,
    height: 920,
  },
  {
    id: "fabric",
    title: "Тканевые потолки",
    image: asset("/images/fabric-ceiling.png"),
    position: "center 32%",
    width: 1280,
    height: 860,
  },
];

function Solutions() {
  const [visionOpen, setVisionOpen] = useState(false);
  const visionTriggerRef = useRef(null);

  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash === "effect" || hash === "vision") {
        setVisionOpen(true);
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  const openVision = (event) => {
    visionTriggerRef.current = event.currentTarget;
    setVisionOpen(true);
  };

  const closeVision = () => setVisionOpen(false);

  return (
    <section className="solutions" id="solutions" aria-labelledby="solutions-title">
      <div className="solutions__intro">
        <p className="solutions__eyebrow">01 / Решения</p>
        <div className="solutions__head">
          <h2 id="solutions-title" className="solutions__title">
            На чём мы
            <br />
            специализируемся
          </h2>
          <p className="solutions__lead">
            Натяжные потолки, стены и освещение. Подбираем материалы и решения
            под ваш интерьер и задачи.
          </p>
        </div>
      </div>

      <ul className="solutions__grid">
        {SERVICES.map((card) => {
          if (card.opensVision) {
            return (
              <li key={card.id} className="solutions__card solutions__card--vision">
                <button
                  type="button"
                  className="solutions__vision-trigger"
                  onClick={openVision}
                  aria-haspopup="dialog"
                >
                  <img
                    className="solutions__photo"
                    src={card.image}
                    alt=""
                    width={card.width}
                    height={card.height}
                    style={{ objectPosition: card.position }}
                    decoding="async"
                  />
                  <span className="solutions__shade" aria-hidden="true" />
                  <span className="solutions__copy">
                    <span className="solutions__name">{card.title}</span>
                    <span className="solutions__subtitle">{card.subtitle}</span>
                    <span className="solutions__cta">{card.cta}</span>
                  </span>
                </button>
              </li>
            );
          }

          if (card.description) {
            return (
              <li key={card.id} className="solutions__card solutions__card--text">
                <h3 className="solutions__text-title">{card.title}</h3>
                <p className="solutions__text-lead">{card.description}</p>
              </li>
            );
          }

          return (
            <li key={card.id} className="solutions__card">
              <img
                className="solutions__photo"
                src={card.image}
                alt=""
                width={card.width ?? 1448}
                height={card.height ?? 1086}
                style={{ objectPosition: card.position }}
                decoding="async"
              />
              <span className="solutions__shade" aria-hidden="true" />
              <h3 className="solutions__name">{card.title}</h3>
            </li>
          );
        })}
      </ul>

      <VisionModal
        open={visionOpen}
        onClose={closeVision}
        returnFocusRef={visionTriggerRef}
      />
    </section>
  );
}

export default Solutions;
