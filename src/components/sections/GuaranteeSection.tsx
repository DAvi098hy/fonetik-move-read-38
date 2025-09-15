import { Shield, Clock, RefreshCw } from "lucide-react";
import guaranteeBadge from "@/assets/guarantee-badge-new.png";

export const GuaranteeSection = () => {
  return (
    <section className="py-16 section-padding bg-green-50">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src={guaranteeBadge} 
                alt="Garantia de 7 dias"
                className="w-32 h-32 object-contain"
                loading="lazy"
              />
            </div>
          </div>
          
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Sua Satisfação é 100% Garantida
          </h2>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-success" />
            </div>
            
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
              Garantia Incondicional de 7 Dias
            </h3>
            
            <p className="font-body text-lg text-gray-700 leading-relaxed mb-6">
              Experimente o Kit de Grafismo Fonético por <strong>7 dias completos</strong>. 
              Se por qualquer motivo você não ficar 100% satisfeito(a) com os resultados, 
              nós devolvemos <strong>todo o seu dinheiro</strong>, sem perguntas, 
              sem burocracia, sem complicação.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Clock className="w-8 h-8 text-success mx-auto mb-3" />
                <h4 className="font-heading font-semibold text-gray-900 mb-2">7 Dias Completos</h4>
                <p className="font-body text-gray-600">Uma semana inteira para testar</p>
              </div>
              
              <div className="text-center">
                <RefreshCw className="w-8 h-8 text-success mx-auto mb-3" />
                <h4 className="font-heading font-semibold text-gray-900 mb-2">100% do Dinheiro</h4>
                <p className="font-body text-gray-600">Devolução integral garantida</p>
              </div>
              
              <div className="text-center">
                <Shield className="w-8 h-8 text-success mx-auto mb-3" />
                <h4 className="font-heading font-semibold text-gray-900 mb-2">Sem Burocracia</h4>
                <p className="font-body text-gray-600">Processo simples e rápido</p>
              </div>
            </div>
            
            <div className="bg-success/10 p-6 rounded-xl">
              <p className="font-body text-gray-700 font-semibold">
                💡 <strong>Por que oferecemos essa garantia?</strong><br />
                Porque temos <strong>absoluta confiança</strong> na eficácia do nosso método. 
                Milhares de pais já transformaram a vida dos seus filhos com o Kit de Grafismo Fonético, 
                e sabemos que você também terá resultados incríveis.
              </p>
            </div>
          </div>
          
          <p className="font-body text-lg text-gray-600">
            <strong>O risco é todo nosso.</strong> Você só tem a ganhar! 
          </p>
        </div>
      </div>
    </section>
  );
};