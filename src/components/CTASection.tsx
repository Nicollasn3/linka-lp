export function CTASection() {
  return (
    <section className="w-full bg-[#031c03] py-20 md:py-32 px-6 md:px-[74px] relative">
      <div className="max-w-4xl mx-auto relative mt-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative">
          {/* Logo 3D ajustada */}
          <div className="absolute -top-24 md:-top-32 left-1/2 -translate-x-1/2 w-40 md:w-52">
            <img src="/logo3d.png" alt="3D Logo" className="w-full h-auto object-contain" />
          </div>
          
          <div className="flex flex-col items-center gap-4 text-center mt-10 md:mt-8">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Pare de depender da sorte
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Escale seu ISP com previsibilidade e segurança.
            </p>
            <button className="mt-4 bg-primary text-black px-6 md:px-10 py-4 rounded-full font-bold hover:scale-105 transition-all text-sm md:text-base">
              Agende sua reunião estratégica agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}