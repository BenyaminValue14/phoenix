import ContactForm from "../form/ContactForm";
import EmailIcon from "../svg/EmailIcon";
import LinkedinIcon from "../svg/LinkedinIcon";
import WhatsappIcon from "../svg/WhatsappIcon";

const ContactMe = () => {
  return (
    <div className="contact">
    <h1 className="subtitle">Contactame</h1>
    <div className="contact-container">
      <div className="contact-options">
        <article className="contact-card">
          <EmailIcon/>
          <h4>Email</h4>
          <h5>b.ponce.chanca.21@gmail.com</h5>
          <a href="b.ponce.chanca.21@gmail.com" className="text-orangeNormal hover:text-orangeLight">Send a message</a>
        </article>
        <article className="contact-card">
          <LinkedinIcon/>
          <h4>LinkedIn</h4>
          <h5>b-ponce-chanca</h5>
          <a href="https://www.linkedin.com/in/b-ponce-chanca/" className="text-orangeNormal hover:text-orangeLight">Send a message</a>
        </article>
        <article className="contact-card">
          <WhatsappIcon/>
          <h4>Whatsapp</h4>
          <h5>+51 906383659</h5>
          <a href="https://api.whatsapp.com/send?phone+51906383659" rel="noreferrer" target="_blank" className="text-orangeNormal hover:text-orangeLight">Send a message</a>
        </article>
      </div>
      <ContactForm/>
    </div>
  </div>
  )
};

export default ContactMe;
