import { motion } from "framer-motion";
import { Brain, Sparkles, Bot } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

const capabilities = [
  {
    icon: Brain,
    label: "ML",
    title: "Machine Learning",
    description:
      "Modelos predictivos y analítica avanzada para optimizar la toma de decisiones en políticas públicas y asignación de recursos.",
  },
  {
    icon: Sparkles,
    label: "GenAI",
    title: "IA Generativa",
    description:
      "Automatización inteligente de documentación, atención ciudadana y generación de contenido institucional con calidad verificable.",
  },
  {
    icon: Bot,
    label: "Agentic",
    title: "IA Agéntica",
    description:
      "Agentes autónomos que ejecutan flujos de trabajo complejos, coordinan sistemas y habilitan servicios públicos 24/7.",
  },
];

const CapabilitiesSection = () => (
  <section id="capacidades" className="py-24 px-6 bg-surface">
    <div className="max-w-6xl mx-auto">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <span className="font-mono-lab text-primary mb-4 inline-block">Capacidades</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
          Tres pilares de IA aplicada
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
            whileHover={{ y: -4 }}
            className="p-8 bg-background rounded-xl shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
          >
            <div className="w-10 h-10 mb-6 rounded-lg bg-primary/10 flex items-center justify-center">
              <cap.icon size={20} className="text-primary" />
            </div>
            <span className="font-mono-lab text-accent mb-2 inline-block">{cap.label}</span>
            <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{cap.title}</h3>
            <p className="text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" } as React.CSSProperties}>
              {cap.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
