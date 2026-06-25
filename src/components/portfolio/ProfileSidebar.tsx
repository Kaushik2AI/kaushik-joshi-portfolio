import { Download, Mail, Github, Linkedin, MapPin, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/kaushik-profile.jpg";

function GoogleScholarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3L2.75 9.25L12 15.5L21.25 9.25L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M6.75 12.35V16.2C6.75 18.05 9.1 19.5 12 19.5C14.9 19.5 17.25 18.05 17.25 16.2V12.35"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M21.25 9.25V14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const focusAreas = ["Multimodal AI", "LLMs", "RAG", "Agents"];

export function ProfileSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="glass group relative w-full overflow-hidden rounded-2xl p-5 lg:sticky lg:top-6 lg:p-4 xl:p-5"
    >
      {/* Premium background glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.13) 0%, rgba(99,102,241,0.08) 45%, transparent 72%)",
        }}
        animate={{
          x: [0, -10, 0],
          y: [0, 12, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.10) 0%, rgba(59,130,246,0.06) 48%, transparent 72%)",
        }}
        animate={{
          x: [0, 12, 0],
          y: [0, -10, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle hover scan */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-20 -skew-x-12 bg-gradient-to-r from-transparent via-cyan-200/[0.045] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        animate={{ x: ["-55%", "520%"] }}
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1.2,
        }}
      />

      {/* Top accent */}
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Avatar */}
      <div className="relative mx-auto w-fit">
        <motion.div
          aria-hidden="true"
          className="absolute inset-[-9px] rounded-[30px] opacity-60 blur-md"
          style={{
            background:
              "conic-gradient(from 180deg, rgba(56,189,248,0.16), rgba(168,85,247,0.13), rgba(99,102,241,0.08), rgba(56,189,248,0.16))",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          whileHover={{ y: -3, scale: 1.015 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[190px] w-[154px] overflow-hidden rounded-[24px] border border-white/10 bg-black/30 shadow-xl shadow-black/30 xl:h-[205px] xl:w-[165px]"
        >
          <img
            src={profileImg}
            alt="Kaushik S. Joshi"
            width={768}
            height={1344}
            className="h-full w-full object-cover object-[center_16%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Identity */}
      <div className="relative mt-5 text-center">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Kaushik Joshi</h2>

        <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-muted-foreground">
          <GraduationCap className="h-3.5 w-3.5" />
          MS AI @ Boston University
        </div>

        <p className="mt-3 text-sm font-medium text-foreground/85">
          AI Researcher &amp; ML Engineer
        </p>

        <p className="mt-2 inline-flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          Boston, MA
        </p>
      </div>

      {/* Focus chips */}
      <div className="relative mt-4 flex flex-wrap justify-center gap-2">
        {focusAreas.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10.5px] font-medium text-foreground/75 transition-colors duration-300 hover:border-cyan-200/18 hover:bg-white/[0.05] hover:text-foreground/90"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="relative mt-4 flex flex-col gap-2">
        <Button
          asChild
          className="h-10 rounded-xl bg-foreground text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/90"
        >
          <a href="/Kaushik_Joshi_Resume.pdf" download="Kaushik_Joshi_Resume.pdf">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </Button>

        <div className="grid grid-cols-2 gap-2">
          <Button
            asChild
            variant="outline"
            className="h-9 rounded-xl border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.05]"
          >
            <a href="#contact">
              <Mail className="mr-1.5 h-3.5 w-3.5" />
              Contact
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-9 rounded-xl border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.05]"
          >
            <a href="https://github.com/Kaushik2AI" target="_blank" rel="noreferrer">
              <Github className="mr-1.5 h-3.5 w-3.5" />
              GitHub
            </a>
          </Button>
        </div>
      </div>

      {/* Social icons */}
      <div className="relative mt-5 flex items-center justify-center gap-3 border-t border-white/[0.06] pt-4">
        <a
          href="https://linkedin.com/in/kaushik-joshi-24k"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="rounded-lg p-1.5 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5 hover:text-foreground"
        >
          <Linkedin className="h-4 w-4" />
        </a>

        <a
          href="https://github.com/Kaushik2AI"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="rounded-lg p-1.5 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5 hover:text-foreground"
        >
          <Github className="h-4 w-4" />
        </a>

        <a
          href="https://scholar.google.com/citations?user=5Male9YAAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
          aria-label="Google Scholar"
          className="rounded-lg p-1.5 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5 hover:text-foreground"
        >
          <GoogleScholarIcon className="h-4 w-4" />
        </a>

        <a
          href="mailto:jskaushikk@gmail.com"
          aria-label="Email"
          className="rounded-lg p-1.5 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5 hover:text-foreground"
        >
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </motion.aside>
  );
}

export function MobileProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="glass relative w-full overflow-hidden rounded-2xl p-4 lg:hidden"
    >
      {/* Premium mobile glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.13) 0%, rgba(99,102,241,0.08) 45%, transparent 72%)",
        }}
        animate={{
          x: [0, -8, 0],
          y: [0, 8, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative flex items-center gap-4">
        {/* Mobile photo */}
        <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-xl shadow-black/30">
          <img
            src={profileImg}
            alt="Kaushik Joshi"
            width={768}
            height={1344}
            className="h-full w-full object-cover object-[center_16%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        </div>

        {/* Mobile identity */}
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-lg font-semibold tracking-tight text-foreground">
            Kaushik Joshi
          </h2>

          <p className="mt-1 text-sm font-medium text-foreground/80">
            AI Researcher &amp; ML Engineer
          </p>

          <div className="mt-2 flex flex-wrap gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] text-muted-foreground">
              <GraduationCap className="h-3 w-3" />
              MS AI @ BU
            </span>

            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] text-muted-foreground">
              <MapPin className="h-3 w-3" />
              Boston
            </span>
          </div>
        </div>
      </div>

      {/* Focus chips */}
      <div className="relative mt-4 flex flex-wrap gap-2">
        {focusAreas.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-foreground/75"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Mobile actions */}
      <div className="relative mt-4 grid grid-cols-2 gap-2">
        <Button
          asChild
          className="h-10 rounded-xl bg-foreground text-background hover:bg-foreground/90"
        >
          <a href="/Kaushik_Joshi_Resume.pdf" download="Kaushik_Joshi_Resume.pdf">
            <Download className="mr-2 h-4 w-4" />
            Resume
          </a>
        </Button>

        <Button
          asChild
          variant="outline"
          className="h-10 rounded-xl border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
        >
          <a href="#contact">
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </a>
        </Button>
      </div>

      {/* Mobile socials */}
      <div className="relative mt-4 flex items-center justify-center gap-3 border-t border-white/[0.06] pt-3">
        <a
          href="https://linkedin.com/in/kaushik-joshi-24k"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
        >
          <Linkedin className="h-4 w-4" />
        </a>

        <a
          href="https://github.com/Kaushik2AI"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
        >
          <Github className="h-4 w-4" />
        </a>

        <a
          href="https://scholar.google.com/citations?user=5Male9YAAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
          aria-label="Google Scholar"
          className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
        >
          <GoogleScholarIcon className="h-4 w-4" />
        </a>

        <a
          href="mailto:jskaushikk@gmail.com"
          aria-label="Email"
          className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
        >
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}
