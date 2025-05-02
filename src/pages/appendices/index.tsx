import { useParams } from "react-router-dom";
import { appendicesData, Appendix } from "@/data/appendices";
import { ChaptersHeader } from "@/components/shared/chapters-header";
import { ImageLayout } from "@/components/shared/image-layout";
import { NextPageButton } from "@/components/shared/next-page-button";
import { DotPatternBg } from "@/components/shared/dot-pattern-bg";

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
        <h1 className="text-3xl font-medium mb-4">Appendix Not Found</h1>
        <p>The requested appendix does not exist.</p>
      </div>
    );
  }

  return (
    <>
      <ChaptersHeader title={`Appendix ${letters.toUpperCase()}`} />
      <div className="flex flex-col items-center justify-center">
        {pageData.images.map((image, index) => (
          <div key={index} className="mb-6 w-full">
            <div className="w-full flex">
              <ImageLayout src={image} className="w-full basis-3/4" />
              <div className="basis-1/3 self-start flex flex-col gap-4 px-4  py-2 bg-white dark:bg-zinc-800/40 rounded border border-zinc-300 dark:border-zinc-700 relative">
                <DotPatternBg />
                <h3 className="text-sm text-zinc-700 dark:text-zinc-200 text-left opacity-70">
                  Figure {index + 1}
                </h3>

                <p className="font-medium">{pageData.label}</p>
              </div>
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
                nextRoute={`appendices/${nextAppendix.path}`}
                label={`Appendix ${nextAppendix.path.toUpperCase()}`}
              />
            );
          }
        })()}
      </div>
    </>
  );
}
