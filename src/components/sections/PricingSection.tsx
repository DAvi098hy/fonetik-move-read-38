import { Button } from "@/components/ui/button";
import { CheckCircle, X, Star, Shield, Gift, Sparkles } from "lucide-react";

export const PricingSection = () => {
  const scrollToBuy = (plan: string) => {
    // Replace with actual purchase links
    if (plan === 'basic') {
      window.open('https://pay.cakto.com.br/4skit7w_568196', '_blank');
    } else if (plan === 'premium') {
      window.open('https://pay.cakto.com.br/sc2wtay', '_blank');
    } else {
      window.open('#comprar-platinum', '_blank');
    }
  };

  const basicFeatures = [
    { name: "Kit de Grafismo Fonético Completo", included: true },
    { name: "+100 Atividades Fonéticas", included: true },
    { name: "3 Níveis de Dificuldade", included: true },
    { name: "Letra Cursiva e Bastão", included: true },
    { name: "Acesso Vitalício", included: true },
    { name: "Entrega Email (Área de Membros)", included: true },
    { name: "Impressão Ilimitada", included: true },
  ];

  const premiumBonuses = [
    { name: "Caderno Alfabeto com Imagem", value: "R$ 37", included: false },
    { name: "Caderno Quebra-Cabeça Alfabeto", value: "R$ 47", included: false },
    { name: "Caderno Formando Palavras", value: "R$ 57", included: false },
    { name: "Caderno Alfabeto com Relógio", value: "R$ 39", included: false },
    { name: "Caderno Alfabeto Traçado", value: "R$ 27", included: false },
    { name: "Caderno Alfabeto com Carinhas", value: "R$ 49", included: false },
  ];

  const platinumAdvancedFeatures = [
    { name: "+10 Aulas Práticas Inéditas (vídeos guiados com especialistas)", value: "R$ 97" },
    { name: "Suporte Individual no WhatsApp (respostas personalizadas de educadores)", value: "R$ 67" },
    { name: "Grupo VIP de Atividades Exclusivas (comunidade premium com desafios semanais)", value: "R$ 47" },
    { name: "+50 Atividades Fonéticas Avançadas (jogos interativos e leitura inicial)", value: "R$ 127" },
    { name: "Aulas Ao Vivo Mensais (sessões interativas com especialistas)", value: "R$ 97" },
    { name: "Certificado de Conclusão Personalizado (com nome da criança)", value: "R$ 37" },
    { name: "Atualizações Vitalícias de Conteúdo (novas atividades e bônus sazonais)", value: "R$ 67" },
  ];

  return (
    <section id="precos" className="py-20 section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Escolha Seu Plano e Comece Hoje
          </h2>
          <p className="font-body text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme a leitura do seu filho com nosso método comprovado. 
            Escolha o plano ideal para sua família.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg relative">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                Plano Básico
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary">R$ 10</span>
                <span className="text-gray-500 ml-2">pagamento único</span>
              </div>
              <p className="font-body text-gray-600">
                Perfeito para começar a transformar a leitura
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="font-heading font-semibold text-gray-900 border-b pb-2">
                ✅ Incluído:
              </h4>
              {basicFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="font-body text-gray-700">{feature.name}</span>
                </div>
              ))}
              
              <div className="pt-4">
                <h4 className="font-heading font-semibold text-gray-900 border-b pb-2 mb-4">
                  ❌ Bônus Não Inclusos:
                </h4>
                {premiumBonuses.map((bonus, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <span className="font-body text-gray-500 text-sm">{bonus.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{bonus.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToBuy('basic')}
              className="w-full font-bold text-lg py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Começar com o Básico
            </Button>

            <div className="text-center mt-4">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>

          {/* Premium Plan - Highlighted */}
          <div className="bg-gradient-to-b from-warning/40 to-warning/10 rounded-2xl p-8 border-2 border-warning shadow-2xl relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-warning text-black px-6 py-2 rounded-full font-bold text-sm flex items-center space-x-1">
                <Star className="w-4 h-4 fill-current" />
                <span>MAIS POPULAR</span>
              </div>
            </div>

            <div className="text-center mb-8 pt-4">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                Plano Premium
              </h3>
              <div className="mb-2">
                <span className="text-4xl font-bold text-primary">R$ 37</span>
                <span className="text-gray-500 ml-2">ou 5x R$ 8,19</span>
              </div>
              <div className="bg-success/10 text-success text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Economize R$ 416!
              </div>
              <p className="font-body text-gray-600">
                Kit completo + 6 bônus exclusivos
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="font-heading font-semibold text-gray-900 border-b pb-2">
                ✅ Tudo do Plano Básico:
              </h4>
              {basicFeatures.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="font-body text-gray-700">{feature.name}</span>
                </div>
              ))}
              
              <div className="pt-4">
                <h4 className="font-heading font-semibold text-gray-900 border-b pb-2 mb-4">
                  🎁 + 6 Bônus Exclusivos (Valor R$ 256):
                </h4>
                {premiumBonuses.map((bonus, index) => (
                  <div key={index} className="flex items-center justify-between py-2 bg-success/5 px-3 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="font-body text-gray-700 font-medium">{bonus.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-500 line-through text-sm">{bonus.value}</div>
                      <div className="text-success font-bold text-sm">GRÁTIS</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              variant="cta" 
              size="lg" 
              onClick={() => scrollToBuy('premium')}
              className="w-full font-bold text-lg py-6 bg-warning text-black hover:bg-warning/90"
            >
              Quero o Plano Completo!
            </Button>

            <div className="text-center mt-4 space-y-2">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>Garantia de 7 dias</span>
              </div>
              <p className="text-xs text-gray-500">
                <span className="font-semibold">Valor total:</span> R$ 453 → 
                <span className="text-success font-bold"> Seu preço: R$ 37</span>
              </p>
            </div>
          </div>

          {/* Platinum Plan - Most Popular */}
          <div className="bg-gradient-to-b from-primary/10 to-white rounded-2xl p-8 border-2 border-primary shadow-2xl relative lg:order-3 md:order-3">
            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center space-x-1">
                <Sparkles className="w-4 h-4 fill-current" />
                <span>MAIS VENDIDO</span>
              </div>
            </div>

            <div className="text-center mb-8 pt-4">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                Plano Platinum
              </h3>
              <div className="mb-2">
                <span className="text-4xl font-bold text-primary">R$ 97</span>
                <span className="text-gray-500 ml-2">ou 12x R$ 9,70</span>
              </div>
              <div className="bg-success/10 text-success text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Economize R$ 659!
              </div>
              <p className="font-body text-gray-600">
                Kit completo + 6 bônus + recursos premium irresistíveis
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="font-heading font-semibold text-gray-900 border-b pb-2">
                ✅ Tudo dos Planos Anteriores:
              </h4>
              {basicFeatures.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="font-body text-gray-700 text-sm">{feature.name}</span>
                </div>
              ))}
              
              <div className="pt-4">
                <h4 className="font-heading font-semibold text-gray-900 border-b pb-2 mb-4 flex items-center">
                  <Gift className="w-5 h-5 text-warning mr-2" />
                  + 6 Bônus Exclusivos (Valor R$ 256):
                </h4>
                {premiumBonuses.map((bonus, index) => (
                  <div key={index} className="flex items-center justify-between py-2 bg-success/5 px-3 rounded-lg mb-1">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="font-body text-gray-700 font-medium text-sm">{bonus.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-500 line-through text-xs">{bonus.value}</div>
                      <div className="text-success font-bold text-xs">GRÁTIS</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <h4 className="font-heading font-semibold text-gray-900 border-b pb-2 mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 text-primary mr-2" />
                  + Recursos Premium Irresistíveis (Valor R$ 539):
                </h4>
                {platinumAdvancedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between py-2 bg-primary/5 px-3 rounded-lg mb-1">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="font-body text-gray-700 font-medium text-sm">{feature.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-500 line-through text-xs">{feature.value}</div>
                      <div className="text-success font-bold text-xs">GRÁTIS</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              variant="cta" 
              size="lg" 
              onClick={() => scrollToBuy('platinum')}
              className="w-full font-bold text-lg py-6 bg-primary text-white hover:bg-primary/90"
            >
              Quero o Plano Platinum!
            </Button>

            <div className="text-center mt-4 space-y-2">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>Garantia de 7 dias</span>
              </div>
              <p className="text-xs text-gray-500">
                <span className="font-semibold">Valor total:</span> R$ 892 → 
                <span className="text-success font-bold"> Seu preço: R$ 97</span>
              </p>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Por Que Escolher o Plano Premium?
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-success/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="font-heading font-semibold mb-2">Mais Variedade</h4>
                <p className="font-body text-sm text-gray-600">
                  6 cadernos extras para manter seu filho engajado por mais tempo
                </p>
              </div>
              <div className="text-center">
                <div className="bg-warning/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="font-heading font-semibold mb-2">Economia Real</h4>
                <p className="font-body text-sm text-gray-600">
                  R$ 453 de valor por apenas R$ 37 - uma economia de 92%
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-heading font-semibold mb-2">Resultados Rápidos</h4>
                <p className="font-body text-sm text-gray-600">
                  Material especializado para acelerar o desenvolvimento da leitura
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};