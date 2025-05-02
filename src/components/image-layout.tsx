import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function ImageLayout({
  src,
  children,
  isBordered = true,
  className,
}: {
  src: string;
  children?: React.ReactNode;
  isBordered?: boolean;
  className?: string;
}) {
  return (
    <div className="px-5 space-y-4">
      <div
        className={cn(
          "w-3/4 h-[9in]",
          isBordered ? "p-2 bg-zinc-200 dark:bg-zinc-700" : "",
          className
        )}
      >
        <motion.img
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
          loading="lazy"
          src={src}
          alt="omsc"
          className="w-full h-full transition-all duration-300 object-cover"
        />
      </div>
      {children}
    </div>
  );
}
