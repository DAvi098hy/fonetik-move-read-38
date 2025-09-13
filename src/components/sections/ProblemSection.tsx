import { AlertTriangle, Frown, TrendingDown, Heart } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: <Frown className="w-8 h-8 text-red-500" />,
      title: "Sofrimento na Tarefa",
      description: "Seu filho evita ler, chora ou fica irritado quando precisa fazer lição de casa ou ler qualquer texto?"
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      title: "Notas em Queda",
      description: "As notas estão caindo e você percebe que ele está ficando para trás em relação aos colegas?"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Autoestima Abalada",
      description: "Ele se sente burro, incapaz ou já disse frases como 'eu não consigo' ou 'eu sou burro'?"
    }
  ];

  return (
    <section className="py-16 section-padding bg-red-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="w-16 h-16 text-red-500" />
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Seu filho se sente frustrado com a leitura?
          </h2>
          <p className="font-body text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Se você reconhece alguns desses sinais, saiba que você não está sozinho(a) e, 
            mais importante ainda: <strong>não é culpa do seu filho</strong>.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-4">
                {problem.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                {problem.title}
              </h3>
              <p className="font-body text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
          <p className="font-body text-lg text-gray-700 leading-relaxed">
            <strong className="text-red-600">O problema não está na inteligência do seu filho</strong>, 
            mas sim no método tradicional de ensino que não respeita como o cérebro infantil realmente aprende. 
            <br /><br />
            <span className="text-primary font-semibold">
              Existe uma forma muito mais eficaz, gentil e divertida de ensinar leitura - 
              e ela está baseada na ciência do desenvolvimento cerebral.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};