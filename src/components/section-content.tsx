import { Container } from "./container";

type SectionContentProps = {
  title: string;
  description?: string;
};

export function SectionContent({ title, description }: SectionContentProps) {
  const id = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  return (
    <Container>
      <div className="flex w-full justify-between gap-5" id={id}>
        <div className="flex items-start gap-8">
          <div className="flex flex-col">
            <p className="text-xs opacity-45 mb-2 font-medium">{title}</p>
            <h1 className="text-2xl font-bold mb-2 dark:bg-gradient-to-r dark:bg-zinc-200 to-zinc-500 dark:bg-clip-text dark:text-transparent">
              {title}
            </h1>
            {description && (
              <p className="text-sm dark:opacity-60 my-2">{description}</p>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
