import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Local-only submission for now.
    setTimeout(() => {
      setSending(false);
      toast.success("Message captured. I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section id="contact" className="scroll-mt-20">
      <SectionHeading
        index="09"
        eyebrow="contact"
        title="Let's talk."
        description="Open to AI research collaborations, ML engineering roles, and interesting problems in trustworthy AI."
      />

      <div className="grid gap-5 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass gradient-border rounded-2xl p-6 lg:col-span-2"
        >
          <h3 className="font-display text-lg font-semibold">Direct channels</h3>
          <div className="mt-4 space-y-3">
            <a href="mailto:jskaushikk@gmail.com" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-colors hover:border-[oklch(0.78_0.16_230_/_0.5)]">
              <Mail className="h-4 w-4 text-[oklch(0.88_0.14_200)]" />
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm">jskaushikk@gmail.com</div>
              </div>
            </a>
            <a href="https://linkedin.com/in/kaushik-joshi-24k" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-colors hover:border-[oklch(0.78_0.16_230_/_0.5)]">
              <Linkedin className="h-4 w-4 text-[oklch(0.88_0.14_200)]" />
              <div>
                <div className="text-xs text-muted-foreground">LinkedIn</div>
                <div className="text-sm">linkedin.com/in/kaushik-joshi-24k</div>
              </div>
            </a>
            <a href="https://github.com/Kaushik2AI" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-colors hover:border-[oklch(0.78_0.16_230_/_0.5)]">
              <Github className="h-4 w-4 text-[oklch(0.88_0.14_200)]" />
              <div>
                <div className="text-xs text-muted-foreground">GitHub</div>
                <div className="text-sm">github.com/Kaushik2AI</div>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="glass gradient-border rounded-2xl p-6 lg:col-span-3"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Name</label>
              <Input required name="name" placeholder="Your name" className="mt-1.5 border-white/10 bg-white/5" />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Email</label>
              <Input required type="email" name="email" placeholder="you@domain.com" className="mt-1.5 border-white/10 bg-white/5" />
            </div>
          </div>
          <div className="mt-3">
            <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Message</label>
            <Textarea required name="message" rows={5} placeholder="What are you building?" className="mt-1.5 border-white/10 bg-white/5" />
          </div>
          <div className="mt-4 flex justify-end">
            <Button type="submit" disabled={sending} className="bg-gradient-to-r from-[oklch(0.78_0.16_230)] to-[oklch(0.72_0.2_295)] text-[oklch(0.15_0.03_270)] hover:opacity-90">
              <Send className="mr-2 h-4 w-4" />
              {sending ? "Sending…" : "Send Message"}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
