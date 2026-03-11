"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import ThemeSwitcher from "@/components/ThemeSwitch";

const Page = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("root.pages.settings")}</h1>
      <div className="mt-6">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Page;

