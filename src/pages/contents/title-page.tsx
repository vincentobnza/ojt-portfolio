import { ChaptersHeader } from "@/components/shared/chapters-header";
import { ImageLayout } from "@/components/shared/image-layout";
import { NextPageButton } from "@/components/shared/next-page-button";
import SamplePhoto from "@/assets/sample_photo(41).png";

export default function TitlePage() {
  return (
    <>
      <ChaptersHeader title="Title Page" />
      <ImageLayout src={SamplePhoto} isBordered={false} />
      <NextPageButton
        nextRoute="acknowledgement"
        label="Acknowledgement"
        hasPreviousPage={true}
      />
    </>
  );
}
