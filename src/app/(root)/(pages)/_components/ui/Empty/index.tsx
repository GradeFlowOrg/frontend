"use client";

import React, { type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import EmptyArtwork from "./Artwork";

type EmptyProps = {
  title?: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  action?: ReactNode;
};

const Empty = ({ title, description, icon, className = "", action }: EmptyProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={`relative mx-auto flex w-full max-w-lg flex-col items-center overflow-hidden rounded-[32px] border border-slate-200/80 bg-[radial-gradient(circle_at_top,#f8fbff,white_55%)] px-6 py-8 text-center shadow-[0_24px_70px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_top,#20263a,#171717_55%)] ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(0,70,255,0.12),transparent_65%)] dark:bg-[radial-gradient(circle_at_top,rgba(120,156,255,0.14),transparent_65%)]" />
      <div className="relative">
        {icon ?? <EmptyArtwork />}
      </div>

      <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
        {title ?? t("root.empty.title")}
      </h2>
      <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500 dark:text-slate-300">
        {description ?? t("root.empty.description")}
      </p>
      {action ? <div className="relative mt-6 w-full max-w-[220px]">{action}</div> : null}
    </div>
  );
};

export default Empty;
