"use client";

import React from "react";
import { useTranslation } from "react-i18next";

import { useMobile } from "@/hooks/useMobile";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
  const isMobile = useMobile();
  const { t } = useTranslation();

  if (!isMobile) return null;

  return (
    <div className="w-full">
      <nav className="flex h-[90px] w-full items-center justify-between rounded-2xl border border-black/10 bg-white/95 px-4 text-white backdrop-blur dark:border-[#3a3a3a] dark:bg-[#1a1a1a]/95">
        <h1 className="text-xl font-bold text-[#0F2854] dark:text-white">{t("root.navbarTitle")}</h1>
        <LanguageSwitcher compact />
      </nav>
    </div>
  );
};

export default Navbar;

