import { Moon, Sun, LaptopMinimal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { DotPatternBg } from "./dot-pattern-bg";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-col  border-t border-t-zinc-100 dark:border-zinc-800 p-2 relative">
      <DotPatternBg />
      <img
        src="https://cdn-icons-png.flaticon.com/128/12180/12180724.png"
        alt="Theme Toggle Icon"
        className="size-14 absolute top-4 right-2 grayscale opacity-20"
      />
      <p className="text-xs opacity-60 p-3">Theme Configuration</p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="justify-start ">
            {theme === "dark" ? (
              <Moon className="mr-2" />
            ) : theme === "light" ? (
              <Sun className="mr-2" />
            ) : (
              <LaptopMinimal className="mr-2" />
            )}
            {theme === "dark"
              ? "Dark Mode"
              : theme === "light"
              ? "Light Mode"
              : "System"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-64 ">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
