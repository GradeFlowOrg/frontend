"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "motion/react";
import {
  BarChart3,
  Hourglass,
  MonitorSmartphone,
  FileQuestion,
  TrendingUp,
} from "lucide-react";

export default function Features() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

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

  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  };

  return (
    <section id="features" className="w-full scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <motion.div
          className="mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0046FF] dark:text-[#8fb0ff]">
            {t("landing.features.label")}
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-[#0F2854] max-[700px]:text-3xl dark:text-white">
            {t("landing.features.title")}
          </h2>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[#0046FF] via-[#6b9cff] to-transparent md:block dark:from-[#8fb0ff] dark:via-[#4f6fb3]" />

          <div className="flex flex-col gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const itemVariants = {
                hidden: {
                  opacity: 0,
                  x: shouldReduceMotion ? 0 : index % 2 === 0 ? -22 : 22,
                  y: shouldReduceMotion ? 0 : 12,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: { duration: 0.45 },
                },
              };

              return (
                <motion.div
                  key={`${feature.title}-${index}`}
                  className="grid items-center gap-4 md:grid-cols-[60px_1fr]"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.45 }}
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

