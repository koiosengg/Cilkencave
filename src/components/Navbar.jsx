import React from "react";
import NavbarLogo from "../assets/Navbar/NavbarLogo.svg";
import { Link } from "react-router-dom";

function Navbar() {

  

  return (
    <div className="navbar">
      <Link to="/" className="navbarLogo">
        <img src={NavbarLogo} alt="Cilkencave Logo"></img>
      </Link>
      <div className="navbarLinksContainer">
        <Link to="/" className="navbarLinks">
          Home
        </Link>
        <div className="navbarLinks">
          Services
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <mask
              id="mask0_399_311"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="17"
              height="16"
            >
              <rect
                x="0.481445"
                y="16"
                width="16"
                height="16"
                transform="rotate(-90 0.481445 16)"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_399_311)">
              <path
                d="M15.1483 5.33333L8.48161 12L1.81494 5.33333L2.99827 4.15L8.48161 9.63333L13.9649 4.15L15.1483 5.33333Z"
                fill="white"
              />
            </g>
          </svg>
          <div className="navbarDropdown">
            <Link to="/Semiconductor_Chip_Design">
              Semiconductor Chip Design
            </Link>
            <Link to="/Embedded_Solutions">Embedded Solutions</Link>
            <Link to="/System_Design">System Design</Link>
            <Link to="/Artificial_Intelligence">Artificial Intelligence</Link>
            <Link to="/Automotive_Solutions">Automotive Solutions</Link>
          </div>
        </div>
        <Link to="/about" className="navbarLinks">
          About Us
        </Link>
        <Link to="/careers" className="navbarLinks">
          Careers
        </Link>
      </div>
      <Link to="/contact" className="navbarContact">
        Contact Us
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <mask
            id="mask0_404_330"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="20"
          >
            <rect width="20" height="20" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_404_330)">
            <path
              d="M7.01683 16.6667L5.8335 15.4833L11.3168 9.99999L5.8335 4.51666L7.01683 3.33333L13.6835 9.99999L7.01683 16.6667Z"
              fill="white"
            />
          </g>
        </svg>
      </Link>
    </div>
  );
}

export default Navbar;
