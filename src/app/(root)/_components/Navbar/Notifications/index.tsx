import React from "react";
import { Inbox } from "lucide-react";
import { useTranslation } from "react-i18next";

const Notifications = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-[320px] rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.16)] max-[350px]:w-[260px] max-[350px]:rounded-xl max-[350px]:p-3 dark:border-white/10 dark:bg-[#1f1f1f]">
      <div
        aria-hidden="true"
        className="absolute -top-2 right-4 h-4 w-4 rotate-45 border-l border-t border-slate-200 bg-white max-[350px]:right-3 max-[350px]:h-3 max-[350px]:w-3 dark:border-white/10 dark:bg-[#1f1f1f]"
      />


      <div className="flex items-start gap-3 max-[350px]:gap-2.5">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white max-[350px]:h-8 max-[350px]:w-8 max-[350px]:rounded-lg"
          style={{ backgroundColor: "#0046FF" }}
        >
          <Inbox className="h-5 w-5 max-[350px]:h-4 max-[350px]:w-4" />
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 max-[350px]:text-xs dark:text-white">{t("root.notifications.emptyTitle")}</p>
          <p className="mt-1 text-sm text-slate-500 max-[350px]:text-xs dark:text-slate-300">
            {t("root.notifications.emptyDescription")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
