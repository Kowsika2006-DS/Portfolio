import React from "react";
import {
  FiAward,
  FiCheckCircle,
  FiExternalLink,
  FiArrowUpRight,
  FiCode,
  FiType,
} from "react-icons/fi";

import "../styles/certifications.css";

const Certifications = () => {
  const certifications = [
    {
      number: "01",
      title: "Python Masterclass",
      issuer: "Udemy",
      category: "Programming & Development",
      icon: <FiCode />,
      color: "cyan",

      description:
        "A comprehensive Python learning program focused on strengthening programming fundamentals, problem solving and practical Python development skills.",

      skills: [
        "Python",
        "Programming",
        "Problem Solving",
      ],

      status: "COMPLETED",
    },

    {
      number: "02",
      title: "Typing Certificate",
      issuer: "TypingTest.com",
      category: "Professional Skill",
      icon: <FiType />,
      color: "purple",

      description:
        "Successfully demonstrated professional typing proficiency with an accuracy score of 97%, reflecting strong attention to detail and keyboard efficiency.",

      skills: [
        "97% Accuracy",
        "Typing",
        "Attention to Detail",
      ],

      status: "ACHIEVED",
    },
  ];

  return (
    <section
      id="certifications"
      className="certifications-section"
    >

      <div className="certification-glow"></div>

      <div className="container">

        {/* ================= HEADING ================= */}

        <div className="section-heading-wrapper">

          <span className="section-label">
            06 — CERTIFICATIONS
          </span>

          <h2 className="section-title">
            Learning That{" "}
            <span className="gradient-text">
              Counts
            </span>
          </h2>

          <p className="section-description">
            Certifications and achievements that complement my
            academic learning and technical development.
          </p>

        </div>


        {/* ================= CERTIFICATIONS ================= */}

        <div className="certifications-grid">

          {certifications.map((certificate) => (

            <div
              className={`certificate-card glass-card ${certificate.color}`}
              key={certificate.title}
            >

              {/* Background Number */}

              <span className="certificate-number">
                {certificate.number}
              </span>


              {/* Top */}

              <div className="certificate-top">

                <div
                  className={`certificate-icon ${certificate.color}`}
                >
                  {certificate.icon}
                </div>

                <div className="certificate-status">

                  <span></span>

                  {certificate.status}

                </div>

              </div>


              {/* Category */}

              <span className="certificate-category">
                {certificate.category}
              </span>


              {/* Title */}

              <h3>
                {certificate.title}
              </h3>


              {/* Issuer */}

              <div className="certificate-issuer">

                <FiAward />

                <span>
                  Issued by{" "}
                  <strong>
                    {certificate.issuer}
                  </strong>
                </span>

              </div>


              {/* Description */}

              <p className="certificate-description">
                {certificate.description}
              </p>


              {/* Skills */}

              <div className="certificate-skills">

                {certificate.skills.map((skill) => (

                  <span key={skill}>
                    <FiCheckCircle />
                    {skill}
                  </span>

                ))}

              </div>


              {/* Footer */}

              <div className="certificate-footer">

                <span>
                  VERIFIED ACHIEVEMENT
                </span>

                <FiArrowUpRight />

              </div>

            </div>

          ))}

        </div>


        {/* ================= LEARNING MESSAGE ================= */}

        <div className="certification-message glass-card">

          <div className="certification-message-icon">
            <FiAward />
          </div>

          <div>

            <span>
              CONTINUOUS LEARNING
            </span>

            <h3>
              Certifications are milestones,
              <strong> not the destination.</strong>
            </h3>

            <p>
              I continuously expand my technical knowledge through
              hands-on projects, experimentation, internships and
              emerging technologies.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Certifications;