import '../styles/Contact.css'
import Information from './Contact/Information'
import ContactForm from './Contact/ContactForm'

const Contact = () => {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Contact us and you've replied today!</p>
        <div className="contact-content">
          <Information />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact