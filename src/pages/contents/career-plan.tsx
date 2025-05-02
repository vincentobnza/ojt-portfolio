import { ChaptersHeader } from "@/components/chapters-header";
import { ImageLayout } from "@/components/image-layout";
import { NextPageButton } from "@/components/next-page-button";

export default function CareerPlan() {
  return (
    <>
      <ChaptersHeader title="Career Plan" />
      <ImageLayout src="https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png" />
      <NextPageButton
        nextRoute="chapter-1"
        label="Chapter 1"
        hasPreviousPage={true}
      />
    </>
  );
}
