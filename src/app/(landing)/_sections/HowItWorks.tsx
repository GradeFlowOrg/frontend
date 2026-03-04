"use client";

import React from "react";
import { ChartNoAxesCombined, Share2, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

import LiquidCard from "../../../components/cards/LiquidCard";

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="my-[20px] w-full scroll-mt-24">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold capitalize text-[#0F2854] dark:text-[white]">{t("landing.howItWorks.title")}</h1>
        <p className="mt-6 text-[#0F2854] opacity-70 dark:text-[white]">{t("landing.howItWorks.subtitle")}</p>
        <div className="mt-10 grid max-w-[90%] gap-6 md:grid-cols-3">
          <LiquidCard>
            <div className="flex h-[100px] w-full flex-col items-center justify-center">
              <h2 className="mt-2 flex items-center gap-[7px] text-[30px] font-bold text-[#0F2854] max-[1020px]:text-[25px] dark:text-white">
                {t("landing.howItWorks.createTitle")} <ShieldCheck />
              </h2>
              <p className="mt-3 text-center text-sm text-slate-700 max-[1030px]:text-[12px] dark:text-slate-200">{t("landing.howItWorks.createDesc")}</p>
            </div>
          </LiquidCard>
          <LiquidCard>
            <div className="flex h-[100px] w-full flex-col items-center justify-center">
              <h2 className="mt-2 flex items-center gap-[7px] text-[30px] font-bold text-[#0F2854] max-[1020px]:text-[25px] dark:text-white">
                {t("landing.howItWorks.shareTitle")} <Share2 />
              </h2>
              <p className="mt-3 text-center text-sm text-slate-700 max-[1030px]:text-[12px] dark:text-slate-200">{t("landing.howItWorks.shareDesc")}</p>
            </div>
          </LiquidCard>
          <LiquidCard>
            <div className="flex h-[100px] w-full flex-col items-center justify-center">
              <h2 className="mt-2 flex items-center gap-[7px] text-[30px] font-bold text-[#0F2854] max-[1030px]:text-[25px] dark:text-white">
                {t("landing.howItWorks.resultsTitle")} <ChartNoAxesCombined />
              </h2>
              <p className="mt-3 text-center text-sm text-slate-700 max-[1030px]:text-[12px] dark:text-slate-200">{t("landing.howItWorks.resultsDesc")}</p>
            </div>
          </LiquidCard>
        </div>
      </div>
    </section>
  );
}

