import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { experience } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionHeading
        index="06"
        eyebrow="experience"
        title="Professional work."
      />

      <ol className="relative space-y-4 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:hidden before:w-px before:bg-white/[0.06] sm:before:block sm:pl-8">
        {experience.map((e, i) => (
          <motion.li
            key={`${e.company}-${e.role}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.05 }}
            className="glass relative rounded-2xl p-5 sm:p-6"
          >
            <span className="absolute -left-8 top-7 hidden h-2 w-2 rounded-full bg-[var(--accent-cyan)]/80 ring-2 ring-background sm:block" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="font-display text-base font-semibold sm:text-lg">
                {e.role}
              </h4>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {e.period}
              </span>
            </div>
            <div className="mt-1 text-sm text-foreground/85">{e.company}</div>
            <div className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
              {e.location}
            </div>
            <ul className="mt-3 space-y-1.5">
              {e.bullets.map((b, j) => (
                <li
                  key={j}
                  className="flex gap-2.5 text-[13.5px] leading-relaxed text-foreground/80"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-cyan)]/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
