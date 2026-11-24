import { asset } from "../utils/asset.js";

/** Gallery order: cover first, then remaining by number. */
const ORDER = ["07", "01", "02", "03", "04", "05", "06", "08", "09"];

export const SHADOW_GALLERY = ORDER.map((id, index) => ({
  id,
  full: asset(`/images/shadow/shadow-${id}.jpeg`),
  thumb: asset(`/images/shadow/thumbs/shadow-${id}.jpeg`),
  alt: `Теневой потолок — пример работы ${index + 1}`,
}));

export const SHADOW_COVER = {
  src: asset("/images/shadow/cover/shadow-07.jpeg"),
  width: 960,
  height: 720,
};
