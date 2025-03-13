
import { useState } from 'react';
import { Calendar, Database, ShoppingCart, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Application de Gestion pour Cabinet Médical",
      description: "Gestion des rendez-vous, des dossiers des patients et de la facturation.",
      technologies: ["C#", ".NET", "SQL Server"],
      category: "desktop",
      icon: <Calendar className="h-10 w-10 text-portfolio-blue" />,
      points: [
        "Interface utilisateur intuitive pour les secrétaires médicales",
        "Système de gestion des rendez-vous avec rappels automatiques",
        "Stockage sécurisé des dossiers médicaux des patients",
        "Module de facturation et de suivi des paiements"
      ]
    },
    {
      id: 2,
      title: "Site E-commerce de Vente de PC",
      description: "Vente de PC avec fonctionnalités de recherche et d'achat en ligne.",
      technologies: ["Java", "JavaEE", "JSP", "MySQL"],
      category: "web",
      icon: <ShoppingCart className="h-10 w-10 text-portfolio-blue" />,
      points: [
        "Catalogue de produits avec filtres de recherche avancés",
        "Panier d'achat et processus de paiement sécurisé",
        "Système de comptes utilisateurs avec historique des commandes",
        "Panel d'administration pour la gestion des produits"
      ]
    },
    {
      id: 3,
      title: "Site de Location de Voitures",
      description: "Recherche, réservation et gestion des locations de véhicules.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      category: "web",
      icon: <Car className="h-10 w-10 text-portfolio-blue" />,
      points: [
        "Système de recherche de véhicules disponibles",
        "Réservation en ligne avec sélection de dates et d'options",
        "Gestion du parc automobile et des disponibilités",
        "Interface d'administration pour le suivi des locations"
      ]
    },
    {
      id: 4,
      title: "Base de Données pour Système Scolaire",
      description: "Conception et implémentation d'une base de données pour la gestion scolaire.",
      technologies: ["MySQL", "SQL", "Conception BDD"],
      category: "database",
      icon: <Database className="h-10 w-10 text-portfolio-blue" />,
      points: [
        "Modélisation des entités (étudiants, professeurs, cours, notes)",
        "Optimisation des requêtes pour les performances",
        "Procédures stockées pour les opérations courantes",
        "Système de sauvegarde et de restauration des données"
      ]
    }
  ];
  
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);
  
  const tabs = [
    { id: 'all', label: 'Tous' },
    { id: 'web', label: 'Web' },
    { id: 'desktop', label: 'Bureau' },
    { id: 'database', label: 'Base de Données' }
  ];

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading mx-auto">Mes Projets</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-uns des projets sur lesquels j'ai travaillé pendant ma formation.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 p-1 bg-gray-100 rounded-lg">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === tab.id
                    ? "bg-white shadow-sm text-portfolio-blue font-medium"
                    : "text-gray-600 hover:text-portfolio-blue"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="opacity-0 animate-fade-in hover:shadow-lg transition-all"
              style={{ 
                animationDelay: `${0.1 + index * 0.1}s`, 
                animationFillMode: 'forwards' 
              }}>
              <CardHeader className="flex flex-row items-start space-x-4 pb-4">
                <div className="bg-gray-50 p-2 rounded-lg">
                  {project.icon}
                </div>
                <div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-portfolio-blue mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-portfolio-blue/10 text-portfolio-blue px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
