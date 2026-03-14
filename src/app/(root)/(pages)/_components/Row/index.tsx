"use client";

import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export function Row({
  icon: Icon,
  title,
  description,
  action,
  danger = false,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: ReactNode;
  danger?: boolean;
}) {
  return (
    <div
      className={`grid gap-4 rounded-2xl border p-4 sm:p-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center ${
        danger
          ? "border-red-200 bg-red-50/70 dark:border-red-500/20 dark:bg-red-500/10"
          : "border-slate-200/80 bg-slate-50/70 dark:border-white/10 dark:bg-white/5"
      }`}
    >
      <div className="flex items-start gap-3 min-w-0">
        <div
          className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
            danger
              ? "bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-300"
              : "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200"
          }`}
        >
          <Icon className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <p className={`text-sm font-semibold ${danger ? "text-red-700 dark:text-red-200" : "text-slate-900 dark:text-white"}`}>{title}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{description}</p>
        </div>
      </div>
      {action ? (
        <div className="flex w-full md:w-auto md:justify-end [&>*]:inline-flex [&>*]:min-h-11 [&>*]:w-full [&>*]:items-center [&>*]:justify-center md:[&>*]:w-auto">
          {action}
        </div>
      ) : null}
    </div>
  );
}
