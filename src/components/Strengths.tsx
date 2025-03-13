
import { CheckCircle2 } from 'lucide-react';

const Strengths = () => {
  const strengths = [
    {
      title: "Compétences en Programmation",
      description: "Maîtrise de plusieurs langages de programmation tels que Java, Python et C++, ce qui me permet de développer des solutions logicielles efficaces et robustes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-blue">
          <path d="m18 16 4-4-4-4"></path>
          <path d="m6 8-4 4 4 4"></path>
          <path d="m14.5 4-5 16"></path>
        </svg>
      )
    },
    {
      title: "Projets Académiques Réussis",
      description: "Réalisation de plusieurs projets de classe, renforçant mes compétences techniques et ma capacité à appliquer les concepts appris en cours.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-blue">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
        </svg>
      )
    },
    {
      title: "Esprit d'Équipe",
      description: "Capacité à travailler efficacement en équipe, acquise à travers des projets collaboratifs, une bonne communication et une collaboration productive.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-blue">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="points-forts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading mx-auto">Points Forts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mes atouts principaux qui me distinguent dans le domaine de l'informatique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex justify-center mb-6">
                {strength.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{strength.title}</h3>
              <p className="text-gray-600">{strength.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-portfolio-blue to-portfolio-lightBlue rounded-lg p-8 text-white shadow-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 12 2 2 4-4"></path>
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9z"></path>
              </svg>
            </div>
            <div className="md:w-3/4 md:pl-8">
              <h3 className="text-2xl font-bold mb-4">En Résumé</h3>
              <p className="text-white/90 mb-4">
                Mon parcours académique et mes projets m'ont permis de développer un ensemble de compétences techniques et personnelles qui font de moi un candidat idéal pour relever les défis du secteur informatique.
              </p>
              <ul className="space-y-2">
                {strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>{strength.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strengths;
