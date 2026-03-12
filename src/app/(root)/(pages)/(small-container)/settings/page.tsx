"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { motion, type Variants } from "motion/react";
import {
  BellRing,
  BookOpenText,
  Bug,
  History,
  KeyRound,
  LifeBuoy,
  Mail,
  Monitor,
  Moon,
  Palette,
  ShieldCheck,
  ShieldEllipsis,
  Sun,
  Trash2,
  type LucideIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Row } from "./_components/Row";
import { SectionCard } from "./_components/SectionCard";

type ThemeOption = "light" | "dark" | "system";

const entryEase = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.36, ease: entryEase },
  },
};

export default function Settings() {
  const { t } = useTranslation();
  const { resolvedTheme, theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const currentTheme = (theme ?? resolvedTheme ?? "system") as ThemeOption;
  const themeOptions: Array<{ value: ThemeOption; label: string; icon: LucideIcon }> = [
    { value: "light", label: t("root.settings.appearance.themes.light"), icon: Sun },
    { value: "dark", label: t("root.settings.appearance.themes.dark"), icon: Moon },
    { value: "system", label: t("root.settings.appearance.themes.system"), icon: Monitor },
  ];

  if (!mounted) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-5"
    >
      <motion.div variants={itemVariants}>
        <SectionCard
          icon={Palette}
          title={t("root.settings.appearance.title")}
          description={t("root.settings.appearance.description")}
        >
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{t("root.settings.appearance.themeLabel")}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{t("root.settings.appearance.themeHelp")}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {themeOptions.map(({ value, label, icon: Icon }) => {
                const active = currentTheme === value;

                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setTheme(value)}
                    className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                      active
                        ? "border-[#0046FF] bg-[#eaf1ff] text-[#0046FF] dark:bg-[#1b2a4a] dark:text-[#9fb8ff]"
                        : "border-slate-200 bg-slate-50/80 text-slate-700 hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                    }`}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/80 dark:bg-black/15">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </SectionCard>
      </motion.div>

      <motion.div variants={itemVariants}>
        <SectionCard
          icon={ShieldCheck}
          title={t("root.settings.security.title")}
          description={t("root.settings.security.description")}
        >
          <Row
            icon={KeyRound}
            title={t("root.settings.security.changePassword.title")}
            description={t("root.settings.security.changePassword.description")}
            action={<button type="button" className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10">{t("root.settings.actions.manage")}</button>}
          />
          <Row
            icon={ShieldEllipsis}
            title={t("root.settings.security.twoFactor.title")}
            description={t("root.settings.security.twoFactor.description")}
            action={<span className="rounded-full bg-[#eaf1ff] px-3 py-1 text-xs font-semibold text-[#0046FF] dark:bg-[#1b2a4a] dark:text-[#9fb8ff]">{t("root.settings.actions.recommended")}</span>}
          />
          <Row
            icon={History}
            title={t("root.settings.security.loginHistory.title")}
            description={t("root.settings.security.loginHistory.description")}
            action={<button type="button" className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10">{t("root.settings.actions.open")}</button>}
          />
          <Row
            icon={BellRing}
            title={t("root.settings.security.securityAlerts.title")}
            description={t("root.settings.security.securityAlerts.description")}
            action={<span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300">{t("root.settings.actions.enabled")}</span>}
          />
          <Row
            icon={Trash2}
            danger
            title={t("root.settings.security.deleteAccount.title")}
            description={t("root.settings.security.deleteAccount.description")}
            action={<button type="button" className="rounded-xl bg-red-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-700">{t("root.settings.actions.delete")}</button>}
          />
        </SectionCard>
      </motion.div>

      <motion.div variants={itemVariants}>
        <SectionCard
          icon={LifeBuoy}
          title={t("root.settings.support.title")}
          description={t("root.settings.support.description")}
        >
          <Row
            icon={Bug}
            title={t("root.settings.support.reportBug.title")}
            description={t("root.settings.support.reportBug.description")}
            action={<button type="button" className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10">{t("root.settings.actions.send")}</button>}
          />
          <Row
            icon={Palette}
            title={t("root.settings.support.requestFeature.title")}
            description={t("root.settings.support.requestFeature.description")}
            action={<button type="button" className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10">{t("root.settings.actions.share")}</button>}
          />
          <Row
            icon={Mail}
            title={t("root.settings.support.contactSupport.title")}
            description={t("root.settings.support.contactSupport.description")}
            action={<a href="mailto:support@gradeflow.app" className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10">{t("root.settings.actions.contact")}</a>}
          />
          <Row
            icon={BookOpenText}
            title={t("root.settings.support.documentation.title")}
            description={t("root.settings.support.documentation.description")}
            action={<Link href="/" className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10">{t("root.settings.actions.readDocs")}</Link>}
          />
        </SectionCard>
      </motion.div>
    </motion.div>
  );
}
