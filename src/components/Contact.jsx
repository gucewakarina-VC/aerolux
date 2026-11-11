import { hasTelegramBlog, PHONE, TELEGRAM_BLOG_URL } from "../data/contacts.js";
import TelegramIcon from "./TelegramIcon.jsx";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contacts" aria-labelledby="contact-title">
      <div className="contact__inner">
        <p className="contact__eyebrow">Ваш проект</p>
        <h2 id="contact-title" className="contact__title">
          Давайте обсудим ваш будущий потолок
        </h2>
        <p className="contact__lead">
          Расскажите о вашем помещении и пожеланиях. Поможем подобрать решение
          для потолка и освещения.
        </p>
        <a className="btn btn--primary contact__cta" href={PHONE.href}>
          Обсудить проект
        </a>
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
    </section>
  );
}

export default Contact;
