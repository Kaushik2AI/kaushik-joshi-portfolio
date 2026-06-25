import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, GraduationCap, Medal, Sparkles, Trophy } from "lucide-react";
import { education } from "@/lib/portfolio-data";

const EASE = [0.22, 1, 0.36, 1] as const;

const achievements = [
  {
    title: "3rd Prize at Boston University Med AI Hackathon",
    date: "Apr. 2026",
    type: "Hackathon",
    note: "Built an AI-driven medical solution in a competitive university hackathon environment.",
    Icon: Trophy,
  },
  {
    title: "3rd Place in CODEMENT_24",
    date: "Apr. 2024",
    type: "National Hackathon",
    note: "Secured 3rd place in a national-level 24-hour hackathon.",
    Icon: Medal,
  },
  {
    title: "Best Volunteer — MIT NCC Troop",
    date: "Apr. 2023",
    type: "Service",
    note: "Awarded Best Volunteer for 4 years of service with MIT NCC Troop.",
    Icon: Award,
  },
  {
    title: "Most Creative Award in BS Computer Science",
    date: "May. 2022",
    type: "Creativity",
    note: "Recognized for creative technical work during BS Computer Science.",
    Icon: Sparkles,
  },
];

function removeGpaText(text?: string) {
  if (!text) return "";

  return text
    .replace(/\bGPA\s*[:\-]?\s*[\d.]+(?:\s*\/\s*[\d.]+)?\b[.,;]?/gi, "")
    .replace(/\bCGPA\s*[:\-]?\s*[\d.]+(?:\s*\/\s*[\d.]+)?\b[.,;]?/gi, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.,;])/g, "$1")
    .replace(/^[,.;\s-]+|[,.;\s-]+$/g, "");
}

export function Education() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowLeftX = useTransform(scrollYProgress, [0, 1], ["-8%", "10%"]);
  const glowLeftY = useTransform(scrollYProgress, [0, 1], ["-4%", "12%"]);
  const glowRightX = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const headingY = useTransform(scrollYProgress, [0, 0.35], [26, 0]);
  const timelineScale = useTransform(scrollYProgress, [0.18, 0.62], [0, 1]);
  const awardsY = useTransform(scrollYProgress, [0.15, 0.75], [28, -12]);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative scroll-mt-28 overflow-hidden py-20 lg:py-28"
    >
      {/* Scroll-moving atmosphere */}
      <motion.div
        aria-hidden="true"
        style={{ x: glowLeftX, y: glowLeftY }}
        className="pointer-events-none absolute left-[4%] top-20 h-[380px] w-[380px] rounded-full bg-cyan-300/[0.035] blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        style={{ x: glowRightX }}
        className="pointer-events-none absolute right-[8%] bottom-10 h-[380px] w-[380px] rounded-full bg-indigo-400/[0.035] blur-3xl"
      />

      <div className="relative">
        {/* Header */}
        <motion.div
          style={{ y: headingY }}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-110px" }}
          transition={{ duration: 0.75, ease: EASE }}
          className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end"
        >
          <div>
            <div className="eyebrow flex items-center gap-2">
              <span className="inline-block h-1 w-7 bg-[var(--accent-cyan)]/70" />
              05 Education · Recognition
            </div>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[3.35rem] lg:leading-[1.04]">
              Academic foundation with proof of building, competing, and leading.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            My background combines formal AI and computer science training with hackathon wins,
            service recognition, and creative technical work.
          </p>
        </motion.div>

        {/* Open two-column layout */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] xl:gap-14">
          {/* Left: Education timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -18, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-90px" }}
              transition={{ duration: 0.65, ease: EASE }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/12 bg-cyan-300/[0.08]">
                <GraduationCap className="h-5 w-5 text-cyan-100/85" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-foreground">
                  Education
                </h3>
                <p className="text-sm text-muted-foreground">
                  AI, machine learning, and computer science.
                </p>
              </div>
            </motion.div>

            <ol className="relative space-y-4">
              {/* Animated timeline line */}
              <div className="absolute left-[21px] top-3 h-[calc(100%-1.5rem)] w-px overflow-hidden bg-white/[0.07]">
                <motion.div
                  style={{ scaleY: timelineScale, transformOrigin: "top" }}
                  className="h-full w-full bg-gradient-to-b from-cyan-200/60 via-cyan-200/22 to-transparent"
                />
              </div>

              {education.map((e, i) => {
                const cleanNote = removeGpaText(e.note);

                return (
                  <motion.li
                    key={e.degree + e.school + i}
                    initial={{ opacity: 0, x: -24, filter: "blur(9px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: false, margin: "-80px" }}
                    transition={{ duration: 0.65, delay: i * 0.07, ease: EASE }}
                    className="relative pl-14"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: false, margin: "-80px" }}
                      transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                      className="absolute left-0 top-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-background/80 shadow-xl shadow-black/25 backdrop-blur-xl"
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.65)]" />
                    </motion.div>

                    <div className="group relative overflow-hidden rounded-[1.55rem] border border-white/[0.08] bg-white/[0.022] p-5 shadow-xl shadow-black/15 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/18 hover:bg-white/[0.04]">
                      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-300/[0] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/[0.07]" />
                      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/0 to-transparent transition-all duration-300 group-hover:via-cyan-200/25" />

                      <div className="relative">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <h4 className="text-lg font-semibold tracking-[-0.025em] text-foreground">
                              {e.school}
                            </h4>

                            <p className="mt-1 text-sm font-medium text-foreground/82">
                              {e.degree}
                            </p>
                          </div>

                          <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                            {e.period}
                          </span>
                        </div>

                        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-100/55">
                          {e.location}
                        </p>

                        {cleanNote && (
                          <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                            {cleanNote}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>

          {/* Right: Awards */}
          <motion.div style={{ y: awardsY }}>
            <motion.div
              initial={{ opacity: 0, x: 18, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-90px" }}
              transition={{ duration: 0.65, ease: EASE }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/12 bg-cyan-300/[0.08]">
                <Trophy className="h-5 w-5 text-cyan-100/85" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-foreground">
                  Awards & Achievements
                </h3>
                <p className="text-sm text-muted-foreground">
                  Hackathons, service, and creative recognition.
                </p>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {achievements.map((a, i) => {
                const Icon = a.Icon;

                return (
                  <motion.article
                    key={a.title}
                    initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: false, margin: "-80px" }}
                    transition={{ duration: 0.65, delay: i * 0.07, ease: EASE }}
                    whileHover={{ y: -6 }}
                    className={`group relative overflow-hidden rounded-[1.55rem] border border-white/[0.08] bg-white/[0.022] p-5 shadow-xl shadow-black/15 backdrop-blur-xl transition-all duration-300 hover:border-cyan-200/18 hover:bg-white/[0.04] ${
                      i === 0 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-300/[0] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/[0.075]" />
                    <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/0 to-transparent transition-all duration-300 group-hover:via-cyan-200/25" />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200/12 bg-cyan-300/[0.08] transition-transform duration-300 group-hover:scale-105">
                          <Icon className="h-5 w-5 text-cyan-100/85" />
                        </div>

                        <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                          {a.date}
                        </span>
                      </div>

                      <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">
                        {a.type}
                      </p>

                      <h4 className="mt-2 text-lg font-semibold leading-tight tracking-[-0.03em] text-foreground">
                        {a.title}
                      </h4>

                      <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                        {a.note}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
