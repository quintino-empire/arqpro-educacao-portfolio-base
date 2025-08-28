const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-grid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-light text-primary mb-6">
              Manifesto
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-text-secondary leading-relaxed mb-6">
                {"{{MANIFESTO_CURTO}}"}
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] bg-muted overflow-hidden">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-text-muted">Foto da equipe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;