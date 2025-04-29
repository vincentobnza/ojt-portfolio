import { ChaptersHeader } from "@/components/chapters-header";
import { ImageLayout } from "@/components/image-layout";
import { NextPageButton } from "@/components/next-page-button";
import { SectionContent } from "@/components/section-content";

export default function Chapter4() {
  return (
    <>
      <ChaptersHeader
        label="Chapter 4"
        title="Assessment of the Practicum Program"
      />
      <SectionContent title="Student Intership Evaluation Form" />
      <ImageLayout src="https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png" />

      <NextPageButton
        nextRoute="/appendices"
        label="Appendices"
        hasPreviousPage={true}
      />
    </>
  );
}
