// import React from "react";
// import { Image } from "react-bootstrap";
// // import logo from "./Images/lgranLogo.png";
// import { useNavigate } from "react-router-dom";

// export default function Header() {
//   const navigate = useNavigate();
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <nav>
//       <ul>
//         <li> 

//            <a href="#Section1" onClick={() => scrollToSection("Section1")} className="link">
//             Care Connect
//           </a> 
//          </li>
//         <li>
//           <a href="#Section2" onClick={() => scrollToSection("Section2")} className="link">
//             {" "}
//             {/* About  */}
//           </a>
//         </li>
//         <li>
//           <a href="#Section3" onClick={() => scrollToSection("Section3")} className="link">
//             {" "}
//             {/* Doctors{" "} */}
//           </a>
//         </li>
//         <li>
//           <a href="#Section4" onClick={() => scrollToSection("Section4")} className="link">
//             {/* <Image src={logo} alt="" /> */}
//             {/* Care Connect */}
//           </a>
//         </li>
//         <li>
//           <a href="#Section5" onClick={() => scrollToSection("Section5")} className="link">
//             {" "}
//             Booking
//           </a>
//         </li>
//         <li>
//           <a href="#Section6" onClick={() => scrollToSection("Section6")} className="link">
//             Contact
//           </a>
//         </li>
//         <li>
//           <a onClick={() => navigate("/blog-list")} className="link">
//             Appoinments
//           </a>
//         </li>
//         <li>
//           <a onClick={() => navigate("/login")} className="link">
//             Login
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [hoveredLink, setHoveredLink] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkStyles = (isHovered) => ({
    color: "#0e604c",
    marginTop: "5px",
    fontSize: "18px",
    padding: isHovered ? "10px 30px" : "10px 20px",
    backgroundColor: isHovered ? "#d4edda" : "transparent",
    transition: "all 0.3s ease",
    cursor: "pointer",
    borderRadius: "5px",
  });

  return (
    <nav style={{ backgroundColor: "#f8f9fa" }} className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid pacifico-regular">
        <a style={{ color: "#000"}} className="navbar-brand" href="#">
          Care Connect
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end lato-regular" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header" style={{marginBottom:'20px'}}>
            <h6 className="offcanvas-title pacifico-regular" id="offcanvasNavbarLabel" style={{ textAlign: "center", marginLeft: "120px"}}>
              Care Connect
            </h6>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body d-flex flex-column align-items-center">
            <ul className="navbar-nav flex-grow-1 pe-3" style={{ marginTop: '20px' }}>
              {[
                { id: "Section2", text: "About" },
                { id: "Section3", text: "Doctors" },
                { id: "Section6", text: "Contact" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    style={linkStyles(hoveredLink === item.id)}
                    className="dropdown-item"
                    onMouseEnter={() => setHoveredLink(item.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
              <li>
                <a
                  style={linkStyles(hoveredLink === "Appointments")}
                  className="dropdown-item"
                  onMouseEnter={() => setHoveredLink("Appointments")}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={() => navigate("/blog-list")}
                >
                  Appointments
                </a>
              </li>
              <li>
                <a
                  style={linkStyles(hoveredLink === "Login")}
                  className="dropdown-item"
                  onMouseEnter={() => setHoveredLink("Login")}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={() => navigate("/login")}
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

















// import React from 'react';
// import { Image } from 'react-bootstrap';
// import logo from './Images/lgranLogo.png';
// import { NavLink } from 'react-router-dom'; // Import NavLink

// export default function Header() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink to="/Section1" className="link" activeClassName="activeLink">
//             ABOUT US
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Section2" className="link" activeClassName="activeLink">
//             MENU
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Section3" className="link" activeClassName="activeLink">
//             Gallery
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Section4" className="link" activeClassName="activeLink">
//             <Image src={logo} alt="" />
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Section5" className="link" activeClassName="activeLink">
//             BOOKING
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Section6" className="link" activeClassName="activeLink">
//             CONTACT
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Section7" className="link" activeClassName="activeLink">
//             BLOGS
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }
