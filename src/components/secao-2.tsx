export function Secao2() {
  return (
    <section className="w-full bg-bg py-16 md:py-20 px-6 md:px-[74px]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-16 max-w-6xl mx-auto">
        
        {/* Coluna do Vídeo - Ajustada para ser fluida */}
        <div className="shrink-0 w-full max-w-[290px]">
          <video 
            src="/zBMb1Ie0dafPnHGZIwppOm9tRyc.mp4" 
            controls
            className="w-full h-auto aspect-[9/16] rounded-3xl object-cover shadow-2xl border-4 border-white/10"
          />
        </div>

        {/* Coluna de Texto - Alinhamento adaptativo */}
        <div className="flex flex-col gap-4 md:gap-6 flex-1 max-w-2xl text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight md:leading-tight">
            A voz de quem <br className="hidden md:block" />
            viveu a <span className="bg-primary px-2">transformação</span>
          </h2>
          <p className="text-lg md:text-xl text-black font-medium text-gray-700">
            Veja no vídeo como provedores como você conquistaram previsibilidade, mais clientes e receita constante através do nosso método.
          </p>
          
          {/* Botão extra opcional para mobile para melhorar conversão */}
          <div className="mt-4 lg:hidden">
             <button className="bg-primary text-black px-8 py-3 rounded-full font-bold w-full">
                Quero crescer meu ISP
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}