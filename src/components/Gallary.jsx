import { useState } from 'react'
import '../styles/Gallary.css'
import photo1 from '../assets/images/example1.jpg'
import photo2 from '../assets/images/example2.jpg'
import photo3 from '../assets/images/example3.jpg'
import photo4 from '../assets/images/example4.jpg'
import photo5 from '../assets/images/example5.jpg'
import photo6 from '../assets/images/example6.jpg'
import photo7 from '../assets/images/example7.jpg'
import photo8 from '../assets/images/example8.jpg'
import photo9 from '../assets/images/example9.jpg'
import photo10 from '../assets/images/example10.jpg'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    { src: photo1, caption: '' },
    { src: photo2, caption: '' },
    { src: photo3, caption: '' },
    { src: photo4, caption: '' },
    { src: photo5, caption: '' },
    { src: photo6, caption: 'Shildren day 2023' },
    { src: photo7, caption: '' },
    { src: photo8, caption: '' },
    { src: photo9, caption: '' },
    { src: photo10, caption: '' },
  ]

  return (
    <section id="gallery" className="gallery-section section">
      <div className="container">
        <h2 className="section-title">College Gallery</h2>
        <p className="section-subtitle">Take a look at our events and vibrant learning environment</p>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => setSelectedImage(item)}
            >
              <img src={item.src} alt={item.caption} />
              <div className="gallery-overlay">
                <i className="fas fa-expand"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
            <img src={selectedImage.src} alt={selectedImage.caption} />
            <p>{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery