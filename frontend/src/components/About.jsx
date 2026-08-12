import React from "react";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCode,
  FiDatabase,
  FiAward,
  FiTarget,
} from "react-icons/fi";

import "../styles/about.css";

const About = () => {
  const highlights = [
    {
      icon: <FiBriefcase />,
      number: "COO",
      label: "Zenvy Technologies",
    },
    {
      icon: <FiAward />,
      number: "8.819",
      label: "Current CGPA",
    },
    {
      icon: <FiCode />,
      number: "3+",
      label: "Internship Experiences",
    },
    {
      icon: <FiTarget />,
      number: "AI + Data",
      label: "Core Focus",
    },
  ];

  return (
    <section id="about" className="about-section">

      <div className="about-bg-glow"></div>

      <div className="container">

        {/* Section Heading */}

        <div className="section-heading-wrapper">

          <span className="section-label">
            01 — ABOUT ME
          </span>

          <h2 className="section-title">
            Turning <span className="gradient-text">Data</span>
            {" "}into{" "}
            <span className="gradient-text">
              Intelligence
            </span>
          </h2>

          <p className="section-description">
            A data-driven developer passionate about building
            meaningful technology for real-world problems.
          </p>

        </div>


        <div className="row align-items-center about-content">

          {/* ================= LEFT ================= */}

          <div className="col-lg-5">

            <div className="about-profile-card glass-card">

              <div className="profile-orbit">

                <div className="profile-initial">
                  K
                </div>

              </div>

              <div className="profile-info">

                <h3>
                  Kowsika J
                </h3>

                <p>
                  Data Science Student
                </p>

                <span>
                  Annamalai University
                </span>

              </div>

              <div className="profile-status">

                <span></span>

                Open to learning,
                collaboration & opportunities

              </div>

            </div>

          </div>


          {/* ================= RIGHT ================= */}

          <div className="col-lg-7">

            <div className="about-text">

              <p className="about-intro">

                I'm{" "}
                <strong>
                  Kowsika J
                </strong>
                , a pre-final year B.E. Data Science student at
                Annamalai University with a strong interest in
                Artificial Intelligence, Machine Learning,
                Data Analytics and modern software development.

              </p>


              <p>

                Currently serving as the{" "}
                <strong className="highlight-text">
                  Chief Operating Officer at Zenvy Technologies
                </strong>
                , I work at the intersection of technology,
                innovation and problem solving. My goal is to
                transform ideas into practical solutions that
                create measurable real-world impact.

              </p>


              <p>

                I enjoy working with data — from collecting and
                processing information to discovering patterns,
                developing machine learning models and turning
                insights into useful applications. Alongside
                data and AI, I build responsive web applications
                using modern frontend and backend technologies.

              </p>


              <p>

                With a current{" "}
                <strong className="cgpa-highlight">
                  CGPA of 8.9
                </strong>
                , I continuously explore new technologies and
                challenge myself to build innovative solutions
                rather than simply learning concepts.

              </p>


              {/* Focus Areas */}

              <div className="focus-area">

                <h4>
                  What I Focus On
                </h4>

                <div className="focus-list">

                  <span>
                    <FiDatabase />
                    Data Engineering
                  </span>

                  <span>
                    <FiTarget />
                    AI & Machine Learning
                  </span>

                  <span>
                    <FiCode />
                    Full Stack Development
                  </span>

                </div>

              </div>


              {/* CTA */}

              <a
                href="#contact"
                className="about-link"
              >
                Let's build something meaningful

                <FiArrowUpRight />

              </a>

            </div>

          </div>

        </div>


        {/* ================= HIGHLIGHTS ================= */}

        <div className="about-highlights">

          {highlights.map((item, index) => (

            <div
              className="highlight-card glass-card"
              key={index}
            >

              <div className="highlight-icon">
                {item.icon}
              </div>

              <div>

                <h3>
                  {item.number}
                </h3>

                <p>
                  {item.label}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default About;
