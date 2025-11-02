import { useEffect, useState, useRef } from 'react';

const About = () => {
  const [visibleWords, setVisibleWords] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const text = "A passionate Full Stack Engineer with expertise in Python, JavaScript, TypeScript, and Machine Learning. I love building innovative solutions and contributing to open-source projects that bring value to the ecosystem.";
  const words = text.split(' ');

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
      const wordsToShow = Math.floor(scrollProgress * words.length);
      setVisibleWords(wordsToShow);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [words.length]);

  return (
    <section id="about" className="bg-white px-4 sm:px-6" ref={sectionRef}>
      <div className="relative">
        <div style={{ height: '400vh', width: '100%', padding: '0px 24px' }}>
          <div className="sticky left-0 top-0 flex items-center justify-center" style={{ height: '25%', padding: '40px 0px' }}>
            <div className="relative max-w-6xl mx-auto">
              <div className="flex items-center mb-12">
                <span className="inline-flex items-center text-sm font-medium tracking-wider uppercase text-black">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>About
                </span>
              </div>
              <div className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-medium max-w-5xl">
                <div className="text-gray-400" style={{ opacity: 0.3 }}>
                  {text}
                </div>
                <div className="absolute inset-0 text-gray-900 pointer-events-none">
                  {words.map((word, index) => (
                    <span 
                      key={index}
                      style={{ 
                        opacity: index < visibleWords ? 1 : 0,
                        transition: 'opacity 0.2s linear'
                      }}
                    >
                      {word}{' '}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
