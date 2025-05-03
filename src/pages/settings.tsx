import { SectionContent } from "@/components/shared/section-content";
import { ThemeDropdown } from "@/components/theme/theme-dropdown";

export default function Settings() {
  return (
    <section className="w-full flex flex-col items-start justify-start space-y-1">
      <SectionContent
        title="Settings"
        description="This page allows you to customize your experience with the application. You can adjust various settings to suit your preferences."
      />

      <div className="w-full p-5">
        <div className="w-full border-b border-zinc-200 dark:border-zinc-800"></div>
      </div>
      <ThemeSettings />
    </section>
  );
}

const ThemeSettings = () => {
  return (
    <div className="w-full p-5 flex justify-between items-center gap-8">
      <div className="flex flex-col">
        <h1 className="text-lg mb-1 font-medium">Theme Settings</h1>
        <p className="opacity-60">Customize your preferred theme.</p>
      </div>
      <div>
        <ThemeDropdown />
      </div>
    </div>
  );
};
