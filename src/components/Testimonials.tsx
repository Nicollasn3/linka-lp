export function Testimonials() {
  const testimonials = [
    {
      name: "André",
      role: "Diretor de ISP em Goiânia",
      quote: "Antes da Linka, dependíamos só de indicação. Hoje recebemos leads todos os dias e dobramos nossa base em 6 meses.",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "João",
      role: "Gestor Comercial em Fortaleza",
      quote: "A concorrência dominava nossa região. Com a Linka, viramos referência digital e crescemos 43% em novos contratos no último trimestre.",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Ivanildo",
      role: "Gerente de ISP em Salvador",
      quote: "Em três meses de parceria, crescemos mais do que em dois anos por conta própria. A Linka nos deu escala e segurança para investir.",
      avatar: "https://i.pravatar.cc/150?img=33"
    },
    {
      name: "Lucas",
      role: "Fundador de ISP em Belo Horizonte",
      quote: "Achávamos que escalar provedor era questão de sorte. Com a Linka entendemos que é método. Hoje temos leads constantes e previsibilidade real.",
      avatar: "https://i.pravatar.cc/150?img=45"
    },
    {
      name: "Rafael",
      role: "CEO de Provedor em Londrina",
      quote: "O churn era nosso maior problema. A Linka estruturou nosso funil de retenção e finalmente conseguimos manter os clientes por mais tempo.",
      avatar: "https://i.pravatar.cc/150?img=51"
    },
    {
      name: "Rodrigo",
      role: "Diretor de ISP em Curitiba",
      quote: "Nosso time estava sobrecarregado tentando vender e atender ao mesmo tempo. Com a Linka, criamos processos claros e hoje vendemos de forma organizada e lucrativa.",
      avatar: "https://i.pravatar.cc/150?img=68"
    },
    {
      name: "Jonas",
      role: "Cofundador de ISP em Manaus",
      quote: "Nosso faturamento estava estagnado. Em 45 dias com a Linka, conseguimos previsibilidade e crescemos sem precisar aumentar a equipe.",
      avatar: "https://i.pravatar.cc/150?img=70"
    },
    {
      name: "Gilberto",
      role: "Sócio de Provedor em Recife",
      quote: "Investíamos em anúncios sem retorno. A Linka nos mostrou o caminho certo e hoje temos ROI positivo em todas as campanhas.",
      avatar: "https://i.pravatar.cc/150?img=47"
    }
  ];

  return (
    <section className="w-full bg-bg py-20 px-[74px]">
      <div className="flex items-start justify-center gap-16">
        {/* Coluna Esquerda - Título e Descrição */}
        <div className="flex flex-col gap-4 flex-shrink-0 w-[414px]">
          <h2 className="text-5xl font-bold text-black leading-tight">
            Confiança <span className="bg-primary px-2">comprovada</span>
          </h2>
          <p className="text-xl text-[#4c4c4c] font-medium leading-tight">
            Veja como outros provedores alcançaram novos patamares de crescimento aplicando nossas estratégias.
          </p>
        </div>

        {/* Coluna Direita - Grid de Testemunhos */}
        <div className="flex gap-5 flex-1 max-w-4xl relative">
          {/* Coluna 1 */}
          <div className="flex flex-col gap-3 flex-1 relative">
            {/* Gradiente superior */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-bg to-transparent z-10 pointer-events-none"></div>
            {/* Gradiente inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none"></div>
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <div 
                key={index}
                className="bg-[#fcfcfc] rounded-[12px] p-6 shadow-[5px_6px_29.2px_0px_rgba(0,0,0,0.1)] overflow-hidden"
              >
                <p className="text-[#525252] text-sm font-medium leading-relaxed mb-3">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-black font-bold text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coluna 2 */}
          <div className="flex flex-col gap-3 flex-1 relative overflow-visible">
            {/* Gradiente superior */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-bg to-transparent z-10 pointer-events-none"></div>
            {/* Gradiente inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none"></div>
            {testimonials.slice(4, 8).map((testimonial, index) => (
              <div 
                key={index + 4}
                className="bg-[#fcfcfc] rounded-[12px] p-6 shadow-[5px_6px_29.2px_0px_rgba(0,0,0,0.1)] overflow-hidden"
              >
                <p className="text-[#525252] text-sm font-medium leading-relaxed mb-3">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-black font-bold text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

