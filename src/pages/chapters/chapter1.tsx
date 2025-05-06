import { ChaptersHeader } from "@/components/shared/chapters-header";
import { NextPageButton } from "@/components/shared/next-page-button";
import Paragraph from "@/components/shared/paragraph";
import { SectionContent } from "@/components/shared/section-content";

export default function Chapter1() {
  const time_and_place: string[] = [
    "Agency: OMSC, SJ Campus -  Campus Director’s Office",

    "Address: Rizal Street, San Jose, Occidental Mindoro",

    "Office Hours: 8:00 am – 12:00 pm and 1:00 pm – 5:00 pm",

    "Duration: 486 Hours",

    "Date Started: January 21, 2025",

    "Date Ended: April 06, 2025",
  ];
  return (
    <>
      <ChaptersHeader label="Chapter 1" title="Introduction" />
      <SectionContent title="Importance of the Internship" />

      {importance.map((item, index) => (
        <Paragraph key={index} className="px-5 text-justify">
          {item}
        </Paragraph>
      ))}
      <SectionContent title="Objectives of the OJT" />

      {objectives.map((item, index) => (
        <Paragraph key={index} className="px-5 text-justify">
          {item}
        </Paragraph>
      ))}
      <SectionContent title="Time and Place of the OJT" />

      <div className="p-5">
        <iframe
          title="Occidental Mindoro State College - San Jose Campus Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7794.854161768657!2d121.05773047770994!3d12.354299300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb033a48f77457%3A0xf81605d32df2291e!2sOccidental%20Mindoro%20State%20College%20-%20San%20Jose%20Campus!5e0!3m2!1sen!2sph!4v1746457497691!5m2!1sen!2sph"
          width="100%"
          height="350"
          loading="lazy"
        ></iframe>

        <ul className="mt-5 p-5 border border-zinc-400 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/20">
          {time_and_place.map((item, index) => (
            <li key={index} className="text-sm list-disc ml-4">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <NextPageButton
        nextRoute="chapter-2"
        label="Chapter 2"
        hasPreviousPage={true}
      />
    </>
  );
}

const importance = [
  "An internship is a temporary position that is frequently tied to one's academic field of study or career goals.  It can provide a novice in a career field with hands-on experience in a professional setting.  Internships are typically beneficial to college students and recent grads because many internship programs offer college credit rather than an hourly wage.  Internships can also provide individuals with insight into a specific industry's culture and everyday operations, assist a young professional in earning a degree, or provide an income while a student receives their degree. ",

  "Internships are vital for getting significant experience, especially for individuals new to the industry or still in school, because many job postings favor candidates who have both an educational background and practical experience. They provide a firsthand look at a specific career path, assisting individuals in determining their professional aspirations by exposing them to the everyday activities and obligations of a given role.  If the experience is joyful and fulfilling, it could signal that one is on the appropriate career path.  ",

  "Internships also help candidates increase their resumes by giving job experience and developing skills that improve their qualifications.  Some internships even provide college credit, giving them an excellent opportunity for those who want to graduate with both academic and professional experience.",

  "In general, an internship acts as a basic stage in advancing your career, directing your development into the skilled professional you once wished to be.",
];

const objectives = [
  "Internships are an important part of job development since they allow students and rising professionals to get real-world experience, apply academic knowledge, and explore potential career options. The following are the primary objectives that define the purpose and value of an internship:",

  "The fundamental goal of internships is to develop critical professional skills. Communication, teamwork, time management, critical thinking, and problem-solving are some examples. Internships immerse people in real-world situations that require adaptation and competency, allowing them to hone these skills via hands-on experience.",

  "Internships provide direct knowledge of how businesses and industries work.  Interns obtain vital knowledge about workplace dynamics, industry norms, workflows, and professional expectations, bridging the gap between academic theory and professional practice.",

  "Internships serve as a practical extension of classroom learning. They offer the opportunity to apply theoretical concepts in real-life projects and tasks, helping interns see the relevance of their academic education and deepen their understanding of the field.",

  "Building a professional network is a significant benefit of internships. Interns interact with professionals, mentors, and peers who can provide guidance, references, and potential job opportunities in the future. These connections often prove instrumental in launching and advancing a career.",

  "Internships provide opportunities to learn about different professions, industries, and work situations.  This experience enables interns to determine their interests, strengths, and long-term professional ambitions.  Internships can often help clarify career goals or expose new professional opportunities.",
];
