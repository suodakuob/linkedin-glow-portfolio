
import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message envoyé !",
        description: "Merci de m'avoir contacté. Je vous répondrai dès que possible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-portfolio-blue" />,
      title: "Adresse",
      details: "Fès, Maroc"
    },
    {
      icon: <Phone className="h-5 w-5 text-portfolio-blue" />,
      title: "Téléphone",
      details: "+212-672811787"
    },
    {
      icon: <Mail className="h-5 w-5 text-portfolio-blue" />,
      title: "Email",
      details: "mehdibkds@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading mx-auto">Contact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de projets, d'opportunités ou simplement pour échanger.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
              >
                <div className="bg-portfolio-blue/10 p-3 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.details}</p>
                </div>
              </div>
            ))}

            <div className="p-6 bg-portfolio-blue text-white rounded-lg shadow-md mt-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <h3 className="font-semibold text-xl mb-3">Disponible pour des opportunités</h3>
              <p className="text-white/90">
                Je suis actuellement à la recherche d'opportunités dans le domaine du développement informatique. N'hésitez pas à me contacter pour discuter de vos projets.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Nom</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Sujet</label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Sujet de votre message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Votre message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-portfolio-blue hover:bg-portfolio-darkBlue"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer le message
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
