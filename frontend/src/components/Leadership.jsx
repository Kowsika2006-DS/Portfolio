import React from "react";
import {
  FiUsers,
  FiMessageSquare,
  FiTarget,
  FiCheckCircle,
  FiArrowUpRight,
} from "react-icons/fi";

import "../styles/leadership.css";

const Leadership = () => {
  const responsibilities = [
    {
      icon: <FiUsers />,
      title: "Class Coordination",
      description:
        "Coordinating between students and faculty to ensure smooth communication and information flow.",
    },
    {
      icon: <FiMessageSquare />,
      title: "Communication",
      description:
        "Representing student concerns, suggestions and feedback in a clear and responsible manner.",
    },
    {
      icon: <FiTarget />,
      title: "Responsibility",
      description:
        "Taking ownership of class-related responsibilities and helping maintain an organized academic environment.",
    },
  ];

  return (
    <section id="leadership" className="leadership-section">

      <div className="leadership-glow"></div>

      <div className="container">

        {/* ================= HEADING ================= */}

        <div className="section-heading-wrapper">

          <span className="section-label">
            07 — LEADERSHIP
          </span>

          <h2 className="section-title">
            Leading Through{" "}
            <span className="gradient-text">
              Responsibility
            </span>
          </h2>

          <p className="section-description">
            Developing leadership, communication and coordination
            skills alongside my technical journey.
          </p>

        </div>


        {/* ================= MAIN LEADERSHIP CARD ================= */}

        <div className="leadership-main glass-card">

          {/* Left */}

          <div className="leadership-visual">

            <div className="leadership-orbit orbit-one"></div>
            <div className="leadership-orbit orbit-two"></div>

            <div className="leadership-icon">
              <FiUsers />
            </div>

            <span className="leadership-year">
              1+ YEAR
            </span>

          </div>


          {/* Right */}

          <div className="leadership-content">

            <span className="leadership-status">
              CURRENT LEADERSHIP ROLE
            </span>

            <h3>
              Class Representative
            </h3>

            <p className="leadership-duration">
              1 Year — Present
            </p>

            <p className="leadership-description">
              Serving as a Class Representative by acting as a
              communication bridge between students and faculty.
              This role has helped strengthen my leadership,
              communication, coordination and decision-making skills.
            </p>


            {/* Responsibility Tags */}

            <div className="leadership-tags">

              <span>
                <FiCheckCircle />
                Student Coordination
              </span>

              <span>
                <FiCheckCircle />
                Faculty Communication
              </span>

              <span>
                <FiCheckCircle />
                Problem Resolution
              </span>

              <span>
                <FiCheckCircle />
                Team Collaboration
              </span>

            </div>


            <div className="leadership-bottom">

              <span>
                Leadership is about taking responsibility.
              </span>

              <FiArrowUpRight />

            </div>

          </div>

        </div>


        {/* ================= RESPONSIBILITIES ================= */}

        <div className="responsibilities-grid">

          {responsibilities.map((item, index) => (

            <div
              className="responsibility-card glass-card"
              key={item.title}
            >

              <span className="responsibility-number">
                0{index + 1}
              </span>

              <div className="responsibility-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          ))}

        </div>


        {/* ================= LEADERSHIP STATEMENT ================= */}

        <div className="leadership-quote">

          <span className="quote-line"></span>

          <p>
            "Good leadership starts with listening,
            responsibility and the willingness to help others."
          </p>

          <span className="quote-line"></span>

        </div>

      </div>

    </section>
  );
};

export default Leadership;