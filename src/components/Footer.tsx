const Footer = () => {
  return (
    <footer id="contact" className="bg-white text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 lg:mb-20">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-gray-400 text-sm font-medium tracking-wider">Get In Touch</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <a
                  href="mailto:maifeeulasad@gmail.com"
                  className="text-black hover:text-gray-600 transition-colors font-medium"
                >
                  maifeeulasad@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="tel:+8801783529570"
                  className="text-black hover:text-gray-600 transition-colors font-medium text-2xl"
                >
                  +880-1783-529-570
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-gray-400 text-sm font-medium tracking-wider">Location</h3>
            <div className="space-y-2">
              <div className="text-black font-medium text-base sm:text-lg">Maifee Ul Asad</div>
              <div className="text-black">
                <div className="leading-relaxed text-sm sm:text-base">Halishahar H/A</div>
                <div className="leading-relaxed text-sm sm:text-base">Chittagong - 4216</div>
                <div className="leading-relaxed text-sm sm:text-base">Bangladesh</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-gray-400 text-sm font-medium tracking-wider">Follow Me</h3>
            <div className="space-y-3">
              <div>
                <a
                  href="https://github.com/maifeeulasad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a
                  href="https://linkedin.com/in/maifeeulasad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-gray-400 text-sm font-medium tracking-wider">Menu</h3>
            <div className="space-y-2 sm:space-y-3">
              <div>
                <a href="#top" className="text-black hover:text-gray-600 transition-colors">
                  Home
                </a>
              </div>
              <div>
                <a href="#work" className="text-black hover:text-gray-600 transition-colors">
                  Projects
                </a>
              </div>
              <div>
                <a href="#about" className="text-black hover:text-gray-600 transition-colors">
                  About
                </a>
              </div>
              <div>
                <a href="#contact" className="text-black hover:text-gray-600 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <h1 className="text-[20vw] sm:text-[18vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] font-black leading-[0.7] tracking-tighter uppercase text-black whitespace-nowrap">
            MAIFEE UL ASAD
          </h1>
        </div>
      </div>

      <div className="bg-white border-t border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400 space-y-2 sm:space-y-0">
            <div className="text-center sm:text-left">Copyright © 2025 Maifee Ul Asad</div>
            <div className="flex items-center">
              Built with React, TypeScript & Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
