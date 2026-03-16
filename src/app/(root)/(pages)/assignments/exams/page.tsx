"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import ExamCard from "../../_components/ui/ExamCard";
import { examItems, containerVariants, itemVariants } from "../../_constants";

type ExamTab = "active" | "completed";

export default function Page() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<ExamTab>("active");

  const filteredItems = useMemo(() => {
    return examItems.filter((exam) => (activeTab === "completed" ? exam.completed : !exam.completed));
  }, [activeTab]);

  return (
    <div className="flex flex-col gap-6 pt-4">
      <div className="flex flex-wrap items-center gap-3">
        {(["active", "completed"] as ExamTab[]).map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`inline-flex h-10 cursor-pointer items-center justify-center rounded-full border px-4 text-sm font-semibold transition ${
                isActive
                  ? "border-[#0046FF] bg-[#0046FF] text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              }`}
            >
              {tab === "active"
                ? t("root.exams.tabs.notStarted", "Not started")
                : t("root.exams.tabs.finished", "Finished")}
            </button>
          );
        })}
      </div>

      <motion.div
        key={activeTab}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid gap-5 lg:grid-cols-2"
      >
        {filteredItems.map((exam) => (
          <motion.div key={exam.id} variants={itemVariants}>
            <ExamCard exam={exam} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
