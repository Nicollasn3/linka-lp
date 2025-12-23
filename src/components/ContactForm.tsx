export function ContactForm() {
  return (
    <section className="w-full bg-bg py-20 px-[74px]">
      <div className="flex flex-col items-center gap-2 mb-12">
        <h2 className="text-5xl font-bold text-black text-center">
          Marque sua Reunião
        </h2>
        <p className="text-xl text-[#4c4c4c] font-medium text-center">
          para criar o plano de crescimento do seu provedor.
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Nome"
          className="w-full h-[52px] bg-white border-2 border-[#e5e5e5] rounded-[11px] px-4 shadow-[0px_6px_17.2px_0px_rgba(0,0,0,0.03)] focus:outline-none focus:border-primary"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full h-[52px] bg-white border-2 border-[#e5e5e5] rounded-[11px] px-4 shadow-[0px_6px_17.2px_0px_rgba(0,0,0,0.03)] focus:outline-none focus:border-primary"
        />
        <input
          type="tel"
          placeholder="Telefone"
          className="w-full h-[52px] bg-white border-2 border-[#e5e5e5] rounded-[11px] px-4 shadow-[0px_6px_17.2px_0px_rgba(0,0,0,0.03)] focus:outline-none focus:border-primary"
        />
        <input
          type="text"
          placeholder="Nome do seu ISP"
          className="w-full h-[52px] bg-white border-2 border-[#e5e5e5] rounded-[11px] px-4 shadow-[0px_6px_17.2px_0px_rgba(0,0,0,0.03)] focus:outline-none focus:border-primary"
        />
        <button className="w-full h-[52px] bg-primary text-black font-bold rounded-[11px] shadow-[0px_6px_18.9px_0px_rgba(0,0,0,0.03)] hover:opacity-90 transition-opacity">
          Entre em contato
        </button>
      </div>
    </section>
  );
}

