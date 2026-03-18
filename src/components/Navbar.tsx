import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">P</span>
          </div>
          <span className="text-foreground font-bold text-lg tracking-tight">Publia Lab</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#capacidades" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Capacidades</a>
          <a href="#metodologia" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Metodología</a>
          <a href="#impacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Impacto</a>
          <a
            href="#contacto"
            className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:-translate-y-px transition-all duration-200 hover:shadow-lg"
          >
            Agendar Consulta
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#capacidades" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Capacidades</a>
              <a href="#metodologia" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Metodología</a>
              <a href="#impacto" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Impacto</a>
              <a href="#contacto" className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-lg text-center" onClick={() => setMobileOpen(false)}>
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
