import React from 'react';
import HeadSection from './HeadSection';
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt, FaUser, FaPen } from 'react-icons/fa';

const GetInTouch = () => {
  return (
    <>
      <HeadSection
        title="Get In Touch"
        breadcrumbDetails="CONTACT"
        backgroundImage="https://www.chettinadcement.com/wp-content/uploads/2024/08/contact-us.jpg"
      />


      <div className="container mb-5 animate-fade-in-up">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#000' }}>Looking for more information on our Cement?</h2>
        </div>

        <div className="row g-4 mb-5 justify-content-center">
          <div className="col-md-4">
            <div className="card h-100 border p-4 text-center shadow-sm">
              <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '60px', height: '60px' }}>
                <FaPhoneAlt size={24} style={{ color: '#0A1F79' }} />
              </div>
              <h5 className="fw-bold text-success mb-3">Contact</h5>
              <p className="mb-1 text-muted">044 4214 9955</p>
              <p className="mb-1 text-muted">044 2829 2727</p>
              <p className="mb-0 text-muted">+91 96599 11155</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border p-4 text-center shadow-sm">
              <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '60px', height: '60px' }}>
                <FaEnvelope size={24} style={{ color: '#0A1F79' }} />
              </div>
              <h5 className="fw-bold text-success mb-3">Email</h5>
              <p className="mb-0 text-muted">info@chettinadcement.com</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border p-4 text-center shadow-sm">
              <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '60px', height: '60px' }}>
                <FaCalendarAlt size={24} style={{ color: '#0A1F79' }} />
              </div>
              <h5 className="fw-bold text-success mb-3">Visit Between</h5>
              <p className="mb-1 text-muted">Mon - Fri: 9:30 AM - 5:30 PM</p>
              <p className="mb-1 text-muted">Sat: 9:30 AM - 4:00 PM</p>
              <p className="mb-0 text-muted">2nd & 4th Saturday: Holiday</p>
            </div>
          </div>
        </div>
        <h6 className="text-uppercase fw-bold text-center" style={{ fontSize: '0.8rem', letterSpacing: '2px' }}>CONTACT US TODAY!</h6>

        <div className="text-center mb-5 mt-5">
          <h6 className="text-uppercase fw-bold text-muted" style={{ fontSize: '0.8rem', letterSpacing: '2px' }}>OFFICE LOCATIONS</h6>
          <h2 className="fw-bold" style={{ color: '#000' }}>Find us everywhere!</h2>
        </div>

        <div className="row g-4 mb-5">
          {[
            { type: "Corporate Office", address: "Meyyammai Building, 16/33, Gandhi Nagar, 2nd Main Road, Adyar, Chennai, Tamil Nadu - 600 020", contact: "" },
            { type: "Registered Office", address: "Rani Seethai Hall, #603, Anna Salai, Chennai, Tamil Nadu - 600 006", contact: "" },
            { type: "Marketing Office - Coimbatore", address: "#43, Race Course Road, Rani Meyyammai Building, Coimbatore, Tamil Nadu - 641 018", contact: "+91 96599 11155" },
            { type: "Marketing Office - Madurai", address: "Rajah Muthiah Mandram, Melur Road, Madurai, Tamil Nadu - 625 020", contact: "+91 96599 11155" },
            { type: "Marketing Office - Bangalore", address: "2nd Floor, Aditya Tower, V S N Road, Opp. to Ramada Hotel, Shivaji Nagar, Bangalore, Karnataka - 560 051", contact: "+91 98442 34007" },
            { type: "Marketing Office - Mysore", address: "# 16, HT Lane, Bannimantap, A-Layout, Industrial Area, Mysore, Karnataka - 570 015", contact: "+91 98442 34007" },
            { type: "Marketing Office - Kochi", address: "XL/245, Layam Road, Kochi, Kerala - 682 011, Ernakulam", contact: "+91 94470 80487" },
            { type: "Marketing Office - Calicut", address: "#19/128, F4, R.K.Complex, Tali East, Chalappuram (P.O), Calicut, Kerala - 673 002", contact: "+91 94977 13767" },
            { type: "Marketing Office - Hyderabad", address: "D,E2 - Quena Square, 4th Floor, Erramanzil, Somajiguda, Hyderabad, Telangana - 500 082", contact: "+91 93840 34873" }
          ].map((office, idx) => (
            <div key={idx} className="col-md-4">
              <div className="card h-100 border p-4 text-center shadow-sm">
                <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '50px', height: '50px' }}>
                  <FaMapMarkerAlt size={20} style={{ color: '#0A1F79' }} />
                </div>
                <h6 className="fw-bold" style={{ color: '#0A1F79' }}>{office.type}</h6>
                <p className="mb-2 small text-muted px-2">{office.address}</p>
                {office.contact && <p className="mb-0 small text-muted">Contact: {office.contact}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-5 mt-5">
          <h6 className="text-uppercase fw-bold text-muted" style={{ fontSize: '0.8rem', letterSpacing: '2px' }}>GET IN TOUCH WITH US</h6>
          <h2 className="fw-bold" style={{ color: '#000' }}>Your Queries, Our Solutions - Contact us</h2>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <form className="p-4 bg-light rounded shadow-sm">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0"><FaUser className="text-secondary" /></span>
                    <input type="text" className="form-control border-start-0" placeholder="Enter your Full Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0"><FaEnvelope className="text-secondary" /></span>
                    <input type="email" className="form-control border-start-0" placeholder="Enter your Email Id" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0"><FaPhoneAlt className="text-secondary" /></span>
                    <input type="tel" className="form-control border-start-0" placeholder="Enter your Mobile Number" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0"><FaUser className="text-secondary" /></span>
                    <select className="form-select border-start-0 text-secondary">
                      <option defaultValue>Enquiry Type</option>
                      <option value="1">Sales</option>
                      <option value="2">Support</option>
                      <option value="3">General</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0 align-items-start pt-2"><FaPen className="text-secondary" /></span>
                    <textarea className="form-control border-start-0" rows="4" placeholder="Write Your Message..."></textarea>
                  </div>
                </div>
                <div className="col-12 text-center mt-4">
                  <button type="submit" className="btn btn-contact-submit px-5 py-2 fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
                    Send A Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
      <div className="container-fluid px-0 mb-5 animate-fade-in-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.4518447039254!2d80.254711!3d13.006873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267007d4429a7%3A0x2763d44a21c07e4c!2sChettinad%20Cement%20Head%20Office%20(Meiyammai%20Building)%20-%20Adyar!5e0!3m2!1sen!2sin!4v1771048922218!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Chettinad Cement Head Office Map"
        ></iframe>
      </div>
    </>
  );
};
export default GetInTouch;