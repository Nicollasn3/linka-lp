import { Plus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section id="faq" className="w-full bg-[#031c03] py-[66px] px-[24px] md:py-20 md:px-[74px]">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[37px] md:text-5xl font-bold text-[#cfc] text-center mb-[33px] md:mb-12 leading-[95%]"
      >
        Perguntas <br className="md:hidden" /> Frequentes
      </motion.h2>
      <div className="flex flex-col gap-[14px] md:gap-4 items-center max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full border-[1.55px] md:border-2 border-[rgba(204,255,204,0.17)] rounded-[8px] md:rounded-[10px] overflow-hidden bg-white/5 backdrop-blur-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-start md:items-center justify-between px-[22px] py-[15px] md:px-7 md:py-5 text-left md:text-left gap-4"
            >
              <p className="text-[#f0f0f0] text-[15.5px] md:text-xl font-medium leading-[112%] md:leading-normal text-center md:text-left flex-1">
                {faq.question}
              </p>
              <motion.div 
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <Plus className="w-[22px] h-[22px] md:w-7 md:h-7 text-[#f0f0f0]" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-[22px] pb-[15px] md:px-7 md:pb-5 overflow-hidden"
                >
                  <p className="text-[#f0f0f0] text-[14px] md:text-lg text-center md:text-left leading-relaxed opacity-90">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

