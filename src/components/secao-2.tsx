import { motion } from "framer-motion";

export function Secao2() {
  return (
    <section id="quem-somos" className="w-full bg-[#f0f0f0] py-[4px] pb-[57px] px-[74px] md:py-20 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center gap-[43px] md:gap-16">
        
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-[7px] w-[291px] md:w-full md:max-w-2xl order-1 md:order-2"
        >
          <div className="relative">
             <div className="absolute top-[26px] left-[89px] w-[190px] h-[24px] bg-gradient-to-r from-[#51eb51] to-[#91f991] -z-10 opacity-70 hidden md:block"></div> {/* Desktop gradient adjustment needed? Keeping mobile mostly */}
             <h2 className="text-[25px] md:text-5xl font-bold text-black leading-[86%] relative z-10">
              A voz de quem <br />
              viveu a <span className="relative inline-block">transformação <motion.span initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ delay: 0.5, duration: 0.6 }} className="absolute bottom-1 left-0 h-[10px] bg-gradient-to-r from-[#51eb51] to-[#91f991] -z-10 md:hidden"></motion.span></span>
            </h2>
          </div>
          <p className="text-[10.5px] md:text-xl text-[#4c4c4c] font-medium leading-[95%]">
            Veja no vídeo como provedores como você conquistaram previsibilidade, mais clientes e receita constante.
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0 order-2 md:order-1 relative w-[290px] h-[519px]"
        >
           <div className="absolute inset-[-12%_-24%] pointer-events-none md:hidden">
             {/* Background decorative image if available, skipped for now */}
           </div>
          <video 
            src="/zBMb1Ie0dafPnHGZIwppOm9tRyc.mp4" 
            controls
            className="w-full h-full rounded-none md:rounded-3xl object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
