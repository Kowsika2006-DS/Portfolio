import React from "react";
import {
  FiBriefcase,
  FiCalendar,
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiGlobe,
} from "react-icons/fi";

import "../styles/experience.css";

const Experience = () => {
  const experiences = [
    {
      number: "01",
      company: "Artifai Tech",
      role: "Full Stack Developer Intern",
      duration: "30 Jun 2025 — 07 Jul 2025",
      icon: <FiCode />,
      type: "Internship",

      description:
        "Gained practical exposure to full-stack development by understanding the complete application development lifecycle and contributing to a working prototype.",

      highlights: [
        "Learned full-stack development fundamentals",
        "Worked across frontend and backend concepts",
        "Contributed to a working prototype",
        "Understood application development workflow",
      ],

      color: "cyan",
    },

    {
      number: "02",
      company: "Codec Technologies",
      role: "Web Developer Intern",
      duration: "15 Dec 2025 — 15 Jan 2026",
      icon: <FiGlobe />,
      type: "Internship",

      description:
        "Worked on practical web development tasks and gained hands-on experience in building and structuring a complete website with a professional user experience.",

      highlights: [
        "Built a functional website",
        "Worked with modern web development concepts",
        "Focused on responsive user interfaces",
        "Improved practical development skills",
      ],

      color: "purple",
    },

    {
      number: "03",
      company: "Beetalogic Software Solutions",
      role: "Full Stack Developer Intern",
      duration: "02 Jun 2026 — 02 Jul 2026",
      icon: <FiLayers />,
      type: "Internship",

      description:
        "Developed a professional animated website while gaining practical experience in full-stack development, UI implementation and creating engaging digital experiences.",

      highlights: [
        "Developed a professional website",
        "Implemented animated UI experiences",
        "Worked with frontend development",
        "Applied full-stack development concepts",
      ],

      color: "green",
    },
  ];

  return (
    <section id="experience" className="experience-section">

      <div className="experience-glow experience-glow-one"></div>
      <div className="experience-glow experience-glow-two"></div>

      <div className="container">

        {/* ================= HEADING ================= */}

        <div className="section-heading-wrapper">

          <span className="section-label">
            04 — EXPERIENCE
          </span>

          <h2 className="section-title">
            Where I{" "}
            <span className="gradient-text">
              Gained Experience
            </span>
          </h2>

          <p className="section-description">
            Turning academic knowledge into practical experience
            through internships, projects and real-world development.
          </p>

        </div>


        {/* ================= TIMELINE ================= */}

        <div className="experience-timeline">

          <div className="experience-line"></div>

          {experiences.map((experience, index) => (

            <div
              className={`experience-item ${index % 2 === 0 ? "left" : "right"}`}
              key={experience.company}
            >

              {/* Timeline Node */}

              <div className={`experience-node ${experience.color}`}>

                <span></span>

              </div>


              {/* Experience Card */}

              <div className="experience-card glass-card">

                {/* Card Header */}

                <div className="experience-card-top">

                  <div className={`experience-icon ${experience.color}`}>
                    {experience.icon}
                  </div>

                  <span className="experience-number">
                    {experience.number}
                  </span>

                </div>


                <span className="experience-type">
                  {experience.type}
                </span>


                <h3>
                  {experience.role}
                </h3>


                <h4>
                  {experience.company}
                </h4>


                {/* Duration */}

                <div className="experience-duration">

                  <FiCalendar />

                  <span>
                    {experience.duration}
                  </span>

                </div>


                {/* Description */}

                <p className="experience-description">
                  {experience.description}
                </p>


                {/* Highlights */}

                <div className="experience-highlights">

                  {experience.highlights.map((highlight) => (

                    <div
                      className="experience-highlight"
                      key={highlight}
                    >

                      <span className="highlight-dot"></span>

                      <span>
                        {highlight}
                      </span>

                    </div>

                  ))}

                </div>


                {/* Bottom */}

                <div className="experience-card-footer">

                  <span>
                    Practical Experience
                  </span>

                  <FiArrowUpRight />

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* ================= SUMMARY ================= */}

        <div className="experience-summary glass-card">

          <div className="summary-icon">
            <FiBriefcase />
          </div>

          <div className="summary-content">

            <span>
              PROFESSIONAL GROWTH
            </span>

            <h3>
              From learning concepts to building{" "}
              <strong>real solutions.</strong>
            </h3>

            <p>
              Each internship strengthened my understanding of
              web development, full-stack technologies, teamwork
              and practical software engineering.
            </p>

          </div>

          <div className="experience-count">

            <strong>
              3
            </strong>

            <span>
              Internships
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;