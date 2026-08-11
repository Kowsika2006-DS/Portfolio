import React, { useState } from "react";
import { sendContactMessage } from "../services/contactService";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiArrowUpRight,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

import "../styles/contact.css";


const Contact = () => {

  // ============================================
  // FORM STATE
  // ============================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  // ============================================
  // STATUS STATE
  // ============================================

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });


  // ============================================
  // LOADING STATE
  // ============================================

  const [loading, setLoading] = useState(false);


  // ============================================
  // HANDLE INPUT CHANGE
  // ============================================

  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;


    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

  };


  // ============================================
  // HANDLE FORM SUBMIT
  // ============================================

  const handleSubmit = async (event) => {

    event.preventDefault();


    // Prevent multiple submissions

    if (loading) {
      return;
    }


    // Start loading

    setLoading(true);


    // Clear previous status

    setStatus({
      type: "",
      message: "",
    });


    try {

      // ========================================
      // SEND DATA TO BACKEND
      // ========================================

      const response =
        await sendContactMessage(formData);


      // ========================================
      // SUCCESS
      // ========================================

      setStatus({
        type: "success",

        message:
          response.message ||
          "Message sent successfully! I'll get back to you soon.",
      });


      // ========================================
      // CLEAR FORM
      // ========================================

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });


    } catch (error) {

      // ========================================
      // ERROR
      // ========================================

      setStatus({
        type: "error",

        message:
          error.message ||
          "Unable to send your message. Please try again.",
      });

    } finally {

      // ========================================
      // STOP LOADING
      // ========================================

      setLoading(false);

    }

  };


  return (

    <section
      id="contact"
      className="contact-section"
    >

      {/* =========================================
          BACKGROUND GLOW
      ========================================== */}

      <div
        className="contact-glow contact-glow-one"
      />

      <div
        className="contact-glow contact-glow-two"
      />


      <div className="container">


        {/* =========================================
            HEADING
        ========================================== */}

        <div className="section-heading-wrapper">

          <span className="section-label">
            08 — CONTACT
          </span>


          <h2 className="section-title">

            Let's Build Something{" "}

            <span className="gradient-text">
              Meaningful
            </span>

          </h2>


          <p className="section-description">

            Have an idea, opportunity or project in
            mind? Let's connect and turn it into
            something impactful.

          </p>

        </div>


        {/* =========================================
            CONTACT GRID
        ========================================== */}

        <div className="contact-grid">


          {/* =======================================
              LEFT SIDE
          ======================================== */}

          <div className="contact-info">


            {/* INTRO */}

            <div className="contact-intro">

              <span>
                GET IN TOUCH
              </span>


              <h3>

                Let's start a{" "}

                <strong>
                  conversation.
                </strong>

              </h3>


              <p>

                Whether it's about a project,
                collaboration, internship opportunity
                or simply discussing technology, feel
                free to reach out.

              </p>

            </div>


            {/* =====================================
                CONTACT DETAILS
            ====================================== */}

            <div className="contact-details">


              {/* EMAIL */}

              <a
                href="mailto:kowsikajayakumar2006@gmail.com"
                className="contact-detail"
              >

                <div className="contact-detail-icon">
                  <FiMail />
                </div>


                <div>

                  <span>
                    EMAIL
                  </span>

                  <strong>
                    kowsikajayakumar2006@gmail.com
                  </strong>

                </div>


                <FiArrowUpRight />

              </a>


              {/* PHONE */}

              <a
                href="tel:+919123545940"
                className="contact-detail"
              >

                <div className="contact-detail-icon">
                  <FiPhone />
                </div>


                <div>

                  <span>
                    PHONE
                  </span>

                  <strong>
                    +91 91235 45940
                  </strong>

                </div>


                <FiArrowUpRight />

              </a>


              {/* LOCATION */}

              <div className="contact-detail">

                <div className="contact-detail-icon">
                  <FiMapPin />
                </div>


                <div>

                  <span>
                    LOCATION
                  </span>

                  <strong>
                    Mettur, Salem, Tamil Nadu
                  </strong>

                </div>

              </div>

            </div>


            {/* =====================================
                SOCIAL LINKS
            ====================================== */}

            <div className="contact-socials">

              <span>
                FIND ME ONLINE
              </span>


              <div className="social-buttons">


                {/* GITHUB */}

                <a
                  href="https://github.com/Kowsika2006-DS"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>


                {/* LINKEDIN */}

                <a
                  href="https://www.linkedin.com/in/kowsikajayakumar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>

              </div>

            </div>

          </div>


          {/* =========================================
              CONTACT FORM
          ========================================== */}

          <div className="contact-form-card glass-card">


            {/* FORM HEADER */}

            <div className="contact-form-header">

              <div>

                <span>
                  SEND A MESSAGE
                </span>

                <h3>
                  Let's talk.
                </h3>

              </div>


              <div className="form-status-dot" />

            </div>


            {/* FORM */}

            <form onSubmit={handleSubmit}>


              {/* ===================================
                  NAME + EMAIL
              ==================================== */}

              <div className="form-row">


                {/* NAME */}

                <div className="form-group">

                  <label htmlFor="name">
                    YOUR NAME
                  </label>


                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />

                </div>


                {/* EMAIL */}

                <div className="form-group">

                  <label htmlFor="email">
                    EMAIL ADDRESS
                  </label>


                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />

                </div>

              </div>


              {/* ===================================
                  SUBJECT
              ==================================== */}

              <div className="form-group">

                <label htmlFor="subject">
                  SUBJECT
                </label>


                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* ===================================
                  MESSAGE
              ==================================== */}

              <div className="form-group">

                <label htmlFor="message">
                  MESSAGE
                </label>


                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your idea, project or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* ===================================
                  STATUS MESSAGE
              ==================================== */}

              {status.message && (

                <div
                  className={`form-alert ${status.type}`}
                >

                  {status.type === "success" ? (

                    <FiCheckCircle />

                  ) : (

                    <FiAlertCircle />

                  )}


                  <span>
                    {status.message}
                  </span>

                </div>

              )}


              {/* ===================================
                  SUBMIT BUTTON
              ==================================== */}

              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >

                {loading ? (

                  <>
                    <span className="button-spinner" />
                    Sending...
                  </>

                ) : (

                  <>
                    Send Message
                    <FiSend />
                  </>

                )}

              </button>


            </form>

          </div>

        </div>


        {/* =========================================
            AVAILABILITY
        ========================================== */}

        <div className="availability-card glass-card">


          <div className="availability-indicator">
            <span />
          </div>


          <div>

            <strong>
              Open to opportunities
            </strong>


            <p>

              Available for collaborations,
              internships, projects and innovative
              technology opportunities.

            </p>

          </div>


          <FiArrowUpRight />

        </div>

      </div>

    </section>

  );

};


export default Contact;