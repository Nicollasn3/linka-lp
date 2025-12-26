import { Wifi } from "lucide-react";
import { motion } from "framer-motion";

const icon = {
  Wifi,
}

export function Hero() {
  return (
    <section id="home" className="w-full px-6 md:px-[74px] flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 pt-[34px] pb-[14px] md:py-0 md:h-[calc(70vh-107px)] relative bg-white border-b-2 border-[#9f9] md:border-none">
      <div className="flex flex-col gap-[23px] md:gap-2 w-full md:w-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-[11px] px-[15px] py-[5px] rounded-[64px] w-fit bg-gradient-to-r from-[#00ff00] to-[#ccffcc]"
        >
          <icon.Wifi className="text-black w-[13px] h-[13px] md:w-4 md:h-4" />
          <span className="text-black text-[12px] md:text-mb font-medium">De dono de provedor para dono</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[30px] md:text-5xl font-bold leading-[1.08] text-black"
        >
          Acelere o crescimento <br className="hidden md:block" /> do seu ISP com a <span className="bg-gradient-to-r from-[#51eb51] to-[#91f991] h-[29px] px-2 inline-block md:inline align-bottom">Linka</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[15px] md:text-2xl font-medium text-[#494949] w-[300px] md:w-auto leading-[95%]"
        >
          Facilidade e previsibilidade de novos assinantes todos os dias
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-row items-center gap-[15px] mt-2"
        >
          <a href="#contato" className="bg-[#00ff00] text-black px-[21px] py-[10px] rounded-[52px] font-bold text-[12px] whitespace-nowrap hover:bg-[#00cc00] transition-colors">Marque sua reunião</a>
          <button className="text-black px-[23px] py-[10px] rounded-[52px] font-bold border-[3px] border-[#51eb51] text-[12px] whitespace-nowrap flex items-center gap-2 hover:bg-[#51eb51] hover:text-white transition-colors">
            Saiba Mais
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full max-w-[305px] h-[311px] relative md:max-w-lg md:h-auto"
      >
        <video 
          src="/x0ydBc8b4BFeiAU7q8pTrtMSjsQ.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover rounded-none md:rounded-lg"
        />
      </motion.div>
      
      {/* Elemento de Sombra do Figma */}
      <div className="absolute h-[57px] bottom-0 w-full pointer-events-none overflow-hidden hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent"></div>
      </div>
    </section>
  );
}