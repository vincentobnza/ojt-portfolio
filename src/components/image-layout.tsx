export function ImageLayout({
  src,
  children,
}: {
  src: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="px-5 space-y-4">
      <img src={src} alt="omsc" className="w-full h-[450px]" />

      {children}
    </div>
  );
}
