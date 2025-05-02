import { Link } from "react-router-dom";
import { FeedbackDialog } from "./dialogs/feedback-dialog";

export function FeedbackSection() {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-2">
      <h2 className="text-sm font-medium mb-2">Send me your Feedback</h2>

      <FeedbackDialog />
      <Link to="/feedbacks" className=" opacity-60 text-xs mt-2 font-medium">
        View Feedbacks
      </Link>
    </div>
  );
}
