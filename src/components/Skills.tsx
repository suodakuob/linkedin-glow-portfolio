
import { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('competences');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = [
    {
      title: "Programmation",
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "JS", level: 75 },
        { name: "JAVA", level: 85 },
        { name: "MYSQL", level: 70 },
        { name: "PHP", level: 65 },
        { name: "C#", level: 60 },
        { name: "C++", level: 75 },
        { name: "C", level: 80 },
        { name: "PYTHON", level: 70 },
      ]
    },
    {
      title: "Autres Technologies",
      skills: [
        { name: "VMWARE", level: 60 },
        { name: "SQL", level: 75 },
        { name: "CiscoPacketTracer", level: 65 },
      ]
    },
    {
      title: "Langues",
      skills: [
        { name: "ANGLAIS", level: 70 },
        { name: "FRANÇAIS", level: 90 },
        { name: "ARABE", level: 95 },
      ]
    }
  ];

  return (
    <section id="competences" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading mx-auto">Compétences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mes compétences techniques et linguistiques acquises à travers ma formation et mes projets.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="opacity-0 animate-fade-in" style={{ 
              animationDelay: `${0.1 + index * 0.1}s`, 
              animationFillMode: 'forwards',
              animationPlayState: isVisible ? 'running' : 'paused' 
            }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.title}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-portfolio-blue">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-portfolio-blue h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${0.2 + skillIndex * 0.05}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3 opacity-0 animate-fade-in" style={{ 
          animationDelay: '0.6s', 
          animationFillMode: 'forwards',
          animationPlayState: isVisible ? 'running' : 'paused' 
        }}>
          {skillCategories.flatMap(category => 
            category.skills.map(skill => (
              <span key={skill.name} className="skill-badge">
                {skill.name}
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
