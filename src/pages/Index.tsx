
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Strengths from '@/components/Strengths';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Mehdi Boukadous | Ingénieur Informatique";
    
    // Add background grid pattern
    document.body.classList.add('bg-grid-pattern');
    
    return () => {
      document.body.classList.remove('bg-grid-pattern');
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
