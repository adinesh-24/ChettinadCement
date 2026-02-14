import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>

      {/* TOP BLUE SECTION */}
      <div style={{ backgroundColor: "#162a7c" }} className="text-white pt-5 pb-4">

        <div className="container">
          <div className="row gy-4">

            {/* LEFT COLUMN */}
            <div className="col-lg-4">

              <img src="https://www.chettinadcement.com/wp-content/uploads/2024/07/Chettinad-footer-logo-2.png" alt="logo" style={{ height: "60px" }} />

              <p className="mt-3">
                Meyyammai Building, 16/33, Gandhi Nagar, 2nd Main Road,
                Adyar, Chennai, Tamil Nadu, India - 600020
              </p>

              <p>
                <i className="bi bi-geo-alt-fill text-success me-2"></i>
                Chennai, Tamil Nadu
              </p>

              <p>
                <i className="bi bi-telephone-fill text-success me-2"></i>
                +91 96599 11155
              </p>

              <p>
                <i className="bi bi-envelope text-success me-2"></i>
                info@chettinadcement.com
              </p>

            </div>

            {/* PRODUCTS */}
            <div className="col-lg-3">
              <h5 className="text-success mb-3">Products</h5>

              <ul className="list-unstyled">
                <li><Link to="/maxcrete-premium-ppc" className="text-white text-decoration-none">MAXCRETE PREMIUM PPC</Link></li>
                <li><Link to="/super-grade-ppc" className="text-white text-decoration-none">SUPER GRADE PPC</Link></li>
                <li><Link to="/hollow-block-cement" className="text-white text-decoration-none">HOLLOW BLOCK CEMENT</Link></li>
                <li><Link to="/composite-cement" className="text-white text-decoration-none">COMPOSITE</Link></li>
                <li><Link to="/opc-53-grade" className="text-white text-decoration-none">OPC 53 GRADE</Link></li>
                <li><Link to="/opc-43-grade" className="text-white text-decoration-none">OPC 43 GRADE</Link></li>
                <li><Link to="/classic-slag-cement" className="text-white text-decoration-none">CLASSIC SLAG CEMENT</Link></li>
              </ul>
            </div>

            {/* MANUFACTURING PLANTS */}
            <div className="col-lg-3">
              <h5 className="text-success mb-3">Manufacturing Plants</h5>

              <ul className="list-unstyled">
                <li><Link to="/plant/tamil-nadu" className="text-white text-decoration-none">Tamil Nadu</Link></li>
                <li><Link to="/plant/andhra-pradesh" className="text-white text-decoration-none">Andhra Pradesh</Link></li>
                <li><Link to="/plant/karnataka" className="text-white text-decoration-none">Karnataka</Link></li>
                <li><Link to="/plant/maharashtra" className="text-white text-decoration-none">Maharashtra</Link></li>
                <li><Link to="/plant/telangana" className="text-white text-decoration-none">Telangana</Link></li>
              </ul>
            </div>

            {/* IMPORTANT LINKS */}
            <div className="col-lg-2">
              <h5 className="text-success mb-3">Important Links</h5>

              <ul className="list-unstyled">
                <li>Environment</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Cookies</li>
                <li>Caution Note</li>
                <li><Link to="/getintouch" className="text-white text-decoration-none">Contact Us</Link></li>
              </ul>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM GREEN SECTION */}
      <div style={{ backgroundColor: "#63b545" }} className="text-center text-white py-4">

        {/* Social Icons */}
        <div className="mb-3">

          <i className="bi bi-facebook mx-2 fs-4"></i>
          <i className="bi bi-instagram mx-2 fs-4"></i>
          <i className="bi bi-twitter-x mx-2 fs-4"></i>
          <i className="bi bi-youtube mx-2 fs-4"></i>

        </div>

        <p className="mb-0">
          © 2026 Chettinad Cement Corporation Private Limited,
          a Chettinad Group Company. All rights reserved.
        </p>

      </div>

    </footer>
  );
}
