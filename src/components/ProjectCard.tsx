import { Link } from "react-router-dom";

interface ProjectCardProps {
  slug: string;
  title: string;
  type: string;
  location: string;
  year: string;
  imageUrl?: string;
}

const ProjectCard = ({ slug, title, type, location, year, imageUrl }: ProjectCardProps) => {
  return (
    <Link to={`/projetos/${slug}`} className="project-card block">
      <div className="project-card-image">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`${title} - ${type} em ${location}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-text-muted text-sm">Imagem do projeto</span>
          </div>
        )}
      </div>
      
      <div className="project-card-content">
        <h3 className="font-medium text-primary mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        
        <div className="space-y-1 text-sm text-text-secondary">
          <p>{type}</p>
          <p>{location}</p>
          <p>{year}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;