import { useState } from 'react'
import '../styles/Gallary.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = import.meta.glob('../assets/images/photos/**.{jpg,jpeg,png}', { eager: true });

  const galleryItems = Object.values(images).map((image, index) => ({
    src: image.default,
    caption: getCaptionByIndex(index)
  }));

  function getCaptionByIndex(index) {
    const captions = {
      0: 'Example text',
      1: 'Example text',
      2: 'Example text',
    };
    return captions[index] || '';
  }

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
              <img src={item.src} alt={item.caption || `Gallery image ${index + 1}`} />
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
            {selectedImage.caption && <p>{selectedImage.caption}</p>}
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery