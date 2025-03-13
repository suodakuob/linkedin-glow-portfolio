
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Mail size={20} />, href: "mailto:mehdibkds@gmail.com", label: "Email" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <a href="#accueil" className="text-2xl font-heading font-bold">
              Mehdi<span className="text-portfolio-lightBlue">.B</span>
            </a>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#accueil" className="hover:text-portfolio-lightBlue transition-colors">Accueil</a>
            <a href="#about" className="hover:text-portfolio-lightBlue transition-colors">À propos</a>
            <a href="#competences" className="hover:text-portfolio-lightBlue transition-colors">Compétences</a>
            <a href="#projets" className="hover:text-portfolio-lightBlue transition-colors">Projets</a>
            <a href="#contact" className="hover:text-portfolio-lightBlue transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-4 mb-8">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                aria-label={link.label}
                className="bg-gray-800 p-2 rounded-full hover:bg-portfolio-blue transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Mehdi Boukadous. Tous droits réservés.</p>
            <p className="mt-1">Ingénieur Informatique | Développeur Web</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
