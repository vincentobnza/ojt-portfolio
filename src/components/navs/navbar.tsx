import { Link, NavLink } from "react-router-dom";
import { DotPatternBg } from "../shared/dot-pattern-bg";
import { SearchBar } from "../search-bar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full h-16 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 grid place-items-center">
      <DotPatternBg />
      <div className="w-full max-w-screen-2xl mx-auto flex justify-between items-center px-8">
        <NavLink to="/" className="flex items-center gap-4 p-1">
          <div className="size-7 grid place-items-center rounded-sm bg-zinc-900 dark:bg-gradient-to-br dark:from-violet-500 dark:to-cyan-700 text-white font-medium">
            V
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium">OJT | PORTFOLIO</h1>
            <p className="text-xs opacity-50">Vincent Obenza</p>
          </div>
        </NavLink>

        <div className="flex items-center gap-4">
          <Link to="/" className={buttonVariants({ variant: "ghost" })}>
            View PDF File
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
    </header>
  );
}
