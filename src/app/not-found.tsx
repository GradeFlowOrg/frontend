import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-3xl font-bold text-[#0F2854] dark:text-white">404</h1>
      <p className="text-sm text-slate-600 dark:text-slate-300">Page not found.</p>
      <Link
        href="/dashboard"
        className="rounded-lg bg-[#0046FF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0039d1]"
      >
        Go to dashboard
      </Link>
    </main>
  );
}
