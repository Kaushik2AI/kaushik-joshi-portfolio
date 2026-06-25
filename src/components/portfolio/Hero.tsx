import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText, FolderGit2, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const EASE = [0.22, 1, 0.36, 1] as const;

const marqueeTags = [
  "Python",
  "LLMs",
  "RAG",
  "Multimodal AI",
  "Computer Vision",
  "NLP",
  "Data Science",
  "Agents",
  "VLMs",
  "PyTorch",
  "HuggingFace",
  "Model Evaluation",
  "Trustworthy AI",
  "AI Systems",
];

const metrics = [
  { value: "02", label: "Publications" },
  { value: "04+", label: "Research Projects" },
  { value: "2+", label: "Industrial AI Exp" },
  { value: "RAG · VLMs · Agents", label: "Focus Areas" },
];

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -36]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const glowX = useTransform(scrollYProgress, [0, 1], [0, 34]);
  const quoteOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0.72]);
  const quoteScale = useTransform(scrollYProgress, [0, 1], [1, 0.985]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-[calc(100svh-90px)] w-full scroll-mt-28 flex-col justify-start overflow-hidden pt-4 sm:pt-8 lg:min-h-[600px] lg:pt-4 xl:min-h-[640px]"
    >
      {/* Ambient hero lighting */}
      <motion.div
        aria-hidden="true"
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute -left-24 top-8 h-80 w-80 rounded-full bg-cyan-300/[0.055] blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        style={{ y: glowY }}
        className="pointer-events-none absolute right-8 top-20 h-96 w-96 rounded-full bg-indigo-400/[0.045] blur-3xl"
      />

      {/* Opening scan beam */}
      <motion.div
        aria-hidden="true"
        initial={{ x: "-45%", opacity: 0 }}
        animate={{ x: "145%", opacity: [0, 1, 0] }}
        transition={{
          duration: 2.2,
          delay: 0.35,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-y-0 left-0 z-0 w-48 -skew-x-12 bg-gradient-to-r from-transparent via-cyan-200/[0.075] to-transparent"
      />

      {/* Subtle top line */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
        className="absolute left-0 top-0 h-px w-full origin-left bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent"
      />

      <motion.div
        style={{ y: heroY, opacity: quoteOpacity, scale: quoteScale }}
        className="relative z-10 w-full max-w-[1040px] overflow-hidden"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ duration: 0.75, ease: EASE }}
          className="eyebrow flex items-center gap-2"
        >
          <span className="inline-block h-1 w-7 bg-[var(--accent-cyan)]/70" />
          About Me
        </motion.div>

        {/* Quote */}
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-130px" }}
          transition={{ duration: 0.95, delay: 0.05, ease: EASE }}
          className="mt-4 max-w-[1040px] break-words font-display font-semibold tracking-[-0.045em] text-foreground"
          style={{
            fontSize: "clamp(2.15rem, 4.25vw, 3.65rem)",
            lineHeight: 1.04,
          }}
        >
          “The true power of AI is not in replacing people,{" "}
          <span className="relative inline text-foreground/72">
            but in empowering them to think sharper, build faster, and solve better.”
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 18, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
          className="mt-4 pr-1 text-right font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-200/70 sm:text-[11px]"
        >
          — Kaushik Joshi
        </motion.p>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ duration: 0.75, delay: 0.2, ease: EASE }}
          className="mt-6 max-w-3xl text-[14px] leading-[1.75] text-muted-foreground sm:text-[15.5px]"
        >
          I build reliable AI systems across LLMs, RAG, multimodal reasoning, NLP, computer vision,
          data science, and agentic workflows — focused on grounded, interpretable, and useful
          outcomes.
        </motion.p>

        {/* Moving skill row */}
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ duration: 0.7, delay: 0.28, ease: EASE }}
          className="group relative mt-7 w-full max-w-[980px] overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.025] py-3 shadow-lg shadow-black/20 transition-all duration-300 hover:border-cyan-200/18 hover:bg-white/[0.04]"
        >
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

          <motion.div
            className="absolute inset-y-0 w-28 -skew-x-12 bg-gradient-to-r from-transparent via-cyan-200/[0.055] to-transparent"
            animate={{ x: ["-35%", "1000%"] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1.2,
            }}
          />

          <motion.div
            className="flex w-max items-center gap-8 px-6 sm:gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...marqueeTags, ...marqueeTags].map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/62 sm:text-[10px]"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ duration: 0.75, delay: 0.34, ease: EASE }}
          className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
        >
          <Button
            asChild
            variant="outline"
            className="h-11 w-full rounded-full border-cyan-300/30 bg-cyan-300/[0.12] px-5 text-foreground shadow-[0_0_24px_rgba(34,211,238,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/[0.14] hover:text-foreground sm:w-auto"
          >
            <a href="#home">
              <UserRound className="mr-2 h-4 w-4" />
              About Me
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-11 w-full rounded-full border-white/10 bg-white/[0.03] px-5 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-white/[0.065] hover:text-foreground sm:w-auto"
          >
            <a href="#research">
              <FileText className="mr-2 h-4 w-4" />
              View Research
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-11 w-full rounded-full border-white/10 bg-white/[0.03] px-5 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-white/[0.065] hover:text-foreground sm:w-auto"
          >
            <a href="#projects">
              <FolderGit2 className="mr-2 h-4 w-4" />
              Explore Projects
              <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ duration: 0.8, delay: 0.42, ease: EASE }}
          className="mt-8 grid w-full max-w-[980px] grid-cols-2 gap-2.5 sm:grid-cols-4"
        >
          {metrics.map((m, index) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-120px" }}
              transition={{ duration: 0.6, delay: 0.45 + index * 0.06, ease: EASE }}
              whileHover={{ y: -5 }}
              className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.045] sm:px-5"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-300/[0] blur-2xl transition-all duration-500 group-hover:bg-cyan-300/[0.10]" />
              <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/0 to-transparent transition-all duration-300 group-hover:via-cyan-200/30" />

              <div
                className={
                  m.value.length > 8
                    ? "relative font-display text-[0.98rem] font-semibold leading-tight tracking-tight text-foreground sm:text-[1.05rem] xl:text-[1.1rem]"
                    : "relative font-display text-[1.25rem] font-semibold leading-tight tracking-tight text-foreground sm:text-[1.35rem] xl:text-[1.45rem]"
                }
              >
                {m.value}
              </div>

              <div className="relative mt-2 font-mono text-[8.5px] uppercase tracking-[0.17em] text-muted-foreground sm:text-[9px]">
                {m.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
