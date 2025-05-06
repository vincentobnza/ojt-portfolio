import AppendixA from "@/assets/appendices/ap1.1.jpg";
import AppendixAP1 from "@/assets/appendices/ap1.2.jpg";
import AppendixB from "@/assets/appendices/ap2.jpg";
import AppendixC from "@/assets/appendices/ap3.png";
import AppendixD from "@/assets/appendices/ap4.1.jpg";
import AppendixDP1 from "@/assets/appendices/ap4.2.png";
import AppendixE from "@/assets/appendices/ap5.png";
import AppendixF from "@/assets/appendices/ap6.jpg";
import AppendixG from "@/assets/appendices/ap7.jpg";
import AppendixH from "@/assets/appendices/ap8.jpg";
import AppendixI from "@/assets/appendices/ap9.png";
import AppendixJ from "@/assets/appendices/ap10.jpg";
import AppendixK from "@/assets/appendices/ap11.jpg";
import AppendixL from "@/assets/appendices/ap12.jpg";
import AppendixM from "@/assets/appendices/ap13.jpg";
import AppendixN from "@/assets/appendices/ap14.png";
import AppendixO from "@/assets/appendices/ap15.png";
import AppendixP from "@/assets/appendices/ap16.png";
import AppendixQ from "@/assets/appendices/ap17.png";
import MOA from "@/assets/appendices/moa.png";
export type Appendix = {
  path: string;
  label: string;
  images: string[];
};

export const appendicesData: Appendix[] = [
  {
    path: "a",
    label: "Evaluation Form (Registrar’s Office)",
    images: [AppendixA, AppendixAP1],
  },
  {
    path: "b",
    label: "Photocopy Registration Form",
    images: [AppendixB],
  },
  {
    path: "c",
    label: "Photocopy Validated ID",
    images: [AppendixC],
  },
  {
    path: "d",
    label: "Parent's Consent",
    images: [AppendixD, AppendixDP1],
  },
  {
    path: "e",
    label: "Medical Certificate",
    images: [AppendixE],
  },
  {
    path: "f",
    label: "Certificate of Good Moral Character",
    images: [AppendixF],
  },
  {
    path: "g",
    label: "Application Letter",
    images: [AppendixG],
  },
  {
    path: "h",
    label: "Endorsement Letter",
    images: [AppendixH],
  },
  {
    path: "i",
    label: "Memorandum of Agreement (MOA) - SCHOOL AGENCY (NO DATA)",
    images: [MOA],
  },
  {
    path: "j",
    label: "Daily Time Record (Time Card)",
    images: [AppendixI],
  },
  {
    path: "k",
    label: "Certificate of Completion",
    images: [AppendixJ],
  },
  {
    path: "l",
    label: "Certificate of Clearance",
    images: [AppendixK],
  },
  {
    path: "m",
    label: "Performance/Proficiency Rating Sheet",
    images: [AppendixL],
  },
  {
    path: "n",
    label: "Pictures During Pre-Service Seminar",
    images: [AppendixM],
  },
  {
    path: "o",
    label: "Pictures During Office Works",
    images: [AppendixN],
  },
  {
    path: "p",
    label: "Code of Ethics for CAST Student Internship",
    images: [AppendixO],
  },
  {
    path: "q",
    label: "Curriculum Vitae",
    images: [AppendixP],
  },
  {
    path: "r",
    label: "On-The-Job Training Portfolio Evaluation Form",
    images: [AppendixQ],
  },
];
