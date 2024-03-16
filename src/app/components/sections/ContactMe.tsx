import ContactForm from "../form/ContactForm";
import EmailIcon from "../svg/EmailIcon";
import GitHubIcon from "../svg/GithubIcon";
import LinkedinIcon from "../svg/LinkedinIcon";
//import WhatsappIcon from "../svg/WhatsappIcon";

const ContactMe = () => {
  
  return (
    <div className="contact">
    <h1 className="subtitle">Contactame</h1>
    <div className="contact-container">
      <div className="contact-options">
        <article className="contact-card">
          <EmailIcon/>
          <h4>Email</h4>
          <h5>benyaroot@gmail.com</h5>
          <a href="benyaroot@gmail.com" className="text-orangeNormal hover:text-orangeLight">Send a message</a>
        </article>
        <article className="contact-card">
          <LinkedinIcon/>
          <h4>LinkedIn</h4>
          <h5>b-ponce-chanca</h5>
          <a href="https://www.linkedin.com/in/b-ponce-chanca/" rel="noreferrer" target="_blank" className="text-orangeNormal hover:text-orangeLight">Connect with me</a>
        </article>
        <article className="contact-card">
          <GitHubIcon/>
          <h4>Github</h4>
          <h5>BenyaOps</h5>
          <a href="https://github.com/BenyaOps" rel="noreferrer" target="_blank" className="text-orangeNormal hover:text-orangeLight">View Github Profile</a>
        </article>
      </div>
      <ContactForm  />
    </div>
  </div>
  )
};

export default ContactMe;
