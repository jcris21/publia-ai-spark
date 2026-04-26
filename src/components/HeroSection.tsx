import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

const HeroSection = () => (
  <section className="pt-32 pb-24 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="text-center">
        <motion.div {...fadeInUp}>
          <span className="font-mono-lab text-primary mb-6 inline-block">
            GovTech · IA Agéntica · Valor Social
          </span>
        </motion.div>

        <motion.h1
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-[-0.04em] text-foreground mb-6"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Transformamos la función pública con inteligencia agéntica
        </motion.h1>

        <motion.p
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          style={{ textWrap: "pretty" } as React.CSSProperties}
        >
          Publia Lab integra Aprendizaje Automático, generativo y metodologías de descubrimiento ágil para maximizar el valor social en la era de la IA 2.0.
        </motion.p>

        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
        >
          <a
            href="#contacto"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:-translate-y-px transition-all duration-200 hover:shadow-lg flex items-center gap-2"
          >
            Iniciar Discovery <ArrowRight size={16} />
          </a>
          <a
            href="#capacidades"
            className="bg-surface text-foreground px-6 py-3 rounded-lg font-semibold text-sm shadow-[0_0_0_1px_rgba(0,0,0,0.08)] hover:-translate-y-px transition-all duration-200"
          >
            Ver Capacidades
          </a>
        </motion.div>
      </div>

    </div>
  </section>
);

export default HeroSection;
