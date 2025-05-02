import { cn } from "@/lib/utils";
import { GridPattern } from "./magicui/grid-pattern";

export default function GridPatternBg() {
  return (
    <>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
      />
    </>
  );
}
