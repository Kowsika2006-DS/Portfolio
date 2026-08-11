import React from "react";
import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
  FiCloud,
  FiCpu,
  FiZap,
} from "react-icons/fi";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
} from "react-icons/si";

import "../styles/projects.css";

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "Weather Prediction App",
      category: "Web Application",
      icon: <FiCloud />,
      color: "cyan",

      description:
        "A responsive weather application that fetches real-time weather information through a weather API and presents the data through a clean and intuitive interface.",

      details:
        "Users can search for a location and instantly view relevant weather information through an interactive web interface.",

      technologies: [
        {
          name: "HTML",
          icon: <SiHtml5 />,
        },
        {
          name: "CSS",
          icon: <SiCss />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
        },
        {
          name: "Weather API",
          icon: <FiCloud />,
        },
      ],

      github:
        "https://github.com/Kowsika2006-DS/weather-",

      live: "",

      featured: true,
    },

    {
      number: "02",
      title: "CPU Scheduling",
      category: "Operating Systems",
      icon: <FiCpu />,
      color: "purple",

      description:
        "An interactive CPU scheduling visualization project implementing multiple scheduling algorithms to demonstrate how processes are scheduled and executed.",

      details:
        "The application helps users understand CPU scheduling concepts by visualizing process execution and comparing different scheduling approaches.",

      technologies: [
        {
          name: "HTML",
          icon: <SiHtml5 />,
        },
        {
          name: "CSS",
          icon: <SiCss />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
        },
        {
          name: "Scheduling Algorithms",
          icon: <FiCpu />,
        },
      ],

      github:
        "https://github.com/Kowsika2006-DS/cpu-scheduling",

      live:
        "https://kowsika2006-ds.github.io/cpu-scheduling/",

      featured: true,
    },

    {
      number: "03",
      title: "Smart Energy Consumption",
      category: "React Application",
      icon: <FiZap />,
      color: "green",

      description:
        "A smart energy-focused web application designed to present energy consumption information through a modern React-based interface.",

      details:
        "The project explores how modern frontend technologies can be used to create intuitive interfaces for monitoring and understanding energy usage.",

      technologies: [
        {
          name: "React.js",
          icon: <SiReact />,
        },
        {
          name: "CSS",
          icon: <SiCss />,
        },
      ],

      github:
        "https://github.com/Kowsika2006-DS/smart-energy",

      live: "",

      featured: false,
    },
  ];

  return (
    <section id="projects" className="projects-section">

      <div className="projects-glow projects-glow-one"></div>
      <div className="projects-glow projects-glow-two"></div>

      <div className="container">

        {/* ================= HEADING ================= */}

        <div className="section-heading-wrapper">

          <span className="section-label">
            05 — PROJECTS
          </span>

          <h2 className="section-title">
            Things I've{" "}
            <span className="gradient-text">
              Built
            </span>
          </h2>

          <p className="section-description">
            A collection of projects where I transform concepts,
            algorithms and ideas into functional digital experiences.
          </p>

        </div>


        {/* ================= PROJECT GRID ================= */}

        <div className="projects-grid">

          {projects.map((project, index) => (

            <article
              className={`project-card glass-card ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.title}
            >

              {/* Glow */}

              <div
                className={`project-card-glow ${project.color}`}
              ></div>


              {/* Top */}

              <div className="project-top">

                <div
                  className={`project-icon ${project.color}`}
                >
                  {project.icon}
                </div>

                <span className="project-number">
                  {project.number}
                </span>

              </div>


              {/* Category */}

              <span className="project-category">
                {project.category}
              </span>


              {/* Title */}

              <h3 className="project-title">
                {project.title}
              </h3>


              {/* Description */}

              <p className="project-description">
                {project.description}
              </p>


              {/* Details */}

              <p className="project-details">
                {project.details}
              </p>


              {/* Tech */}

              <div className="project-tech">

                {project.technologies.map((tech) => (

                  <span
                    className="tech-badge"
                    key={tech.name}
                  >

                    {tech.icon}

                    {tech.name}

                  </span>

                ))}

              </div>


              {/* Footer */}

              <div className="project-footer">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link github-link"
                >

                  <FiGithub />

                  <span>
                    GitHub
                  </span>

                  <FiArrowUpRight />

                </a>


                {project.live ? (

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link live-link"
                  >

                    <FiExternalLink />

                    <span>
                      Live Demo
                    </span>

                    <FiArrowUpRight />

                  </a>

                ) : (

                  <span className="coming-soon">
                    Live Demo Soon
                  </span>

                )}

              </div>

            </article>

          ))}

        </div>


        {/* ================= PROJECT CTA ================= */}

        <div className="projects-cta glass-card">

          <div className="projects-cta-content">

            <span>
              MORE ON GITHUB
            </span>

            <h3>
              Explore my{" "}
              <strong>
                development journey.
              </strong>
            </h3>

            <p>
              More experiments, projects and learning milestones
              are available on my GitHub profile.
            </p>

          </div>

          <a
            href="https://github.com/Kowsika2006-DS"
            target="_blank"
            rel="noreferrer"
            className="github-profile-button"
          >

            <FiGithub />

            View GitHub

            <FiArrowUpRight />

          </a>

        </div>

      </div>

    </section>
  );
};

export default Projects;