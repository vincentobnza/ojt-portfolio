import { ChaptersHeader } from "@/components/chapters-header";
import { NextPageButton } from "@/components/next-page-button";
import Paragraph from "@/components/paragraph";

export default function PersonalPhilosophy() {
  return (
    <>
      <ChaptersHeader title="Personal Philosophy" />
      <div className="px-5">
        <Paragraph>
          My philosophy in life is “change your thoughts and you change your
          world.” thoughts play an important role in molding our behavior.
          Whatever we believed about ourselves is usually made manifest into our
          virtual world. When we feed our minds with negativity, we lose the
          motivation and drive to follow our dreams. When we register to our
          subconscious minds that we are the best, we start believing so and
          this somehow boosts our confidence to do the impossible. most
          motivation speakers will tell you that attitude is what separates
          winners from losers, leaders from followers and lions from sheep.
        </Paragraph>
      </div>

      <NextPageButton
        nextRoute="/career-plan"
        label="Career Plan"
        hasPreviousPage={true}
      />
    </>
  );
}
