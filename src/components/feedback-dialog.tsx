import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaPaperPlane } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

export function FeedbackDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full relative">
          <div className="w-full h-8 bg-white dark:bg-zinc-800/20 border border-zinc-200 dark:border-zinc-700/50 flex items-center justify-start text-[12px] px-2 gap-2 cursor-pointer dark:hover:brightness-125">
            <FaPaperPlane className="text-zinc-500 dark:text-zinc-500" />
            <p className="opacity-50">Write something...</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-xl">
        <DialogHeader>
          <DialogTitle>Send me your Feedback - {"(Lods)"}</DialogTitle>
          <DialogDescription>
            <textarea
              className="mt-6 border-t border-zinc-200 dark:border-zinc-800 py-4 w-full h-32 text-sm resize-none outline-none"
              placeholder="Write your feedback here..."
            ></textarea>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" size="lg" className="w-full font-bold">
            <ArrowUpRight />
            Submit Feedback
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
