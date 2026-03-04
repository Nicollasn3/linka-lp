import { Home, Lightbulb, Link2, Users, HelpCircle, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-xl bg-white/10">
      <div className="px-6 md:px-[74px] flex justify-between items-center h-[80px] md:h-[107px]">
        <img src="/logo-linka.svg" alt="Linka" className="h-8 md:h-10" />
        
        {/* Menu Desktop */}
        <ul className="hidden lg:flex gap-8">
          <li>
            <a href="#" className="flex items-center gap-2">
              <Home className="text-primary w-5 h-5" />
              <span className="text-black font-bold">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2">
              <Lightbulb className="text-[#51EB51] w-5 h-5" />
              <span className="text-black font-bold">Soluções</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2">
              <Link2 className="text-[#51EB51] w-5 h-5" />
              <span className="text-black font-bold">Quem somos</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2">
              <Users className="text-[#51EB51] w-5 h-5" />
              <span className="text-black font-bold">Testemunhos</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2">
              <HelpCircle className="text-[#51EB51] w-5 h-5" />
              <span className="text-black font-bold">FAQ</span>
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-primary text-black px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform">
            Entrar em Contato
          </button>
          {/* Botão Menu Mobile (Apenas Visual) */}
          <button className="lg:hidden text-black">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>
    </header>
  );
}