import { useState } from "react";
import { Mail, MessageSquare, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-grid">
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-primary mb-4">
            Contato
          </h2>
          <div className="w-12 h-px bg-accent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="sr-only">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="input-field resize-none"
                  required
                />
              </div>
              
              <button type="submit" className="btn-accent w-full md:w-auto">
                Enviar mensagem
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-primary mb-4">
                Fale conosco
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:{{EMAIL}}" 
                  className="flex items-center text-text-secondary hover:text-accent transition-colors"
                >
                  <Mail size={20} className="mr-3" />
                  {"{{EMAIL}}"}
                </a>
                
                <a 
                  href="{{LINK_WHATS}}" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-text-secondary hover:text-accent transition-colors"
                >
                  <MessageSquare size={20} className="mr-3" />
                  WhatsApp
                </a>
                
                <a 
                  href="{{LINK_IG}}" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-text-secondary hover:text-accent transition-colors"
                >
                  <Instagram size={20} className="mr-3" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;