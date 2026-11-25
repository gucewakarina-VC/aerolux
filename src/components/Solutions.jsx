import { useEffect, useRef, useState } from "react";
import { FLOATING_COVER } from "../data/floatingGallery.js";
import {
  LIGHT_LINES_COVER,
  LIGHT_LINES_GALLERY,
} from "../data/lightLinesGallery.js";
import { TENEVYE_COVER, TENEVYE_GALLERY } from "../data/tenevyeGallery.js";
import { TRACKS_COVER, TRACKS_GALLERY } from "../data/tracksGallery.js";
import { asset } from "../utils/asset.js";
import FloatingGalleryModal from "./FloatingGalleryModal.jsx";
import ServiceGalleryModal from "./ServiceGalleryModal.jsx";
import VisionModal from "./VisionModal.jsx";
import "./Solutions.css";

const SERVICES = [
  {
    id: "shadow",
    title: "Теневые потолки",
    cta: "Смотреть работы →",
    image: TENEVYE_COVER.src,
    position: "28% 22%",
    width: TENEVYE_COVER.width,
    height: TENEVYE_COVER.height,
    opensTenevyeGallery: true,
  },
  {
    id: "floating",
    title: "Парящие потолки",
    cta: "Смотреть работы →",
    image: FLOATING_COVER.src,
    position: "center center",
    width: FLOATING_COVER.width,
    height: FLOATING_COVER.height,
    opensFloatingGallery: true,
  },
  {
    id: "light-lines",
    title: "Световые линии",
    cta: "Смотреть работы →",
    image: LIGHT_LINES_COVER.src,
    position: "center 40%",
    width: LIGHT_LINES_COVER.width,
    height: LIGHT_LINES_COVER.height,
    opensLightLinesGallery: true,
  },
  {
    id: "track",
    title: "Трековое освещение",
    cta: "Смотреть работы →",
    image: TRACKS_COVER.src,
    position: "center 45%",
    width: TRACKS_COVER.width,
    height: TRACKS_COVER.height,
    opensTracksGallery: true,
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
  const [floatingOpen, setFloatingOpen] = useState(false);
  const [floatingGalleryKey, setFloatingGalleryKey] = useState(0);
  const [tenevyeOpen, setTenevyeOpen] = useState(false);
  const [tenevyeGalleryKey, setTenevyeGalleryKey] = useState(0);
  const [lightLinesOpen, setLightLinesOpen] = useState(false);
  const [lightLinesGalleryKey, setLightLinesGalleryKey] = useState(0);
  const [tracksOpen, setTracksOpen] = useState(false);
  const [tracksGalleryKey, setTracksGalleryKey] = useState(0);
  const visionTriggerRef = useRef(null);
  const floatingTriggerRef = useRef(null);
  const tenevyeTriggerRef = useRef(null);
  const lightLinesTriggerRef = useRef(null);
  const tracksTriggerRef = useRef(null);

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

  const openFloatingGallery = (event) => {
    floatingTriggerRef.current = event.currentTarget;
    setFloatingGalleryKey((value) => value + 1);
    setFloatingOpen(true);
  };

  const closeFloatingGallery = () => setFloatingOpen(false);

  const openTenevyeGallery = (event) => {
    tenevyeTriggerRef.current = event.currentTarget;
    setTenevyeGalleryKey((value) => value + 1);
    setTenevyeOpen(true);
  };

  const closeTenevyeGallery = () => setTenevyeOpen(false);

  const openLightLinesGallery = (event) => {
    lightLinesTriggerRef.current = event.currentTarget;
    setLightLinesGalleryKey((value) => value + 1);
    setLightLinesOpen(true);
  };

  const closeLightLinesGallery = () => setLightLinesOpen(false);

  const openTracksGallery = (event) => {
    tracksTriggerRef.current = event.currentTarget;
    setTracksGalleryKey((value) => value + 1);
    setTracksOpen(true);
  };

  const closeTracksGallery = () => setTracksOpen(false);

  const renderGalleryCard = (card, className, onOpen) => (
    <li key={card.id} className={`solutions__card ${className}`}>
      <button
        type="button"
        className="solutions__gallery-trigger"
        onClick={onOpen}
        aria-haspopup="dialog"
        aria-label={`${card.title}. ${card.cta}`}
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
          <span className="solutions__cta">{card.cta}</span>
        </span>
      </button>
    </li>
  );

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
          if (card.opensTenevyeGallery) {
            return renderGalleryCard(
              card,
              "solutions__card--tenevye",
              openTenevyeGallery,
            );
          }

          if (card.opensFloatingGallery) {
            return renderGalleryCard(
              card,
              "solutions__card--floating",
              openFloatingGallery,
            );
          }

          if (card.opensLightLinesGallery) {
            return renderGalleryCard(
              card,
              "solutions__card--light-lines",
              openLightLinesGallery,
            );
          }

          if (card.opensTracksGallery) {
            return renderGalleryCard(
              card,
              "solutions__card--tracks",
              openTracksGallery,
            );
          }

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
      <FloatingGalleryModal
        key={floatingGalleryKey}
        open={floatingOpen}
        onClose={closeFloatingGallery}
        returnFocusRef={floatingTriggerRef}
      />
      <ServiceGalleryModal
        key={tenevyeGalleryKey}
        open={tenevyeOpen}
        onClose={closeTenevyeGallery}
        returnFocusRef={tenevyeTriggerRef}
        title="Теневые потолки"
        lead="Тонкая теневая линия по периметру подчёркивает геометрию потолка и создаёт аккуратное примыкание к стенам"
        items={TENEVYE_GALLERY}
      />
      <ServiceGalleryModal
        key={lightLinesGalleryKey}
        open={lightLinesOpen}
        onClose={closeLightLinesGallery}
        returnFocusRef={lightLinesTriggerRef}
        title="Световые линии"
        lead="Световые линии создают геометрический рисунок на потолке и дополняют освещение пространства"
        items={LIGHT_LINES_GALLERY}
      />
      <ServiceGalleryModal
        key={tracksGalleryKey}
        open={tracksOpen}
        onClose={closeTracksGallery}
        returnFocusRef={tracksTriggerRef}
        title="Трековое освещение"
        lead="Трековое освещение помогает расставить световые акценты и подобрать освещение под задачи интерьера"
        items={TRACKS_GALLERY}
      />
    </section>
  );
}

export default Solutions;
