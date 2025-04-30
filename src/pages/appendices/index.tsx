import { useParams } from "react-router-dom";
import { appendicesData, Appendix } from "@/data/appendices";
import { ChaptersHeader } from "@/components/chapters-header";
import { ImageLayout } from "@/components/image-layout";
import { NextPageButton } from "@/components/next-page-button";

export default function Appendices() {
  const { letters } = useParams<{ letters: string }>();
  if (!letters) {
    return null;
  }

  const pageData = appendicesData.find(
    (page: Appendix) => page.path === letters
  );

  if (!pageData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Appendix Not Found</h1>
        <p>The requested appendix does not exist.</p>
      </div>
    );
  }

  return (
    <>
      <ChaptersHeader title={`Appendix ${letters.toUpperCase()}`} />
      <div className="flex flex-col items-center justify-center">
        {pageData.images.map((image, index) => (
          <div key={index} className="mb-6 w-full max-w-4xl">
            <ImageLayout src={image} />
            <div className="p-5">
              <p className="text-lg text-zinc-700 dark:text-zinc-200 text-left">
                Figure {index + 1}:{" "}
                <span className="text-amber-600 dark:text-amber-200 font-bold">
                  {pageData.label}
                </span>
              </p>
            </div>
          </div>
        ))}
        {pageData.images.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600">
              No images available for this appendix.
            </p>
          </div>
        )}

        {(() => {
          const currentIndex = appendicesData.findIndex(
            (appendix) => appendix.path === letters
          );
          const nextAppendix = appendicesData[currentIndex + 1];
          if (nextAppendix) {
            return (
              <NextPageButton
                hasPreviousPage={true}
                nextRoute={`/appendices/${nextAppendix.path}`}
                label={`Appendix ${nextAppendix.path.toUpperCase()}`}
              />
            );
          }
        })()}
      </div>
    </>
  );
}
