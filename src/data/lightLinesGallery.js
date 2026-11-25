import { asset } from "../utils/asset.js";

/** Cover first (content pick: corridor with straight white light lines), then remaining by number. */
const ORDER = [
  "003",
  "001",
  "002",
  "004",
  "005",
  "006",
  "007",
  "008",
  "009",
  "010",
];

export const LIGHT_LINES_GALLERY = ORDER.map((id, index) => ({
  id,
  full: asset(`/images/light-lines/light-lines-${id}.jpeg`),
  thumb: asset(`/images/light-lines/thumbs/light-lines-${id}.jpeg`),
  alt: `Световые линии — пример работы ${index + 1}`,
}));

export const LIGHT_LINES_COVER = {
  src: asset("/images/light-lines/cover/light-lines-003.jpeg"),
  width: 960,
  height: 720,
};
