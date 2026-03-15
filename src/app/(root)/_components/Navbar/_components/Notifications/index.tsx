"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Inbox } from "lucide-react";
import { useTranslation } from "react-i18next";
import { notificationItems } from "../../../../_constants/index";
import Link from "next/link";

type NotificationsProps = {
  onItemClick?: () => void;
};

const Notifications = ({ onItemClick }: NotificationsProps) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const unreadMessages = useMemo(() => notificationItems.filter((item) => item.unread), []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative w-[320px] rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.16)] max-[350px]:w-[260px] max-[350px]:rounded-xl max-[350px]:p-3 dark:border-white/10 dark:bg-[#1f1f1f]">
      <div
        aria-hidden="true"
        className="absolute -top-2 max-[350px]:-top-[6px] right-4 max-[350px]:right-[17px] h-4 w-4 rotate-45 border-l border-t border-slate-200 bg-white max-[350px]:right-3 max-[350px]:h-3 max-[350px]:w-3 dark:border-white/10 dark:bg-[#1f1f1f]"
      />


      {isLoading ? (
        <div className="space-y-3 max-[350px]:space-y-2.5">
          <div
            className="animate-pulse rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 max-[350px]:rounded-lg max-[350px]:p-2.5 dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="h-4 w-28 rounded bg-slate-200 max-[350px]:h-3 max-[350px]:w-24 dark:bg-white/10" />
                <div className="mt-2 h-3 w-full rounded bg-slate-200 dark:bg-white/10" />
                <div className="mt-1 h-3 w-4/5 rounded bg-slate-200 dark:bg-white/10" />
              </div>
              <div className="h-3 w-14 shrink-0 rounded bg-slate-200 dark:bg-white/10" />
            </div>
          </div>

        </div>
      ) : unreadMessages.length > 0 ? (
        <div className="space-y-3 max-[350px]:space-y-2.5">
          {unreadMessages.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border cursor-pointer border-slate-200/80 bg-slate-50/70 p-3 max-[350px]:rounded-lg max-[350px]:p-2.5 dark:border-white/10 dark:bg-white/5"
            >
              <Link href="/notifications" className="flex items-start justify-between gap-3" onClick={onItemClick}>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="truncate text-sm font-semibold text-slate-900 max-[350px]:text-xs dark:text-white">
                      {t(item.title)}
                    </p>
                    {item.unread ? <span className="h-2 w-2 shrink-0 rounded-full bg-[#0046FF]" /> : null}
                  </div>
                  <p className="mt-1 text-sm text-slate-500 max-w-full truncate max-[350px]:text-xs dark:text-slate-300">
                    {t(item.description)}
                  </p>
                </div>
                <span className="shrink-0 text-xs text-slate-400 dark:text-slate-500">{t(item.timestamp)}</span>
              </Link>
            </div>
          ))}
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Notifications;
