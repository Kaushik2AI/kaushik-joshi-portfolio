import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BrainCircuit,
  Eye,
  GitBranch,
  Network,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type ResearchLane = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  signal: string;
  tags: string[];
  Icon: LucideIcon;
};

const lanes: ResearchLane[] = [
  {
    id: "01",
    eyebrow: "RAG Reliability",
    title: "Retrieval systems that detect weak evidence before the answer fails.",
    description:
      "I work on RAG pipelines that score evidence quality, check claims, and repair risky generations instead of only flagging hallucinations after the response is already written.",
    signal: "Current direction: adaptive retrieval, claim-risk monitoring, and semantic rollback.",
    tags: ["RAG", "hallucination control", "claim verification"],
    Icon: Network,
  },
  {
    id: "02",
    eyebrow: "Multimodal Reasoning",
    title: "Evaluating whether VLMs actually understand spatial structure.",
    description:
      "I test vision-language models on object relations, spatial reasoning, and visual grounding to separate real multimodal understanding from benchmark shortcuts.",
    signal: "Built around Qwen-VL, BLIP-style models, spatial datasets, and failure analysis.",
    tags: ["VLMs", "spatial reasoning", "benchmarking"],
    Icon: Eye,
  },
  {
    id: "03",
    eyebrow: "Agentic AI",
    title: "Agent workflows that act through tools, checks, and review loops.",
    description:
      "I design agent systems where planning, tool execution, simulation, and reviewer checks work together so AI decisions stay useful, measurable, and accountable.",
    signal: "Applied to decision engines, retail automation, risk loops, and tool-based execution.",
    tags: ["agents", "tool use", "guardrails"],
    Icon: GitBranch,
  },
  {
    id: "04",
    eyebrow: "Trustworthy AI",
    title: "Making model behavior easier to inspect before deployment.",
    description:
      "I use interpretability and evaluation methods to understand why models fail, what signals predict unsafe outputs, and how systems can be audited more clearly.",
    signal: "Focus: Grad-CAM, attention rollout, CKA-style diagnostics, and model evaluation.",
    tags: ["interpretability", "evaluation", "model diagnostics"],
    Icon: ShieldCheck,
  },
];

const loop = ["retrieve", "reason", "verify", "repair"];

export function Research() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowX = useTransform(scrollYProgress, [0, 1], ["-8%", "10%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["-6%", "12%"]);
  const coreRotate = useTransform(scrollYProgress, [0, 1], [0, 36]);

  return (
    <section
      ref={sectionRef}
      id="research"
      className="relative scroll-mt-28 overflow-hidden py-20 lg:py-28"
    >
      {/* Moving atmosphere */}
      <motion.div
        aria-hidden="true"
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute left-[6%] top-10 h-[440px] w-[440px] rounded-full bg-cyan-300/[0.045] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-36 h-[460px] w-[460px] rounded-full bg-indigo-400/[0.045] blur-3xl"
      />

      <div className="relative w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ duration: 0.75, ease: EASE }}
          className="grid gap-8 lg:grid-cols-[1.08fr_0.72fr] lg:items-end"
        >
          <div>
            <div className="eyebrow flex items-center gap-2">
              <span className="inline-block h-1 w-7 bg-[var(--accent-cyan)]/70" />
              02 Research Focus
            </div>

            <h2 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[3.55rem] lg:leading-[1.02]">
              I build AI systems that retrieve better evidence, reason with structure, and stay
              auditable.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            My research is about the system around the model — retrieval quality, multimodal
            reasoning, uncertainty signals, and practical safety checks that make AI useful outside
            demos.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="mt-12 space-y-5 xl:space-y-6">
          {/* Top row: live engine left + 01/02 right */}
          <div className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr] xl:gap-6">
            {/* Left live engine */}
            <motion.article
              initial={{ opacity: 0, x: -22, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-120px" }}
              transition={{ duration: 0.75, ease: EASE }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl xl:p-7"
            >
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/25 to-transparent" />
              <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-cyan-300/[0.07] blur-3xl" />
              <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-indigo-400/[0.055] blur-3xl" />

              {/* Animated scan light */}
              <motion.div
                aria-hidden="true"
                className="absolute inset-y-0 w-24 rotate-12 bg-gradient-to-r from-transparent via-cyan-200/[0.07] to-transparent"
                animate={{ x: ["-35%", "520%"] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1.2,
                }}
              />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/16 bg-cyan-300/[0.08] px-3 py-1.5 text-xs font-medium text-cyan-100/85">
                  <Sparkles className="h-3.5 w-3.5" />
                  Research Engine
                </div>

                <h3 className="mt-5 max-w-md text-3xl font-semibold tracking-[-0.04em] text-foreground">
                  A reliability loop for modern AI systems.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
                  The core idea is simple: do not let a weak output silently become context for the
                  next step. Detect risk early, ground it with evidence, and continue from a safer
                  state.
                </p>

                {/* Live circular system */}
                <div className="relative mx-auto mt-9 aspect-square max-w-[330px]">
                  <div className="absolute inset-0 rounded-full border border-white/[0.07] bg-white/[0.015]" />
                  <div className="absolute inset-8 rounded-full border border-cyan-200/[0.08]" />
                  <div className="absolute inset-16 rounded-full border border-white/[0.06]" />

                  <motion.div
                    style={{ rotate: coreRotate }}
                    className="absolute inset-5 rounded-full border border-dashed border-cyan-200/[0.20]"
                  />

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-12 rounded-full"
                  >
                    <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_22px_rgba(34,211,238,0.75)]" />
                  </motion.div>

                  <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-200/18 bg-background/80 shadow-[0_0_48px_rgba(34,211,238,0.10)] backdrop-blur-xl">
                    <div className="text-center">
                      <BrainCircuit className="mx-auto h-8 w-8 text-cyan-100/90" />
                      <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                        AI Core
                      </p>
                    </div>
                  </div>

                  <LoopNode className="left-1/2 top-1 -translate-x-1/2" label="RAG" />
                  <LoopNode className="right-1 top-1/2 -translate-y-1/2" label="VLM" />
                  <LoopNode className="bottom-1 left-1/2 -translate-x-1/2" label="Eval" />
                  <LoopNode className="left-1 top-1/2 -translate-y-1/2" label="Agent" />
                </div>

                <div className="mt-7 grid grid-cols-2 gap-2.5">
                  {loop.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3.5"
                    >
                      <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-100/50">
                        0{index + 1}
                      </p>
                      <p className="mt-2 text-sm font-semibold capitalize text-foreground">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>

            {/* Right: 01 and 02 */}
            <div className="space-y-4">
              {lanes.slice(0, 2).map((lane, index) => (
                <ResearchLaneCard key={lane.id} lane={lane} index={index} />
              ))}
            </div>
          </div>

          {/* Bottom row: 03 and 04 same premium card style, side by side */}
          <div className="grid gap-5 lg:grid-cols-2 xl:gap-6">
            {lanes.slice(2).map((lane, index) => (
              <ResearchLaneCard key={lane.id} lane={lane} index={index + 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LoopNode({ label, className }: { label: string; className: string }) {
  return (
    <div
      className={`absolute flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.08] bg-background/82 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100/85 shadow-xl shadow-black/30 backdrop-blur-xl ${className}`}
    >
      {label}
    </div>
  );
}

function ResearchLaneCard({ lane, index }: { lane: ResearchLane; index: number }) {
  const Icon = lane.Icon;

  return (
    <motion.article
      initial={{ opacity: 0, x: 28, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-110px" }}
      transition={{ duration: 0.72, delay: index * 0.05, ease: EASE }}
      whileHover={{ x: 6 }}
      className="group relative overflow-hidden rounded-[1.7rem] border border-white/[0.08] bg-white/[0.022] shadow-2xl shadow-black/18 backdrop-blur-xl transition-all duration-300 hover:border-cyan-200/18 hover:bg-white/[0.04]"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-cyan-300/[0] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/[0.08]" />
      <div className="pointer-events-none absolute inset-y-6 left-0 w-px bg-gradient-to-b from-transparent via-cyan-200/0 to-transparent transition-all duration-500 group-hover:via-cyan-200/35" />

      <div className="relative grid gap-5 p-5 sm:p-6 lg:grid-cols-[92px_minmax(0,1fr)] lg:items-start xl:grid-cols-[104px_minmax(0,1fr)]">
        {/* Number + icon */}
        <div className="flex items-center gap-4 lg:block">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground/55">
            {lane.id}
          </p>

          <div className="mt-0 flex h-14 w-14 items-center justify-center rounded-[1.25rem] border border-cyan-200/12 bg-cyan-300/[0.08] shadow-[0_0_26px_rgba(34,211,238,0.06)] transition-transform duration-500 group-hover:scale-105 lg:mt-5">
            <Icon className="h-5 w-5 text-cyan-100/90" />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-100/55">
            {lane.eyebrow}
          </p>

          <h3 className="mt-2 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.035em] text-foreground">
            {lane.title}
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
            {lane.description}
          </p>

          <div className="mt-4 rounded-2xl border border-white/[0.07] bg-background/35 p-3.5">
            <div className="flex items-start gap-2">
              <Zap className="mt-0.5 h-4 w-4 shrink-0 text-cyan-100/70" />
              <p className="text-sm leading-6 text-foreground/72">{lane.signal}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {lane.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[11px] font-medium text-foreground/72 transition-colors duration-300 group-hover:border-cyan-200/15 group-hover:text-foreground/88"
              >
                {tag}
              </span>
            ))}

            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 text-[11px] font-medium text-cyan-100/70 transition-all duration-300 group-hover:gap-2 group-hover:text-cyan-100"
            >
              related work
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
