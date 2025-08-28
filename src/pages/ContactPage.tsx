import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container-grid">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link 
              to="/" 
              className="flex items-center text-text-secondary hover:text-accent transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Voltar
            </Link>
            
            <div className="text-lg md:text-xl font-light text-primary">
              {"{{NOME_DO_ESCRITORIO}}"}
            </div>
          </div>
        </div>
      </header>

      <main className="pt-8">
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;