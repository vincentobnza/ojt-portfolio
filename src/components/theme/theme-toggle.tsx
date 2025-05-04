import { Moon, Sun, LaptopMinimal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="relative p-4">
      <img
        src="https://cdn-icons-png.flaticon.com/128/12180/12180724.png"
        alt="Theme Toggle Icon"
        className="size-10 absolute top-5 right-5 grayscale opacity-20"
      />
      <p className="text-xs dark:opacity-60  pb-2 pl-4">Theme</p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="justify-start w-full">
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
        <DropdownMenuContent align="center" className="w-64">
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
