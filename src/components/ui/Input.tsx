import React from "react";

type InputProps = React.ComponentPropsWithoutRef<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`rounded-xl border border-black/10 bg-white px-4 py-3 text-lg md:text-base outline-none transition focus:border-[#0046FF] dark:border-white/10 dark:bg-[#0b1220] dark:text-white ${className || ""}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
