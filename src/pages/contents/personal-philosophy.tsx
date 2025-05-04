import { ChaptersHeader } from "@/components/shared/chapters-header";
import { NextPageButton } from "@/components/shared/next-page-button";
import Paragraph from "@/components/shared/paragraph";

export default function PersonalPhilosophy() {
  return (
    <>
      <ChaptersHeader title="Personal Philosophy" />

      <Banner />
      <div className="px-5">
        {philosophy.map((line, index) => (
          <Paragraph key={index}>{line}</Paragraph>
        ))}
      </div>

      <NextPageButton
        nextRoute="career-plan"
        label="Career Plan"
        hasPreviousPage={true}
      />
    </>
  );
}

const Banner = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col justify-center items-start  p-5 w-full S bg-white dark:bg-amber-950/20 rounded-lg border dark:border-amber-400/20">
        <h1 className="text-xl text-amber-200">
          &rdquo; Embracing obstacles as opportunities for growth &rdquo;
        </h1>
      </div>
    </div>
  );
};

const philosophy: string[] = [
  "I believe that the greatest growth often begins in the most difficult moments. As a student and as a person, I choose to face challenges that feel bigger than me, knowing that they are shaping me into who I am meant to become.",

  "From the very beginning of life, we've all learned through trial and error crawling, stumbling, walking, and eventually running. Every fall taught us balance. Every mistake became a stepping stone. It’s a reminder that failure is not the end it’s a necessary part of learning.",

  "I’ve made my fair share of mistakes, but I’ve learned to value them. They’ve taught me patience, persistence, and problem-solving. They’ve helped me grow not just in skill, but in mindset. I’ve learned to observe those ahead of me, to stay open to new approaches, and to step out of my comfort zone, even when it's uncomfortable.",

  "To me, failure isn’t failure at all its feedback. It shows me that something can be done differently. Each setback pushes me to reflect, revise, and return stronger. The process of falling and rising again builds resilience, and with each attempt, I grow wiser and more prepared.",

  "I remind myself that growth is not a race. It’s okay to go slow, as long as I keep moving forward. Every small step, every new experience, adds up to something greater. I believe that real success lies not in perfection, but in progress measured by how much I learn, how far I’ve come, and how willing I am to keep trying.",

  "In the end, I choose to see life as an adventure of continuous learning. Challenges don’t block my path they are the path.",
];
