import { ChaptersHeader } from "@/components/shared/chapters-header";
import { ImageLayout } from "@/components/shared/image-layout";
import { NextPageButton } from "@/components/shared/next-page-button";
import { SectionContent } from "@/components/shared/section-content";
import { accomplishments } from "@/data/accomplishment";
import { Calendar } from "lucide-react";

export default function Chapter3() {
  const time_record = [];
  return (
    <>
      <ChaptersHeader label="Chapter 3" title="Work Experiences" />
      <SectionContent title="Accomplishment Report" />

      <TableReport />
      <SectionContent title="Daily Time Record" />
      <ImageLayout src="https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png" />
      <SectionContent title="Internship Progress Report" />
      <ImageLayout src="https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png" />
      <SectionContent title="Internship Analysis Report " />
      <ImageLayout src="https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png" />

      <NextPageButton
        nextRoute="chapter-4"
        label="Chapter 4"
        hasPreviousPage={true}
      />
    </>
  );
}

const TableReport = () => {
  return (
    <div className="px-5">
      <p className="mb-4 flex md:hidden animate-pulse">
        Scroll horizontally to view more content
      </p>
      <div className="border border-zinc-400 dark:border-zinc-800 bg-white dark:bg-zinc-800/20 overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-zinc-200 dark:bg-zinc-800 text-black dark:text-zinc-200 font-bold border-b border-zinc-500 dark:border-zinc-700">
            <tr>
              <th className="px-4 py-2 whitespace-nowrap">Date</th>
              <th className="px-4 py-2 whitespace-nowrap">Activities</th>
              <th className="px-4 py-2 whitespace-nowrap">Problems Met</th>
              <th className="px-4 py-2 whitespace-nowrap">Documentation</th>
            </tr>
          </thead>
          <tbody>
            {accomplishments.map((item, index) => (
              <tr
                key={index}
                className="border-b border-zinc-300 dark:border-zinc-800"
              >
                <td className="align-top px-4 py-2 w-1/4 font-bold whitespace-nowrap">
                  <div className="flex items-start gap-4 text-zinc-700 dark:text-zinc-300">
                    <Calendar
                      size={16}
                      className="mt-1 text-emerald-600"
                      strokeWidth={3}
                    />
                    {item.date}
                  </div>
                </td>
                <td className="align-top px-4 py-2 w-1/4">
                  <ul>
                    {item.activities.map((activity, i) => (
                      <li
                        key={i}
                        className="text-sm list-disc ml-4 mb-2 text-zinc-700 dark:text-zinc-400"
                      >
                        {activity}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="align-top px-4 py-2 w-1/4">
                  <ul>
                    {item.problems.map((problem, i) => (
                      <li
                        key={i}
                        className="text-sm list-disc ml-4 mb-2 text-zinc-700 dark:text-zinc-400"
                      >
                        {problem}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="align-top p-2 w-1/4">
                  <div className="w-full mt-1">
                    <img
                      src={item.picture}
                      alt="image"
                      className="w-full h-full object-cover shadow-md"
                      loading="eager"
                      fetchPriority="high"
                      style={{ imageRendering: "auto" }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
