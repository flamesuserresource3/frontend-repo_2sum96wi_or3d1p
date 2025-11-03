import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl p-10 md:p-16 shadow-2xl">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent" />
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-400/20 via-indigo-400/20 to-emerald-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/20 via-sky-400/20 to-rose-400/20 blur-3xl" />

          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Ready to begin your next chapter?
            </h3>
            <p className="mt-3 max-w-2xl text-gray-600">
              Join thousands of learners leveling up with a minimal, modern learning experience.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow-lg hover:bg-black transition-colors"
              >
                Get started free
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-sm text-gray-600">No credit card required</span>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Glassy Academy. All rights reserved.
        </p>
      </div>
    </section>
  );
}
