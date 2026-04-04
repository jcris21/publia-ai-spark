const FooterSection = () => (
  <footer id="contacto" className="py-16 px-6 bg-foreground">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <span className="text-background font-bold text-lg tracking-tight">Publia Lab</span>
          </div>
          <p className="text-background/60 leading-relaxed max-w-md">
            Habilitamos la próxima generación de servicios públicos con inteligencia artificial responsable y metodologías centradas en el ciudadano.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-4">
          <a
            href="https://forms.fillout.com/t/oF2A6pZQhAus"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:-translate-y-px transition-all duration-200"
          >
            Agendar Consulta
          </a>
          <p className="text-background/40 text-sm">hola@publialab.com</p>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-background/30 text-sm">© 2026 Publia Lab. Tecnología para el bien público.</p>
        <div className="flex gap-6">
          <a href="#" className="text-background/30 text-sm hover:text-background/60 transition-colors">Privacidad</a>
          <a href="#" className="text-background/30 text-sm hover:text-background/60 transition-colors">Términos</a>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
