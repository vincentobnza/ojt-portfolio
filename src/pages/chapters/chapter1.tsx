import { ChaptersHeader } from "@/components/chapters-header";
import { NextPageButton } from "@/components/next-page-button";
import { SectionContent } from "@/components/section-content";

export default function Chapter1() {
  return (
    <>
      <ChaptersHeader label="Chapter 1" title="Introduction" />
      <SectionContent
        title="Importance of the Internship"
        description="On-the-Job training are known for giving students the opportunity to apply their 
knowledge in real world environments. At the same time, they will also develop skills which 
will help them perform better at their job. By using On-the-Job training, students are 
provided with experience that will make them stronger. In addition to this, their work ethic 
will increase, and they will be confident in their abilities. It is also allowed students to learn 
about time management, discipline, and effective communication skills. In the business 
world, critical thinking skills are very important. Graduates must be able to make quick 
decisions which are based on logic. On-the -Job training will teach students how to excel in 
many different organizations and industries. When students use internships, they will bring 
benefits to themselves as well as their employers."
      />
      <SectionContent
        title="Objectives of the OJT"
        description="The main objective of this On-The-Job Training is to acquaint the students formally to a 
real-life work place environment. This will help to explore the relationship between the 
knowledge & skills acquired in college with those required in the working situations. This 
enables students to understand and respond better to the market demand and to provide 
foundation to prepare students to work efficiently in their jobs after the training."
      />
      <SectionContent
        title="Time and Place of the OJT"
        description="Time and Place of the OJT On-The-Job Training started in the 21st of February and 
ended in the 26th of April 2022 and was performed on Department of IQA Office. Open 
every Monday 7:00 am to 4:00 pm but Tuesday to Friday open at 8:00 in the morning until 
5:00 in the afternoon.  "
      />

      <NextPageButton
        nextRoute="chapter-2"
        label="Chapter 2"
        hasPreviousPage={true}
      />
    </>
  );
}
