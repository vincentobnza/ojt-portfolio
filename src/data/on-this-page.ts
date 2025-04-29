// data.ts
export interface PageData {
  path: string;
  list: string[];
}

export const onThisPage: PageData[] = [
  {
    path: "/",
    list: ["Introduction", "Table of Contents", "Appendices"],
  },
  {
    path: "/acknowledgement",
    list: ["Acknowledgement"],
  },
  {
    path: "/student-trainee-prayer",
    list: ["Student Trainee Prayer"],
  },
  {
    path: "/personal-philosophy",
    list: ["Personal Philosophy"],
  },
  {
    path: "/chapter-1",
    list: [
      "Importance of the Internship",
      "Objectives of the OJT",
      "Time and Place of the OJT",
    ],
  },
  {
    path: "/chapter-2",
    list: [
      "Nature of the Agency",
      "Mission and Vision",
      "Goals Statement",
      "History Background of the Agency with Pictures",
      "Organizational Chart",
    ],
  },
  {
    path: "/chapter-3",
    list: [
      "Accomplishment Report",
      "Daily Time Record",
      "Internship Progress Report",
      "Internship Analysis Report",
    ],
  },
  {
    path: "/chapter-4",
    list: ["Student Intership Evaluation Form"],
  },
];
