"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if screen is desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024); // >=1024px = desktop
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    return () => {
      window.removeEventListener("resize", checkDesktop);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop || !cursorRef.current) return;

    // Hide default cursor
    document.body.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (cursorRef.current) {
        cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.2;
        cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.2;

        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

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
      document.body.style.cursor = "default";
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("button, a").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isDesktop]);

  if (!isDesktop) return null; // Don’t render cursor on mobile/tablet

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-50 shadow-md transition-transform duration-150 ease-out"
    />
  );
}
