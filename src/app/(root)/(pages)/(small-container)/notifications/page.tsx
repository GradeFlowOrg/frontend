"use client";

import React, { useMemo, useState } from "react";
import { Bell, Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "react-i18next";
import Empty from "../../_components/Empty";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import { notificationItems } from "@/app/(root)/_constants";
import type { notificationItemsInterface } from "@/app/(root)/_types";

const Page = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState<notificationItemsInterface[]>(notificationItems);
  const [selectedNotificationId, setSelectedNotificationId] = useState<number | null>(null);
  const unreadMessages = useMemo(() => items.filter((item) => item.unread), [items]);
  const readMessages = useMemo(() => items.filter((item) => !item.unread), [items]);
  const selectedNotification = useMemo(
    () => items.find((item) => item.id === selectedNotificationId) ?? null,
    [items, selectedNotificationId]
  );

  const handleDelete = (id: number) => {
    setItems((current) => current.filter((notification) => notification.id !== id));
    setSelectedNotificationId((current) => (current === id ? null : current));
  };

  const handleOpenNotification = (item: notificationItemsInterface) => {
    setSelectedNotificationId(item.id);
    setItems((current) =>
      current.map((notification) =>
        notification.id === item.id ? { ...notification, unread: false } : notification
      )
    );
  };

  const renderNotificationCard = (item: notificationItemsInterface, index: number, tone: "unread" | "read") => (
    <motion.article
      key={item.id}
      layout
      onClick={() => handleOpenNotification(item)}
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -14, scale: 0.985 }}
      transition={{ duration: 0.28, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.995 }}
      className={`cursor-pointer rounded-[24px] border p-4 shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition dark:border-white/10 dark:bg-[#1f1f1f] dark:hover:border-white/15 ${
        tone === "unread"
          ? "border-slate-200/80 bg-white/90 hover:border-slate-300"
          : "border-slate-200/80 bg-white/90 hover:border-slate-300 hover:shadow-[0_14px_36px_rgba(15,23,42,0.12)]"
      }`}
    >
      <div className="flex items-start gap-3">
        <motion.div
          layout
          animate={item.unread ? { scale: [1, 1.08, 1] } : { scale: 1 }}
          transition={item.unread ? { duration: 0.45, ease: "easeOut" } : { duration: 0.2 }}
          className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0046FF] text-white"
        >
          <Bell className="h-4 w-4" />
        </motion.div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="truncate text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h2>
                {item.unread ? (
                  <motion.span
                    layout
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="h-2 w-2 shrink-0 rounded-full bg-[#0046FF]"
                  />
                ) : null}
              </div>
              <p className="mt-1 max-w-full truncate text-sm leading-6 text-slate-500 dark:text-slate-300">{item.description}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{item.timestamp}</span>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleDelete(item.id);
                }}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-white/10 dark:text-slate-400 dark:hover:border-red-400/30 dark:hover:bg-red-500/10 dark:hover:text-red-300"
                aria-label={t("root.notifications.delete")}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );


  return (
    <motion.div layout className="flex min-h-[60vh] w-full flex-col">
      <AnimatePresence mode="wait">
        {items.length > 0 ? (
          <motion.section
            key="notifications-list"
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24 }}
            className="space-y-4"
          >
            {unreadMessages.length > 0 ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2 px-1">
                  <span className="h-2 w-2 rounded-full bg-[#0046FF]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0046FF] dark:text-[#8fb0ff]">
                    Unread
                  </p>
                </div>
                <AnimatePresence initial={false}>
                  {unreadMessages.map((item, index) => renderNotificationCard(item, index, "unread"))}
                </AnimatePresence>
              </div>
            ) : null}

            {readMessages.length > 0 ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2 px-1">
                  <span className="h-2 w-2 rounded-full bg-slate-400 dark:bg-slate-500" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    Read
                  </p>
                </div>
                <AnimatePresence initial={false}>
                  {readMessages.map((item, index) => renderNotificationCard(item, index, "read"))}
                </AnimatePresence>
              </div>
            ) : null}
          </motion.section>
        ) : (
          <motion.section
            key="notifications-empty"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="flex flex-1 items-center justify-center"
          >
            <Empty />
          </motion.section>
        )}
      </AnimatePresence>

      <AlertDialog open={selectedNotification !== null} onOpenChange={(open) => {
        if (!open) setSelectedNotificationId(null);
      }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{selectedNotification?.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {selectedNotification?.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </motion.div>
  );
};

export default Page;
