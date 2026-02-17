import { ReactNode } from "react";

function LiquidCard({ children }: { children: ReactNode }) {
  return (
    <article
      className="relative overflow-hidden rounded-3xl border border-white/35 bg-white/20 p-6 backdrop-blur-2xl shadow-[0_12px_40px_rgba(31,38,135,0.18)] dark:border-white/15 dark:bg-white/10 dark:shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/55 via-white/20 to-transparent dark:from-white/20 dark:via-white/5" />
      <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-white/45 blur-2xl dark:bg-white/15" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-36 w-36 rounded-full bg-sky-300/35 blur-3xl dark:bg-cyan-400/15" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40 dark:ring-white/20" />
      <div className="relative">{children}</div>
    </article>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen w-full px-4 pb-10 mt-[20px]">
      <section className="container mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        <LiquidCard>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-200">Overview</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">Liquid Glass</h2>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">Frosted, layered, and reflective card style inspired by iPhone UI panels.</p>
        </LiquidCard>

        <LiquidCard>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-200">Stats</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">92%</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">Student completion this week.</p>
        </LiquidCard>

        <LiquidCard>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-200">Upcoming</p>
          <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">2 New Tests</h3>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">Mathematics and Biology assessments are ready for publishing.</p>
        </LiquidCard>
      </section>
    </main>
  );
}
