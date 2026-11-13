import {
  hasMaxLink,
  hasTelegramBlog,
  MAX_URL,
  PHONE,
  TELEGRAM_BLOG_URL,
} from "../data/contacts.js";
import { asset } from "../utils/asset.js";
import TelegramIcon from "./TelegramIcon.jsx";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contacts" aria-labelledby="contact-title">
      <div className="contact__layout">
        <div className="contact__copy">
          <p className="contact__eyebrow">Ваш проект</p>
          <h2 id="contact-title" className="contact__title">
            Давайте обсудим ваш будущий потолок
          </h2>
          <p className="contact__lead">
            Расскажите о вашем помещении и пожеланиях. Поможем подобрать решение
            для потолка и освещения.
          </p>

          <div className="contact__actions">
            <a className="btn btn--primary contact__cta" href={PHONE.href}>
              Обсудить проект
            </a>
            {hasMaxLink ? (
              <a
                className="btn btn--ghost contact__max"
                href={MAX_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Написать в MAX
              </a>
            ) : null}
          </div>

          {hasTelegramBlog ? (
            <a
              className="contact__telegram"
              href={TELEGRAM_BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon className="contact__telegram-icon" />
              <span>Наш блог в Telegram</span>
            </a>
          ) : null}
        </div>

        <div className="contact__media">
          <img
            className="contact__photo"
            src={asset("/images/contact-ceiling.png")}
            alt="Натяжной потолок AeroLux со светильниками"
            width={1024}
            height={768}
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
