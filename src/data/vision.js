import { asset } from "../utils/asset.js";

export const VISION_TECHNOLOGIES = {
  "one-vision": {
    id: "one-vision",
    label: "One Vision",
    title: "One Vision — изображение, которое появляется со светом",
    lead: "Без внутренней подсветки потолок выглядит однотонным. При включении подсветки проявляется скрытый рисунок.",
    hasDemo: true,
    offSrc: asset("/images/hidden-pattern-off.png"),
    onSrc: asset("/images/hidden-pattern-on.png"),
    width: 939,
    height: 1675,
  },
  "double-vision": {
    id: "double-vision",
    label: "Double Vision",
    title: "Double Vision — изображение с эффектом глубины",
    lead: "Рисунок наносится на обе стороны полотна. При включении подсветки изображения визуально дополняют друг друга, создавая эффект объёма и глубины.",
    hasDemo: false,
  },
};
