import { Mail, MessageSquare, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-padding-sm bg-background border-t border-border">
      <div className="container-grid">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-lg font-light text-primary mb-2">
              {"{{NOME_DO_ESCRITORIO}}"}
            </div>
            <p className="text-text-secondary text-sm">
              {"{{CIDADE_UF}}"}
            </p>
            <p className="text-text-muted text-sm mt-2">
              © {currentYear} {"{{NOME_DO_ESCRITORIO}}"}. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:{{EMAIL}}" 
              className="text-text-secondary hover:text-accent transition-colors"
              aria-label="Enviar e-mail"
            >
              <Mail size={20} />
            </a>
            
            <a 
              href="{{LINK_WHATS}}" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare size={20} />
            </a>
            
            <a 
              href="{{LINK_IG}}" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;