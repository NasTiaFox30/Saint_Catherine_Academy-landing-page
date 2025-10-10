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
                31.5 miles Old Northern Highway. P. O.Box 290, Belize City
            </div>
        </div>
        <div className="contact-item">
            <i><FaPhoneAlt /></i>
            <div>
            <strong>Phone:</strong><br />
                Main: +5016243183<br/>
                Addition: +232-7501 622-8181<br />
            </div>
        </div>
        <div className="contact-item">
            <i><FaMailBulk /></i>
            <div>
            <strong>Email:</strong><br />
                kingscollegebz@gmail.com
            </div>
        </div>
        <div className="contact-item">
            <i><FaBusinessTime /></i>
            <div>
            <strong>Busssines Hours:</strong><br />
                Mon-Fri: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 3:00 PM
            </div>
        </div>
    </div>
  )
}

export default Information