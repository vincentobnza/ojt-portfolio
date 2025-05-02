import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

type NextPageButtonProps = {
  nextRoute: string;
  label: string;
  hasPreviousPage?: boolean;
};

export function NextPageButton({
  nextRoute,
  label,
  hasPreviousPage = false,
}: NextPageButtonProps) {
  return (
    <div
      className={`w-full my-15 flex ${
        !hasPreviousPage ? "justify-end" : "justify-between"
      } items-center border-t border-t-zinc-200 pt-5 dark:border-t-zinc-800`}
    >
      {hasPreviousPage && (
        <button
          className="flex items-center gap-4 text-md font-medium py-6 opacity-60 hover:opacity-100 hover:text-violet-500 transition-colors duration-200 cursor-pointer"
          onClick={() => window.history.back()}
        >
          <ChevronLeft size={20} />
          Previous Page
        </button>
      )}
      <Link
        className="flex items-center gap-4 text-xl font-medium py-6 hover:text-violet-500 transition-colors duration-200"
        to={`/portfolio/${nextRoute}`}
      >
        <span className="text-xs opacity-50 font-medium ">Next</span> {label}
        <ChevronRight size={20} className="mt-1" />
      </Link>
    </div>
  );
}
