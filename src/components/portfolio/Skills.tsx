import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <SectionHeading
        index="07"
        eyebrow="skills · stack"
        title="Tools I build with."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
            className="glass gradient-border rounded-2xl p-5"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[oklch(0.88_0.14_200)]">
              {g.name}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-foreground/85 transition-colors hover:border-[oklch(0.78_0.16_230_/_0.5)] hover:text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
