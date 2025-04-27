export function RightSidebar() {
  return (
    <aside className="w-80 bg-white dark:bg-zinc-900 px-10 py-5 relative">
      <div className="h-full">
        <h1 className="text-sm font-medium">On this Page</h1>

        <div className="mt-2">
          <div className="flex flex-col gap-2">
            <ul className="mt-5 text-sm space-y-3">
              <li>Introduction</li>
              <li>Table of Contents</li>
              <li>Chapters</li>
              <li>Appendices</li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
