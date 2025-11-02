const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black" id="top">
      <div className="flex flex-col lg:flex-row lg:h-screen">
        {/* Mobile Hero */}
        <div className="lg:hidden">
          <div className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-pink-900/20 animate-pulse-slow"></div>
            <div className="relative flex items-center justify-center min-h-screen px-6 pt-16">
              <div className="text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                  <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 flex items-center justify-center text-white text-6xl font-bold">
                      MU
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white leading-tight mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                    Maifee Ul Asad
                  </h1>
                </div>
                <div>
                  <p className="text-lg text-gray-300 leading-relaxed max-w-sm mx-auto px-4">
                    Full Stack Engineer & ML Enthusiast
                  </p>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Hero */}
        <div className="hidden lg:flex w-full lg:h-screen">
          <div className="w-[55%] bg-black flex flex-col justify-center px-16 xl:px-20">
            <div className="flex flex-col justify-center h-full">
              <div className="mb-12 text-left">
                <h1 className="text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white leading-none tracking-tight">
                  <span className="block">Maifee</span>
                  <span className="block">Ul Asad</span>
                </h1>
              </div>
              <div className="text-left">
                <p className="text-2xl text-white font-normal leading-relaxed">
                  Full Stack Engineer & ML Enthusiast
                </p>
              </div>
            </div>
          </div>
          <div className="w-[45%] h-full bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 flex items-center justify-center relative">
            <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
              <div className="text-white text-[20rem] font-black opacity-20">
                MU
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
