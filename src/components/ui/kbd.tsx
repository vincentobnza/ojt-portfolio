import React from "react";
import { cn } from "@/lib/utils";

interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Kbd({ children, className, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex h-6 items-center justify-center rounded border border-zinc-200 bg-zinc-100 px-1.5 font-mono text-[11px] font-bold text-zinc-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}
