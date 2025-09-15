import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-background-new.png";

export const HeroSection = () => {
  const scrollToBuy = () => {
    // Modern approach with requestAnimationFrame to avoid forced reflow
    requestAnimationFrame(() => {
      const element = document.getElementById('precos');
      if (element) {
        const offset = 100;
        const elementRect = element.getBoundingClientRect();
        const elementPosition = elementRect.top + window.scrollY - offset;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    });
  };

  return (
    <section className="gradient-hero min-h-screen flex flex-col justify-center section-padding py-4 sm:py-8 md:py-16 relative overflow-hidden">
      <div className="container-width flex-1 flex items-center">
        <div className="flex flex-col items-center text-center lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:text-left w-full">
          {/* Content */}
          <div className="text-white space-y-4 sm:space-y-6 lg:space-y-8 w-full">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] sm:leading-[1.2] text-shadow-lg break-words -mt-2 sm:-mt-4">
              A Chave Para Seu Filho Ler Até{" "}
              <span className="text-warning font-extrabold">5x Mais Rápido</span>{" "}
              — De Forma Leve, Divertida e Em Apenas{" "}
              <span className="text-warning font-extrabold">10 Minutos Por Dia</span>
            </h1>
            
            {/* Hero Image - Mobile: below title, Desktop: separate column */}
            <div className="relative lg:hidden mb-4">
              <div className="relative rounded-xl overflow-hidden shadow-2xl max-w-[280px] sm:max-w-sm mx-auto">
                <img 
                  src={heroImage} 
                  alt="Mãe e filho fazendo atividades de grafismo fonético juntos - momento de conexão e aprendizado"
                  className="w-full h-auto object-cover max-h-[200px] sm:max-h-[250px]"
                  fetchPriority="high"
                  loading="eager"
                  width="320"
                  height="250"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            <h2 className="font-body text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed opacity-95 text-shadow-sm break-words">
              Transforme a dificuldade de leitura em um momento de conexão e aprendizado, 
              mesmo que ele ainda não conheça as letras. Ideal para crianças de 2 a 12 anos, 
              incluindo aquelas com <strong>TDAH e Autismo</strong>.
            </h2>
            
            <div className="pt-2 sm:pt-4 lg:pt-6">
              <Button 
                variant="cta" 
                size="xl" 
                onClick={scrollToBuy}
                className="w-full text-xs sm:text-sm md:text-base lg:text-lg font-bold px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 lg:py-6 bg-warning hover:bg-warning/90 text-black shadow-2xl break-words hyphens-auto"
              >
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-1 flex-shrink-0" />
                <span className="text-center leading-tight px-1">SIM, QUERO DESBLOQUEAR A LEITURA DO MEU FILHO!</span>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ml-1 flex-shrink-0" />
              </Button>
            </div>
          </div>
          
          {/* Hero Image - Desktop only */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Mãe e filho fazendo atividades de grafismo fonético juntos - momento de conexão e aprendizado"
                className="w-full h-auto object-cover"
                fetchPriority="high"
                loading="eager"
                width="600"
                height="400"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};