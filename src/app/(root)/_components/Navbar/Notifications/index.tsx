import React from "react";
import { Inbox } from "lucide-react";

const Notifications = () => {
  return (
    <div className="relative w-[320px] rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-[#1f1f1f]">
      <div
        aria-hidden="true"
        className="absolute -top-2 right-4 h-4 w-4 rotate-45 border-l border-t border-slate-200 bg-white dark:border-white/10 dark:bg-[#1f1f1f]"
      />


      <div className="flex items-start gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: "#0046FF" }}
        >
          <Inbox className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">No notifications</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
            Recent updates will appear here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
