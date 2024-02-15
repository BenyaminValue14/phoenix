const ContactForm = () => {
  
  return (
    <form action='' className="contact-form">
      <input type="text" name='name' placeholder='Your Full Name' required />
      <input type="email" name='email' placeholder='Your Email' required />
      <textarea name='message' placeholder='Your Message' rows={7} required>
      </textarea>
      <button type='submit' className='button active'>Send Message</button>
    </form>
  );
};

export default ContactForm;