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
      "Mission, Vision, Goal Statement",
      "History of the Agency",
      "Organizational Chart",
    ],
  },
];
