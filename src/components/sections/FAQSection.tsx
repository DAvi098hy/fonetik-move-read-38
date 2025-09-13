import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Para que idade o Kit é indicado?",
      answer: "O Kit de Grafismo Fonético é ideal para crianças de 2 a 12 anos. Para crianças menores (2-4 anos), o foco é no desenvolvimento da coordenação e reconhecimento de sons. Para crianças maiores (5-12 anos), o método acelera significativamente o processo de leitura e escrita."
    },
    {
      question: "Funciona mesmo para crianças com TDAH e Autismo?",
      answer: "Sim! Na verdade, o método é especialmente eficaz para crianças neurodivergentes. O grafismo fonético trabalha com múltiplos sentidos (visual, tátil, auditivo), o que facilita o aprendizado para crianças com TDAH e autismo. Incluímos atividades específicas para essas condições."
    },
    {
      question: "Preciso ter conhecimento pedagógico para aplicar?",
      answer: "Não! O Kit foi desenvolvido para ser aplicado por qualquer pai ou mãe, sem necessidade de formação pedagógica. Todas as atividades vêm com instruções claras e passo-a-passo. Incluímos também um Guia Prático para Pais que explica tudo de forma simples."
    },
    {
      question: "Quanto tempo por dia preciso dedicar?",
      answer: "Apenas 10 a 15 minutos por dia são suficientes! O método foi desenvolvido para ser prático e caber na rotina corrida das famílias. É melhor fazer pouco tempo todos os dias do que sessões longas esporadicamente."
    },
    {
      question: "Quando vou ver os primeiros resultados?",
      answer: "Os primeiros sinais aparecem já nos primeiros dias de uso. Em uma semana, você notará maior interesse pela leitura e reconhecimento de sons. Em 30 dias, a maioria das crianças já mostra melhora significativa na fluência de leitura."
    },
    {
      question: "É realmente em formato digital (PDF)?",
      answer: "Sim! Todo o conteúdo é em PDF de alta qualidade que você pode baixar imediatamente após a compra. Você pode imprimir quantas vezes quiser, usar em tablets ou computadores. A vantagem é que o acesso é imediato e você nunca perde o material."
    },
    {
      question: "E se eu não gostar ou não funcionar com meu filho?",
      answer: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas. O risco é todo nosso!"
    },
    {
      question: "Como funciona o pagamento e o acesso?",
      answer: "O pagamento é único de R$ 37,00, sem mensalidades. Você pode pagar via cartão de crédito, PIX ou boleto. Assim que o pagamento é confirmado, você recebe imediatamente por email os links para download de todo o material."
    }
  ];

  return (
    <section className="py-16 section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 rounded-full p-4 mb-6">
            <HelpCircle className="w-16 h-16 text-primary" />
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Perguntas Frequentes
          </h2>
          <p className="font-body text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Tiramos todas as suas dúvidas sobre o Kit de Grafismo Fonético
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-heading font-semibold text-gray-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
          <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
            Ainda tem dúvidas?
          </h3>
          <p className="font-body text-gray-700 leading-relaxed">
            Lembre-se: você tem <strong className="text-success">7 dias de garantia total</strong> para 
            testar o Kit de Grafismo Fonético sem nenhum risco. Se não funcionar com seu filho, 
            devolvemos <strong className="text-success">100% do seu dinheiro</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};