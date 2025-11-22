"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        const overlay = gridRef.current.querySelector('.grid-overlay') as HTMLElement;
        if (overlay) {
          overlay.style.setProperty('--mouse-x', `${x}%`);
          overlay.style.setProperty('--mouse-y', `${y}%`);
        }
      }
    };

    const gridElement = gridRef.current;
    if (gridElement) {
      gridElement.addEventListener('mousemove', handleMouseMove);
      return () => gridElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section ref={gridRef} className="relative isolate overflow-hidden hero-gradient grid-background">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none"></div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-2 pointer-events-none z-20" style={{
        background: 'linear-gradient(to top, #000000 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.3) 50%, transparent 100%)'
      }}></div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[85svh] max-w-6xl flex-col items-center justify-center px-6 pt-32 text-center md:pt-40">
        <main className="w-full">
          <div className="mx-auto max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-900/100 border border-blue-500/40 px-4 py-2 text-sm text-blue-200 mb-8">
              <span className="text-orange-400">🔥</span>
              UI/UX Designer & Developer
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Hi, I&apos;m Tolga
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mx-auto mb-12 max-w-4xl leading-relaxed">
              I love to blend design aesthetics with technical expertise to create stunning, functional digital experiences that drive results.
            </p>

            <div className="flex flex-row gap-4 justify-center items-center">
              <Link 
                href="/work" 
                className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-600 hover:scale-105 shadow-lg shadow-blue-500/30 "
              >
                View Projects
              </Link>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-lg border border-gray-400 bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:border-gray-300 hover:bg-white/10 hover:scale-105"
              >
                Connect on Linkedin
              </Link>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}