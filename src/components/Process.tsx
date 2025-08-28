const Process = () => {
  const steps = [
    {
      title: "Briefing",
      description: "Entendimento profundo das necessidades e contexto do projeto"
    },
    {
      title: "Anteprojeto", 
      description: "Desenvolvimento conceitual e estudos volumétricos"
    },
    {
      title: "Obra",
      description: "Acompanhamento técnico e materialização do projeto"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-grid">
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-primary mb-4">
            Processo
          </h2>
          <div className="w-12 h-px bg-accent"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-light text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              
              <h3 className="text-lg md:text-xl font-medium text-primary mb-3">
                {step.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;