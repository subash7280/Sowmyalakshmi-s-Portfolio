"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export function AnimatedBackground() {
  const containerRef = useRef(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const mouseRef = useRef({ x: 50, y: 50 });
  const currentRef = useRef({ x: 50, y: 50 });
  const rafRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMouse = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };
    };

    const animate = () => {
      // Smooth interpolation towards mouse
      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * 0.02;
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * 0.02;

      const el = containerRef.current;
      if (el) {
        el.style.setProperty("--mx", `${currentRef.current.x}%`);
        el.style.setProperty("--my", `${currentRef.current.y}%`);
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouse);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mounted]);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
      style={{ "--mx": "50%", "--my": "50%" }}
    >
      {/* Mesh gradient orb 1 - follows mouse loosely */}
      <div
        className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full blur-[120px] md:blur-[180px]"
        style={{
          left: "var(--mx)",
          top: "var(--my)",
          transform: "translate(-50%, -50%)",
          background: isDark
            ? "radial-gradient(circle, hsla(340, 60%, 55%, 0.12) 0%, transparent 70%)"
            : "radial-gradient(circle, hsla(340, 70%, 80%, 0.18) 0%, transparent 70%)",
          transition: "background 0.5s ease",
        }}
      />

      {/* Mesh gradient orb 2 - auto animated, top-left drift */}
      <div
        className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-[100px] md:blur-[160px]"
        style={{
          top: "-10%",
          left: "-5%",
          background: isDark
            ? "radial-gradient(circle, hsla(280, 40%, 50%, 0.08) 0%, transparent 70%)"
            : "radial-gradient(circle, hsla(280, 50%, 85%, 0.15) 0%, transparent 70%)",
          animation: "mesh-move-1 25s ease-in-out infinite",
        }}
      />

      {/* Mesh gradient orb 3 - auto animated, bottom-right drift */}
      <div
        className="absolute w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full blur-[100px] md:blur-[150px]"
        style={{
          bottom: "-10%",
          right: "-5%",
          background: isDark
            ? "radial-gradient(circle, hsla(200, 50%, 45%, 0.08) 0%, transparent 70%)"
            : "radial-gradient(circle, hsla(200, 60%, 85%, 0.14) 0%, transparent 70%)",
          animation: "mesh-move-2 30s ease-in-out infinite",
        }}
      />

      {/* Mesh gradient orb 4 - center drift */}
      <div
        className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full blur-[100px] md:blur-[140px]"
        style={{
          top: "40%",
          left: "40%",
          background: isDark
            ? "radial-gradient(circle, hsla(340, 50%, 60%, 0.06) 0%, transparent 70%)"
            : "radial-gradient(circle, hsla(340, 60%, 88%, 0.12) 0%, transparent 70%)",
          animation: "mesh-move-3 22s ease-in-out infinite",
        }}
      />

      {/* Subtle noise/grain overlay for texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}

export function FloatingShapes() {
  return null;
}
