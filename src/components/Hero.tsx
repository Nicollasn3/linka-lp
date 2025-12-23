import { Wifi } from "lucide-react";

const icon = {
  Wifi,
}
export function Hero() {
  return (
    <section className="w-full px-[74px] flex justify-center items-center gap-24 h-[calc(70vh-107px)] relative">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 bg-primary py-2 px-6 rounded-full w-fit">
          <icon.Wifi className="text-black w-4 h-4" />
          <span className="text-black text-mb font-bold">De dono de provedor para dono de negócio</span>
        </div>
        <h1 className="text-5xl font-bold leading-tight">Acelere o crescimento <br /> do seu ISP com a <span className="bg-primary h-[10px] px-2">Linka</span></h1>
        <h6 className="text-2xl font-medium text-gray-500">Facilidade e previsibilidade <br /> de novos assinantes todos os dias</h6>
        <div className="flex items-center gap-2 mt-4">
        <button className="bg-primary text-black px-6 py-2 rounded-full font-bold">Entrar em Contato</button>
        <button className="text-black px-6 py-2 rounded-full font-bold border border-primary border-[2px] [box-shadow:inset_0_0_0_1px_#51EB51]">saiba mais</button>
        </div>
      </div>
      <video 
        src="/x0ydBc8b4BFeiAU7q8pTrtMSjsQ.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full max-w-lg h-auto rounded-lg mix-blend-multiply"
      />
      
      {/* Elemento de Sombra do Figma */}
      <div className="absolute h-[57px] bottom-0 w-full pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent"></div>
      </div>
    </section>
  );
}

