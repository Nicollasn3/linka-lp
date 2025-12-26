import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="w-full bg-[#031c03] pt-[192px] pb-[57px] px-[74px] md:py-32 relative overflow-visible">
      <div className="flex flex-col items-center justify-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-[19px] shadow-[14px_18px_49.5px_0px_rgba(0,0,0,0.12)] px-[20px] pt-8 pb-8 md:p-12 max-w-4xl w-[325px] md:w-full relative flex flex-col items-center gap-[23px]"
        >
          {/* Imagem 3D sobreposta no topo do card */}
          <div className="absolute h-[181px] left-1/2 top-[-100px] md:top-[-120px] -translate-x-[60px] w-[170px] pointer-events-none z-20">
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute inset-0 overflow-visible"
            >
              <img 
                src="/logo3d.png" 
                alt="Linka 3D Logo"
                className="absolute h-[166.3%] left-[-18.4%] top-[-29.83%] w-[141.98%] object-contain"
              />
            </motion.div>
          </div>
          
          <div className="flex flex-col items-center gap-[7px] md:gap-3 mt-12 md:mt-8 text-center w-full">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[30px] md:text-5xl font-bold text-black leading-[95%]"
            >
              Pare de depender da sorte
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-[12.5px] md:text-xl text-[#4c4c4c] font-medium leading-[112%] md:leading-normal max-w-2xl"
            >
              Escale seu ISP com previsibilidade e segurança, usando processos testados que geram leads diários,
            </motion.p>
          </div>
          <div className="flex justify-center w-full">
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-[#51eb51] text-black px-[22px] py-[8px] md:px-8 md:py-3 rounded-[32px] md:rounded-full font-bold text-[10px] md:text-base hover:opacity-90 transition-opacity w-full md:w-auto text-center shadow-lg"
            >
              Agende sua reunião estratégica agora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

