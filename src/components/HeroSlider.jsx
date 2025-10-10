import { useState, useEffect } from 'react'
import '../styles/HeroSlider.css'
import photoslider1 from '../assets/images/slider1.jpg'
import photoslider2 from '../assets/images/slider2.jpg'
import photoslider3 from '../assets/images/slider3.jpg'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: photoslider1,
      title: "VIRTUE AND KNOWLEDGE",
      subtitle: "Empowering young women to lead and serve since 1883.",
      buttonText: 'Discover Our Heritage',
      buttonLink: '#about'
    },
    {
      image: photoslider2,
      title: 'A LEGACY OF MERCY',
      subtitle: 'A vibrant community committed to holistic development in Belize City.',
      buttonText: 'Explore Campus Life',
      buttonLink: '#gallery'
    },
    {
      image: photoslider3,
      title: 'THE PATH TO ACADEMIC EXCELLENCE',
      subtitle: 'Rigorous curriculum, dedicated staff, and a future of limitless potential.',
      buttonText: 'Enroll Now',
      buttonLink: '#contact'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero-section">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => scrollToSection(slide.buttonLink.replace('#', ''))}
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider