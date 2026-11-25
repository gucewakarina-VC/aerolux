import { asset } from "../utils/asset.js";

/** Cover first (kitchen-living with grey sofa + brown curtains), then remaining by number. */
const ORDER = [
  "001",
  "002",
  "003",
  "004",
  "005",
  "006",
  "007",
  "008",
  "009",
  "010",
  "011",
  "012",
  "013",
];

export const NISHI_GALLERY = ORDER.map((id, index) => ({
  id,
  full: asset(`/images/nishi/nishi-${id}.jpeg`),
  thumb: asset(`/images/nishi/thumbs/nishi-${id}.jpeg`),
  alt: `Скрытая ниша для штор — пример работы ${index + 1}`,
}));

export const NISHI_COVER = {
  src: asset("/images/nishi/cover/nishi-001.jpeg"),
  width: 960,
  height: 720,
};
