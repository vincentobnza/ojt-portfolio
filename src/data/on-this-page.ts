// data.ts
export interface PageData {
  path: string;
  list: string[];
}

export const onThisPage: PageData[] = [
  {
    path: "/portfolio",
    list: ["Introduction", "Table of Contents", "Appendices"],
  },
  {
    path: "/portfolio/showcase",
    list: [
      "Web Programming Skills",
      "Other Programming Skills",
      "Design Tools",
      "Microsoft Tools",
      "Programming Certificates",
    ],
  },
  {
    path: "/portfolio/title-page",
    list: ["Title Page"],
  },
  {
    path: "/portfolio/acknowledgement",
    list: ["Acknowledgement"],
  },
  {
    path: "/portfolio/student-trainee-prayer",
    list: ["Student Trainee Prayer"],
  },
  {
    path: "/portfolio/personal-philosophy",
    list: ["Personal Philosophy"],
  },
  {
    path: "/portfolio/chapter-1",
    list: [
      "Importance of the Internship",
      "Objectives of the OJT",
      "Time and Place of the OJT",
    ],
  },
  {
    path: "/portfoliochapter-2",
    list: [
      "Nature of the Agency",
      "Mission and Vision",
      "Goals Statement",
      "History Background of the Agency with Pictures",
      "Organizational Chart",
    ],
  },
  {
    path: "/portfolio/chapter-3",
    list: [
      "Accomplishment Report",
      "Daily Time Record",
      "Internship Progress Report",
      "Internship Analysis Report",
    ],
  },
  {
    path: "/portfolio/chapter-4",
    list: ["Student Intership Evaluation Form"],
  },
];
