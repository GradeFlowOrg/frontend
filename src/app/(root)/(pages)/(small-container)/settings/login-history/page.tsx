"use client";

import { Laptop, MapPin, ShieldCheck, Smartphone } from "lucide-react";
import { SectionCard } from "../../../_components/layout/SectionCard";
import { useTranslation } from "react-i18next";

export default function LoginHistory() {
  const { t } = useTranslation();
  const LOGIN_HISTORY = [
    {
      id: 1,
      device: t("root.settings.loginHistory.page.items.0.device"),
      location: t("root.settings.loginHistory.page.items.0.location"),
      time: t("root.settings.loginHistory.page.items.0.time"),
      status: t("root.settings.loginHistory.page.items.0.status"),
      icon: Laptop,
    },
    {
      id: 2,
      device: t("root.settings.loginHistory.page.items.1.device"),
      location: t("root.settings.loginHistory.page.items.1.location"),
      time: t("root.settings.loginHistory.page.items.1.time"),
      status: t("root.settings.loginHistory.page.items.1.status"),
      icon: Smartphone,
    },
    {
      id: 3,
      device: t("root.settings.loginHistory.page.items.2.device"),
      location: t("root.settings.loginHistory.page.items.2.location"),
      time: t("root.settings.loginHistory.page.items.2.time"),
      status: t("root.settings.loginHistory.page.items.2.status"),
      icon: Laptop,
    },
    {
      id: 4,
      device: t("root.settings.loginHistory.page.items.3.device"),
      location: t("root.settings.loginHistory.page.items.3.location"),
      time: t("root.settings.loginHistory.page.items.3.time"),
      status: t("root.settings.loginHistory.page.items.3.status"),
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="space-y-5">
      <SectionCard
        icon={ShieldCheck}
        title={t("root.settings.loginHistory.page.title")}
        description={t("root.settings.loginHistory.page.description")}
      >
        <div className="space-y-3">
          {LOGIN_HISTORY.map((item) => {
            const Icon = item.icon;
            const blocked = item.status === t("root.settings.loginHistory.page.status.blocked");

            return (
              <div
                key={item.id}
                className={`flex flex-col gap-3 rounded-2xl border p-4 sm:flex-row sm:items-center sm:justify-between ${
                  blocked
                    ? "border-red-200/80 bg-red-50/60 dark:border-red-500/20 dark:bg-red-500/10"
                    : "border-slate-200/80 bg-slate-50/70 dark:border-white/10 dark:bg-white/5"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl ${
                      blocked
                        ? "bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-300"
                        : "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {item.device}
                    </p>
                    <div className="mt-1 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{item.location}</span>
                      <span className="text-slate-300 dark:text-slate-600">•</span>
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
                <span
                  className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold ${
                    blocked
                      ? "bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-300"
                      : "bg-[#eaf1ff] text-[#0046FF] dark:bg-[#1b2a4a] dark:text-[#9fb8ff]"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            );
          })}
        </div>
      </SectionCard>
    </div>
  );
}
