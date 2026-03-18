import { motion } from "framer-motion";
import { Search, Repeat, CheckCircle2, Rocket } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
};

const steps = [
  {
    icon: Search,
    phase: "Discovery",
    title: "Investigación y Descubrimiento",
    description: "Comprendemos el contexto institucional, identificamos oportunidades de impacto y definimos hipótesis de valor con stakeholders clave.",
  },
  {
    icon: Repeat,
    phase: "Sprint",
    title: "Iteración Ágil",
    description: "Desarrollamos prototipos funcionales en ciclos cortos, validando continuamente con usuarios reales del servicio público.",
  },
  {
    icon: CheckCircle2,
    phase: "Validación",
    title: "Evidencia de Impacto",
    description: "Medimos resultados con métricas de valor social, asegurando que cada solución genera beneficio tangible y medible.",
  },
  {
    icon: Rocket,
    phase: "Escala",
    title: "Implementación Sostenible",
    description: "Desplegamos soluciones robustas con transferencia de capacidades al equipo institucional para garantizar continuidad.",
  },
];

const MethodologySection = () => (
  <section id="metodologia" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div {...fadeInUp}>
          <span className="font-mono-lab text-primary mb-4 inline-block">Metodología</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6">
            Discovery & Agile Delivery
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6" style={{ textWrap: "pretty" } as React.CSSProperties}>
            Combinamos marcos de innovación pública con agilidad técnica. Cada proyecto inicia con una fase de descubrimiento rigurosa antes de construir, asegurando que la tecnología resuelve problemas reales.
          </p>
          <p className="text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" } as React.CSSProperties}>
            Colaboramos estrechamente con equipos del sector público, habilitando capacidades internas que perduran más allá del proyecto.
          </p>
        </motion.div>

        <div className="space-y-1">
          {steps.map((step, i) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex gap-4 p-5 rounded-xl hover:bg-surface transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                <step.icon size={18} className="text-primary" />
              </div>
              <div>
                <span className="font-mono-lab text-accent text-[11px]">{step.phase}</span>
                <h3 className="text-base font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MethodologySection;
