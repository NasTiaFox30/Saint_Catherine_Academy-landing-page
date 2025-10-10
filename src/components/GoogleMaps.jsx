import '../styles/GoogleMaps.css'

const GoogleMaps = () => {
  return (
    <section id="map" className="map-section">
      <div className="container">
        <h2 className="section-title">Find Us</h2>
        <p className="section-subtitle">Visit our academy by your own!</p>
      </div>
      
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.223547746549!2d-88.18530091932836!3d17.496838983340062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5c586c9c36ed87%3A0xdc80edb5141943f9!2sSt.%20Catherine%20Academy!5e0!3m2!1suk!2spl!4v1760094879285!5m2!1suk!2spl"
          width="100%"
          height="500"
          style={{border: 0} }
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="School Location"
        ></iframe>
       </div>
    </section>
  )
}

export default GoogleMaps