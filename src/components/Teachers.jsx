import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import '../styles/Teachers.css'

import teacher1 from "../assets/images/teacher1.jpg"
import teacher2 from "../assets/images/teacher2.jpg"
import teacher3 from "../assets/images/teacher3.jpg"

const Teachers = () => {
  const [isMobile, setIsMobile] = useState(false)

  const teachers = [
    {
      name: "Dr. Salome Tillett",
      subject: "Science",
      image: teacher1,
      bio: "MSc in Physics with research background in quantum mechanics. Passionate about experimental science."
    },
    {
      name: "Mrs. Arleen Riverol",
      subject: "Languages",
      image: teacher2,
      bio: "Native Spanish speaker with MA in Linguistics. Fluent in Spanish, English, and French."
    },
    {
      name: "Mrs. Aldarita Marin",
      subject: "History",
      image: teacher3,
      bio: "Doctorate in European History. Published author on medieval civilizations and cultural studies."
    }
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const swiperParams = {
    modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
    spaceBetween: 50,
    slidesPerView: isMobile ? 1 : 3,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: isMobile ? false : true,
    pagination: {
      clickable: true,
      dynamicBullets: true
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
      slideShadows: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  }

  return (
    <section id="teachers" className="teachers section">
      <div className="container">
        <h2 className="section-title">Meet Our Teachers</h2>
        <p className="section-subtitle">
          Our dedicated faculty members are experienced educators committed to
          student success and lifelong learning.
        </p>
        
        <div className="teachers-slider-container">
          <Swiper {...swiperParams} className="teachers-slider">
            {teachers.map((teacher, index) => (
              <SwiperSlide key={index}>
                <div className="teacher-card">
                  <div className="teacher-image">
                    <img src={teacher.image} alt={teacher.name} />
                    <div className="teacher-overlay">
                      <div className="teacher-bio">
                        <p>{teacher.bio}</p>
                      </div>
                    </div>
                  </div>
                  <div className="teacher-info">
                    <h3>{teacher.name}</h3>
                    <p className="teacher-subject">{teacher.subject}</p>
                    <div className="teacher-social">
                      <a href="#" aria-label="LinkedIn profile">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" aria-label="Send email">
                        <i className="fas fa-envelope"></i>
                      </a>
                      <a href="#" aria-label="View profile">
                        <i className="fas fa-user"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Teachers