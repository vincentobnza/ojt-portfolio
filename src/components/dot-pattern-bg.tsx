import { cn } from "@/lib/utils";
import { DotPattern } from "./magicui/dot-pattern";

export function DotPatternBg() {
  return (
    <DotPattern
      width={20}
      height={20}
      cx={1}
      cy={1}
      cr={1}
      className={cn(
        "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] p-1 "
      )}
    />
  );
}
