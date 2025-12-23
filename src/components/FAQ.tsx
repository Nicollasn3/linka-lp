import { Plus } from "lucide-react";
import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "A Linka funciona para qualquer provedor de internet?",
      answer: "Sim, a Linka foi desenvolvida para funcionar com provedores de internet de todos os tamanhos e modelos de negócio."
    },
    {
      question: "Em quanto tempo vou começar a ver resultados?",
      answer: "Os primeiros resultados geralmente aparecem em 30 a 45 dias após a implementação das estratégias."
    },
    {
      question: "Vou precisar trocar minha equipe ou ferramentas atuais?",
      answer: "Não, a Linka se integra com suas ferramentas e processos existentes, otimizando o que você já tem."
    },
    {
      question: "A Linka só gera leads ou também ajuda na retenção?",
      answer: "A Linka trabalha tanto na geração de novos leads quanto na retenção e fidelização de clientes existentes."
    },
    {
      question: "Preciso de um grande orçamento de mídia para escalar com a Linka?",
      answer: "Não necessariamente. A Linka otimiza seus investimentos em mídia para maximizar o ROI, independente do orçamento."
    }
  ];

  return (
    <section className="w-full bg-[#031c03] py-20 px-[74px]">
      <h2 className="text-5xl font-bold text-[#ccffcc] text-center mb-12">
        Perguntas Frequentes
      </h2>
      <div className="flex flex-col gap-4 items-center max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-full border-2 border-[rgba(204,255,204,0.17)] rounded-[10px] overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between px-7 py-5 text-left"
            >
              <p className="text-[#f0f0f0] text-xl font-medium">
                {faq.question}
              </p>
              <div className={`transform transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                <Plus className="w-7 h-7 text-[#f0f0f0]" />
              </div>
            </button>
            {openIndex === index && (
              <div className="px-7 pb-5">
                <p className="text-[#f0f0f0] text-lg">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

