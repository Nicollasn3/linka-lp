import { Wifi } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full px-6 md:px-[74px] flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 min-h-[calc(100vh-80px)] py-10 relative">
      <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start z-10">
        <div className="flex items-center gap-2 bg-primary py-2 px-6 rounded-full w-fit">
          <Wifi className="text-black w-4 h-4" />
          <span className="text-black text-xs md:text-sm font-bold uppercase tracking-wide">De dono de provedor para dono de negócio</span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Acelere o crescimento <br className="hidden md:block" /> do seu ISP com a <span className="bg-primary px-2">Linka</span>
        </h1>
        <h6 className="text-lg md:text-2xl font-medium text-gray-500 max-w-lg">
          Facilidade e previsibilidade de novos assinantes todos os dias.
        </h6>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-primary text-black px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all">
            Entrar em Contato
          </button>
          <button className="w-full sm:w-auto text-black px-8 py-3 rounded-full font-bold border-2 border-primary">
            Saiba mais
          </button>
        </div>
      </div>

      <div className="w-full max-w-sm md:max-w-lg">
        <video 
          src="/x0ydBc8b4BFeiAU7q8pTrtMSjsQ.mp4" 
          autoPlay loop muted playsInline
          className="w-full h-auto rounded-2xl mix-blend-multiply"
        />
      </div>
      
      <div className="absolute h-[57px] bottom-0 w-full pointer-events-none bg-gradient-to-t from-black/5 to-transparent" />
    </section>
  );
}