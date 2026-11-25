import { asset } from "../utils/asset.js";

/** Cover first (content pick: P-track + warm lights + window), then remaining by number. */
const ORDER = ["002", "001", "003", "004", "005", "006"];

export const TRACKS_GALLERY = ORDER.map((id, index) => ({
  id,
  full: asset(`/images/tracks/tracks-${id}.jpeg`),
  thumb: asset(`/images/tracks/thumbs/tracks-${id}.jpeg`),
  alt: `Трековое освещение — пример работы ${index + 1}`,
}));

export const TRACKS_COVER = {
  src: asset("/images/tracks/cover/tracks-002.jpeg"),
  width: 960,
  height: 720,
};
