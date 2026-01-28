import { useState } from "react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      isp: formData.get("isp"),
      source: "Site Linka",
    };

    try {
      const response = await fetch(
        "https://hook.us1.make.com/nwdqcblexb7kinse7opbkurp72vdh6l5",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) throw new Error();

      setSuccess(true);
      e.currentTarget.reset();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

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

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 items-center max-w-2xl mx-auto"
      >
        <input name="name" type="text" placeholder="Nome" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="phone" type="tel" placeholder="Telefone" required />
        <input name="isp" type="text" placeholder="Nome do seu ISP" required />

        <button
          type="submit"
          disabled={loading}
          className="w-full h-[52px] bg-primary text-black font-bold rounded-[11px]
                     disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Enviando..." : "Entre em contato"}
        </button>

        {success && (
          <span className="text-green-600 text-sm font-medium">
            Dados enviados com sucesso. Em breve entraremos em contato.
          </span>
        )}

        {error && (
          <span className="text-red-500 text-sm font-medium">
            Erro ao enviar. Tente novamente.
          </span>
        )}
      </form>
    </section>
  );
}
