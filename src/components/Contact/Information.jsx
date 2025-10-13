import '../../styles/Information.css'
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk, FaBusinessTime  } from "react-icons/fa";

const Information = () => {
  return (        
    <div className="contact-info">
        <h4>Contact Information</h4>
        <div className="contact-item">
            <i><FaMapMarkerAlt /></i>
            <div>
            <strong>Address:</strong><br />
                6 Hutson Street, Belize City
            </div>
        </div>
        <div className="contact-item">
            <i><FaPhoneAlt /></i>
            <div>
            <strong>Phone:</strong><br />
                Main:  +501-223-4908 | +501-223-1758<br />
                Convent: +501-227-7477<br />
            </div>
        </div>
        <div className="contact-item">
            <i><FaMailBulk /></i>
            <div>
            <strong>Email:</strong><br />
                stillett@sca.edu.bz
            </div>
        </div>
        <div className="contact-item">
            <i><FaBusinessTime /></i>
            <div>
            <strong>Busssines Hours:</strong><br />
                Mon-Fri: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 3:00 PM <br />
                  ...
            </div>
        </div>
    </div>
  )
}

export default Information