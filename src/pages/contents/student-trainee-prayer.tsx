import { ChaptersHeader } from "@/components/chapters-header";
import { NextPageButton } from "@/components/next-page-button";
import Paragraph from "@/components/paragraph";

export default function StudentTraineePrayer() {
  return (
    <>
      <ChaptersHeader title="Student Trainee Prayer" />

      <div className="px-5">
        {PRAYER.map((prayer) => (
          <Paragraph>{prayer}</Paragraph>
        ))}
      </div>

      <NextPageButton
        nextRoute="personal-philosophy"
        label="Personal Philosophy"
        hasPreviousPage={true}
      />
    </>
  );
}

const PRAYER = [
  "Dear Lord,",

  "Thank You for this new day and for the opportunity to grow and learn through my training.Guide my hands, my thoughts, and my heart as I take on each task today.Grant me the patience to listen, the wisdom to understand,and the strength to overcome any challenges that come my way.",

  "Help me to be respectful, diligent, and committed in all that I do.May I learn not just with my mind, but also with humility and integrity.Let the people I work with be kind and supportive,and may I be a blessing to them in return.",

  "Lord, mold me into someone prepared for the future—responsible, skilled, and grounded-sm in values.I offer You this journey as a student trainee,and I trust that You will lead me every step of the way.",

  "Amen",
];
