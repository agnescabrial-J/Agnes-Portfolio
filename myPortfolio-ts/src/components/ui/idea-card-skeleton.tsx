import { Skeleton } from "@radix-ui/themes";
import React from "react";
const IdeaCardSkeleton: React.FC = () => {
  return (
   <div className="flex flex-col w-full max-w-md sm:max-w-lg mx-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] shadow-sm animate-pulse p-4 gap-3">
      <Skeleton className="h-4 w-24 rounded bg-[var(--color-border)]" />
      <Skeleton className="h-5 w-3/4 rounded bg-[var(--color-border)]" />
      <Skeleton className="h-3 w-full rounded bg-[var(--color-border)]" />
      <Skeleton className="h-3 w-5/6 rounded bg-[var(--color-border)]" />
      <div className="flex justify-between mt-4">
        <Skeleton className="h-6 w-6 rounded-full bg-[var(--color-border)]" />
        <div className="flex gap-3">
          <Skeleton className="h-5 w-5 rounded bg-[var(--color-border)]" />
          <Skeleton className="h-5 w-5 rounded bg-[var(--color-border)]" />
          <Skeleton className="h-5 w-5 rounded bg-[var(--color-border)]" />
        </div>
      </div>
    </div>
  );
}

export default IdeaCardSkeleton;