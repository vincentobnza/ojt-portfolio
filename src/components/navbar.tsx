import { Link } from "react-router-dom";
import { DotPatternBg } from "./dot-pattern-bg";
import { SearchBar } from "./search-bar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  return (
    <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 border p-2 relative px-8">
      <DotPatternBg />
      <div className="w-full mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 p-1">
          <div className="size-7 grid place-items-center rounded bg-zinc-900 dark:bg-gradient-to-br dark:from-green-500 dark:to-cyan-700 text-white font-bold">
            V
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">OJT | Portfolio</h1>
            <p className="text-xs opacity-50">Vincent Obenza</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/" className={buttonVariants({ variant: "ghost" })}>
            View E-Portfolio
            <ArrowUpRight />
          </Link>

          <SearchBar />
          <Link to="/">
            <FaGithub size={25} />
          </Link>
          <Link to="/">
            <FaLinkedin size={25} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
