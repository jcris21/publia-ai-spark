import { motion } from "framer-motion";
import impactoEcosistema from "@/assets/impacto-ecosistema.png";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

const stats = [
  { value: "40%", label: "Reducción en tiempos de trámite" },
  { value: "3x", label: "Incremento en satisfacción ciudadana" },
  { value: "1", label: "Instituciones públicas habilitadas" },
  { value: "500K+", label: "Ciudadanos beneficiados" },
];

const ImpactSection = () => (
  <section id="impacto" className="py-24 px-6 bg-surface">
    <div className="max-w-6xl mx-auto">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <span className="font-mono-lab text-primary mb-4 inline-block">Impacto</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
          Resultados que importan
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16 rounded-2xl overflow-hidden shadow-[var(--shadow-card)] bg-background"
      >
        <img
          src={impactoEcosistema}
          alt="Ecosistema de soluciones de IA para gobierno: ML, GenAI, atención ciudadana, agentes IA y validación de impacto"
          className="w-full h-auto block"
          loading="lazy"
        />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="text-center p-8 bg-background rounded-xl shadow-[var(--shadow-card)]"
          >
            <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
