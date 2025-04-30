type ImageWrapper = {
  url: string;
  alt: string;
};

export function ImageWrapper({ url, alt }: ImageWrapper) {
  return (
    <div className="flex flex-col items-center justify-center w-30 h-30 p-2 rounded-sm bg-zinc-100 dark:bg-zinc-800 shadow-md">
      <img
        src={url}
        alt={alt}
        className="object-cover w-full h-full rounded-sm shadow-lg"
      />
    </div>
  );
}
