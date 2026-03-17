"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"
import { X } from "lucide-react";
import Textarea from "@/components/ui/textarea";
import { ModalProps } from "../../../_types/index";

export function SubmitModal({ className, children, title, file }: Readonly<ModalProps>) {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <button className={className}>{children}</button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-transparent text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-lg font-semibold text-slate-900 dark:text-white">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-slate-500 dark:text-slate-300">
            Share the details below so we can follow up quickly.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-3">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Message</p>
            <Textarea
              placeholder="Describe the issue or idea..."
              className="min-h-[140px] resize-y bg-slate-50 dark:bg-white/10"
            />
          </div>

          {file ? (
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Attachment</p>
              <input
                type="file"
                className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-3 text-sm text-slate-600 outline-none transition file:mr-4 file:rounded-lg file:border-0 file:bg-slate-100 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-slate-700 hover:file:bg-slate-200 dark:border-white/10 dark:bg-transparent dark:text-slate-300 dark:file:bg-white/10 dark:file:text-slate-200 dark:hover:file:bg-white/15"
              />
            </div>
          ) : null}
        </div>

        <AlertDialogFooter className="mt-2">
          <AlertDialogAction className="h-12 w-full cursor-pointer text-base font-semibold transition active:scale-[0.99] active:opacity-90">
            Submit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
