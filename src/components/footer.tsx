import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const socialLinks = [
    { name: "GitHub", href: "#", icon: "github" },
    { name: "LinkedIn", href: "#", icon: "linkedin" },
    { name: "Twitter", href: "#", icon: "twitter" },
    { name: "Instagram", href: "#", icon: "instagram" }
  ];

  const getSocialIcon = (iconName: string) => {
    const iconClass = "w-5 h-5";
    
    switch (iconName) {
      case "github":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case "linkedin":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case "twitter":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        );
      case "instagram":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C8.396 0 7.929.01 7.102.048 6.273.087 5.718.222 5.238.42a5.893 5.893 0 00-2.134 1.388A5.918 5.918 0 00.42 3.946c-.198.48-.333 1.035-.372 1.864C.01 6.637 0 7.104 0 10.725v2.55c0 3.621.01 4.088.048 4.915.039.829.174 1.384.372 1.864.205.52.478.96.888 1.37.41.41.85.683 1.37.888.48.198 1.035.333 1.864.372.827.038 1.294.048 4.915.048h2.55c3.621 0 4.088-.01 4.915-.048.829-.039 1.384-.174 1.864-.372a5.893 5.893 0 002.134-1.388 5.918 5.918 0 001.388-2.134c.198-.48.333-1.035.372-1.864.038-.827.048-1.294.048-4.915v-2.55c0-3.621-.01-4.088-.048-4.915-.039-.829-.174-1.384-.372-1.864a5.893 5.893 0 00-1.388-2.134A5.918 5.918 0 0018.864.42C18.384.222 17.829.087 17 .048 16.173.01 15.706 0 12.085 0h-2.55-.518zm1.368 2.171c3.362 0 3.76.014 5.086.072.769.035 1.187.166 1.464.276.368.143.63.314.906.59.276.276.447.538.59.906.11.277.241.695.276 1.464.058 1.326.072 1.724.072 5.086 0 3.362-.014 3.76-.072 5.086-.035.769-.166 1.187-.276 1.464-.143.368-.314.63-.59.906-.276.276-.538.447-.906.59-.277.11-.695.241-1.464.276-1.326.058-1.724.072-5.086.072-3.362 0-3.76-.014-5.086-.072-.769-.035-1.187-.166-1.464-.276a2.44 2.44 0 01-.906-.59 2.44 2.44 0 01-.59-.906c-.11-.277-.241-.695-.276-1.464-.058-1.326-.072-1.724-.072-5.086 0-3.362.014-3.76.072-5.086.035-.769.166-1.187.276-1.464.143-.368.314-.63.59-.906.276-.276.538-.447.906-.59.277-.11.695-.241 1.464-.276 1.326-.058 1.724-.072 5.086-.072z"/>
            <path d="M12.017 15.33a3.313 3.313 0 110-6.626 3.313 3.313 0 010 6.626zm0-8.468a5.155 5.155 0 100 10.31 5.155 5.155 0 000-10.31z"/>
            <path d="M19.846 6.595a1.204 1.204 0 11-2.408 0 1.204 1.204 0 012.408 0z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Call to Action Banner */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-16 hover:border-gray-700 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Let&apos;s work together
              </h3>
              <p className="text-gray-400">
                Ready to bring your ideas to life? Let&apos;s create something amazing together.
              </p>
            </div>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all hover:scale-105"
            >
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <h4 className="text-2xl font-bold text-blue-400 mb-4">
              Tolga Zorlu
            </h4>
            <p className="text-gray-400 mb-6">
              I&apos;m a fullstack designer with a passion for creating an amazing experience for users.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                >
                  {getSocialIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-6">Quick Links</h5>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-6">Get in Touch</h5>
            <div className="space-y-4">
              <div className="flex items-center gap-2  text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Currently Available for Projects
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-blue-400">contact@tolgazorlu.nl</span>
                  <button className="ml-auto text-gray-400 hover:text-white">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
              <Link 
                href="/contact"
                className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Tolga Zorlu. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span>Follow me:</span>
            <Link href="#" className="hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}