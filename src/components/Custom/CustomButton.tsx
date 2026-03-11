import React from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

const Btn = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`mt-2 rounded-lg bg-[#0046FF] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0036c4] cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 ${className || ""}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Btn.displayName = "Btn";

export default Btn;