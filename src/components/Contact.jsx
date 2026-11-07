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
        <a className="btn btn--primary contact__cta" href="tel:+79772560473">
          Обсудить проект
        </a>
      </div>
    </section>
  );
}

export default Contact;
