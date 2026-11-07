import { asset } from "../utils/asset.js";
import "./Team.css";

const SHOTS = [
  {
    className: "team__shot team__shot--main",
    src: asset("/images/team-installation.png"),
    width: 1448,
    height: 1086,
    position: "45% 52%",
  },
  {
    className: "team__shot team__shot--top",
    src: asset("/images/team-lighting.png"),
    width: 1774,
    height: 887,
    position: "58% 42%",
  },
  {
    className: "team__shot team__shot--bottom",
    src: asset("/images/team-measurement.png"),
    width: 1774,
    height: 887,
    position: "38% 48%",
  },
];

function TeamShot({ className, src, width, height, position }) {
  return (
    <div className={className}>
      <img
        className="team__photo"
        src={src}
        alt=""
        width={width}
        height={height}
        style={{ objectPosition: position }}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function Team() {
  const [main, top, bottom] = SHOTS;

  return (
    <section className="team" id="team" aria-labelledby="team-title">
      <div className="team__inner">
        <div className="team__copy">
          <p className="team__eyebrow">02 / О команде</p>
          <h2 id="team-title" className="team__title">
            Команда AeroLux.
          </h2>
          <p className="team__lead">
            Создаём потолки и освещение для квартир и домов. Подбираем решения
            под ваш интерьер и задачи.
          </p>
        </div>

        <div className="team__collage" aria-hidden="true">
          <TeamShot
            className={main.className}
            src={main.src}
            width={main.width}
            height={main.height}
            position={main.position}
          />
          <div className="team__stack">
            <TeamShot
              className={top.className}
              src={top.src}
              width={top.width}
              height={top.height}
              position={top.position}
            />
            <TeamShot
              className={bottom.className}
              src={bottom.src}
              width={bottom.width}
              height={bottom.height}
              position={bottom.position}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
