"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!cursorRef.current) return;

    // Hide the default cursor globally
    document.body.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    // Animate cursor smoothly
    const animate = () => {
      if (cursorRef.current) {
        // Linear interpolation (lerp) for smooth movement
        cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.2;
        cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.2;

        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    // Hover effect for buttons and links
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform += " scale(3)";
        cursorRef.current.style.background = "rgba(0, 123, 255, 0.3)";
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = cursorRef.current.style.transform.replace(" scale(3)", "");
        cursorRef.current.style.background = "white";
      }
    };

    document.querySelectorAll("button, a").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);
    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "default"; // restore default cursor on unmount

      document.querySelectorAll("button, a").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-50 shadow-md transition-transform duration-150 ease-out"
    />
  );
}
