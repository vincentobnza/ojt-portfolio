import { DotPatternBg } from "./dot-pattern-bg";

export function CustomCard({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full flex flex-col justify-start items-start gap-4 p-5 bg-white rounded dark:bg-zinc-800/10 border border-zinc-200 dark:border-zinc-800 relative ${className}`}
    >
      <DotPatternBg />
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-sm dark:opacity-50">{description}</p>
    </div>
  );
}
