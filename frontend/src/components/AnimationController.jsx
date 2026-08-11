import { useEffect } from "react";

const AnimationController = () => {

  useEffect(() => {

    const elements = document.querySelectorAll(
      "section, .glass-card, .skill-card, .project-card, .certificate-card, .responsibility-card, .contact-detail, .availability-card"
    );

    elements.forEach((element, index) => {

      if (
        element.classList.contains("glass-card") ||
        element.classList.contains("skill-card") ||
        element.classList.contains("project-card") ||
        element.classList.contains("certificate-card") ||
        element.classList.contains("responsibility-card")
      ) {

        element.classList.add("reveal-scale");

      } else {

        element.classList.add("reveal");

      }

      element.style.setProperty(
        "--delay",
        `${(index % 5) * 0.08}s`
      );

    });


    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("active");

          }

        });

      },
      {
        threshold: 0.12,

        rootMargin:
          "0px 0px -50px 0px",
      }
    );


    elements.forEach((element) => {

      observer.observe(element);

    });


    return () => {

      observer.disconnect();

    };

  }, []);


  return null;
};

export default AnimationController;