import { ChaptersHeader } from "@/components/shared/chapters-header";
import { ImageLayout } from "@/components/shared/image-layout";
import { NextPageButton } from "@/components/shared/next-page-button";
import { SectionContent } from "@/components/shared/section-content";
import SIE from "@/assets/sie.png";
import SIE2 from "@/assets/sie2.png";

export default function Chapter4() {
  return (
    <>
      <ChaptersHeader
        label="Chapter 4"
        title="Assessment of the Practicum Program"
      />
      <SectionContent title="Student Intership Evaluation Form" />
      <ImageLayout src={SIE} />
      <ImageLayout src={SIE2} />

      <NextPageButton
        nextRoute="appendices/a"
        label="Appendices"
        hasPreviousPage={true}
      />
    </>
  );
}
