"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import {
  BookOpenText,
  Bug,
  Globe,
  History,
  KeyRound,
  Languages,
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
import { Row } from "../../_components/layout/Row";
import { SectionCard } from "../../_components/layout/SectionCard";
import { ThemeOption } from '../../../_types/index'
import { toast } from "react-toastify";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  containerVariants,
  itemVariants,
} from '../../_constants/index'
import { SubmitModal } from '../../_components/ui/SubmitModal/index'



export default function Settings() {
  const { t } = useTranslation();
  const { resolvedTheme, theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => { },
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
                    className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${active
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
          icon={Languages}
          title={t("root.settings.language.title")}
          description={t("root.settings.language.description")}
        >
          <Row
            icon={Globe}
            title={t("root.settings.language.primary.title")}
            description={t("root.settings.language.primary.description")}
            action={<LanguageSwitcher compact />}
          />
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
            action={<Link href="/settings/change-password" className="cursor-pointer rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10">{t("root.settings.actions.change")}</Link>}
          />
          <Row
            icon={ShieldEllipsis}
            title={t("root.settings.security.twoFactor.title")}
            description={t("root.settings.security.twoFactor.description")}
            action={<span className="rounded-full bg-[#eaf1ff] px-3 py-1 text-xs font-semibold text-[#0046FF] dark:bg-[#1b2a4a] dark:text-[#9fb8ff]">{t("root.settings.actions.comingSoon")}</span>}
          />
          <Row
            icon={History}
            title={t("root.settings.security.loginHistory.title")}
            description={t("root.settings.security.loginHistory.description")}
            action={<Link href="/settings/login-history" className="cursor-pointer rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10">{t("root.settings.actions.open")}</Link>}
          />
          <Row
            icon={Trash2}
            danger
            title={t("root.settings.security.deleteAccount.title")}
            description={t("root.settings.security.deleteAccount.description")}
            action={<button onClick={(e) => { e.preventDefault(); toast.error('unable to delete an account'); }} type="button" className="cursor-pointer rounded-xl bg-red-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-700">{t("root.settings.actions.delete")}</button>}
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
            action={<SubmitModal className="cursor-pointer rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10" title="Report a bug">{t("root.settings.actions.send")}</SubmitModal>}
          />
          <Row
            icon={Palette}
            title={t("root.settings.support.requestFeature.title")}
            description={t("root.settings.support.requestFeature.description")}
            action={<SubmitModal className="cursor-pointer rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10" title="Request a feature">{t("root.settings.actions.share")}</SubmitModal>}
          />
          <Row
            icon={Mail}
            title={t("root.settings.support.contactSupport.title")}
            description={t("root.settings.support.contactSupport.description")}
            action={<a href="mailto:support@gradeflow.app" className="cursor-pointer rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10">{t("root.settings.actions.contact")}</a>}
          />
          <Row
            icon={BookOpenText}
            title={t("root.settings.support.documentation.title")}
            description={t("root.settings.support.documentation.description")}
            action={<Link href="/settings/documentation" className="cursor-pointer rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10">{t("root.settings.actions.readDocs")}</Link>}
          />
        </SectionCard>
      </motion.div>
    </motion.div>
  );
}
