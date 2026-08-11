import React from "react";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiCpu,
  FiLayers,
} from "react-icons/fi";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMysql,
  SiMongodb,
  SiPython,
  SiCplusplus,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
} from "react-icons/si";

import "../styles/skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      shortTitle: "Frontend",
      icon: <FiCode />,
      description: "Building responsive and modern user interfaces.",
      skills: [
        { name: "HTML", icon: <SiHtml5 />, level: "Advanced" },
        { name: "CSS", icon: <SiCss />, level: "Advanced" },
        { name: "JavaScript", icon: <SiJavascript />, level: "Advanced" },
        { name: "React.js", icon: <SiReact />, level: "Intermediate" },
        { name: "Bootstrap", icon: <SiBootstrap />, level: "Advanced" },
      ],
    },

    {
      title: "Backend Development",
      shortTitle: "Backend",
      icon: <FiServer />,
      description: "Developing APIs and server-side applications.",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, level: "Intermediate" },
        { name: "Express.js", icon: <SiExpress />, level: "Intermediate" },
        { name: "Django", icon: <SiDjango />, level: "Intermediate" },
      ],
    },

    {
      title: "Database Technologies",
      shortTitle: "Database",
      icon: <FiDatabase />,
      description: "Managing and working with structured and NoSQL data.",
      skills: [
        { name: "MySQL", icon: <SiMysql />, level: "Intermediate" },
        { name: "MongoDB", icon: <SiMongodb />, level: "Intermediate" },
      ],
    },

    {
      title: "Programming Languages",
      shortTitle: "Programming",
      icon: <FiLayers />,
      description: "Strong programming foundation for problem solving.",
      skills: [
        { name: "Python", icon: <SiPython />, level: "Advanced" },
        { name: "Java", icon: null, level: "Intermediate" },
        { name: "C++", icon: <SiCplusplus />, level: "Intermediate" },
      ],
    },

    {
      title: "AI & Machine Learning",
      shortTitle: "AI / ML",
      icon: <FiCpu />,
      description: "Exploring intelligent systems and data-driven solutions.",
      skills: [
        { name: "NumPy", icon: <SiNumpy />, level: "Advanced" },
        { name: "Pandas", icon: <SiPandas />, level: "Advanced" },
        { name: "Scikit-learn", icon: <SiScikitlearn />, level: "Intermediate" },
        { name: "PyTorch", icon: <SiPytorch />, level: "Intermediate" },
        { name: "TensorFlow", icon: <SiTensorflow />, level: "Intermediate" },
      ],
    },
  ];

  const getLevelWidth = (level) => {
    if (level === "Advanced") return "90%";
    if (level === "Intermediate") return "75%";
    return "60%";
  };

  return (
    <section id="skills" className="skills-section">

      <div className="skills-bg-glow"></div>

      <div className="container">

        {/* Heading */}

        <div className="section-heading-wrapper">

          <span className="section-label">
            02 — SKILLS
          </span>

          <h2 className="section-title">
            My <span className="gradient-text">Technical</span>{" "}
            Arsenal
          </h2>

          <p className="section-description">
            A growing technical toolkit built around data,
            artificial intelligence and modern software development.
          </p>

        </div>


        {/* Skill Categories */}

        <div className="skills-grid">

          {skillCategories.map((category, index) => (

            <div
              className={`skill-category glass-card ${
                index === 4 ? "ai-skill-card" : ""
              }`}
              key={category.title}
            >

              {/* Category Header */}

              <div className="skill-category-header">

                <div className="skill-category-icon">
                  {category.icon}
                </div>

                <div>

                  <span className="skill-category-number">
                    0{index + 1}
                  </span>

                  <h3>
                    {category.title}
                  </h3>

                </div>

              </div>


              <p className="skill-category-description">
                {category.description}
              </p>


              {/* Individual Skills */}

              <div className="skills-list">

                {category.skills.map((skill) => (

                  <div
                    className="skill-item"
                    key={skill.name}
                  >

                    <div className="skill-info">

                      <div className="skill-name">

                        <span className="skill-tech-icon">
                          {skill.icon || "☕"}
                        </span>

                        {skill.name}

                      </div>

                      <span className="skill-level">
                        {skill.level}
                      </span>

                    </div>


                    <div className="skill-progress">

                      <span
                        style={{
                          width: getLevelWidth(skill.level),
                        }}
                      ></span>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>


        {/* Bottom Tech Statement */}

        <div className="skills-footer glass-card">

          <div className="skills-footer-icon">
            <FiCpu />
          </div>

          <div>

            <h3>
              Always Learning. Always Building.
            </h3>

            <p>
              Continuously exploring emerging technologies,
              experimenting with AI and transforming ideas into
              practical solutions.
            </p>

          </div>

          <div className="learning-pulse">
            <span></span>
            Learning
          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;