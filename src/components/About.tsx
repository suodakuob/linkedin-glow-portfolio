
import { Check, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <h2 className="section-heading">À Propos de Moi</h2>
            </div>
            
            <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <p className="text-gray-700">
                Je suis actuellement étudiant en 3ème année à l'Université Privée de Fès, spécialisé en Génie Informatique. 
                J'ai acquis des compétences solides en programmation, en résolution de problèmes et en travail d'équipe.
              </p>
              <p className="text-gray-700">
                Passionné par l'innovation, je cherche à créer des solutions logicielles efficaces et robustes qui répondent 
                aux besoins réels des utilisateurs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <div className="flex items-start gap-2">
                <Check className="text-portfolio-blue mt-1 flex-shrink-0" />
                <span>Basé à Fès, Maroc</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-portfolio-blue mt-1 flex-shrink-0" />
                <span>Disponible pour des opportunités</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-portfolio-blue mt-1 flex-shrink-0" />
                <span>+212-672811787</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-portfolio-blue mt-1 flex-shrink-0" />
                <span>mehdibkds@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Points Forts</h3>
            </div>
            
            <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <h4 className="font-medium text-portfolio-blue flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-2"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                  Compétences en Programmation
                </h4>
                <p className="text-gray-700">
                  Maîtrise de plusieurs langages de programmation tels que Java, Python et C++, ce qui me permet de développer des solutions logicielles efficaces et robustes.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <h4 className="font-medium text-portfolio-blue flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
                  Projets Académiques Réussis
                </h4>
                <p className="text-gray-700">
                  Réalisation de plusieurs projets de classe, renforçant mes compétences techniques et ma capacité à appliquer les concepts appris en cours.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <h4 className="font-medium text-portfolio-blue flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  Esprit d'Équipe
                </h4>
                <p className="text-gray-700">
                  Capacité à travailler efficacement en équipe, acquise à travers des projets collaboratifs, une bonne communication et une collaboration productive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
