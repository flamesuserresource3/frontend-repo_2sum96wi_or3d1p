import { useRef } from "react";
import Spline from "@splinetool/react-spline";
import { ArrowRight, Play } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Hero() {
  const sectionRef = useRef(null);

  // Mouse-driven parallax for full-bleed background
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });
  // Map to small translate range for subtle movement
  const translateX = useTransform(sx, [-1, 1], [-16, 16]);
  const translateY = useTransform(sy, [-1, 1], [-10, 10]);

  const handleMouseMove = (e) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width; // 0..1
    const relY = (e.clientY - rect.top) / rect.height; // 0..1
    // Centered range -1..1
    mx.set(relX * 2 - 1);
    my.set(relY * 2 - 1);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden"
    >
      {/* Full-bleed interactive Spline background */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ x: translateX, y: translateY }}
      >
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>

      {/* Soft readability overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      {/* Foreground content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Enrollment open — Spring 2025
        </div>
        <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
          Learn faster with a modern, glassy online academy
        </h1>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl">
          Master real-world skills through beautiful, interactive lessons. Clean design, thoughtful curriculum, and a delightful learning experience.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-xl bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-gray-900/10 hover:bg-black transition-colors"
          >
            Start learning
            <ArrowRight className="h-4 w-4" />
          </a>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/70 px-5 py-3 text-sm text-gray-800 shadow-sm hover:bg-white transition-colors"
          >
            <Play className="h-4 w-4" />
            Watch intro
          </motion.button>
        </div>
      </div>
    </section>
  );
}
