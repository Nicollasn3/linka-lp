import { motion } from "framer-motion";

export function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="solucoes" className="w-full bg-[#f0f0f0] py-[33px] md:py-20 px-6 md:px-[74px] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-[50px] md:mb-16 gap-[9px]"
      >
        <h2 className="text-[27px] md:text-5xl font-bold flex flex-col text-center leading-[1.15]">
          Estratégias que{" "}
          <span className="relative inline-block w-fit mx-auto">
            Geram Resultados Reais
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-1 left-0 h-[10px] bg-gradient-to-r from-[#51eb51] to-[#91f991] -z-10 opacity-60"
            ></motion.span>
          </span>
        </h2>
        <p className="text-[15px] md:text-xl text-[#4c4c4c] text-center font-medium leading-[1.15] max-w-[800px]">
          Processos validados que geram leads diários, aumentam receita e consolidam sua autoridade no mercado local.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center gap-[50px] md:gap-16 items-center md:items-start">
        {/* Coluna Esquerda - Funil 3D */}
        <motion.div 
          initial={{ opacity: 0, x: -50, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex-shrink-0 md:sticky md:top-[200px] h-fit relative"
        >
          <div className=" w-[327px] h-[335px] rounded-[14px] absolute top-0 left-0 -z-10 transform translate-x-0 translate-y-0 md:hidden"></div>
           {/* Keeping existing image but adjusting container for mobile match if possible, otherwise just display image */}
          <img 
            src="/Group 4.png" 
            alt="Funil de vendas" 
            className="w-full max-w-[250px] md:max-w-md h-auto mx-auto relative z-10"
          />
        </motion.div>

        {/* Coluna Direita - Cards */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-[17px] md:gap-6 flex-1 w-full max-w-[600px] h-fit"
        >
          {/* Card 1 */}
          <motion.div variants={item} className="bg-[#fcfcfc] rounded-[12px] flex items-center gap-[35px] p-[25px] shadow-[5px_6px_29.2px_0px_rgba(0,0,0,0.1)] md:sticky md:top-[200px] hover:scale-[1.02] transition-transform duration-300">
            <div className="w-[9px] h-[114px] bg-[#51eb51] rounded-[30px] flex-shrink-0"></div>
            <div className="flex flex-col gap-[11px]">
              <h3 className="text-[18px] md:text-2xl font-bold text-black leading-normal">
                Funis de vendas validados.
              </h3>
              <p className="text-[#525252] text-[14px] md:text-base font-medium leading-[1.43]">
                Crescimento previsível para o seu ISP com processos testados que eliminam achismos.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={item} className="bg-[#fcfcfc] rounded-[12px] flex items-center gap-[35px] p-[25px] shadow-[5px_6px_29.2px_0px_rgba(0,0,0,0.1)] md:sticky md:top-[200px] hover:scale-[1.02] transition-transform duration-300">
            <div className="w-[9px] h-[114px] bg-[#51eb51] rounded-[30px] flex-shrink-0"></div>
            <div className="flex flex-col gap-[11px]">
              <h3 className="text-[18px] md:text-2xl font-bold text-black leading-normal">
                Geração diária de leads
              </h3>
              <p className="text-[#525252] text-[14px] md:text-base font-medium leading-[1.43]">
                Novos assinantes todos os dias com estratégias que transformam interesse em contratos.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={item} className="bg-[#fcfcfc] rounded-[12px] flex items-center gap-[35px] p-[25px] shadow-[5px_6px_29.2px_0px_rgba(0,0,0,0.1)] md:sticky md:top-[200px] hover:scale-[1.02] transition-transform duration-300">
            <div className="w-[9px] h-[114px] bg-[#51eb51] rounded-[30px] flex-shrink-0"></div>
            <div className="flex flex-col gap-[11px]">
              <h3 className="text-[18px] md:text-2xl font-bold text-black leading-normal">
                Retenção de base
              </h3>
              <p className="text-[#525252] text-[14px] md:text-base font-medium leading-[1.43]">
                Mais receita com clientes fiéis, menos cancelamentos e maior permanência em seu ISP.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={item} className="bg-[#fcfcfc] rounded-[12px] flex items-center gap-[35px] p-[25px] shadow-[5px_6px_29.2px_0px_rgba(0,0,0,0.1)] md:sticky md:top-[200px] hover:scale-[1.02] transition-transform duration-300">
            <div className="w-[9px] h-[114px] bg-[#51eb51] rounded-[30px] flex-shrink-0"></div>
            <div className="flex flex-col gap-[11px]">
              <h3 className="text-[18px] md:text-2xl font-bold text-black leading-normal">
                Autoridade digital <br /> na sua região
              </h3>
              <p className="text-[#525252] text-[14px] md:text-base font-medium leading-[1.43]">
                Seu provedor como a escolha óbvia, referência local e sinônimo de confiança no mercado.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
