import './Contactus.css';
import Foot from './Foot';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contacts = () => {
  const Openlink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="section4" id='section4'>
      <div className="contact-container">
        <h2>
          Where You Can Find Us?
          <hr />
        </h2>
        <div className="contact-info">
          <p>We are happy to hear from you!!!</p>
          <p>Please get in touch with GS Gisakura directly</p>
          <p>through the below options.</p>
        </div>

        <div className="contact-buttons">
          <button
            onClick={() => Openlink('https://www.instagram.com/inezayekamanzi')}
            className="contact-btn instagram"
          >
            <FaInstagram /> Instagram
          </button>

          <button
            onClick={() => Openlink('mailto:gsgisakura2018@gmail.com')}
            className="contact-btn email"
          >
            <MdEmail /> Email
          </button>

          <button
            onClick={() => Openlink('https://wa.me/250788420328')}
            className="contact-btn whatsapp"
          >
            <FaWhatsapp /> WhatsApp
          </button>

          <button
            onClick={() => Openlink('https://www.google.com/maps/place/GS+Gisakura,+Nyamasheke,+Rwanda')}
            className="contact-btn location"
          >
            <MdLocationOn /> Location
          </button>
        </div>
      </div>
      <Foot />
    </section>
  );
};

export default Contacts;