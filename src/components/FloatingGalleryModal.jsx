import { FLOATING_GALLERY } from "../data/floatingGallery.js";
import ServiceGalleryModal from "./ServiceGalleryModal.jsx";

function FloatingGalleryModal({ open, onClose, returnFocusRef }) {
  return (
    <ServiceGalleryModal
      open={open}
      onClose={onClose}
      returnFocusRef={returnFocusRef}
      title="Парящие потолки"
      lead="Подсветка по периметру создаёт эффект парящего потолка. Посмотрите примеры наших работ"
      items={FLOATING_GALLERY}
    />
  );
}

export default FloatingGalleryModal;
