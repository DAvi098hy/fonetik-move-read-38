import { CheckCircle, Brain, Target, Eye, Zap } from "lucide-react";

export const SolutionSection = () => {
  const benefits = [
    {
      icon: <Brain className="w-8 h-8 text-success" />,
      title: "Fortalece Conexões Cerebrais",
      description: "O movimento da mão ativa áreas do cérebro responsáveis pela memória e aprendizagem"
    },
    {
      icon: <Target className="w-8 h-8 text-success" />,
      title: "Desenvolve Coordenação",
      description: "Melhora a coordenação motora fina, essencial para a escrita e leitura fluente"
    },
    {
      icon: <Eye className="w-8 h-8 text-success" />,
      title: "Aumenta o Foco",
      description: "As atividades são curtas e envolventes, perfeitas para manter a atenção da criança"
    },
    {
      icon: <Zap className="w-8 h-8 text-success" />,
      title: "Desperta o Interesse",
      description: "Transforma o aprendizado em brincadeira, eliminando a resistência à leitura"
    }
  ];

  return (
    <section className="py-16 section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="container-width">
        <div className="text-center mb-12">
          <div className="inline-block bg-success/10 rounded-full p-4 mb-6">
            <CheckCircle className="w-16 h-16 text-success" />
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A Solução: O Kit de Grafismo Fonético
          </h2>
          <p className="font-body text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            O <strong className="text-primary">Kit de Grafismo Fonético</strong> é baseado em um método americano comprovado 
            que conecta <span className="text-success font-semibold">movimento (grafismo)</span> com 
            <span className="text-success font-semibold"> som (fonética)</span>.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 mb-12">
          <h3 className="font-heading text-2xl font-bold text-gray-900 text-center mb-8">
            Como Funciona de Forma Simples:
          </h3>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-heading text-lg font-semibold mb-3">Movimento</h4>
              <p className="font-body text-gray-600">A criança faz movimentos específicos com a mão seguindo padrões</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="font-heading text-lg font-semibold mb-3">Som</h4>
              <p className="font-body text-gray-600">Ao mesmo tempo, ela pronuncia o som da letra ou sílaba</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="font-heading text-lg font-semibold mb-3">Conexão</h4>
              <p className="font-body text-gray-600">O cérebro conecta o movimento com o som, criando memória duradoura</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md">
              <div className="flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h4 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="font-body text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};