import { ChaptersHeader } from "@/components/chapters-header";
import { NextPageButton } from "@/components/next-page-button";
import Paragraph from "@/components/paragraph";

export default function Acknowledgement() {
  return (
    <>
      <ChaptersHeader title="Acknowledgement" />
      <div className="px-5">
        {acknowledgements.map((acknowledgement) => (
          <Paragraph>{acknowledgement}</Paragraph>
        ))}
      </div>

      <NextPageButton
        nextRoute="/student-trainee-prayer"
        label="Student Trainee Prayer"
        hasPreviousPage={true}
      />
    </>
  );
}

const acknowledgements: string[] = [
  "The completion of this undertaking could not have been possible without the participation and assistance of so many people whose names may not all be enumerated. Their contributions are sincerely appreciated and gratefully acknowledged. However, the group would like to express their deep appreciation and indebtedness particularly to the following: ",

  "To our OJT Adviser, Leiza Linda L. Pelayo, for guiding and showing us the courage to work hard and better in our chosen office and giving us an advice to work professionally. ",

  "To the IQA office family thank you for the acceptance, for the support and for giving me permission on performing my On-the-Job-Training at your office. To the employee’s and teachers who trusting, guided, support  me and imparting my skills and knowledge, also for treating me for being a part of your OJT staff to discover new ideas to your office, thank you for believing.",

  "Thanks to my Friends, for helping me and sharing my problems, also when I needed help, and for making me happy in times of difficulty and giving me color in my college life. ",

  "To my Parents, for the understanding, for working hard to support in financially and my study, for guiding me in every decision I’d made and thank you for everlasting love that I’ve felt.  ",

  "The Almighty God, for waking me up every day for all the blessing we received every day and for what we are going to received more, for guidance, strength, patient, wisdom, understanding, and knowledge to accomplish this chapter of my life. ",
];
