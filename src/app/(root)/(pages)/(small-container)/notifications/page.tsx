"use client";

import React, { useMemo, useState } from "react";
import { Bell, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import Empty from "../../_components/Empty";

import { notificationItems } from "@/app/(root)/_constants";
import type { notificationItemsInterface } from "@/app/(root)/_types";

const Page = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState<notificationItemsInterface[]>(notificationItems);

  const unreadMessages = useMemo(() => items.filter((item) => item.unread), [items]);
  const readMessages = useMemo(() => items.filter((item) => !item.unread), [items]);

  const handleDelete = (id: number) => {
    setItems((current) => current.filter((notification) => notification.id !== id));
  };

  return (
    <div className="flex min-h-[60vh] w-full flex-col">
      {items.length > 0 ? (
        <section className="space-y-3">
          {unreadMessages.map((item) => (
            <article
              key={item.id}
              className="rounded-[24px] border border-slate-200/80 bg-white/90 p-4 shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition hover:border-slate-300 hover:shadow-[0_14px_36px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[#1f1f1f] dark:hover:border-white/15"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0046FF] text-white">
                  <Bell className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h2 className="truncate text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h2>
                        {item.unread ? <span className="h-2 w-2 shrink-0 rounded-full bg-[#0046FF]" /> : null}
                      </div>
                      <p className="mt-1 max-w-full truncate text-sm leading-6 text-slate-500 dark:text-slate-300">{item.description}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{item.timestamp}</span>
                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-white/10 dark:text-slate-400 dark:hover:border-red-400/30 dark:hover:bg-red-500/10 dark:hover:text-red-300 cursor-pointer"
                        aria-label={t("root.notifications.delete")}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
          {readMessages.map((item) => (
            <article
              key={item.id}
              className="rounded-[24px] border border-slate-200/80 bg-white/90 p-4 shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition hover:border-slate-300 hover:shadow-[0_14px_36px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[#1f1f1f] dark:hover:border-white/15"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0046FF] text-white">
                  <Bell className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h2 className="truncate text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h2>
                        {item.unread ? <span className="h-2 w-2 shrink-0 rounded-full bg-[#0046FF]" /> : null}
                      </div>
                      <p className="mt-1 max-w-full truncate text-sm leading-6 text-slate-500 dark:text-slate-300">{item.description}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{item.timestamp}</span>
                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                         className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-white/10 dark:text-slate-400 dark:hover:border-red-400/30 dark:hover:bg-red-500/10 dark:hover:text-red-300 cursor-pointer"
                        aria-label={t("root.notifications.delete")}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <section className="flex flex-1 items-center justify-center">
          <Empty />
        </section>
      )}
    </div>
  );
};

export default Page;
