import { useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { ArrowRight, Play } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Hero() {
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Mouse-driven parallax for subtle 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rsX = useSpring(x, { stiffness: 80, damping: 20, mass: 0.5 });
  const rsY = useSpring(y, { stiffness: 80, damping: 20, mass: 0.5 });
  const rotateX = useTransform(rsY, [-50, 50], [8, -8]);
  const rotateY = useTransform(rsX, [-50, 50], [-8, 8]);
  const translateZ = useTransform(isHovering ? rsY : y, [-50, 50], [20, -20]);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const posX = e.clientX - rect.left - rect.width / 2;
    const posY = e.clientY - rect.top - rect.height / 2;
    x.set(posX);
    y.set(posY);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Enrollment open — Spring 2025
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
            Learn faster with a modern, glassy online academy
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
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

        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            perspective: 1000,
            transformStyle: "preserve-3d",
          }}
          className="relative h-[460px] md:h-[520px] lg:h-[560px] rounded-3xl bg-gradient-to-b from-white to-white/60 border border-white/60 shadow-2xl overflow-hidden will-change-transform"
        >
          <div className="absolute inset-0" style={{ transform: `translateZ(${translateZ.get?.() ?? 0}px)` }}>
            <Spline
              scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          {/* Glow accents that do not block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-400/30 via-indigo-400/30 to-emerald-400/30 blur-3xl"
            animate={{
              x: isHovering ? 12 : 0,
              y: isHovering ? -6 : 0,
            }}
            transition={{ type: "spring", stiffness: 40, damping: 20 }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-16 -bottom-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/30 via-sky-400/30 to-rose-400/30 blur-3xl"
            animate={{
              x: isHovering ? -10 : 0,
              y: isHovering ? 8 : 0,
            }}
            transition={{ type: "spring", stiffness: 40, damping: 20 }}
          />

          {/* Floating labels that parallax slightly */}
          <motion.div
            className="pointer-events-none absolute left-4 top-4 select-none"
            style={{ transform: "translateZ(40px)" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700 border border-gray-200 shadow-sm">
              Live 3D — drag to explore
            </span>
          </motion.div>
          <motion.div
            className="pointer-events-none absolute right-4 bottom-4 select-none"
            style={{ transform: "translateZ(40px)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="rounded-xl bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700 border border-gray-200 shadow-sm">
              Futuristic · Interactive · Smooth
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
