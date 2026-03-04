export function Services() {
  return (
    <section className="w-full bg-bg py-16 md:py-24 px-6 md:px-[74px] border-t-[5px] border-primary/20">
      <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Estratégias que <span className="bg-primary px-2">Geram Resultados</span>
        </h2>
        <p className="text-lg md:text-xl text-black max-w-2xl">
          Geração de leads diários e autoridade digital na sua região.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-16 items-center lg:items-start">
        {/* Coluna Esquerda - Imagem */}
        <div className="w-full max-w-xs md:max-w-md lg:sticky lg:top-[120px]">
          <img src="/Group 4.png" alt="Funil" className="w-full h-auto" />
        </div>

        {/* Coluna Direita - Cards */}
        <div className="flex flex-col gap-6 w-full lg:max-w-[600px]">
          {[
            { t: "Funis de vendas validados", d: "Crescimento previsível para o seu ISP com processos testados." },
            { t: "Geração diária de leads", d: "Novos assinantes todos os dias transformando interesse em contratos." },
            { t: "Retenção de base", d: "Mais receita com clientes fiéis e menos cancelamentos." },
            { t: "Autoridade digital", d: "Seu provedor como a escolha óbvia e referência local." }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl flex p-4 shadow-sm border border-gray-100 lg:sticky lg:top-[150px]">
              <div className="w-2 bg-primary rounded-full shrink-0"></div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2">{item.t}</h3>
                <p className="text-gray-600 text-sm md:text-base">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}