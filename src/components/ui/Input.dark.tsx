import React from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  showPasswordToggle?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, showPasswordToggle = true, ...props }, ref) => {
    const isPassword = type === "password";
    const [visible, setVisible] = React.useState(false);
    const resolvedType = isPassword ? (visible ? "text" : "password") : type;

    if (!isPassword || !showPasswordToggle) {
      return (
        <input
          ref={ref}
          type={type}
          className={cn(
            "w-full rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-[#0F2854] outline-none transition placeholder:text-[#355181]/60 focus:ring-2 focus:ring-[#0046FF]/15 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-slate-400/70 dark:focus:ring-[#0046FF]/20",
            className
          )}
          {...props}
        />
      );
    }

    return (
      <div className="relative">
        <input
          ref={ref}
          type={resolvedType}
          className={cn(
            "w-full rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-3 pr-11 text-sm text-[#0F2854] outline-none transition placeholder:text-[#355181]/60 focus:ring-2 focus:ring-[#0046FF]/15 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-slate-400/70 dark:focus:ring-[#0046FF]/20",
            className
          )}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((prev) => !prev)}
          className="absolute inset-y-1 right-1 inline-flex w-8 cursor-pointer items-center justify-center rounded-md text-[#355181] transition hover:bg-slate-100 hover:text-[#0046FF] focus-visible:outline-none dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
