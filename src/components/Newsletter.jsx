import { useState } from 'react'
import '../styles/Newsletter.css'

const Newsletter = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setIsNewsletterSubmitting(true)
    
    setTimeout(() => {
      alert('Thank you for subscribing to our newsletter!')
      setNewsletterEmail('')
      setIsNewsletterSubmitting(false)
    }, 1000)
  }

  return (
    <section id="newsletter" className="newsletter-section section">
      <div className="newsletter-section">
        <div className="container">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest news, events, and special offers</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input 
              type="email" 
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email address" 
              required 
            />
            <button type="submit" disabled={isNewsletterSubmitting}>
              {isNewsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter