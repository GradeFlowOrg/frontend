import React, { type ReactNode } from "react";
import { Inbox } from "lucide-react";
import { useTranslation } from "react-i18next";

type EmptyProps = {
  title?: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
};

const Empty = ({ title, description, icon, className = "" }: EmptyProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={`flex w-full max-w-md flex-col items-center text-center shadow-[0_18px_45px_rgba(15,23,42,0.08)] ${className}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0046FF] text-white shadow-[0_12px_28px_rgba(0,70,255,0.28)]">
        {icon ?? <Inbox className="h-6 w-6" />}
      </div>

      <h2 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
        {title ?? t("root.empty.title")}
      </h2>
      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-300">
        {description ?? t("root.empty.description")}
      </p>
    </div>
  );
};

export default Empty;