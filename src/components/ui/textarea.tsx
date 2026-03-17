"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type TextareaProps = React.ComponentPropsWithoutRef<"textarea">;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-[#0F2854] outline-none transition placeholder:text-[#355181]/60 focus:border-[#b7ccff] focus:ring-2 focus:ring-[#0046FF]/20 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-[#0b1220] dark:text-white dark:placeholder:text-slate-400/70 dark:focus:border-[#4f6fb3] dark:focus:ring-[#8fb0ff]/20",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
