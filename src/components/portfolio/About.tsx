import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <SectionHeading index="08" eyebrow="about" title="A little context." />
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass gradient-border rounded-2xl p-6 text-base leading-relaxed text-foreground/85 sm:text-lg"
      >
        I'm <span className="text-foreground font-medium">Kaushik S. Joshi</span>, an AI
        researcher and AI/ML engineer currently pursuing an MS in Artificial Intelligence at
        Boston University. My work focuses on building reliable and interpretable AI systems
        across multimodal reasoning, LLMs, RAG, NLP, agents, and computer vision. I enjoy
        turning research ideas into practical systems — from evaluating hallucination in
        retrieval pipelines to building decision engines that simulate real business impact
        before giving recommendations.
      </motion.p>
    </section>
  );
}
