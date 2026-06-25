import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  FlaskConical,
  FolderOpen,
  FileText,
  Briefcase,
  Code2,
  UserRound,
  Mail,
  Menu,
  X,
  Github,
  Download,
  GraduationCap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { navSections } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  research: FlaskConical,
  projects: FolderOpen,
  publications: FileText,
  education: GraduationCap,
  experience: Briefcase,
  skills: Code2,
  about: UserRound,
  contact: Mail,
};

export function FloatingNav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -50% 0px", threshold: 0 },
    );

    navSections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <>
      {/* Mobile navbar — unchanged */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="fixed left-3 right-3 top-3 z-50 lg:hidden"
      >
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-background/85 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <a href="#home" onClick={handleClick} className="leading-tight">
            <p className="text-sm font-semibold tracking-tight text-foreground">Kaushik S. Joshi</p>
            <p className="text-[11px] text-muted-foreground">AI Researcher & ML Engineer</p>
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-foreground transition hover:border-cyan-300/25 hover:bg-white/[0.08]"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed left-3 right-3 top-[76px] z-40 max-h-[calc(100svh-92px)] overflow-y-auto lg:hidden"
          >
            <div className="rounded-2xl border border-white/10 bg-background/95 p-3 shadow-2xl shadow-black/50 backdrop-blur-xl">
              <div className="mb-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
                  Portfolio Menu
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Research · Projects · Publications · Experience
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {navSections.map((section) => {
                  const Icon = iconMap[section.id] || Home;
                  const isActive = active === section.id;

                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={handleClick}
                      className={cn(
                        "flex items-center gap-2 rounded-xl px-3 py-3 text-sm transition",
                        isActive
                          ? "border border-cyan-300/20 bg-cyan-300/[0.12] text-foreground shadow-[0_0_18px_rgba(34,211,238,0.08)]"
                          : "border border-white/0 bg-white/[0.03] text-muted-foreground hover:border-white/10 hover:bg-white/[0.07] hover:text-foreground",
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {section.label}
                    </a>
                  );
                })}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href="/resume.pdf"
                  download
                  onClick={handleClick}
                  className="flex items-center justify-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.10] py-3 text-sm font-medium text-foreground transition hover:bg-cyan-300/[0.14]"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>

                <a
                  href="https://github.com/Kaushik2AI"
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleClick}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] py-3 text-sm font-medium text-foreground transition hover:bg-white/[0.07]"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop smart top navigator — no duplicate name/resume/contact */}
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="fixed inset-x-0 top-4 z-50 hidden pointer-events-none lg:block"
      >
        <nav
          className={cn(
            "pointer-events-auto mx-auto w-fit max-w-[calc(100vw-2rem)] rounded-full border p-1.5 backdrop-blur-2xl transition-all duration-300",
            scrolled
              ? "border-white/10 bg-background/80 shadow-2xl shadow-black/35"
              : "border-white/[0.08] bg-background/55 shadow-xl shadow-black/20",
          )}
        >
          <div className="flex items-center gap-1">
            {navSections.map((section) => {
              const Icon = iconMap[section.id] || Home;
              const isActive = active === section.id;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  aria-label={section.label}
                  className={cn(
                    "group relative inline-flex h-10 items-center gap-2 rounded-full px-3 text-[12px] font-medium transition-all duration-300 xl:px-4",
                    isActive
                      ? "bg-cyan-300/[0.14] text-foreground shadow-[0_0_22px_rgba(34,211,238,0.10)]"
                      : "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground",
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{section.label}</span>
                </a>
              );
            })}
          </div>
        </nav>
      </motion.header>
    </>
  );
}
