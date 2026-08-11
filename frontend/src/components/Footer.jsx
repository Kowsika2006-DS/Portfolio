import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiHeart,
} from "react-icons/fi";

import "../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-top-line"></div>

      <div className="container">

        <div className="footer-main">

          {/* ================= BRAND ================= */}

          <div className="footer-brand">

            <a href="#home" className="footer-logo">
              K<span>.</span>
            </a>

            <div>

              <h3>
                Kowsika J
              </h3>

              <p>
                Data Engineer • AI/ML • Data Analyst
              </p>

            </div>

          </div>


          {/* ================= NAVIGATION ================= */}

          <div className="footer-navigation">

            <span>
              QUICK LINKS
            </span>

            <div className="footer-links">

              <a href="#about">
                About
              </a>

              <a href="#skills">
                Skills
              </a>

              <a href="#experience">
                Experience
              </a>

              <a href="#projects">
                Projects
              </a>

              <a href="#contact">
                Contact
              </a>

            </div>

          </div>


          {/* ================= SOCIAL ================= */}

          <div className="footer-social">

            <span>
              CONNECT
            </span>

            <div className="footer-social-links">

              <a
                href="https://github.com/Kowsika2006-DS"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/kowsikajayakumar/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>

              <a
                href="mailto:kowsikajayakumar2006@gmail.com"
                aria-label="Email"
              >
                <FiMail />
              </a>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM ================= */}

        <div className="footer-bottom">

          <p>
            © {currentYear} Kowsika J. All rights reserved.
          </p>

          <p className="footer-made">

            Designed & built with

            <FiHeart />

            by Kowsika

          </p>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >

            <FiArrowUp />

          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;