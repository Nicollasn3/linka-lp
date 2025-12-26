import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      name: "André",
      role: "Diretor de ISP em Goiânia",
      quote: "Antes da Linka, dependíamos só de indicação. Hoje recebemos leads todos os dias e dobramos nossa base em 6 meses.",
      avatar: "/Ellipse 1.png"
    },
    {
      name: "João",
      role: "Gestor Comercial em Fortaleza",
      quote: "A concorrência dominava nossa região. Com a Linka, viramos referência digital e crescemos 43% em novos contratos no último trimestre.",
      avatar: "/Ellipse 3.png"
    },
    {
      name: "Ivanildo",
      role: "Gerente de ISP em Salvador",
      quote: "Em três meses de parceria, crescemos mais do que em dois anos por conta própria. A Linka nos deu escala e segurança para investir.",
      avatar: "/Ellipse 5.png"
    },
    {
      name: "Lucas",
      role: "Fundador de ISP em Belo Horizonte",
      quote: "Achávamos que escalar provedor era questão de sorte. Com a Linka entendemos que é método. Hoje temos leads constantes e previsibilidade real.",
      avatar: "/Ellipse 6.png"
    },
    {
      name: "Rafael",
      role: "CEO de Provedor em Londrina",
      quote: "O churn era nosso maior problema. A Linka estruturou nosso funil de retenção e finalmente conseguimos manter os clientes por mais tempo.",
      avatar: "/Ellipse 7.png"
    },
    {
      name: "Rodrigo",
      role: "Diretor de ISP em Curitiba",
      quote: "Nosso time estava sobrecarregado tentando vender e atender ao mesmo tempo. Com a Linka, criamos processos claros e hoje vendemos de forma organizada e lucrativa.",
      avatar: "/Ellipse 8.png"
    },
    {
      name: "Jonas",
      role: "Cofundador de ISP em Manaus",
      quote: "Nosso faturamento estava estagnado. Em 45 dias com a Linka, conseguimos previsibilidade e crescemos sem precisar aumentar a equipe.",
      avatar: "/Ellipse 9.png"
    },
    {
      name: "Gilberto",
      role: "Sócio de Provedor em Recife",
      quote: "Investíamos em anúncios sem retorno. A Linka nos mostrou o caminho certo e hoje temos ROI positivo em todas as campanhas.",
      avatar: "/Ellipse 10.png"
    }
  ];

  return (
    <section id="testemunhos" className="w-full bg-[#f0f0f0] py-[19px] pb-[85px] px-[24px] md:py-20 md:px-[74px]">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-[62px] md:gap-16">
        {/* Coluna Esquerda - Título e Descrição */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-[12px] md:gap-4 flex-shrink-0 w-full md:w-[414px] text-center md:text-left"
        >
          <h2 className="text-[35px] md:text-5xl font-bold text-black leading-[95%]">
            Confiança <span className="bg-transparent md:bg-primary md:px-2">comprovada</span>
          </h2>
          <p className="text-[15px] md:text-xl text-[#4c4c4c] font-medium leading-[95%] md:leading-tight max-w-[310px] mx-auto md:mx-0">
            Veja como outros provedores alcançaram novos patamares de crescimento aplicando nossas estratégias.
          </p>
        </motion.div>

        {/* Coluna Direita - Grid de Testemunhos */}
        <div className="flex flex-col md:flex-row gap-[19px] md:gap-5 flex-1 max-w-4xl relative w-full">
          {/* Coluna 1 */}
          <div className="flex flex-col gap-[10px] md:gap-3 flex-1 relative">
            {/* Gradiente superior - Desktop Only */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-bg to-transparent z-10 pointer-events-none hidden md:block"></div>
            {/* Gradiente inferior - Desktop Only */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none hidden md:block"></div>
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#fcfcfc] rounded-[12px] p-[26px] md:p-6 shadow-[5px_6px_29.2px_0px_rgba(0,0,0,0.1)] overflow-hidden"
              >
                <p className="text-[#525252] text-[14px] md:text-sm font-medium leading-[1.18] mb-3">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-[18px] md:gap-4">
                  <div className="w-[37px] h-[37px] md:w-10 md:h-10 rounded-full border-0 md:border-2 border-primary overflow-hidden flex-shrink-0 relative">
                     {/* Placeholder icon from design if avatar missing or design specific */}
                     <img src="/logo-linka.svg" className="w-full h-full object-cover hidden" alt="" /> 
                     <div className="bg-[#D9D9D9] w-full h-full"></div> {/* Placeholder gray circle */}
                     {/* Restoring original image logic if preferred, design has specific placeholder logic */}
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-black font-bold text-[16px] md:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-sm md:block hidden">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coluna 2 */}
          <div className="flex flex-col gap-[10px] md:gap-3 flex-1 relative overflow-visible">
            {/* Gradiente superior */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-bg to-transparent z-10 pointer-events-none hidden md:block"></div>
            {/* Gradiente inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none hidden md:block"></div>
            {testimonials.slice(4, 8).map((testimonial, index) => (
              <motion.div 
                key={index + 4}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="bg-[#fcfcfc] rounded-[12px] p-[26px] md:p-6 shadow-[5px_6px_29.2px_0px_rgba(0,0,0,0.1)] overflow-hidden"
              >
                <p className="text-[#525252] text-[14px] md:text-sm font-medium leading-[1.18] mb-3">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-[18px] md:gap-4">
                  <div className="w-[37px] h-[37px] md:w-10 md:h-10 rounded-full border-0 md:border-2 border-primary overflow-hidden flex-shrink-0 relative">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-black font-bold text-[16px] md:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-sm md:block hidden">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

