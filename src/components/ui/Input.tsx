import React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.ComponentPropsWithoutRef<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-[#0F2854] outline-none transition placeholder:text-[#355181]/60 focus:ring-2 focus:ring-[#0046FF]/15 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-[#0b1220] dark:text-white dark:placeholder:text-slate-400/70 dark:focus:ring-[#0046FF]/20",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
