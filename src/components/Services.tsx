export function Services() {
  return (
    <section className="w-full bg-bg py-20 px-[74px] border-t-[5px] border-primary/20 ">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-5xl font-bold flex flex-col text-center mb-4">
          Estratégias que{" "}
          <span className="bg-primary px-2">Geram Resultados Reais</span>
        </h2>
        <p className="text-xl text-black text-center max-w-3xl">
          Geração de leads diários, aumento de receita com <br /> previsibilidade e autoridade digital na sua região.
        </p>
      </div>

      <div className="flex justify-center gap-16 items-start">
        {/* Coluna Esquerda - Funil 3D */}
        <div className="flex-shrink-0 sticky top-[200px] h-fit">
          <img 
            src="/Group 4.png" 
            alt="Funil de vendas" 
            className="w-auto h-auto max-w-md"
          />
        </div>

        {/* Coluna Direita - Cards */}
        <div className="flex flex-col gap-6 flex-1 max-w-[600px] h-fit ">
          {/* Card 1 */}
          <div className="bg-white rounded-lg flex p-4 sticky top-[200px]">
            <div className="w-2 bg-primary rounded-full"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black mb-2">
                Funis de vendas validados.
              </h3>
              <p className="text-black">
                Crescimento previsível para o seu ISP com processos testados que eliminam achismos.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg  flex p-4 sticky top-[200px]">
            <div className="w-2 bg-primary rounded-full"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black mb-2">
                Geração diária de leads
              </h3>
              <p className="text-black">
                Novos assinantes todos os dias com estratégias que transformam interesse em contratos.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg  flex p-4 sticky top-[200px]">
            <div className="w-2 bg-primary rounded-full"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black mb-2">
                Retenção de base
              </h3>
              <p className="text-black">
                Mais receita com clientes fiéis, menos cancelamentos e maior permanência em seu ISP.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg  flex p-4 sticky top-[200px]">
            <div className="w-2 bg-primary rounded-full"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black mb-2">
                Autoridade digital na sua região
              </h3>
              <p className="text-black">
                Seu provedor como a escolha óbvia, referência local e sinônimo de confiança no mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
