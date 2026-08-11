import React from "react";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiDatabase,
  FiCpu,
  FiCode,
} from "react-icons/fi";

import "../styles/hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-image float-animation">

      {/* Background Glow */}

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      {/* Background Grid */}

      <div className="hero-grid"></div>


      <div className="container">

        <div className="row align-items-center hero-row">

          {/* ================= LEFT CONTENT ================= */}

          <div className="col-lg-7">

            {/* Availability */}

            <div className="availability-badge">

              <span className="status-dot"></span>

              Available for opportunities

            </div>


            {/* Small Introduction */}

            <p className="hero-intro">
              Hi, I'm
            </p>


            {/* Name */}

            <h1 className="hero-name">

              KOWSIKA
              <span className="hero-name-accent"> J</span>

            </h1>


            {/* Professional Title */}

            <h2 className="hero-title">

              <span>Data Engineer</span>

              <span className="title-separator">
                {" | "}
              </span>

              <span>Data Analyst</span>

            </h2>


            <h3 className="hero-subtitle">

              AI/ML Enthusiast
              <span> • </span>
              Full Stack Developer

            </h3>


            {/* Description */}

            <p className="hero-description">

              Transforming data into intelligent insights and building
              innovative digital solutions that solve real-world problems
              using <strong>AI, Machine Learning, Data Engineering</strong>
              and modern web technologies.

            </p>


            {/* Role Tags */}

            <div className="hero-tags">

              <span>
                <FiDatabase />
                Data
              </span>

              <span>
                <FiCpu />
                AI / ML
              </span>

              <span>
                <FiCode />
                Development
              </span>

            </div>


            {/* Buttons */}

            <div className="hero-buttons">

              <a
                href="#projects"
                className="btn-primary-custom hero-main-btn"
              >
                Explore My Work
                <FiArrowRight />
              </a>


              <a
                href="/resume.pdf"
                className="btn-outline-custom hero-resume-btn"
                target="_blank"
                rel="noreferrer"
              >
                <FiDownload />
                Download Resume
              </a>

            </div>


            {/* Social Links */}

            <div className="hero-socials">

              <span className="social-label">
                Connect with me
              </span>


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

            </div>

          </div>


          {/* ================= RIGHT VISUAL ================= */}

          <div className="col-lg-5">

            <div className="hero-visual">

              {/* Main Circle */}

              <div className="ai-circle">

                <div className="ai-circle-inner">

                  <div className="ai-symbol">

                    <FiCpu />

                  </div>

                  <span>
                    AI
                  </span>

                  <small>
                    DATA • INTELLIGENCE
                  </small>

                </div>

              </div>


              {/* Floating Cards */}

              <div className="floating-card card-data">

                <FiDatabase />

                <div>
                  <strong>
                    Data
                  </strong>

                  <small>
                    Engineering
                  </small>
                </div>

              </div>


              <div className="floating-card card-ai">

                <FiCpu />

                <div>
                  <strong>
                    AI / ML
                  </strong>

                  <small>
                    Intelligence
                  </small>
                </div>

              </div>


              <div className="floating-card card-code">

                <FiCode />

                <div>
                  <strong>
                    Full Stack
                  </strong>

                  <small>
                    Development
                  </small>
                </div>

              </div>


              {/* Orbit */}

              <div className="orbit orbit-one"></div>

              <div className="orbit orbit-two"></div>


              {/* Orbit Dots */}

              <span className="orbit-dot dot-one"></span>
              <span className="orbit-dot dot-two"></span>
              <span className="orbit-dot dot-three"></span>

            </div>

          </div>

        </div>

      </div>


      {/* Scroll Indicator */}

      <div className="scroll-indicator">

        <span></span>

        <small>
          Scroll to explore
        </small>

      </div>

    </section>
  );
};

export default Hero;