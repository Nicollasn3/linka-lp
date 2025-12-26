import { Home, Lightbulb, Link2, Users, HelpCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full sticky top-0 z-50 bg-[rgba(244,244,244,0.7)] backdrop-blur-[47px]"
    >
      <div className="px-6 md:px-[74px] flex justify-between items-center h-[77px] md:h-[107px]">
        <motion.img 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          src="/logo-linka.svg" 
          alt="Linka" 
          className="h-[31px] md:h-auto" 
        />
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
          {[
            { href: "#home", icon: Home, label: "Home" },
            { href: "#solucoes", icon: Lightbulb, label: "Soluções" },
            { href: "#quem-somos", icon: Link2, label: "Quem somos" },
            { href: "#testemunhos", icon: Users, label: "Testemunhos" },
            { href: "#faq", icon: HelpCircle, label: "FAQ" }
          ].map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1) }}
            >
              <a href={item.href} className="flex items-center gap-2 group">
                <item.icon className="text-primary stroke-2 transition-transform group-hover:scale-110" />
                <span className="text-black font-bold group-hover:text-primary transition-colors">{item.label}</span>
              </a>
            </motion.li>
          ))}
        </ul>
        <motion.a 
          href="#contato"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.8 }}
          className="hidden md:block bg-primary text-black px-6 py-2 rounded-full font-bold shadow-lg shadow-primary/20"
        >
          Entrar em Contato
        </motion.a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-[77px] left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 overflow-hidden border-t border-gray-100"
          >
            <ul className="flex flex-col gap-4">
              {[
                { href: "#home", icon: Home, label: "Home" },
                { href: "#solucoes", icon: Lightbulb, label: "Soluções" },
                { href: "#quem-somos", icon: Link2, label: "Quem somos" },
                { href: "#testemunhos", icon: Users, label: "Testemunhos" },
                { href: "#faq", icon: HelpCircle, label: "FAQ" }
              ].map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href={item.href} className="flex items-center gap-2 text-black font-bold" onClick={() => setIsMenuOpen(false)}>
                    <item.icon className="text-primary stroke-2" /> {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.a 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              href="#contato" 
              className="bg-primary text-black px-6 py-3 rounded-full font-bold w-full text-center block" 
              onClick={() => setIsMenuOpen(false)}
            >
              Entrar em Contato
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

