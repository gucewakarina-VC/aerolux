import { asset } from "../utils/asset.js";

/** Gallery order: cover first, then the specified sequence. */
const ORDER = ["07", "06", "01", "03", "04", "02", "05", "08"];

export const TENEVYE_GALLERY = ORDER.map((id, index) => ({
  id,
  full: asset(`/images/tenevye/tenevye-${id}.jpeg`),
  thumb: asset(`/images/tenevye/thumbs/tenevye-${id}.jpeg`),
  alt: `Теневой потолок — пример работы ${index + 1}`,
}));

export const TENEVYE_COVER = {
  src: asset("/images/tenevye/cover/tenevye-07.jpeg"),
  width: 960,
  height: 720,
};
