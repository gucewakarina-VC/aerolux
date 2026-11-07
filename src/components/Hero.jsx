import { asset } from "../utils/asset.js";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <img
          className="hero__photo"
          src={asset("/images/aerolux-hero.png")}
          alt="Интерьер с натяжным потолком, световыми линиями и трековым освещением"
          width="1875"
          height="839"
          decoding="async"
          fetchPriority="high"
          loading="eager"
        />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">
          AEROLUX / НАТЯЖНЫЕ ПОТОЛКИ
          <br />
          И ОСВЕЩЕНИЕ
        </p>

        <h1 id="hero-title" className="hero__title">
          Потолки и свет.
          <br />
          В гармонии
          <br />
          с интерьером.
        </h1>

        <p className="hero__location">Москва и Московская область</p>

        <a className="btn btn--primary hero__cta" href="tel:+79772560473">
          Обсудить проект
        </a>
      </div>
    </section>
  );
}

export default Hero;
