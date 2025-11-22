export default function Services() {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful interfaces that engage users and enhance their experience. I focus on user-centered design principles to build products that are not only visually appealing but also functional and easy to use.",
      tags: ["UI/UX", "Wireframing", "Prototyping", "User Research"],
      iconPath: "/UI&UX Design.svg"
    },
    {
      title: "Web Design", 
      description: "Crafting visually stunning websites that combine aesthetics with functionality for optimal user experience. I create responsive designs that look great on all devices and focus on performance optimization to ensure fast loading times.",
      tags: ["Responsive", "Modern", "Interactive", "Accessible"],
      iconPath: "/Web Design.svg"
    },
    {
      title: "Development",
      description: "Building robust, scalable applications with modern frameworks like React, Next.js, and Node.js. I write clean, maintainable code and follow best practices to ensure your applications are secure, performant, and ready for growth.",
      tags: ["Frontend", "Backend", "Full-stack", "API Integration"],
      iconPath: "/Development.svg"
    },
    {
      title: "Branding",
      description: "Creating cohesive brand identities that help businesses stand out and connect with their audience. This includes logo design, color palettes, typography, and comprehensive brand guidelines to ensure consistency across all touchpoints.",
      tags: ["Identity", "Strategy", "Guidelines", "Visual Elements"],
      iconPath: "/Branding.svg"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Column - Header */}
        <div className="lg:col-span-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 border border-blue-500/30 px-4 py-2 text-sm text-blue-400 mb-6">
            My Services
          </div>
          
          <h2 className="text-6xl md:text-5xl font-bold text-white mb-6 leading-tight">
            What I Can Do For You
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I offer comprehensive digital services to help bring your vision to life. Every project is approached with care and precision. From concept to completion, I work closely with clients to ensure their needs are met and expectations are exceeded.
          </p>
          
          <button className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-white font-semibold transition-all hover:bg-blue-600 hover:scale-105">
            Get In Touch
          </button>
        </div>
        
        {/* Right Column - Services Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Service card */}
              <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-sm overflow-hidden flex flex-col hover:border-gray-700 transition-all duration-300">
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-8 text-sm">
                  {service.description}
                </p>
                
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl blur-xl"></div>
                    <img 
                      src={service.iconPath} 
                      alt={`${service.title} icon`}
                      className="relative w-36 h-36 opacity-80"
                    />
                  </div>
                </div>
                
                {/* Divider */}
                <div className="w-full h-px bg-gray-700 mb-6"></div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs text-gray-500 px-2 py-1 rounded bg-gray-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}