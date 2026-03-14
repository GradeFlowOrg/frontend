"use client";

export default function EmptyArtwork() {
  return (
    <div className="relative h-40 w-56 sm:h-44 sm:w-64" aria-hidden>
      <div className="absolute inset-x-6 top-8 h-20 rounded-[28px] border border-slate-300/70 bg-white/85 shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#1f1f1f]/90" />

      <div className="absolute left-10 top-3 h-10 w-24 rounded-t-[20px] rounded-br-[18px] border border-slate-300/70 border-b-0 bg-slate-100/90 dark:border-white/10 dark:bg-[#2a2a2a]" />

      <div className="absolute left-14 top-14 h-16 w-12 rotate-[-9deg] rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#262626]">
        <div className="mx-auto mt-4 h-1.5 w-6 rounded-full bg-slate-200 dark:bg-white/10" />
        <div className="mx-auto mt-2 h-1.5 w-7 rounded-full bg-slate-100 dark:bg-white/5" />
      </div>

      <div className="absolute right-14 top-10 h-18 w-14 rotate-[8deg] rounded-[22px] border border-[#b8ccff] bg-[#eef4ff] shadow-[0_14px_36px_rgba(0,70,255,0.12)] dark:border-[#3557a8] dark:bg-[#1a2640]">
        <div className="mx-auto mt-4 h-1.5 w-7 rounded-full bg-[#bfd0ff] dark:bg-[#4d6dc0]" />
        <div className="mx-auto mt-2 h-1.5 w-8 rounded-full bg-[#dbe7ff] dark:bg-[#2a4275]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex justify-center">
        <div className="h-3 w-40 rounded-full bg-slate-900/8 blur-md dark:bg-black/40" />
      </div>
    </div>
  );
}
