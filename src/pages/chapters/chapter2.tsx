import { CarouselImage } from "@/components/carousel-image";
import { ChaptersHeader } from "@/components/chapters-header";
import { CustomCard } from "@/components/custom-card";
import { GridWrapper } from "@/components/grid-wrapper";
import { NextPageButton } from "@/components/next-page-button";
import { SectionContent } from "@/components/section-content";

export function Chapter2() {
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
        <li>To continually increase access to quality education;</li>
        <li>
          To ensure a high completion rate of students admitted in respective
          programs;
        </li>
        <li>
          To improve the adequacy of facilities and infrastructure that is in
          line with specified regulations and requirements;
        </li>
        <li>
          To progressively increase internal research funding and dissemination
          of research findings that positively impact communities;
        </li>
      </ul>

      <NextPageButton
        nextRoute="/chapter-3"
        label="Chapter 3"
        hasPreviousPage={true}
      />
    </>
  );
}
