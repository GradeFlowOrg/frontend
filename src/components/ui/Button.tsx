import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition cursor-pointer disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default: "bg-[#0046FF] text-white hover:bg-[#0036c4]",
        ghost: "bg-transparent text-[#355181] hover:bg-slate-100 hover:text-[#0046FF] dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white",
      },
      size: {
        default: "px-4 py-2.5",
        sm: "h-8 px-3 text-xs",
        "icon-sm": "h-8 w-8 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
export default Button;
