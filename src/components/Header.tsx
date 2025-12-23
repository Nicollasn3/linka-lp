import { Home, Lightbulb, Link2, Users, HelpCircle } from "lucide-react";

export function Header() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-xl bg-white/10">
      <div className="px-[74px] flex justify-between items-center justify-between h-[107px]">
        <img src="/logo-linka.svg" alt="Linka" />
        <ul className="flex gap-10">
          <li>
            <a href="#" className="flex items-center gap-2">
              <Home className="text-primary stroke-2" />
              <span className="text-black font-bold">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2">
              <Lightbulb className="text-[#51EB51] stroke-2" />
              <span className="text-black font-bold">Soluções</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2">
              <Link2 className="text-[#51EB51] stroke-2" />
              <span className="text-black font-bold">Quem somos</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2">
              <Users className="text-[#51EB51] stroke-2" />
              <span className="text-black font-bold">Testemunhos</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2">
              <HelpCircle className="text-[#51EB51] stroke-2" />
              <span className="text-black font-bold">FAQ</span>
            </a>
          </li>
        </ul>
        <button className="bg-primary text-black px-6 py-2 rounded-full font-bold">Entrar em Contato</button>
      </div>
      
    </header>
  );
}

