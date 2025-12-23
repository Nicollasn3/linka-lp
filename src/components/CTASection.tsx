export function CTASection() {
  return (
    <section className="w-full bg-[#031c03] py-32 px-[74px] relative overflow-visible">
      <div className="flex flex-col items-center justify-center relative z-10">
        <div className="bg-white rounded-[19px] shadow-[14px_18px_49.5px_0px_rgba(0,0,0,0.12)] p-12 max-w-4xl w-full relative">
          {/* Imagem 3D sobreposta no topo do card */}
          <div className="absolute h-[181px] left-1/2 top-[-120px] -translate-x-1/2 w-[212px] pointer-events-none z-20">
            <div className="absolute inset-0 overflow-visible">
              <img 
                src="/logo3d.png" 
                alt="Linka 3D Logo"
                className="absolute h-[166.3%] left-[-18.4%] top-[-29.83%] w-[141.98%] object-contain"
              />
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-3 mb-8 mt-8">
            <h2 className="text-5xl font-bold text-black text-center">
              Pare de depender da sorte
            </h2>
            <p className="text-xl text-[#4c4c4c] font-medium text-center max-w-2xl">
              Escale seu ISP com previsibilidade e segurança, usando processos testados que geram leads diários,
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-primary text-black px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
              Agende sua reunião estratégica agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

