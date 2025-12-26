import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Check } from "lucide-react";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async () => {
    if (isLoading || isSent) return;
    
    setIsLoading(true);
    // Simula o tempo de envio
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSent(true);
    
    // Opcional: resetar após alguns segundos
    // setTimeout(() => setIsSent(false), 3000);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="contato" className="w-full bg-[#f0f0f0] py-[85px] px-[24px] md:py-20 md:px-[74px]">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-[7px] md:gap-2 mb-[43px] md:mb-12"
      >
        <h2 className="text-[48px] md:text-5xl font-bold text-black text-center leading-[95%]">
          Marque sua Reunião
        </h2>
        <p className="text-[20px] md:text-xl text-[#4c4c4c] font-medium text-center leading-[95%]">
          para criar o plano de crescimento do seu provedor.
        </p>
      </motion.div>
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col gap-[25px] md:gap-6 items-center w-full max-w-2xl mx-auto"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="Nome"
          className="w-full h-[52px] bg-white border-2 border-[#e5e5e5] rounded-[11px] px-4 shadow-[0px_6px_17.2px_0px_rgba(0,0,0,0.03)] focus:outline-none focus:border-primary text-base placeholder:text-[#4c4c4c]/50 focus:scale-[1.01] transition-transform"
        />
        <motion.input
          variants={item}
          type="email"
          placeholder="Email"
          className="w-full h-[52px] bg-white border-2 border-[#e5e5e5] rounded-[11px] px-4 shadow-[0px_6px_17.2px_0px_rgba(0,0,0,0.03)] focus:outline-none focus:border-primary text-base placeholder:text-[#4c4c4c]/50 focus:scale-[1.01] transition-transform"
        />
        <motion.input
          variants={item}
          type="tel"
          placeholder="Telefone"
          className="w-full h-[52px] bg-white border-2 border-[#e5e5e5] rounded-[11px] px-4 shadow-[0px_6px_17.2px_0px_rgba(0,0,0,0.03)] focus:outline-none focus:border-primary text-base placeholder:text-[#4c4c4c]/50 focus:scale-[1.01] transition-transform"
        />
        <motion.input
          variants={item}
          type="text"
          placeholder="Nome do seu ISP"
          className="w-full h-[52px] bg-white border-2 border-[#e5e5e5] rounded-[11px] px-4 shadow-[0px_6px_17.2px_0px_rgba(0,0,0,0.03)] focus:outline-none focus:border-primary text-base placeholder:text-[#4c4c4c]/50 focus:scale-[1.01] transition-transform"
        />
        <motion.button 
          variants={item}
          onClick={handleSubmit}
          disabled={isLoading || isSent}
          whileHover={{ scale: (isLoading || isSent) ? 1 : 1.02 }}
          whileTap={{ scale: (isLoading || isSent) ? 1 : 0.98 }}
          className={`w-full h-[52px] flex items-center justify-center font-bold text-[16px] rounded-[11px] shadow-[0px_6px_18.9px_0px_rgba(0,0,0,0.03)] transition-all ${
            isSent 
              ? "bg-green-500 text-white cursor-default" 
              : "bg-[#00ff00] text-black hover:opacity-90 cursor-pointer"
          }`}
        >
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Loader2 className="w-6 h-6 animate-spin" />
              </motion.div>
            ) : isSent ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2"
              >
                <Check className="w-5 h-5" />
                <span>Contato Enviado!</span>
              </motion.div>
            ) : (
              <motion.span
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Entre em contato
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </section>
  );
}