import { Container } from "./container";

type SectionContentProps = {
  title: string;
  description?: string;
  isLabel?: boolean;
};

export function SectionContent({
  title,
  description,
  isLabel = true,
}: SectionContentProps) {
  const id = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  return (
    <Container>
      <div className="flex w-full justify-between gap-5" id={id}>
        <div className="flex items-start gap-8">
          <div className="flex flex-col">
            {isLabel && <p className="text-xs dark:opacity-60 mb-2">{title}</p>}
            <h1 className="text-xl md:text-2xl font-medium mb-2">{title}</h1>
            {description && (
              <p className="text-sm dark:opacity-60 my-2">{description}</p>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
