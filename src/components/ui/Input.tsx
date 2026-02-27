import React from "react";

type InputProps = React.ComponentPropsWithoutRef<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#0046FF] focus:ring-2 focus:ring-[#0046FF]/20 dark:border-white/10 dark:bg-[#0b1220] dark:text-white ${className || ""}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;