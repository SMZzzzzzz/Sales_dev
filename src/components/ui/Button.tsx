"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary=Rausch CTA, dark=near-black Primary Dark, secondary=muted surface */
  variant?: "primary" | "dark" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", disabled, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-bnb-btn font-medium transition-[color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bnb-ink focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-[0.24]",
          size === "sm" ? "h-8 px-3 text-sm" : "h-11 px-6 text-base",
          variant === "primary" &&
            "bg-bnb-rausch text-white shadow-airbnb-card hover:bg-bnb-rauschDeep hover:shadow-airbnb-hover",
          variant === "dark" &&
            "bg-bnb-ink text-bnb-white shadow-airbnb-card hover:shadow-airbnb-hover",
          variant === "secondary" &&
            "bg-bnb-surface text-bnb-ink hover:shadow-airbnb-hover",
          variant === "outline" &&
            "border border-bnb-border bg-bnb-white text-bnb-ink shadow-airbnb-card hover:shadow-airbnb-hover",
          variant === "ghost" &&
            "text-bnb-ink hover:bg-bnb-surface/80",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
