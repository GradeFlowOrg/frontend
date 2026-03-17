"use client";

import { useState } from "react";
import { KeyRound } from "lucide-react";
import Input from "@/components/ui/Input.dark";
import { SectionCard } from "../../../_components/layout/SectionCard";

export default function ChangePassword() {
  const [formValues, setFormValues] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  return (
    <div className="space-y-5">
      <SectionCard
        icon={KeyRound}
        title="Change password"
        description="Update your password to keep your account secure."
      >
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="space-y-2">
            <label
              htmlFor="current-password"
              className="text-sm font-semibold text-slate-900 dark:text-white"
            >
              Current password
            </label>
            <Input
              id="current-password"
              type="password"
              placeholder="Enter current password"
              value={formValues.currentPassword}
              onChange={(event) =>
                setFormValues((prev) => ({
                  ...prev,
                  currentPassword: event.target.value,
                }))
              }
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="new-password"
              className="text-sm font-semibold text-slate-900 dark:text-white"
            >
              New password
            </label>
            <Input
              id="new-password"
              type="password"
              placeholder="Create a new password"
              value={formValues.newPassword}
              onChange={(event) =>
                setFormValues((prev) => ({ ...prev, newPassword: event.target.value }))
              }
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="confirm-password"
              className="text-sm font-semibold text-slate-900 dark:text-white"
            >
              Confirm new password
            </label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Re-enter new password"
              value={formValues.confirmPassword}
              onChange={(event) =>
                setFormValues((prev) => ({
                  ...prev,
                  confirmPassword: event.target.value,
                }))
              }
            />
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 text-sm text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            Use at least 8 characters with a mix of letters, numbers, and symbols.
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-xl bg-[#0046FF] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0036d6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0046FF]/60 active:scale-[0.99]"
          >
            Update password
          </button>
        </form>
      </SectionCard>
    </div>
  );
}
