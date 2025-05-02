import * as React from "react";
import { Check, ChevronsUpDown, Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type ThemeOption = "light" | "dark" | "system";

const themeOptions = [
  {
    value: "light",
    label: "Light",
    icon: Sun,
  },
  {
    value: "dark",
    label: "Dark",
    icon: Moon,
  },
  {
    value: "system",
    label: "System",
    icon: Laptop,
  },
];

export function ThemeDropdown() {
  const [open, setOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[160px] justify-between"
        >
          {theme ? (
            <div className="flex items-center gap-2">
              {themeOptions.find((option) => option.value === theme)?.label ||
                "System"}{" "}
              theme
            </div>
          ) : (
            "Theme"
          )}
          <ChevronsUpDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[160px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No theme found.</CommandEmpty>
            <CommandGroup>
              {themeOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(value) => {
                    setTheme(value as ThemeOption);
                    setOpen(false);
                  }}
                >
                  <div className="flex items-center gap-2">
                    {React.createElement(option.icon, { className: "h-4 w-4" })}
                    {option.label}
                  </div>
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      theme === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
