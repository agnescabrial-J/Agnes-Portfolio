"use client";

import React from "react";
import { cn } from "../../lib/utils";

type SegmentedOption = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

interface SegmentedControlProps {
  value: string;
  onChange: (val: string) => void;
  options: SegmentedOption[];
  className?: string;
}

const SegmentedControl = ({
  value,
  onChange,
  options,
  className,
}: SegmentedControlProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] shadow-sm overflow-hidden",
        className
      )}
    >
      {options.map((opt) => {
        const isActive = value === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={cn(
              "flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition-all select-none",
              "focus:outline-none active:scale-95",
              // Default (non-active) state
              !isActive &&
                "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover-strong)] hover:text-[var(--color-text-primary)]",
              // Active state
              isActive &&
                "bg-[var(--color-anchor-hover)] text-white"
            )}
          >
            {opt.icon && (
              <span
                className={cn(
                  "flex items-center justify-center w-4 h-4 text-current",
                  isActive ? "opacity-100" : "opacity-80"
                )}
              >
                {opt.icon}
              </span>
            )}
            <span className="leading-none">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SegmentedControl;
