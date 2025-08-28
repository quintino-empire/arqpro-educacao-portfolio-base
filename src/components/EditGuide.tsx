const EditGuide = () => {
  return (
    <section className="section-padding bg-accent-muted">
      <div className="container-grid">
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-light text-primary mb-8">
            📘 Guia de Edição
          </h2>
          
          <div className="space-y-8">
            {/* 1. Textos e Cores */}
            <div>
              <h3 className="text-lg font-medium text-primary mb-4">
                1. Onde editar textos e cores
              </h3>
              <div className="bg-background p-6 border border-border space-y-3 text-sm">
                <p><strong>Textos:</strong> Substitua os placeholders {"{{NOME_DO_ESCRITORIO}}"}, {"{{HERO_HEADLINE}}"}, etc. nos arquivos de componentes em <code>src/components/</code></p>
                <p><strong>Cores:</strong> Edite as variáveis CSS em <code>src/index.css</code> (seção :root)</p>
                <p><strong>Tipografia:</strong> Ajuste as classes em <code>src/index.css</code> e <code>tailwind.config.ts</code></p>
              </div>
            </div>

            {/* 2. Trocar Imagens */}
            <div>
              <h3 className="text-lg font-medium text-primary mb-4">
                2. Como trocar imagens
              </h3>
              <div className="bg-background p-6 border border-border space-y-3 text-sm">
                <p><strong>Método 1:</strong> Substitua as divs placeholder por tags {"<img>"} com src apontando para suas imagens</p>
                <p><strong>Método 2:</strong> Use o sistema de assets do projeto, salvando imagens em <code>public/images/</code></p>
                <p><strong>Otimização:</strong> Use formato WebP e adicione <code>loading="lazy"</code> para performance</p>
              </div>
            </div>

            {/* 3. Adicionar Novo Projeto */}
            <div>
              <h3 className="text-lg font-medium text-primary mb-4">
                3. Como adicionar novo projeto (passo a passo)
              </h3>
              <div className="bg-background p-6 border border-border space-y-4 text-sm">
                <div>
                  <p className="font-medium mb-2">Passo 1: Editar lista de projetos</p>
                  <p>No arquivo <code>src/components/Portfolio.tsx</code>, adicione um novo objeto no array <code>projects</code>:</p>
                  <pre className="bg-muted p-3 mt-2 overflow-x-auto text-xs">
{`{
  slug: "novo-projeto",
  title: "Nome do Projeto",
  type: "Residencial/Comercial/Institucional",
  location: "Cidade, Estado",
  year: "2024"
}`}
                  </pre>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Passo 2: Adicionar dados detalhados</p>
                  <p>No arquivo <code>src/pages/ProjectDetail.tsx</code>, adicione uma nova entrada no objeto <code>projectData</code>:</p>
                  <pre className="bg-muted p-3 mt-2 overflow-x-auto text-xs">
{`"novo-projeto": {
  title: "Nome do Projeto",
  type: "Tipo",
  location: "Local",
  year: "Ano",
  description: "Descrição de 200-300 caracteres...",
  area: "000m²",
  team: "Nome do Escritório",
  materials: "Lista de materiais principais"
}`}
                  </pre>
                </div>

                <div>
                  <p className="font-medium mb-2">Campos obrigatórios:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>slug:</strong> identificador único (sem espaços, minúsculas)</li>
                    <li><strong>title:</strong> nome do projeto</li>
                    <li><strong>type:</strong> tipologia (Residencial/Comercial/Institucional)</li>
                    <li><strong>location:</strong> cidade e estado</li>
                    <li><strong>year:</strong> ano de conclusão</li>
                    <li><strong>description:</strong> texto introdutório (200-300 caracteres)</li>
                    <li><strong>area:</strong> área construída</li>
                    <li><strong>materials:</strong> materiais principais utilizados</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditGuide;