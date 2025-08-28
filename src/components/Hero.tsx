const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding pt-24 md:pt-32 bg-background">
      <div className="container-grid">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-primary mb-6">
            {"{{HERO_HEADLINE}}"}
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary mb-8 md:mb-12 max-w-2xl leading-relaxed">
            {"{{HERO_SUB}}"}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToPortfolio}
              className="btn-primary"
            >
              Ver projetos
            </button>
            <a 
              href="/contato" 
              className="btn-secondary text-center"
            >
              Fale conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;