import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function BackgroundFX() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 28 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Clean deep base */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.018)_0%,rgba(255,255,255,0)_35%),radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.055),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(139,92,246,0.045),transparent_28%)]" />

      {/* Premium subtle grid */}
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* Fine dot texture */}
      <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Cursor spotlight */}
      <motion.div
        className="absolute left-0 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.045] blur-3xl"
        style={{ x: smoothX, y: smoothY }}
      />

      {/* Slow premium aurora glow */}
      <motion.div
        className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-cyan-400/[0.045] blur-[100px]"
        animate={{
          x: [0, 80, 30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.08, 1.04, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-40 bottom-10 h-[520px] w-[520px] rounded-full bg-violet-500/[0.04] blur-[110px]"
        animate={{
          x: [0, -70, -30, 0],
          y: [0, 40, -20, 0],
          scale: [1, 1.1, 1.03, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft vignette so center stays readable */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.10)_58%,rgba(0,0,0,0.42)_100%)]" />

      {/* Bottom depth */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/70 to-transparent" />
    </div>
  );
}
