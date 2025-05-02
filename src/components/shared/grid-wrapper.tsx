import { cn } from "@/lib/utils";

type GridWrapperProps = {
  children: React.ReactNode;
  className?: string;
  gridColumns?: string;
};

export function GridWrapper({
  children,
  className,
  gridColumns,
}: GridWrapperProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-4 p-4",
        gridColumns,
        className
      )}
    >
      {children}
    </div>
  );
}
