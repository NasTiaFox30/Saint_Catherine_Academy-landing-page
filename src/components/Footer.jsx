import '../styles/Footer.css'
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import logo from "/logo.jpg"

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div>
              <h5>King's College</h5>
              <p>Rooted in Belizean pride on the Old Northern Highway since 1967, <br />
                King's College is dedicated to cultivating well-rounded, ethical leaders. <br />
                Join our supportive community and achieve excellence.</p>
              <div className="social-links">
                <a href="https://www.facebook.com/SCAHighSchoolBelize"><i><FaFacebook /></i></a>
                <a href="https://www.instagram.com/explore/locations/941837997/saint-catherine-academy/"><i><FaInstagram /></i></a>
                <a href="https://www.youtube.com/@saintcatherineacademybelize"><i><FaYoutube /></i></a>
              </div>
            </div>

            <div className='logo-container'>
              <img className='logo-fotter' src={logo} alt="" />
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>King's College - Belize</p>
            <p id="info_firm">&copy; 2025 Stworzone przez GLP</p>
            {/* Creator: Anastasiia Bzova 2025 */}
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer