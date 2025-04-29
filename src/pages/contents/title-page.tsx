import { ChaptersHeader } from "@/components/chapters-header";
import { ImageLayout } from "@/components/image-layout";
import { NextPageButton } from "@/components/next-page-button";

export default function TitlePage() {
  return (
    <>
      <ChaptersHeader title="Title Page" />
      <ImageLayout src="https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png" />
      <NextPageButton
        nextRoute="/acknowledgement"
        label="Acknowledgement"
        hasPreviousPage={true}
      />
    </>
  );
}
