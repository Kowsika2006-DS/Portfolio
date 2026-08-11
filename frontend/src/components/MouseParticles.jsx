import { useEffect, useRef } from "react";

const MouseParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Desktop only
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    const mouse = {
      x: width / 2,
      y: height / 2,
      active: false,
    };

    const particles = [];
    const ripples = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    window.addEventListener("resize", resize);


    const moveMouse = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;

      // Create a few tiny particles
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: mouse.x + (Math.random() - 0.5) * 8,
          y: mouse.y + (Math.random() - 0.5) * 8,

          size: Math.random() * 2.5 + 1,

          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,

          life: 1,

          decay: Math.random() * 0.025 + 0.02,
        });
      }

      // Keep performance good
      if (particles.length > 120) {
        particles.splice(
          0,
          particles.length - 120
        );
      }
    };


    const clickMouse = (event) => {
      ripples.push({
        x: event.clientX,
        y: event.clientY,

        radius: 2,

        opacity: 0.8,
      });

      if (ripples.length > 8) {
        ripples.shift();
      }
    };


    window.addEventListener(
      "mousemove",
      moveMouse
    );

    window.addEventListener(
      "click",
      clickMouse
    );


    const drawCursor = () => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );


      /*
       * =========================================
       * MOUSE GLOW
       * =========================================
       */

      if (mouse.active) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          90
        );

        gradient.addColorStop(
          0,
          "rgba(0, 217, 255, 0.10)"
        );

        gradient.addColorStop(
          0.4,
          "rgba(0, 217, 255, 0.035)"
        );

        gradient.addColorStop(
          1,
          "rgba(0, 217, 255, 0)"
        );

        ctx.fillStyle = gradient;

        ctx.beginPath();

        ctx.arc(
          mouse.x,
          mouse.y,
          90,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }


      /*
       * =========================================
       * PARTICLES
       * =========================================
       */

      particles.forEach((particle, index) => {

        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.life -= particle.decay;

        if (particle.life <= 0) {
          particles.splice(index, 1);
          return;
        }


        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );


        ctx.fillStyle =
          `rgba(0, 217, 255, ${particle.life * 0.7})`;

        ctx.shadowBlur = 12;

        ctx.shadowColor =
          "rgba(0, 217, 255, 0.8)";

        ctx.fill();

        ctx.shadowBlur = 0;
      });


      /*
       * =========================================
       * CLICK RIPPLES
       * =========================================
       */

      ripples.forEach((ripple, index) => {

        ripple.radius += 3;

        ripple.opacity -= 0.018;


        if (ripple.opacity <= 0) {
          ripples.splice(index, 1);
          return;
        }


        ctx.beginPath();

        ctx.arc(
          ripple.x,
          ripple.y,
          ripple.radius,
          0,
          Math.PI * 2
        );


        ctx.strokeStyle =
          `rgba(0, 217, 255, ${ripple.opacity})`;

        ctx.lineWidth = 1.5;

        ctx.shadowBlur = 12;

        ctx.shadowColor =
          "rgba(0, 217, 255, 0.6)";

        ctx.stroke();

        ctx.shadowBlur = 0;
      });


      /*
       * =========================================
       * MAIN CURSOR DOT
       * =========================================
       */

      if (mouse.active) {

        ctx.beginPath();

        ctx.arc(
          mouse.x,
          mouse.y,
          4,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = "#ffffff";

        ctx.shadowBlur = 15;

        ctx.shadowColor =
          "#00d9ff";

        ctx.fill();

        ctx.shadowBlur = 0;


        // Outer small ring

        ctx.beginPath();

        ctx.arc(
          mouse.x,
          mouse.y,
          10,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          "rgba(0, 217, 255, 0.55)";

        ctx.lineWidth = 1;

        ctx.stroke();
      }


      requestAnimationFrame(drawCursor);
    };


    drawCursor();


    return () => {

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        moveMouse
      );

      window.removeEventListener(
        "click",
        clickMouse
      );

      ctx.clearRect(
        0,
        0,
        width,
        height
      );
    };

  }, []);


  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,

        width: "100vw",
        height: "100vh",

        pointerEvents: "none",

        zIndex: 999999,

        background: "transparent",
      }}
    />
  );
};

export default MouseParticles;