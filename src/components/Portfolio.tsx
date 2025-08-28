import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const projects = [
    {
      slug: "projeto-1",
      title: "{{PROJETO_1_TITULO}}",
      type: "{{PROJETO_1_TIPO}}",
      location: "{{PROJETO_1_CIDADE}}",
      year: "{{PROJETO_1_ANO}}"
    },
    {
      slug: "projeto-2", 
      title: "{{PROJETO_2_TITULO}}",
      type: "{{PROJETO_2_TIPO}}",
      location: "{{PROJETO_2_CIDADE}}",
      year: "{{PROJETO_2_ANO}}"
    },
    {
      slug: "projeto-3",
      title: "{{PROJETO_3_TITULO}}",
      type: "{{PROJETO_3_TIPO}}",
      location: "{{PROJETO_3_CIDADE}}",
      year: "{{PROJETO_3_ANO}}"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-grid">
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-primary mb-4">
            Projetos
          </h2>
          <div className="w-12 h-px bg-accent"></div>
        </div>
        
        <div className="grid-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              type={project.type}
              location={project.location}
              year={project.year}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;