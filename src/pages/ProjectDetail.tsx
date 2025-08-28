import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Mock project data - in real app this would come from API/CMS
  const projectData = {
    "projeto-1": {
      title: "{{PROJETO_1_TITULO}}",
      type: "{{PROJETO_1_TIPO}}",
      location: "{{PROJETO_1_CIDADE}}",
      year: "{{PROJETO_1_ANO}}",
      description: "{{PROJETO_1_TEXTO_CURTO}}",
      area: "250m²",
      team: "{{NOME_DO_ESCRITORIO}}",
      materials: "Concreto aparente, madeira, vidro"
    },
    "projeto-2": {
      title: "{{PROJETO_2_TITULO}}",
      type: "{{PROJETO_2_TIPO}}",
      location: "{{PROJETO_2_CIDADE}}",
      year: "{{PROJETO_2_ANO}}",
      description: "{{PROJETO_2_TEXTO_CURTO}}",
      area: "180m²",
      team: "{{NOME_DO_ESCRITORIO}}",
      materials: "Tijolo aparente, aço, madeira"
    },
    "projeto-3": {
      title: "{{PROJETO_3_TITULO}}",
      type: "{{PROJETO_3_TIPO}}",
      location: "{{PROJETO_3_CIDADE}}",
      year: "{{PROJETO_3_ANO}}",
      description: "{{PROJETO_3_TEXTO_CURTO}}",
      area: "320m²",
      team: "{{NOME_DO_ESCRITORIO}}",
      materials: "Concreto, vidro, jardim vertical"
    }
  };

  const project = projectData[slug as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-primary mb-4">Projeto não encontrado</h1>
          <Link to="/" className="btn-secondary">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    alt: `${project.title} - Imagem ${i + 1}`
  }));

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
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

      <main className="section-padding pt-8">
        <div className="container-grid">
          {/* Project Header */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-4">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-text-secondary">
              <span>{project.type}</span>
              <span>{project.location}</span>
              <span>{project.year}</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-[16/9] md:aspect-[21/9] bg-muted mb-12 md:mb-16 overflow-hidden">
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-text-muted">Imagem principal do projeto</span>
            </div>
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-12 md:mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-xl md:text-2xl font-light text-primary mb-6">
                Sobre o projeto
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-primary mb-6">
                Ficha técnica
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="border-b border-border-light pb-2">
                  <dt className="text-text-muted">Área</dt>
                  <dd className="text-text-secondary">{project.area}</dd>
                </div>
                
                <div className="border-b border-border-light pb-2">
                  <dt className="text-text-muted">Autor</dt>
                  <dd className="text-text-secondary">{project.team}</dd>
                </div>
                
                <div className="border-b border-border-light pb-2">
                  <dt className="text-text-muted">Ano</dt>
                  <dd className="text-text-secondary">{project.year}</dd>
                </div>
                
                <div className="border-b border-border-light pb-2">
                  <dt className="text-text-muted">Local</dt>
                  <dd className="text-text-secondary">{project.location}</dd>
                </div>
                
                <div>
                  <dt className="text-text-muted">Materiais</dt>
                  <dd className="text-text-secondary">{project.materials}</dd>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div>
            <h2 className="text-xl md:text-2xl font-light text-primary mb-8">
              Galeria
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryImages.map((image) => (
                <div key={image.id} className="aspect-[4/3] bg-muted overflow-hidden">
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <span className="text-text-muted text-sm">{image.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="section-padding-sm bg-muted/30 mt-16">
        <div className="container-grid">
          <div className="text-center">
            <Link to="/" className="btn-secondary">
              Ver mais projetos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;