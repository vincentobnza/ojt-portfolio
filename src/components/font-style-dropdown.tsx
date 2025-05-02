import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

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

const fontOptions = [
  {
    value: "Inria Sans",
    label: "Inria",
  },
  {
    value: "Open Sans",
    label: "Open Sans",
  },
  {
    value: "Geist Sans",
    label: "Geist",
  },
];

export function FontStyleDropdown() {
  const [open, setOpen] = React.useState(false);
  const [selectedFont, setSelectedFont] = React.useState("Inria Sans");

  React.useEffect(() => {
    let styleEl = document.getElementById("font-style");
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = "font-style";
      document.head.appendChild(styleEl);
    }

    styleEl.textContent = `
      * {
        font-family: "${selectedFont}", sans-serif !important;
      }
    `;
  }, [selectedFont]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[160px] justify-between"
        >
          <div className="flex items-center gap-2">
            {fontOptions.find((option) => option.value === selectedFont)
              ?.label || "Inria Sans"}
          </div>
          <ChevronsUpDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[160px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No font found.</CommandEmpty>
            <CommandGroup>
              {fontOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(value) => {
                    setSelectedFont(value);
                    setOpen(false);
                  }}
                >
                  <div className="flex items-center gap-2">{option.label}</div>
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedFont === option.value
                        ? "opacity-100"
                        : "opacity-0"
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
