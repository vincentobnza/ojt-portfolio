import { Container } from "./container";

export function SectionContent({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <Container>
      <div className="flex w-full justify-between gap-5">
        <div className="flex items-start gap-8">
          <div className="flex flex-col">
            <p className="text-xs opacity-45 mb-2 font-semibold">{label}</p>
            <h1 className="text-xl font-bold mb-2">{title}</h1>
            <p className="text-sm dark:opacity-70 my-2">{description}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
