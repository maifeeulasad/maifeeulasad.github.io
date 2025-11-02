import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Publications from './components/Publications';
import Patents from './components/Patents';
import Awards from './components/Awards';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const [_, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 scroll-smooth font-roboto">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <FAQ />
      <Publications />
      <Patents />
      <Awards />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;

