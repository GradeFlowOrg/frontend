"use client";

import { useSyncExternalStore } from "react";
import { useTranslation } from "react-i18next";

import { supportedLanguages, type AppLanguage } from "@/i18n/resources";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type LanguageSwitcherProps = {
  compact?: boolean;
};
export default function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return null;
  }

  const currentLanguage = (i18n.resolvedLanguage ?? i18n.language ?? "en") as AppLanguage;

  return (
    <div className={`inline-flex items-center gap-2  ${compact ? "justify-center" : ""}`}>
      {!compact ? (
        <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{t("language.label")}</span>
      ) : null}
      <Select
        value={supportedLanguages.includes(currentLanguage) ? currentLanguage : "en"}
        onValueChange={(value) => {
          if (!supportedLanguages.includes(value as AppLanguage)) {
            return;
          }

          window.localStorage.setItem("gf-language", value);
          void i18n.changeLanguage(value);
        }}
      >
        <SelectTrigger
          className={`${compact ? "h-8 w-14 px-2 text-xs" : "h-9 w-20 text-sm"} cursor-pointer`}
          aria-label={t("language.label")}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {supportedLanguages.map((language) => (
            <SelectItem className='cursor-pointer' key={language} value={language}>
              {language.toUpperCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
