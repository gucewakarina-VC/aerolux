import { useEffect, useRef, useState } from "react";
import "./Process.css";

const STEPS = [
  {
    number: "01",
    title: "Обсуждение",
    text: "Выясняем пожелания, особенности помещения и задачи по освещению.",
  },
  {
    number: "02",
    title: "Замер и расчёт",
    text: "Уточняем размеры, подбираем решение и рассчитываем стоимость.",
  },
  {
    number: "03",
    title: "Подготовка",
    text: "Согласовываем детали, материалы и удобную дату монтажа.",
  },
  {
    number: "04",
    title: "Монтаж",
    text: "Устанавливаем потолок и освещение, проверяем результат.",
  },
];

function Process() {
  const listRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = listRef.current;
    if (!node) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="process" id="process" aria-labelledby="process-title">
      <div className="process__intro">
        <p className="process__eyebrow">Процесс работы</p>
        <h2 id="process-title" className="process__title">
          От идеи до готового потолка
        </h2>
        <p className="process__lead">Понятный процесс на каждом этапе.</p>
      </div>

      <ol
        ref={listRef}
        className={`process__steps${visible ? " process__steps--visible" : ""}`}
      >
        {STEPS.map((step, index) => (
          <li
            key={step.number}
            className="process__step"
            style={{ "--step-index": index }}
          >
            <span className="process__number" aria-hidden="true">
              {step.number}
            </span>
            <h3 className="process__step-title">{step.title}</h3>
            <p className="process__step-text">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Process;
