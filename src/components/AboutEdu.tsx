export default function AboutEdu() {
  return (
    <section className="bg-black px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L21 9l-9-6zM18.82 9L12 12.72 5.18 9 12 5.28 18.82 9zM17 16l-5 2.72L7 16v-3.54L12 15l5-2.54V16z"/>
          </svg>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Education & Credentials</h2>
        </div>

        <div className="space-y-20">
          {/* Bachelor's Degree */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-4">
            {/* Left Column - Dates and Basic Info */}
            <div className="space-y-4">
              <div className="text-blue-600 font-medium text-lg">2022 - Going On</div>
              <h3 className="text-3xl font-bold text-white">Bachelor's Degree</h3>
              <p className="text-neutral-400 text-lg">Amsterdam University of Applied Sciences</p>
            </div>

            {/* Right Column - Detailed Info */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-white">Communication and Multimedia Design</h4>
              <p className="text-neutral-300 leading-relaxed text-lg">
                In the Communication and Multimedia Design programme I’m diving deeper into the UI and UX side of digital product development. I already discovered my love for coding in my previous studies, and this programme at the Amsterdam University of Applied Sciences is helping me connect that with design. I’m learning how to create interfaces and experiences that are not only visually strong, but genuinely useful for real users and clients.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">3D Design</span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">UX Design</span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">Front-end Development</span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">Prototyping</span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">Interaction Design</span>
              </div>
            </div>
          </div>

        <div className="py-8">
            <div className="mx-auto border-t border-gray-800" />
        </div>

          {/* Art Diploma */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-4">
            {/* Left Column - Dates and Basic Info */}
            <div className="space-y-4">
              <div className="text-blue-600 font-medium text-lg">2018 - 2022</div>
              <h3 className="text-3xl font-bold text-white">Software Developer Degree</h3>
              <p className="text-neutral-400 text-lg">Grafisch Lyceum Rotterdam</p>
            </div>

            {/* Right Column - Detailed Info */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-white">Communication and Multimedia Design</h4>
              <p className="text-neutral-300 leading-relaxed text-lg">
                I began my high school studies in the humanities track at, where I developed a strong foundation in critical 
                thinking and cultural studies. After one year, I transitioned to Ölçum High School to pursue my passion for 
                creativity, focusing on art and design. This shift allowed me to explore visual storytelling, composition, and 
                design fundamentals—laying the groundwork for my future in graphic and product design.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">Art & Design</span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">Critical Thinking</span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">Design Fundamentals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
