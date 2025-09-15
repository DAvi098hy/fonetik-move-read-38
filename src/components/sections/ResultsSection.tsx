import childrenLearningTablets from "@/assets/children-learning-optimized.webp";
import syllableLearningIcon from "@/assets/syllable-learning-optimized.webp";
import primeiraSemanaIcon from "@/assets/primeira-semana-optimized.webp";
import primeiroMesIcon from "@/assets/primeiro-mes-optimized.webp";
import resultadosContinuosIcon from "@/assets/resultados-continuos-optimized.webp";

export const ResultsSection = () => {
  const results = [
    {
      image: syllableLearningIcon,
      title: "Primeiros Dias",
      description: "Seu filho começará a reconhecer sílabas e sons com mais facilidade"
    },
    {
      image: primeiraSemanaIcon,
      title: "Primeira Semana",
      description: "Você notará mais confiança e menos resistência na hora de ler"
    },
    {
      image: primeiroMesIcon,
      title: "Primeiro Mês",
      description: "A leitura se tornará mais fluida e ele pedirá para ler mais vezes"
    },
    {
      image: resultadosContinuosIcon,
      title: "Resultados Contínuos",
      description: "Melhores notas, mais autoestima e amor genuíno pela leitura"
    }
  ];

  return (
    <section className="py-16 section-padding bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Em Poucos Dias, Você Vai Notar a Diferença:
          </h2>
          <p className="font-body text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Os resultados começam a aparecer rapidamente porque o método trabalha 
            com a forma natural como o cérebro das crianças aprende.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {results.map((result, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="bg-white/20 rounded-full w-[68px] h-[68px] flex items-center justify-center mx-auto mb-4 overflow-hidden">
                 {result.image ? (
                   <img 
                     src={result.image} 
                     alt={result.title}
                     className="w-[68px] h-[68px] object-cover rounded-full"
                     loading="lazy"
                   />
                 ) : (
                   <div className="w-[68px] h-[68px] bg-white/30 rounded-full"></div>
                 )}
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-3">
                {result.title}
              </h3>
              <p className="font-body text-blue-100 leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connection Image */}
        <div className="text-center mt-12 mb-8">
          <img 
            src={childrenLearningTablets} 
            alt="Crianças aprendendo com tablets e materiais educacionais - tecnologia e aprendizado"
            className="w-48 h-48 mx-auto rounded-xl shadow-lg object-cover"
            loading="lazy"
          />
        </div>

        <div className="text-center mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h3 className="font-heading text-2xl font-bold text-white mb-4">
            ⭐ O Mais Importante de Tudo:
          </h3>
          <p className="font-body text-lg text-blue-100 leading-relaxed max-w-4xl mx-auto">
            Seu filho recuperará a <strong className="text-yellow-300">confiança em si mesmo</strong> e descobrirá que 
            <strong className="text-yellow-300"> ele é capaz sim</strong> de aprender e se desenvolver. 
            A leitura deixará de ser um momento de sofrimento para se tornar um 
            <strong className="text-yellow-300"> momento de conexão e alegria</strong> entre vocês.
          </p>
        </div>
      </div>
    </section>
  );
};