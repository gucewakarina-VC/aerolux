import { asset } from "../utils/asset.js";
import "./Solutions.css";

const ROWS = [
  [
    {
      title: "Теневые потолки",
      image: asset("/images/shadow-ceiling.png"),
      position: "left bottom",
      width: 1774,
      height: 887,
    },
    {
      title: "Парящие потолки",
      image: asset("/images/floating-ceiling.png"),
      position: "center 46%",
    },
    {
      title: "Световые линии",
      image: asset("/images/light-lines.png"),
      position: "62% 46%",
    },
  ],
  [
    {
      title: "Трековое освещение",
      image: asset("/images/track-lighting.png"),
      position: "center",
      width: 1755,
      height: 896,
    },
    {
      title: "Скрытые карнизы",
      image: asset("/images/hidden-cornice.png"),
      position: "48% 55%",
    },
    {
      title: "Потолки со скрытым рисунком",
      split: [
        {
          image: asset("/images/hidden-pattern-off.png"),
          label: "Без подсветки",
          width: 939,
          height: 1675,
        },
        {
          image: asset("/images/hidden-pattern-on.png"),
          label: "С подсветкой",
          width: 939,
          height: 1676,
        },
      ],
      position: "50% 22%",
    },
  ],
];

function Solutions() {
  return (
    <section className="solutions" id="solutions" aria-labelledby="solutions-title">
      <div className="solutions__intro">
        <p className="solutions__eyebrow">01 / Решения</p>
        <div className="solutions__head">
          <h2 id="solutions-title" className="solutions__title">
            Решения для
            <br />
            вашего интерьера.
          </h2>
          <p className="solutions__lead">
            Натяжные потолки и освещение, которые подчёркивают архитектуру
            пространства и создают нужную атмосферу
          </p>
        </div>
      </div>

      <div className="solutions__grid">
        {ROWS.map((row, rowIndex) => (
          <ul
            key={rowIndex}
            className={`solutions__row solutions__row--${rowIndex + 1}`}
          >
            {row.map((card) => (
              <li
                key={card.title}
                className={`solutions__card${card.split ? " solutions__card--split" : ""}`}
              >
                {card.split ? (
                  <div className="solutions__split" aria-hidden="true">
                    {card.split.map((half) => (
                      <div key={half.label} className="solutions__half">
                        <img
                          className="solutions__photo"
                          src={half.image}
                          alt=""
                          width={half.width}
                          height={half.height}
                          style={{ objectPosition: card.position }}
                          decoding="async"
                        />
                        <span className="solutions__half-label">{half.label}</span>
                      </div>
                    ))}
                  </div>
                ) : card.image ? (
                  <img
                    className="solutions__photo"
                    src={card.image}
                    alt=""
                    width={card.width ?? 1448}
                    height={card.height ?? 1086}
                    style={{ objectPosition: card.position }}
                    decoding="async"
                  />
                ) : null}
                <span className="solutions__shade" aria-hidden="true" />
                <h3 className="solutions__name">{card.title}</h3>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

export default Solutions;
