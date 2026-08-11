import React, { useState } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";

import "../styles/navbar.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" }
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="portfolio-navbar">

      <div className="container">

        <div className="navbar-wrapper">

          {/* Logo */}

          <a href="#home" className="navbar-logo">

            <span className="logo-bracket">
              {"<"}
            </span>

            Kowsika

            <span className="logo-bracket">
              {"/>"}
            </span>

          </a>


          {/* Desktop Navigation */}

          <div className="desktop-nav">

            {navItems.map((item) => (

              <a
                key={item.name}
                href={item.link}
                className="nav-link-custom"
              >
                {item.name}
              </a>

            ))}

          </div>


          {/* Resume */}

          <a
            href="/resume.pdf"
            className="resume-btn"
            target="_blank"
            rel="noreferrer"
          >
            <FiDownload />
            Resume
          </a>


          {/* Mobile Button */}

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>


        {/* Mobile Navigation */}

        {menuOpen && (

          <div className="mobile-nav">

            {navItems.map((item) => (

              <a
                key={item.name}
                href={item.link}
                className="mobile-nav-link"
                onClick={handleNavClick}
              >
                {item.name}
              </a>

            ))}

            <a
              href="/resume.pdf"
              className="resume-btn mobile-resume"
              target="_blank"
              rel="noreferrer"
            >
              <FiDownload />
              Download Resume
            </a>

          </div>

        )}

      </div>

    </nav>
  );
};

export default Navbar;