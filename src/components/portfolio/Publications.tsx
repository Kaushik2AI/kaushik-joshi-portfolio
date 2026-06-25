import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { publications } from "@/lib/portfolio-data";

export function Publications() {
  return (
    <section id="publications" className="scroll-mt-20">
      <SectionHeading
        index="04"
        eyebrow="publications"
        title="Peer-reviewed work."
        description="Selected publications across AI systems and applied deep learning."
      />

      <div className="space-y-4">
        {publications.map((pub, i) => (
          <motion.article
            key={pub.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass gradient-border group flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-start sm:p-6"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.78_0.16_230_/_0.2)] to-[oklch(0.72_0.2_295_/_0.2)] ring-1 ring-white/10">
              <BookOpen className="h-5 w-5 text-[oklch(0.88_0.14_200)]" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em]">
                <span className="rounded-full bg-white/5 px-2 py-0.5 text-foreground/80 ring-1 ring-white/10">{pub.type}</span>
                <span className="text-[oklch(0.88_0.14_200)]">{pub.venue}</span>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-emerald-300">
                  {pub.status}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug sm:text-xl">
                {pub.title}
              </h3>
              {pub.doi && (
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-[oklch(0.88_0.14_200)]"
                >
                  DOI: {pub.doi}
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
