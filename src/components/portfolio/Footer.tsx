import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const focusLinks = ["LLMs", "RAG", "Multimodal AI", "Agents", "NLP"];

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/[0.08] bg-background/40 py-14 sm:py-16 lg:py-20">
      {/* subtle premium glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
      <div className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-cyan-400/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-violet-400/[0.05] blur-3xl" />

      <div className="relative mx-auto w-full max-w-[92rem] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:max-w-[100rem]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(520px,0.75fr)] lg:items-start lg:gap-16 xl:grid-cols-[minmax(0,1.35fr)_minmax(560px,0.75fr)] xl:gap-20">
          {/* Left wordmark */}
          <div className="min-w-0">
            <a href="#home" className="group inline-block">
              <h2 className="select-none text-[clamp(4rem,13vw,11.5rem)] font-black leading-[0.82] tracking-[-0.09em] text-foreground">
                KAUSHIK
              </h2>
            </a>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-foreground/70">
              <span>AI Researcher & Engineer</span>
              <span className="h-1 w-1 rounded-full bg-foreground/35" />
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                Boston, MA
              </span>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground/70">
              Building reliable AI systems across LLMs, RAG, multimodal reasoning, NLP, computer
              vision, data science, and agentic workflows.
            </p>
          </div>

          {/* Right contact + links */}
          <div className="grid min-w-0 gap-10 sm:grid-cols-[minmax(0,1fr)_170px] sm:gap-12 lg:gap-14 xl:grid-cols-[minmax(0,1fr)_190px]">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                Stay connected
              </p>

              <h3 className="mt-3 max-w-md text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
                Let’s build something reliable.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-foreground/68">
                Open to research collaborations, ML engineering roles, and AI systems work.
              </p>

              <a
                href="mailto:jskaushikk@gmail.com"
                className="group mt-6 inline-flex max-w-full items-center gap-3 border-b border-white/15 pb-2 text-lg font-semibold tracking-[-0.02em] text-foreground transition hover:border-cyan-300/50 hover:text-cyan-100"
              >
                <span className="truncate">jskaushikk@gmail.com</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition group-hover:border-cyan-300/30 group-hover:bg-cyan-300/[0.08]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>

            <div className="sm:text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/55">
                Navigate
              </p>

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 sm:flex-col sm:items-end">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-foreground/68 transition hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-2 sm:justify-end">
                <a
                  href="https://linkedin.com/in/kaushik-joshi-24k"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-foreground/75 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.08] hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" />
                </a>

                <a
                  href="https://github.com/Kaushik2AI"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-foreground/75 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.08] hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                </a>

                <a
                  href="mailto:jskaushikk@gmail.com"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-foreground/75 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.08] hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-14">
          <div className="flex flex-wrap gap-2">
            {focusLinks.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs font-medium text-foreground/70"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="text-sm text-foreground/62">
            © {new Date().getFullYear()} Kaushik Joshi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
