import { ChaptersHeader } from "@/components/chapters-header";
import { ImageLayout } from "@/components/image-layout";
import { NextPageButton } from "@/components/next-page-button";
import SamplePhoto from "@/assets/sample_photo(41).png";

export default function TitlePage() {
  return (
    <>
      <ChaptersHeader title="Title Page" />
      <ImageLayout src={SamplePhoto} isBordered={false} />
      <NextPageButton
        nextRoute="/acknowledgement"
        label="Acknowledgement"
        hasPreviousPage={true}
      />
    </>
  );
}
