import { cn } from "@/lib/utils";

export function ImageLayout({
  src,
  children,
  isBordered = true,
}: {
  src: string;
  children?: React.ReactNode;
  isBordered?: boolean;
}) {
  return (
    <div className="px-5 space-y-4">
      <div
        className={cn(
          "w-3/4 h-[9in]",
          isBordered ? "p-3 bg-zinc-200 dark:bg-zinc-700" : ""
        )}
      >
        <img
          src={src}
          alt="omsc"
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300 object-cover"
        />
      </div>
      {children}
    </div>
  );
}
