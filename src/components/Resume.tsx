export default function Resume() {
  const technologies = [
    { name: "Motion", logo: "/logos/motion.png", color: "yellow" },
    { name: "Tailwind CSS", logo: "/logos/tailwind.png", color: "cyan" },
    { name: "Sanity", logo: "/logos/sanity.png", color: "red" },
    { name: "Framer", logo: "/logos/framer.png", color: "blue" },
    { name: "Sketch", logo: "/logos/sketch.png", color: "orange" },
    { name: "AfterEffects", logo: "/logos/aftereffects.png", color: "purple" },
    { name: "Figma", logo: "/logos/figma.png", color: "multicolor" },
    { name: "Webflow", logo: "/logos/webflow.png", color: "blue" },
    { name: "Spline", logo: "/logos/spline.png", color: "purple" },
    { name: "Illustrator", logo: "/logos/illustrator.png", color: "orange" }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
        {/* Left Column - Content */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 border border-blue-500/30 px-4 py-2 text-sm text-blue-400 mb-6">
            Resume
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            My Professional Journey
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            View my resume to explore my experience, skills, and qualifications in detail. I&apos;ve 
            collaborated with industry-leading companies to deliver exceptional results for 
            various projects.
          </p>
          
          <div className="flex flex-row gap-4">
            <button className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-white font-semibold transition-all hover:bg-blue-600 hover:scale-105">
              About Me
            </button>
            
            <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-600 bg-transparent px-6 py-3 text-white font-semibold transition-all hover:border-gray-500 hover:bg-white/10 hover:scale-105">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Resume
            </button>
          </div>
        </div>
        
     
       
       
      </div>
    </section>
  );
}