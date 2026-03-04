"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import {
  BarChart3,
  Hourglass,
  MonitorSmartphone,
  FileQuestion,
  TrendingUp,
} from "lucide-react";

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("landing.features.instantGradingTitle"),
      description: t("landing.features.instantGradingDesc"),
      icon: TrendingUp,
    },
    {
      title: t("landing.features.timedExamsTitle"),
      description: t("landing.features.timedExamsDesc"),
      icon: Hourglass,
    },
    {
      title: t("landing.features.insightsTitle"),
      description: t("landing.features.insightsDesc"),
      icon: BarChart3,
    },
    {
      title: t("landing.features.anyDeviceTitle"),
      description: t("landing.features.anyDeviceDesc"),
      icon: MonitorSmartphone,
    },
    {
      title: t("landing.features.questionBankTitle"),
      description: t("landing.features.questionBankDesc"),
      icon: FileQuestion,
    },
  ];

  return (
    <section id="features" className="w-full scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0046FF] dark:text-[#8fb0ff]">
            {t("landing.features.label")}
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-[#0F2854] max-[700px]:text-3xl dark:text-white">
            {t("landing.features.title")}
          </h2>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[#0046FF] via-[#6b9cff] to-transparent md:block dark:from-[#8fb0ff] dark:via-[#4f6fb3]" />

          <div className="flex flex-col gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={`${feature.title}-${index}`}
                  className="grid items-center gap-4 md:grid-cols-[60px_1fr]"
                >
                  <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#0046FF]/30 bg-white dark:border-white/20 dark:bg-[#0f172a]">
                    <Icon className="h-5 w-5 text-[#0046FF] dark:text-[#9bb8ff]" />
                  </div>

                  <div className="rounded-xl border border-black/10 bg-gradient-to-r from-[#f4f8ff] to-white px-5 py-4 md:mr-12 dark:border-white/10 dark:from-[#111827] dark:to-[#0b1220]">
                    <h3 className="text-2xl font-bold text-[#0F2854] max-[700px]:text-xl dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#28406d] dark:text-slate-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

