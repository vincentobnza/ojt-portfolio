import { Loader2 } from "lucide-react";

export function PageLoading() {
  return (
    <div className="fixed inset-0 bg-white dark:bg-zinc-900/20 backdrop-blur grid place-items-center">
      <div className="flex flex-col text-center">
        <Loader2
          className="animate-spin text-zinc-900 dark:text-zinc-100"
          size={32}
        />
      </div>
    </div>
  );
}
