import { ChaptersHeader } from "@/components/chapters-header";
import { ImageLayout } from "@/components/image-layout";
import { NextPageButton } from "@/components/next-page-button";
import { SectionContent } from "@/components/section-content";

export default function Chapter3() {
  return (
    <>
      <ChaptersHeader label="Chapter 3" title="Work Experiences" />
      <SectionContent title="Accomplishment Report" />
      <ImageLayout src="https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png" />
      <SectionContent title="Daily Time Record" />
      <ImageLayout src="https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png" />
      <SectionContent title="Internship Progress Report" />
      <ImageLayout src="https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png" />
      <SectionContent title="Internship Analysis Report " />
      <ImageLayout src="https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png" />

      <NextPageButton
        nextRoute="chapter-4"
        label="Chapter 4"
        hasPreviousPage={true}
      />
    </>
  );
}
