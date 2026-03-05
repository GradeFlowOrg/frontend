"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

// import ThemeSwitch from "@/components/ThemeSwitch";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import LogoBlack from "@/public/images/logo-black.png";
import LogoWhite from "@/public/images/logo-white.png";

export default function Navbar() {
  const { t } = useTranslation();

  const scrollToFeatures = () => {
    const section = document.getElementById("features");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToHowItWorks = () => {
    const section = document.getElementById("how-it-works");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToAccordion = () => {
    const section = document.getElementById("accordion");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="w-full border-b border-black/10 bg-gradient-to-b from-[#e9f0ff] to-[#dce8ff] p-4 text-white dark:border-white/10 dark:from-[#0b1220] dark:to-[#111827]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <Image src={LogoBlack} alt="GradeFlow Logo" width={32} height={32} className="inline-block dark:hidden" />
            <Image src={LogoWhite} alt="GradeFlow Logo" width={32} height={32} className="hidden dark:inline-block" />

            <h1 className="font-[var(--font-inter)] text-[20px] font-bold text-[#000] max-[390px]:text-[15px] max-[338px]:hidden dark:text-[white]">
              GradeFlow
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <ul className="hidden gap-6 min-[620px]:flex">
              <li
                onClick={scrollToFeatures}
                className="cursor-pointer text-[15px] font-medium text-[#000] transition-all duration-200 hover:text-[#0046FF] dark:text-[white]"
              >
                {t("landing.nav.features")}
              </li>
              <li
                onClick={scrollToHowItWorks}
                className="cursor-pointer text-[15px] font-medium text-[#000] transition-all duration-300 hover:text-[#0046FF] dark:text-[white]"
              >
                {t("landing.nav.howItWorks")}
              </li>
              <li
                onClick={scrollToAccordion}
                className="cursor-pointer text-[15px] font-medium text-[#000] transition-all duration-300 hover:text-[#0046FF] dark:text-[white]"
              >
                {t("landing.nav.accordion")}
              </li>
            </ul>
            <span className="text-[#000] max-[774px]:hidden dark:text-white">|</span>
            <div className="hidden min-[774px]:block">
              <LanguageSwitcher compact />
            </div>
            <span className="text-[#000] max-[774px]:hidden dark:text-white">|</span>
            <div className="flex gap-2 min-[390px]:gap-6">
              <Link
                href="/login"
                className="flex items-center justify-center bg-[transparent] text-[14px] font-bold tracking-normal text-[#0046FF] transition-all duration-300 hover:opacity-75 max-[390px]:text-[12px]"
              >
                {t("landing.nav.login")}
              </Link>
              <Link
                href="/signup"
                className="flex h-[40px] w-[90px] items-center justify-center rounded-[10px] border border-[#0046FF] bg-[#0046FF] text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#0046FF] hover:shadow-md max-[390px]:h-[30px] max-[390px]:w-[60px] max-[390px]:text-[12px]"
              >
                {t("landing.nav.signup")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
