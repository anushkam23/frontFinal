import React from "react";
import { Image } from "react-bootstrap";
// import logo from "./Images/lgranLogo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <ul>
        <li> 

           <a href="#Section1" onClick={() => scrollToSection("Section1")} className="link">
            Care Connect
          </a> 
         </li>
        <li>
          <a href="#Section2" onClick={() => scrollToSection("Section2")} className="link">
            {" "}
            {/* About  */}
          </a>
        </li>
        <li>
          <a href="#Section3" onClick={() => scrollToSection("Section3")} className="link">
            {" "}
            {/* Doctors{" "} */}
          </a>
        </li>
        <li>
          <a href="#Section4" onClick={() => scrollToSection("Section4")} className="link">
            {/* <Image src={logo} alt="" /> */}
            {/* Care Connect */}
          </a>
        </li>
        <li>
          <a href="#Section5" onClick={() => scrollToSection("Section5")} className="link">
            {" "}
            Booking
          </a>
        </li>
        <li>
          <a href="#Section6" onClick={() => scrollToSection("Section6")} className="link">
            Contact
          </a>
        </li>
        <li>
          <a onClick={() => navigate("/blog-list")} className="link">
            Appoinments
          </a>
        </li>
        <li>
          <a onClick={() => navigate("/login")} className="link">
            Login
          </a>
        </li>
      </ul>
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
