export function Secao2() {
  return (
    <section className="w-full bg-bg py-20 px-[74px]">
      <div className="flex items-center justify-center gap-16">
        {/* Coluna Esquerda - Player de Vídeo */}
        <div className="flex-shrink-0">
          <video 
            src="/zBMb1Ie0dafPnHGZIwppOm9tRyc.mp4" 
            controls
            className="w-[290px] h-[519px] rounded-3xl object-cover"
          />
        </div>

        {/* Coluna Direita - Texto */}
        <div className="flex flex-col gap-6 flex-1 max-w-2xl">
          <h2 className="text-5xl font-bold text-black leading-tight">
            A voz de quem <br />
            viveu a <span className="bg-primary px-2">transformação</span>
          </h2>
          <p className="text-xl text-black">
            Veja no vídeo como provedores como você conquistaram previsibilidade, mais clientes e receita constante.
          </p>
        </div>
      </div>
    </section>
  );
}
