import React, { useState } from "react";
import NavbarLogo from "../assets/Navbar/NavbarLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setHasToggled(true);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbarLogo">
        <img src={NavbarLogo} alt="Cilkencave Logo"></img>
      </Link>
      <div className="navbarLinksContainer notMobile">
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
      <Link to="/contact" className="navbarContact notMobile">
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
      <div className="mobileNavbarButton mobile" onClick={toggleMobileNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          style={{
            display: isMobileNavOpen ? "none" : hasToggled ? "block" : "",
          }}
        >
          <path
            d="M8 8H24M8 16H24M8 24H24"
            stroke="#111111"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          style={{
            display: isMobileNavOpen ? "block" : hasToggled ? "none" : "none",
          }}
        >
          <path
            d="M1 1L13.75 13M1 13L13.75 1"
            stroke="#111111"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className={`mobileNavbar mobile ${
          isMobileNavOpen
            ? "activeMobileNavbar"
            : hasToggled
            ? "nonactiveMobileNavbar"
            : ""
        }`}
      >
        <div className="mobileNavbarTab">
          <Link
            to="/"
            className="mobileNavbarTabLink"
            onClick={toggleMobileNav}
          >
            <p>Home</p>
          </Link>
          <div className="mobileNavbarDropdownContainer">
            <Link className="mobileNavbarTabLink">
              <p>Services</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <mask
                  id="mask0_699_4725"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect
                    x="16"
                    width="16"
                    height="16"
                    transform="rotate(90 16 0)"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_699_4725)">
                  <path
                    d="M1.33342 10.6667L8.00008 4L14.6667 10.6667L13.4834 11.85L8.00008 6.36667L2.51675 11.85L1.33342 10.6667Z"
                    fill="#7B7B7B"
                  />
                </g>
              </svg>
            </Link>
            <div className="mobileNavbarDropdown">
              <Link to="/Semiconductor_Chip_Design" onClick={toggleMobileNav}>
                Semiconductor Chip Design
              </Link>
              <Link to="/Embedded_Solutions" onClick={toggleMobileNav}>
                Embedded Solutions
              </Link>
              <Link to="/System_Design" onClick={toggleMobileNav}>
                System Design
              </Link>
              <Link to="/Artificial_Intelligence" onClick={toggleMobileNav}>
                Artificial Intelligence
              </Link>
              <Link to="/Automotive_Solutions" onClick={toggleMobileNav}>
                Automotive Solutions
              </Link>
            </div>
          </div>
          <Link
            to="/about"
            className="mobileNavbarTabLink"
            onClick={toggleMobileNav}
          >
            <p>About Us</p>
          </Link>
          <Link
            to="/careers"
            className="mobileNavbarTabLink"
            onClick={toggleMobileNav}
          >
            <p>Careers</p>
          </Link>
        </div>
        <Link to="/contact" className="mobileContactButton" onClick={toggleMobileNav}>
          Contact Us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <mask
              id="mask0_699_4245"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <rect width="20" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_699_4245)">
              <path
                d="M7.01659 16.6666L5.83325 15.4833L11.3166 9.99998L5.83325 4.51665L7.01659 3.33331L13.6833 9.99998L7.01659 16.6666Z"
                fill="white"
              />
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
