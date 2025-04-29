import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function ChaptersHeader({
  label,
  title,
}: {
  label?: string;
  title: string;
}) {
  const id = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  return (
    <div className="w-full p-5" id={id}>
      <Link
        to="/"
        className="flex items-center gap-4 text-md font-medium py-6 opacity-60 hover:opacity-100 hover:text-emerald-500 transition-colors duration-200 cursor-pointer"
      >
        <ChevronLeft size={20} />
        Quick Overview
      </Link>
      <div className="border-b border-zinc-200 dark:border-zinc-800 pb-8">
        {label && (
          <p className="text-xs mb-2 font-semibold text-emerald-500">{label}</p>
        )}
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
      </div>
    </div>
  );
}
