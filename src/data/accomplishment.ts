import Picture1 from "@/assets/ar/Picture1.jpg";
import Picture2 from "@/assets/ar/Picture2.jpg";
import Picture3 from "@/assets/ar/Picture3.jpg";
import Picture4 from "@/assets/ar/Picture4.jpg";
import Picture5 from "@/assets/ar/Picture5.jpg";
import Picture6 from "@/assets/ar/Picture6.jpg";
import Picture7 from "@/assets/ar/Picture7.jpg";
import Picture8 from "@/assets/ar/Picture8.jpg";
import Picture9 from "@/assets/ar/Picture9.jpg";
import Picture10 from "@/assets/ar/Picture10.jpg";
import Picture11 from "@/assets/ar/Picture11.jpg";

type Accomplishment = {
  date: string;
  activities: string[];
  problems: string[];
  picture: string;
};

export const accomplishments: Accomplishment[] = [
  {
    date: "January 20 to 24, 2025",
    activities: [
      "Deployment.",
      "Assisted clients to their concerns and queries.",
      "Checked OFW membership status on OWWA database system",
      "Encode outgoing files with accurate information.",
    ],
    problems: [
      "Due to being new in office and have limited access of system on OWWA office I cannot immediately serve the concerns of the clients.",
      "Mistakes in typing or entering wrong details.",
    ],

    picture: Picture1,
  },
  {
    date: "January 27 to 31, 2025",
    activities: [
      "Assisted clients on their concerns and queries.",
      "Encode outgoing files with accurate information.",
      "Photocopy the files of OFW's and OWWA Scholars.",
      "Filing the OFW's requirement copies in different folders and filing it to the filing cabinet.",
    ],
    problems: [
      "Clients have complex concerns that are difficult to resolve quickly.",
      "Some files not have all the needed information.",
      "Accidentally skipping or duplication of pages when photocopying.",
    ],
    picture: Picture2,
  },

  {
    date: "February 3 to 7, 2025",
    activities: [
      "Assisting clients on their concerns and queries.",
      "Assisting on updating client's membership.",
      "Encode outgoing files with accurate information.",
      "Photocopy the files of OFWs and OWWA Scholars.",
      "Helping organize and maintain files, records, and documents of the clients.",
      "Arranging OWWA scholars’ folders in alphabetical order.",
    ],
    problems: [
      "Some files not have all the needed information.",
      "Accidentally skipping or duplication of pages when photocopying.",
      "Bond paper jam in printer.",
    ],
    picture: Picture3,
  },

  {
    date: "February 10 to 14, 2025",
    activities: [
      "Providing basic client services and responding to their inquiries.",
      "Encode outgoing files with accurate information.",
      "Evaluating the submitted documents of applicants.",
    ],
    problems: [
      "Having limit knowledge, not able to answer all clients’ questions confidently.",
      "Some applicants provide wrong documents or requirements.",
    ],
    picture: Picture4,
  },

  {
    date: "February 17 to 21, 2025",
    activities: [
      "Encode outgoing files with accurate information.",
      "Photocopy the files of OFWs and OWWA Scholars.",
      "Filing the OFW's requirement copies in different folders and filing it to the filing cabinet",
    ],
    problems: ["Didn’t encounter any problems while doing the task."],
    picture: Picture5,
  },

  {
    date: "February 24 to 28, 2025",
    activities: [
      "Encode outgoing files with accurate information.",
      "Photocopy the files of OFWs and OWWA Scholars.",
      "Filing the OFW's requirement copies in different folders and filing it to the filing cabinet.",
    ],

    problems: ["Didn’t encounter any problems while doing the task."],
    picture: Picture6,
  },

  {
    date: "March 3 to 7, 2025",
    activities: [
      "Encode outgoing files with accurate information.",
      "Photocopy the files of OFWs and OWWA Scholars.",
      "Filing the OFW's requirement copies in different folders and filing it to the filing cabinet.",
    ],
    problems: ["Didn’t encounter any problems while doing the task."],
    picture: Picture7,
  },

  {
    date: "March 10 to 14, 2025",
    activities: [
      "Providing basic client services and responding to their inquiries.",
      "Encode outgoing files with accurate information.",
      "Assisting the office head in reviewing and assessing applicants' submitted documents.",
    ],
    problems: ["Didn’t encounter any problems while doing the task."],
    picture: Picture8,
  },

  {
    date: "March 17 to 21, 2025",
    activities: [
      "Encode outgoing files with accurate information.",
      "Photocopy the files of OFWs and OWWA Scholars.",
      "Scanning of OFWs documents.",
      "Helped on preparing materials needed for the upcoming Women's Month celebration.",
      "Participate and lead the Zumba dance activity during the Women's Month celebration.",
    ],
    problems: [
      "Some of documents are hard to read and not have all the needed information.",
      "Printer issues like paper jams and run out of ink.",
      "Documents with attached pictures cause the printer to jam, resulting in a slow process.",
    ],
    picture: Picture9,
  },
  {
    date: "March 24 to 28, 2025",
    activities: [
      "Encode outgoing files with accurate information.",
      "Photocopy the files of OFWs and OWWA Scholars.",
      "Scanning of OFWs ",
      "Helping organize and maintain files, records, and documents of the clients.",
    ],
    problems: [
      "Missing information and hard-to-read handwriting of the clients.",
    ],
    picture: Picture10,
  },
  {
    date: "March 31 to April 4, 2025",
    activities: [
      "Encode outgoing files with accurate information.",
      "Photocopy the files of OFWs and OWWA Scholars.",
      "Filing the OFW's requirement copies in different folders and filing it to the filing cabinet.",
      "Helping organize and maintain files, records, and documents of the clients.",
    ],
    problems: [
      "Missing information and hard-to-read handwriting of the clients.",
    ],
    picture: Picture11,
  },
];
