import '../styles/About.css'

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <iframe width="560" height="400" src="https://www.youtube.com/embed/549GzvKwPWw?si=GGtg1IA3Q1tGLfaX&amp;controls=0" title="Saint Catherine Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="about-text">
            <h2>About King's College</h2>
              <p>Welcome to King's College, a distinguished educational institution dedicated to fostering academic excellence and developing strong character in its students. Located on the serene Old Northern Highway in Belize, our beautiful, tree-lined campus provides an ideal environment for learning and growth.</p>
            <h3>Our History</h3>
              <p>Established in 1967, King's College has proudly served the Belizean community for over five decades. Our foundation is built on a commitment to nurturing young men and women into ethical, knowledgeable, and globally aware citizens.</p>
              <p>Our motto, "Future Leaders for the World," is the driving force behind everything we do. We strive to provide a balanced education that challenges the mind, encourages creativity, and instills the values necessary for leadership in the modern world.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About