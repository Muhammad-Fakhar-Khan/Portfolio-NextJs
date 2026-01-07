"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop || !cursorRef.current) return;

    // 🧠 Hide ALL native cursors
    document.body.style.cursor = "none";
    const elements = document.querySelectorAll("*");
    elements.forEach((el) => {
      (el as HTMLElement).style.cursor = "none";
    });

    const moveCursor = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (cursorRef.current) {
        cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15;
        cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15;
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    // ✨ Custom hover animations for clickable elements
    const handleMouseEnter = () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform += " scale(2)";
      cursorRef.current.style.background = "rgba(0, 123, 255, 0.4)";
      cursorRef.current.style.mixBlendMode = "difference";
    };

    const handleMouseLeave = () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = cursorRef.current.style.transform.replace(" scale(2)", "");
      cursorRef.current.style.background = "white";
      cursorRef.current.style.mixBlendMode = "normal";
    };

    document.querySelectorAll("button, a, svg, img").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);
    animate();

    return () => {
      document.body.style.cursor = "default";
      elements.forEach((el) => ((el as HTMLElement).style.cursor = ""));
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("button, a, svg, img").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] shadow-md transition-transform duration-150 ease-out"
    />
  );
}
