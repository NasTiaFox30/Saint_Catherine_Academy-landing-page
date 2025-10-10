import '../styles/About.css'

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <iframe width="560" height="400" src="https://www.youtube.com/embed/549GzvKwPWw?si=GGtg1IA3Q1tGLfaX&amp;controls=0" title="Saint Catherine Academy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="about-text">
            <h2>About Academy</h2>
            <p>Welcome to St. Catherine Academy, a premier all-girls institution rooted in the Mercy tradition and dedicated to holistic education. Located on Hutson Street in the heart of Belize City, our historic campus provides a nurturing and challenging environment where young women are inspired to lead, serve, and excel.</p>
            <p>SCA fosters intellectual curiosity, spiritual depth, and social responsibility, preparing students not just for higher education, but for meaningful lives as ethical leaders in their communities and the world.</p>

            <h3>Our Heritage and Mission</h3>
            <p>Founded in 1883 by the Sisters of Mercy, St. Catherine Academy holds a rich, enduring legacy as one of Belize's oldest and most respected educational institutions. Our mission is built upon the core values of the Sisters of Mercy, focusing on <strong>Compassion, Integrity, Excellence,</strong> and <strong>Service.</strong></p>
            <p>Guided by the motto, "Virtue and Knowledge," we provide a rigorous academic program alongside a strong emphasis on character development and faith formation. We are committed to empowering every young woman to unlock her full potential and become a catalyst for positive change.</p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About