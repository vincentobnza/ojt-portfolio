import { CarouselImage } from "@/components/carousel-image";
import { ChaptersHeader } from "@/components/shared/chapters-header";
import { CustomCard } from "@/components/shared/custom-card";
import { GridWrapper } from "@/components/shared/grid-wrapper";
import { NextPageButton } from "@/components/shared/next-page-button";
import { SectionContent } from "@/components/shared/section-content";
import { FaHashtag } from "react-icons/fa";
import { AgencyInfoDialog } from "@/components/dialogs/agency-info-dialog";
import { ImageLayout } from "@/components/shared/image-layout";

export default function Chapter2() {
  return (
    <>
      <ChaptersHeader label="Chapter 2" title="Company Profile" />
      <SectionContent title="Nature of the Agency" />
      <CarouselImage />
      <SectionContent title="Mission and Vision" />

      <GridWrapper>
        <CustomCard
          className="dark:bg-gray-800"
          title="Vision"
          description="A premier higher education institution that develops globally competitive, locally responsive, innovative professionals, and life-long learners."
        />
        <CustomCard
          title="Mission"
          description="OMSC is committed to produce intellectual and human capital by developing excellent graduates through outcomes-based instruction, relevant research, responsive technical advisory services, community engagement, and sustainable production."
        />
      </GridWrapper>
      <SectionContent title="Goals Statement" />

      <ul className="px-5">
        {Goals.map((goal, index) => (
          <li
            key={index}
            className="py-1 px-2 mb-2 text-gray-700 dark:text-gray-300 flex items-center gap-3"
          >
            <FaHashtag size={16} className="text-violet-500" />
            {goal}
          </li>
        ))}
      </ul>
      <SectionContent title="History Background of the Agency with Pictures" />
      <ImageLayout src="https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png">
        <AgencyInfoDialog />
      </ImageLayout>
      <SectionContent title="Organizational Chart" />
      <ImageLayout src="https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png" />
      <NextPageButton
        nextRoute="chapter-3"
        label="Chapter 3"
        hasPreviousPage={true}
      />
    </>
  );
}

const Goals = [
  "To continually increase access to quality education;",
  "To ensure a high completion rate of students admitted in respective programs;",
  "To improve the adequacy of facilities and infrastructure that is in line with specified regulations and requirements;",
  "To progressively increase internal research funding and dissemination of research findings that positively impact communities;",
];
