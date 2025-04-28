import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Kbd } from "./ui/kbd";

export function SearchBar() {
  return (
    <div className="flex items-center justify-center w-80 relative">
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground">
        <Search className="h-4 w-4" />
      </div>
      <Input placeholder="Search anything here..." className="pl-8 pr-12" />
      <div className="absolute right-[5px] top-1/2 transform -translate-y-1/2">
        <Kbd>CTRL K</Kbd>
      </div>
    </div>
  );
}
