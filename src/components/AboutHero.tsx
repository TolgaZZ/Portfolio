"use client";

import { useEffect, useRef } from "react";

export default function AboutHero() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;

      const rect = gridRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      const overlay = gridRef.current.querySelector(
        ".grid-overlay"
      ) as HTMLElement | null;

      if (overlay) {
        overlay.style.setProperty("--mouse-x", `${x}%`);
        overlay.style.setProperty("--mouse-y", `${y}%`);
      }
    };

    const gridElement = gridRef.current;
    if (!gridElement) return;

    gridElement.addEventListener("mousemove", handleMouseMove);
    return () => gridElement.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={gridRef}
      className="relative isolate overflow-hidden hero-gradient grid-background min-h-[45svh]"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(to top, #000000 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.3) 50%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-[30vh] md:pt-[20vh] pb-24 text-center">
        <div className="flex flex-col items-center gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 border border-blue-500/30 px-4 py-2 text-sm text-blue-400 mb-6">
            About me
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
            Who am I and what have I done so far?
          </h1>
        </div>
      </div>
    </section>
  );
}
