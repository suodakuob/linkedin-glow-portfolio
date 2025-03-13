
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50 pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-3/5 space-y-6 animate-fade-in">
          <div className="space-y-2">
            <p className="text-portfolio-blue font-medium text-lg md:text-xl">Bonjour, je suis</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900">
              Mehdi Boukadous
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 font-light">
              Ingénieur Informatique
            </p>
          </div>
          
          <p className="text-gray-700 text-lg max-w-xl">
            Étudiant en 3ème année à l'Université Privée de Fès, spécialité Génie Informatique. 
            Passionné par l'innovation et la résolution de problèmes complexes.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-portfolio-blue hover:bg-portfolio-darkBlue">
              <a href="#contact">Me contacter</a>
            </Button>
            <Button asChild variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10">
              <a href="#projets">Voir mes projets</a>
            </Button>
          </div>
        </div>
        
        <div className="md:w-2/5 flex justify-center animate-fade-in animate-delay-200">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/lovable-uploads/c005c6d7-d49d-4c31-a536-9be9078b30c2.png" 
                alt="Mehdi Boukadous" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
              <div className="bg-portfolio-blue text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="block text-gray-400 hover:text-portfolio-blue transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
