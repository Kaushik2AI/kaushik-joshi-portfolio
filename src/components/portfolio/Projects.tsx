import React, { useRef, useState, type SVGProps } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Cpu, Database, Sparkles, Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects, type Project } from "@/lib/portfolio-data";

const EASE = [0.22, 1, 0.36, 1] as const;

// Per-project schematic glyphs
function NetworkGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <circle cx="12" cy="32" r="3" stroke="currentColor" strokeWidth="1" />
      <circle cx="32" cy="14" r="3" stroke="currentColor" strokeWidth="1" />
      <circle cx="32" cy="50" r="3" stroke="currentColor" strokeWidth="1" />
      <circle cx="52" cy="32" r="3" stroke="currentColor" strokeWidth="1" />
      <path
        d="M14 30 L30 16 M14 34 L30 48 M34 16 L50 30 M34 50 L50 34 M15 32 L49 32"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}

function EyeGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M4 32 C16 16 48 16 60 32 C48 48 16 48 4 32 Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="32" cy="32" r="9" stroke="currentColor" strokeWidth="1" />
      <circle cx="32" cy="32" r="3.5" fill="currentColor" />
      <path d="M32 6 L32 12 M32 52 L32 58" stroke="currentColor" strokeWidth="0.7" />
    </svg>
  );
}

function CircuitGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path d="M6 18 L22 18 L22 32 L42 32 L42 46 L58 46" stroke="currentColor" strokeWidth="1" />
      <path d="M6 46 L18 46 L18 32 M42 18 L58 18" stroke="currentColor" strokeWidth="1" />
      <circle cx="22" cy="32" r="2" fill="currentColor" />
      <circle cx="42" cy="32" r="2" fill="currentColor" />
      <rect x="28" y="11" width="8" height="6" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}

function FlowGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <rect x="6" y="10" width="14" height="10" stroke="currentColor" strokeWidth="0.9" />
      <rect x="44" y="10" width="14" height="10" stroke="currentColor" strokeWidth="0.9" />
      <rect x="25" y="28" width="14" height="10" stroke="currentColor" strokeWidth="0.9" />
      <rect x="25" y="46" width="14" height="10" stroke="currentColor" strokeWidth="0.9" />
      <path
        d="M13 20 L13 33 L25 33 M51 20 L51 33 L39 33 M32 38 L32 46"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}

type ProjectMeta = {
  glyph: (p: SVGProps<SVGSVGElement>) => React.ReactElement;
  metrics: string[];
  build: string;
  signal: string;
};

const projectMeta: Record<string, ProjectMeta> = {
  rarc: {
    glyph: NetworkGlyph,
    metrics: ["768 runs", "36 configs", "Hallucination ↓ 0.31 → 0.20", "Relevance ↑ 3.09 → 4.33"],
    build: "Adaptive RAG controller",
    signal: "retrieval depth · hallucination risk · answer relevance",
  },
  msrb: {
    glyph: EyeGlyph,
    metrics: ["5 VLMs", "6 benchmarks", "Grad-CAM", "entropy", "CKA"],
    build: "Multimodal evaluation system",
    signal: "spatial reasoning · visual grounding · shortcut analysis",
  },
  sarf: {
    glyph: CircuitGlyph,
    metrics: ["CLIP ViT-B/32", "RGB + Canny fusion", "5 fusion variants"],
    build: "Structure-aware vision model",
    signal: "semantic features · edge structure · diagram understanding",
  },
  "decision-twin": {
    glyph: FlowGlyph,
    metrics: ["Simulator + Risk", "RAG policy checks", "Reviewer LLM", "governance-backed"],
    build: "Decision intelligence twin",
    signal: "strategy generation · risk review · business simulation",
  },
};

const fallbackMeta: ProjectMeta = {
  glyph: NetworkGlyph,
  metrics: ["system design", "evaluation", "iteration"],
  build: "AI system prototype",
  signal: "model behavior · evaluation · deployment thinking",
};

function getProjectMeta(id: string) {
  return projectMeta[id] ?? fallbackMeta;
}

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: -200, y: -200, visible: false });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowX = useTransform(scrollYProgress, [0, 1], ["-8%", "10%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["-4%", "10%"]);

  const flagship = projects[0];
  const remaining = projects.slice(1);

  return (
    <section id="projects" className="relative scroll-mt-28 overflow-hidden py-20 lg:py-28">
      {/* Ambient background */}
      <motion.div
        aria-hidden="true"
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute left-[4%] top-10 h-[440px] w-[440px] rounded-full bg-cyan-300/[0.04] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[2%] top-44 h-[460px] w-[460px] rounded-full bg-indigo-400/[0.045] blur-3xl"
      />

      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ duration: 0.75, ease: EASE }}
          className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end"
        >
          <div>
            <div className="eyebrow flex items-center gap-2">
              <span className="inline-block h-1 w-7 bg-[var(--accent-cyan)]/70" />
              03 Featured Projects
            </div>

            <h2 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[3.55rem] lg:leading-[1.02]">
              AI research translated into working systems.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            These are not just notebook experiments. Each project starts from a research question,
            becomes a working system, and is evaluated through measurable signals, failure modes,
            and deployment-style constraints.
          </p>
        </motion.div>

        <div
          ref={sectionRef}
          onMouseMove={(e) => {
            const rect = sectionRef.current?.getBoundingClientRect();
            if (!rect) return;
            setSpot({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
              visible: true,
            });
          }}
          onMouseLeave={() => setSpot((s) => ({ ...s, visible: false }))}
          className="relative mt-12"
        >
          {/* Cursor spotlight */}
          <div
            className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
            style={{
              opacity: spot.visible ? 1 : 0,
              background: `radial-gradient(460px circle at ${spot.x}px ${spot.y}px, oklch(0.82 0.09 210 / 0.07), transparent 62%)`,
            }}
          />

          {/* Top row */}
          {flagship && (
            <div className="relative z-10 grid gap-5 lg:grid-cols-12 xl:gap-6">
              <FeaturedProjectCard project={flagship} index={0} onOpen={setOpen} />
              <ProjectLabPanel />
            </div>
          )}

          {/* Remaining projects */}
          <div className="relative z-10 mt-5 grid gap-5 lg:grid-cols-3 xl:gap-6">
            {remaining.map((project, index) => (
              <ProjectSystemCard
                key={project.id}
                project={project}
                index={index + 1}
                onOpen={setOpen}
              />
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-3xl glass-strong border-white/10">
          {open && (
            <>
              <DialogHeader>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[oklch(0.88_0.14_200)]">
                  {open.category}
                </div>

                <DialogTitle className="font-display text-3xl leading-tight tracking-tight">
                  {open.title}
                </DialogTitle>

                <DialogDescription className="text-foreground/80 leading-relaxed">
                  {open.summary}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  System details
                </h4>

                <ul className="mt-3 space-y-2">
                  {open.details.map((d, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[oklch(0.78_0.16_230)]" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Tech stack
                </h4>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {open.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono rounded-md bg-white/[0.04] px-2 py-0.5 text-[10px] text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function FeaturedProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  const meta = getProjectMeta(project.id);
  const Glyph = meta.glyph;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.button
      initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-110px" }}
      transition={{ duration: 0.75, ease: EASE }}
      whileHover={{ y: -6 }}
      onClick={() => onOpen(project)}
      className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-6 text-left shadow-2xl shadow-black/25 backdrop-blur-xl transition-all duration-300 hover:border-cyan-200/18 hover:bg-white/[0.04] lg:col-span-7 xl:p-8"
    >
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/25 to-transparent" />
      <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-cyan-300/[0] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/[0.10]" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-indigo-400/[0.04] blur-3xl" />

      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 w-28 rotate-12 bg-gradient-to-r from-transparent via-cyan-200/[0.06] to-transparent"
        animate={{ x: ["-40%", "620%"] }}
        transition={{
          duration: 6.2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1.5,
        }}
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground/60">
              {num} · Flagship System
            </p>

            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/65">
              {project.category}
            </p>
          </div>

          <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.6rem] border border-cyan-200/10 bg-cyan-300/[0.065] text-cyan-100/80 transition-all duration-500 group-hover:scale-105 group-hover:text-cyan-100">
            <Glyph className="h-12 w-12" />
          </div>
        </div>

        <h3 className="mt-8 max-w-4xl text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-4xl">
          {project.title}
        </h3>

        <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
          {project.summary}
        </p>

        <div className="mt-7 grid gap-3 border-y border-white/[0.06] py-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/[0.06] bg-background/35 p-4">
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-100/55">
              <Cpu className="h-4 w-4" />
              Built as
            </div>
            <p className="mt-2 text-sm font-medium text-foreground/82">{meta.build}</p>
          </div>

          <div className="rounded-2xl border border-white/[0.06] bg-background/35 p-4">
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-100/55">
              <Zap className="h-4 w-4" />
              Signals tracked
            </div>
            <p className="mt-2 text-sm font-medium text-foreground/82">{meta.signal}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {meta.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/72"
            >
              {metric}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-foreground/70"
              >
                {tech}
              </span>
            ))}

            {project.tech.length > 6 && (
              <span className="self-center font-mono text-[10px] text-muted-foreground">
                +{project.tech.length - 6}
              </span>
            )}
          </div>

          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.035] text-muted-foreground transition-all duration-300 group-hover:border-cyan-200/18 group-hover:text-foreground">
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}

function ProjectLabPanel() {
  const buildStages = [
    {
      step: "01",
      label: "Frame",
      title: "Start with the failure mode",
      text: "What breaks, where the baseline struggles, and what signal should improve.",
    },
    {
      step: "02",
      label: "Build",
      title: "Turn it into a working system",
      text: "Pipelines, APIs, model workflows, evaluation scripts, and interface logic.",
    },
    {
      step: "03",
      label: "Measure",
      title: "Track behavior, not vibes",
      text: "Compare outputs through metrics, ablations, qualitative errors, and system logs.",
    },
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-110px" }}
      transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
      className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.022] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl lg:col-span-5 xl:p-7"
    >
      {/* Background lighting */}
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/25 to-transparent" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/[0.06] blur-3xl" />
      <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-indigo-400/[0.05] blur-3xl" />

      {/* Moving beam */}
      <motion.div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-32 -skew-x-12 bg-gradient-to-r from-transparent via-cyan-200/[0.055] to-transparent"
        animate={{ x: ["-45%", "520%"] }}
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1.2,
        }}
      />

      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/16 bg-cyan-300/[0.08] px-3 py-1.5 text-xs font-medium text-cyan-100/85">
          <Sparkles className="h-3.5 w-3.5" />
          Build Method
        </div>

        <h3 className="mt-5 max-w-md text-3xl font-semibold tracking-[-0.04em] text-foreground">
          I do not stop at models. I build the system around them.
        </h3>

        <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
          Every project is treated like a small AI product: define the failure mode, build the
          workflow, measure behavior, and document what changed.
        </p>

        {/* System pipeline */}
        <div className="mt-8 overflow-hidden rounded-[1.7rem] border border-white/[0.08] bg-background/35">
          <div className="border-b border-white/[0.07] px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-200/70 shadow-[0_0_14px_rgba(34,211,238,0.55)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
              </div>

              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                system build log
              </p>
            </div>
          </div>

          <div className="relative p-4">
            <div className="absolute bottom-0 left-9 top-8 w-px bg-gradient-to-b from-cyan-200/30 via-white/10 to-transparent" />

            <div className="space-y-3">
              {buildStages.map((stage, index) => (
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
                  className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-cyan-200/18 hover:bg-white/[0.045]"
                >
                  <div className="flex gap-4">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-200/12 bg-cyan-300/[0.08] font-mono text-[10px] font-semibold text-cyan-100/80">
                      {stage.step}
                    </div>

                    <div>
                      <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-cyan-100/55">
                        {stage.label}
                      </p>

                      <h4 className="mt-1 text-base font-semibold tracking-[-0.025em] text-foreground">
                        {stage.title}
                      </h4>

                      <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{stage.text}</p>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-200/0 to-transparent transition-all duration-300 group-hover:via-cyan-200/30" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom proof strip */}
        <div className="mt-5 grid grid-cols-3 gap-2.5">
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3">
            <Cpu className="h-4 w-4 text-cyan-100/70" />
            <p className="mt-2 text-sm font-semibold text-foreground">Models</p>
            <p className="mt-1 text-xs text-muted-foreground">LLMs · VLMs · CV</p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3">
            <Database className="h-4 w-4 text-cyan-100/70" />
            <p className="mt-2 text-sm font-semibold text-foreground">Data</p>
            <p className="mt-1 text-xs text-muted-foreground">retrieval · eval</p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3">
            <Zap className="h-4 w-4 text-cyan-100/70" />
            <p className="mt-2 text-sm font-semibold text-foreground">Signals</p>
            <p className="mt-1 text-xs text-muted-foreground">risk · quality</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectSystemCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  const meta = getProjectMeta(project.id);
  const Glyph = meta.glyph;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.button
      initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: EASE }}
      whileHover={{ y: -6 }}
      onClick={() => onOpen(project)}
      className="group relative min-h-[420px] overflow-hidden rounded-[1.8rem] border border-white/[0.08] bg-white/[0.022] p-6 text-left shadow-2xl shadow-black/18 backdrop-blur-xl transition-all duration-300 hover:border-cyan-200/18 hover:bg-white/[0.04]"
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/0 to-transparent transition-all duration-500 group-hover:via-cyan-200/30" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/[0] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/[0.09]" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground/60">
              {num}
            </p>

            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/65">
              {project.category}
            </p>
          </div>

          <Glyph className="h-12 w-12 text-foreground/25 transition-colors duration-500 group-hover:text-cyan-100/80" />
        </div>

        <h3 className="mt-7 text-2xl font-semibold leading-tight tracking-[-0.04em] text-foreground">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-muted-foreground line-clamp-4">
          {project.summary}
        </p>

        <div className="mt-5 rounded-2xl border border-white/[0.07] bg-background/35 p-3.5">
          <div className="flex items-start gap-2">
            <Database className="mt-0.5 h-4 w-4 shrink-0 text-cyan-100/70" />
            <p className="text-sm leading-6 text-foreground/72">{meta.signal}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {meta.metrics.slice(0, 3).map((metric) => (
            <span
              key={metric}
              className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.13em] text-foreground/70"
            >
              {metric}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-7">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-foreground/70"
                >
                  {tech}
                </span>
              ))}

              {project.tech.length > 4 && (
                <span className="self-center font-mono text-[10px] text-muted-foreground">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>

            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.035] text-muted-foreground transition-all duration-300 group-hover:border-cyan-200/18 group-hover:text-foreground">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
