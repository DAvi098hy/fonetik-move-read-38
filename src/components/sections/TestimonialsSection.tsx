import { Star, Quote } from "lucide-react";
import mariaSilvaProfile from "@/assets/maria-silva-optimized.webp";
import carlosMendesProfile from "@/assets/professor-optimized.webp";
import patriciaOliveiraProfile from "@/assets/patricia-oliveira-optimized.webp";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      text: "Minha filha Ana Clara, de 7 anos, tinha muita dificuldade com a leitura. Em apenas 2 semanas usando o Kit, ela começou a ler sozinha pela primeira vez! As atividades são divertidas e ela pede para fazer. Resultado incrível!",
      stars: 5,
      highlight: "Em 2 semanas lendo sozinha!",
      profileImage: mariaSilvaProfile
    },
    {
      name: "Prof. Carlos Mendes",
      location: "Educador há 15 anos",
      text: "Como professor, já vi muitos métodos, mas o Grafismo Fonético realmente funciona. O diferencial está na conexão movimento-som. Uso com meus alunos com TDAH e os resultados são impressionantes. Recomendo para todos os pais!",
      stars: 5,
      highlight: "Funciona até com TDAH!",
      profileImage: carlosMendesProfile
    },
    {
      name: "Patrícia Oliveira",
      location: "Mãe de gêmeos autistas",
      text: "Tenho dois filhos autistas de 6 anos. Achei que seria impossível, mas o método é tão visual e tátil que eles se adaptaram perfeitamente. Hoje eles reconhecem sílabas e estão começando a formar palavras. Estou emocionada!",
      stars: 5,
      highlight: "Perfeito para autismo!",
      profileImage: patriciaOliveiraProfile
    }
  ];

  return (
    <section className="py-16 section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Veja o que Pais e Educadores Estão Dizendo:
          </h2>
          <p className="font-body text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Mais de 10.000 famílias já transformaram a vida dos seus filhos com o Kit de Grafismo Fonético.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg relative">
              {/* Quote icon */}
              <div className="absolute top-4 left-4">
                <Quote className="w-8 h-8 text-primary/20" />
              </div>
              
              {/* Stars */}
              <div className="flex justify-center mb-4 pt-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Highlight */}
              <div className="bg-success/10 text-success font-bold text-center py-2 px-4 rounded-lg mb-4 text-sm">
                {testimonial.highlight}
              </div>
              
              {/* Testimonial text */}
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-center">
                "{testimonial.text}"
              </p>
              
              {/* Author info */}
              <div className="border-t pt-4 flex items-center space-x-3">
                {/* Profile circle */}
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {testimonial.profileImage ? (
                    <img 
                      src={testimonial.profileImage} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  )}
                </div>
                {/* Name and location */}
                <div className="text-left">
                  <h4 className="font-heading font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="font-body text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="text-center mt-12 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
            ✨ Junte-se a mais de 10.000 famílias satisfeitas!
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10.000+</div>
              <div className="text-sm text-gray-600">Famílias Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-gray-600">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-gray-600">Recomendam</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};