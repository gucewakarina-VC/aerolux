import { asset } from "../utils/asset.js";

/** Gallery order: cover first, then remaining by number. */
const ORDER = ["07", "01", "02", "03", "04", "05", "06", "08", "09"];

export const FLOATING_GALLERY = ORDER.map((id, index) => ({
  id,
  full: asset(`/images/floating/floating-${id}.jpeg`),
  thumb: asset(`/images/floating/thumbs/floating-${id}.jpeg`),
  alt: `Парящий потолок — пример работы ${index + 1}`,
}));

export const FLOATING_COVER = {
  src: asset("/images/floating/cover/floating-07.jpeg"),
  width: 960,
  height: 720,
};
