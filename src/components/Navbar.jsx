import { NavLink } from "react-router-dom";
import logo from "../assets/cementlogo.png";   // ✅ recommended way

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light py-3">
      <div className="container">

        {/* Logo */}
        <NavLink className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Chettinad cement"
            style={{ height: "40px", objectFit: "contain" }}
          />
        </NavLink>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">

          <ul className="navbar-nav mx-auto gap-lg-4 text-center">

            {/* About Dropdown */}
            <li className="nav-item dropdown-container">
              <div className="nav-link d-flex align-items-center gap-1" style={{ cursor: 'pointer' }}>
                About
                <span className="dropdown-arrow">↗</span>
              </div>
              <ul className="dropdown-menu-custom">
                <li><NavLink className="dropdown-item-custom" to="/vision-mission">Vision & Mission</NavLink></li>
              </ul>
            </li>

            {/* Plants Dropdown */}
            <li className="nav-item dropdown-container">
              <div className="nav-link d-flex align-items-center gap-1" style={{ cursor: 'pointer' }}>
                Plants
                <span className="dropdown-arrow">↗</span>
              </div>
              <ul className="dropdown-menu-custom">
                <li><NavLink className="dropdown-item-custom" to="/plant/tamil-nadu">Tamil Nadu</NavLink></li>
                <li><NavLink className="dropdown-item-custom" to="/plant/andhra-pradesh">Andhra Pradesh</NavLink></li>
                <li><NavLink className="dropdown-item-custom" to="/plant/karnataka">Karnataka</NavLink></li>
                <li><NavLink className="dropdown-item-custom" to="/plant/maharashtra">Maharashtra</NavLink></li>
                <li><NavLink className="dropdown-item-custom" to="/plant/telangana">Telangana</NavLink></li>
              </ul>
            </li>

            {/* Products Dropdown */}
            <li className="nav-item dropdown-container">
              <div className="nav-link d-flex align-items-center gap-1" style={{ cursor: 'pointer' }}>
                Products
                <span className="dropdown-arrow">↗</span>
              </div>
              <ul className="dropdown-menu-custom">
                <li><NavLink className="dropdown-item-custom" to="/maxcrete-premium-ppc">MAXCRETE PREMIUM PPC</NavLink></li>
                <li><NavLink className="dropdown-item-custom" to="/super-grade-ppc">SUPER GRADE PPC</NavLink></li>
                <li><NavLink className="dropdown-item-custom" to="/hollow-block-cement">HOLLOW BLOCK CEMENT (HBC)</NavLink></li>
                <li><NavLink className="dropdown-item-custom" to="/composite-cement">COMPOSITE</NavLink></li>
                <li><NavLink className="dropdown-item-custom" to="/opc-53-grade">OPC 53 GRADE</NavLink></li>
                <li><NavLink className="dropdown-item-custom" to="/opc-43-grade">OPC 43 GRADE</NavLink></li>
                <li><NavLink className="dropdown-item-custom" to="/classic-slag-cement">CLASSIC SLAG CEMENT</NavLink></li>
              </ul>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown-container">
              <div className="nav-link d-flex align-items-center gap-1" style={{ cursor: 'pointer' }}>
                Services
                <span className="dropdown-arrow">↗</span>
              </div>
              <ul className="dropdown-menu-custom">
                <li><NavLink className="dropdown-item-custom" to="/tech-mobile-van">Tech Mobile Van</NavLink></li>
              </ul>
            </li>

            {/* Resources Dropdown */}
            <li className="nav-item dropdown-container">
              <div className="nav-link d-flex align-items-center gap-1" style={{ cursor: 'pointer' }}>
                Resources
                <span className="dropdown-arrow">↗</span>
              </div>
              <ul className="dropdown-menu-custom">
                <li><NavLink className="dropdown-item-custom" to="/resources">FAQ's</NavLink></li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
            </li>

          </ul>

          <NavLink to="/getintouch" className="btn btn-primary px-4 btn-get-in-touch" style={{ backgroundColor: '#0b1c61', borderColor: '#0b1c61' }}>
            GET IN TOUCH
          </NavLink>

        </div>
      </div>
    </nav>
  );
}
