import React from "react";
import {
  FiBookOpen,
  FiMapPin,
  FiCalendar,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";

import "../styles/education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">

      <div className="education-glow"></div>

      <div className="container">

        {/* Section Heading */}

        <div className="section-heading-wrapper">

          <span className="section-label">
            03 — EDUCATION
          </span>

          <h2 className="section-title">
            Academic <span className="gradient-text">Journey</span>
          </h2>

          <p className="section-description">
            Building a strong foundation in data science, programming,
            artificial intelligence and software engineering.
          </p>

        </div>


        {/* Timeline */}

        <div className="education-timeline">

          {/* Timeline Line */}

          <div className="timeline-line"></div>


          {/* Timeline Item */}

          <div className="education-item">

            {/* Timeline Dot */}

            <div className="timeline-marker">

              <div className="timeline-marker-inner">
                <FiBookOpen />
              </div>

            </div>


            {/* Education Card */}

            <div className="education-card glass-card">

              <div className="education-card-header">

                <div>

                  <span className="education-status">
                    CURRENTLY PURSUING
                  </span>

                  <h3>
                    B.E. Computer Science & Engineering
                  </h3>

                  <h4>
                    Data Science
                  </h4>

                </div>


                {/* CGPA */}

                <div className="cgpa-box">

                  <span>
                    CGPA
                  </span>

                  <strong>
                    8.819
                  </strong>

                  <small>
                    / 10
                  </small>

                </div>

              </div>


              {/* University */}

              <div className="education-meta">

                <div>
                  <FiMapPin />

                  <span>
                    Annamalai University
                  </span>
                </div>


                <div>
                  <FiCalendar />

                  <span>
                    Pre-final Year
                  </span>
                </div>

              </div>


              {/* Description */}

              <p className="education-description">

                Pursuing a specialized engineering education focused
                on Data Science, with an emphasis on artificial
                intelligence, machine learning, data analytics,
                programming and solving real-world technology problems.

              </p>


              {/* Areas */}

              <div className="education-focus">

                <span>
                  <FiCheckCircle />
                  Data Science
                </span>

                <span>
                  <FiCheckCircle />
                  Artificial Intelligence
                </span>

                <span>
                  <FiCheckCircle />
                  Machine Learning
                </span>

                <span>
                  <FiCheckCircle />
                  Data Analytics
                </span>

                <span>
                  <FiCheckCircle />
                  Software Development
                </span>

              </div>


              {/* Progress */}

              <div className="education-progress">

                <div className="progress-header">

                  <span>
                    Academic Progress
                  </span>

                  <span>
                    Pre-final Year
                  </span>

                </div>

                <div className="education-progress-bar">

                  <span></span>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* Academic Highlight */}

        <div className="academic-highlight glass-card">

          <div className="academic-icon">
            <FiAward />
          </div>

          <div className="academic-content">

            <span>
              ACADEMIC HIGHLIGHT
            </span>

            <h3>
              Maintaining a strong{" "}
              <strong>8.9 CGPA</strong>
            </h3>

            <p>
              Consistently developing technical knowledge while
              balancing academics, leadership responsibilities,
              internships and real-world projects.
            </p>

          </div>

          <div className="academic-score">

            <strong>
              8.9
            </strong>

            <span>
              CGPA
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Education;
