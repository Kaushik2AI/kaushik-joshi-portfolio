import { createFileRoute } from "@tanstack/react-router";
import { BackgroundFX } from "@/components/portfolio/BackgroundFX";
import { ProfileSidebar, MobileProfileCard } from "@/components/portfolio/ProfileSidebar";
import { FloatingNav } from "@/components/portfolio/FloatingNav";
import { Hero } from "@/components/portfolio/Hero";
import { Research } from "@/components/portfolio/Research";
import { Projects } from "@/components/portfolio/Projects";
import { Publications } from "@/components/portfolio/Publications";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaushik Joshi" },
      {
        name: "description",
        content:
          "Building reliable AI systems across Multimodal AI, LLMs, RAG, and Agentic Intelligence. MS AI @ Boston University.",
      },
      { property: "og:title", content: "Kaushik Joshi" },
      {
        property: "og:description",
        content:
          "Building reliable AI systems across Multimodal AI, LLMs, RAG, and Agentic Intelligence.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-foreground">
      <BackgroundFX />
      <FloatingNav />

      <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pt-28 xl:px-10">
        <div className="mb-8 lg:hidden">
          <MobileProfileCard />
        </div>

        {/* Hero only */}
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[300px_minmax(0,1fr)] xl:gap-12">
          <aside className="hidden lg:block lg:sticky lg:top-28 lg:self-start">
            <ProfileSidebar />
          </aside>

          <main className="min-w-0 w-full">
            <Hero />
          </main>
        </div>

        {/* Full-width sections */}
        <main className="mt-18 w-full space-y-20 lg:mt-22 lg:space-y-28">
          <Research />
          <Projects />
          <Publications />
          <Education />
          <Experience />
          <Skills />
          <Contact />
        </main>
      </div>

      <Footer />
      <Toaster />
    </div>
  );
}
