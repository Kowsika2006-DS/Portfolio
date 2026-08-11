import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const glow = glowRef.current;

    if (!cursor || !follower || !glow) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let followerX = mouseX;
    let followerY = mouseY;

    let animationFrame;


    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;

      glow.style.left = `${mouseX}px`;
      glow.style.top = `${mouseY}px`;
    };


    const animate = () => {
      followerX +=
        (mouseX - followerX) * 0.12;

      followerY +=
        (mouseY - followerY) * 0.12;

      follower.style.left =
        `${followerX}px`;

      follower.style.top =
        `${followerY}px`;

      animationFrame =
        requestAnimationFrame(animate);
    };


    const handleMouseOver = (e) => {
      const interactive =
        e.target.closest(
          "a, button, input, textarea"
        );

      if (interactive) {
        cursor.classList.add(
          "cursor-hover"
        );

        follower.classList.add(
          "cursor-follower-hover"
        );

        glow.classList.add(
          "cursor-glow-hover"
        );
      }
    };


    const handleMouseOut = (e) => {
      const interactive =
        e.target.closest(
          "a, button, input, textarea"
        );

      if (interactive) {
        cursor.classList.remove(
          "cursor-hover"
        );

        follower.classList.remove(
          "cursor-follower-hover"
        );

        glow.classList.remove(
          "cursor-glow-hover"
        );
      }
    };


    window.addEventListener(
      "mousemove",
      moveCursor
    );

    document.addEventListener(
      "mouseover",
      handleMouseOver
    );

    document.addEventListener(
      "mouseout",
      handleMouseOut
    );

    animate();


    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      document.removeEventListener(
        "mouseover",
        handleMouseOver
      );

      document.removeEventListener(
        "mouseout",
        handleMouseOut
      );

      cancelAnimationFrame(
        animationFrame
      );
    };

  }, []);


  return (
    <>
      <div
        ref={glowRef}
        className="custom-cursor-glow"
      />

      <div
        ref={followerRef}
        className="custom-cursor-follower"
      />

      <div
        ref={cursorRef}
        className="custom-cursor"
      >
        <span />
      </div>
    </>
  );
};

export default CursorGlow;