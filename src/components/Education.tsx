
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      id: 1,
      degree: "Études en Informatique",
      institution: "Université Privée de Fès",
      period: "2021 - Présent",
      description: "Spécialité en Génie Informatique, avec focus sur le développement logiciel, les bases de données et les systèmes d'information."
    },
    {
      id: 2,
      degree: "Bac Scientifique option sciences physiques",
      institution: "Lycée Al Mansour Dahbi",
      period: "2021",
      description: "Formation scientifique solide avec spécialisation en sciences physiques, développant des compétences analytiques et méthodiques."
    }
  ];

  return (
    <section id="formation" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading mx-auto">Formation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mon parcours académique et les compétences que j'ai développées.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline center line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-portfolio-blue/20 rounded"></div>
            
            {/* Education items */}
            <div className="space-y-12">
              {educationItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } opacity-0 animate-fade-in`}
                  style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
                >
                  {/* Circle on timeline */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-portfolio-blue border-4 border-white z-10"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-10 md:pl-0`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 text-portfolio-blue mb-2">
                        <GraduationCap size={18} />
                        <h3 className="font-semibold text-lg">{item.degree}</h3>
                      </div>
                      <p className="text-gray-700 font-medium">{item.institution}</p>
                      <div className="flex items-center gap-1 text-gray-500 text-sm mt-1 mb-3">
                        <Calendar size={14} />
                        <span>{item.period}</span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
