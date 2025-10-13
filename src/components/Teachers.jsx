import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import '../styles/Teachers.css'

const Teachers = () => {
  const [isMobile, setIsMobile] = useState(false)

  const teachers = [
    {
      name: "Mr. David Chen",
      subject: "Science",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "MSc in Physics with research background in quantum mechanics. Passionate about experimental science."
    },
    {
      name: "Ms. Maria Rodriguez",
      subject: "Languages",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Native Spanish speaker with MA in Linguistics. Fluent in Spanish, English, and French."
    },
    {
      name: "Dr. James Wilson",
      subject: "History",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Doctorate in European History. Published author on medieval civilizations and cultural studies."
    },
    {
      name: "Prof. Anna Kowalski",
      subject: "Computer Science",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      bio: "Former software engineer turned educator. Specializes in programming and AI fundamentals."
    },
    {
      name: "Mr. Robert Kim",
      subject: "Arts & Music",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Professional musician and composer. Teaches music theory, composition, and instrumental skills."
    },
    {
      name: "Dr. Lisa Wang",
      subject: "Biology",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=300&h=300&fit=crop&crop=face",
      bio: "PhD in Molecular Biology. Research experience in genetics and biotechnology applications."
    },
    {
      name: "Mr. Thomas Brown",
      subject: "Physical Education",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
      bio: "Former professional athlete. Certified in sports medicine and physical education."
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
    spaceBetween: 30,
    slidesPerView: isMobile ? 1 : 3,
    centeredSlides: true,
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