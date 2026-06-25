import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="mb-12"
    >
      <div className="hairline mb-6" />
      <div className="flex items-center gap-3">
        {index && (
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70">
            {index}
          </span>
        )}
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.025em] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
          {description}
        </p>
      )}
    </motion.div>
  );
}
