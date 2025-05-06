import { ChaptersHeader } from "@/components/shared/chapters-header";
import { CustomCard } from "@/components/shared/custom-card";
import { GridWrapper } from "@/components/shared/grid-wrapper";
import { NextPageButton } from "@/components/shared/next-page-button";
import { SectionContent } from "@/components/shared/section-content";
import { FaHashtag } from "react-icons/fa";
import { AgencyInfoDialog } from "@/components/dialogs/agency-info-dialog";
import AgencyImage from "@/assets/agency_image.png";
import OrgChart from "@/assets/org_chart.png";

export default function Chapter2() {
  return (
    <>
      <ChaptersHeader label="Chapter 2" title="Company Profile" />
      <SectionContent title="Nature of the Agency" />
      <img
        src="
      "
        alt=""
      />
      <SectionContent title="Mission and Vision" />

      <GridWrapper>
        <CustomCard
          className="dark:bg-gray-800"
          title="Vision"
          description="A premier higher education institution that develops globally competitive, locally responsive, innovative professionals, and life-long learners."
        />
        <CustomCard
          title="Mission"
          description="OMSC is committed to produce intellectual and human capital by developing excellent graduates through outcomes-based instruction, relevant research, responsive technical advisory services, community engagement, and sustainable production."
        />
      </GridWrapper>
      <SectionContent title="Goals Statement" />
      <ul className="px-5">
        {Goals.map((goal, index) => (
          <li
            key={index}
            className="py-1 px-2 mb-2 text-gray-700 dark:text-gray-300 flex items-center gap-3"
          >
            <FaHashtag size={16} className="text-violet-500" />
            {goal}
          </li>
        ))}
      </ul>
      <SectionContent title="History Background of the Agency with Pictures" />

      <div className="p-5">
        <img src={AgencyImage} alt="agency" className="w-full h-[450px]" />
      </div>

      <AgencyInfoDialog />

      <SectionContent title="Organizational Chart" />
      <div className="p-5">
        <img src={OrgChart} alt="agency" className="w-full h-[250px]" />
      </div>
      <NextPageButton
        nextRoute="chapter-3"
        label="Chapter 3"
        hasPreviousPage={true}
      />
    </>
  );
}

const Goals = [
  "Provide excellent academic program",
  "Good board performance",
  "Enhance student development program",
  "Strengthen faculty competence",
  "Produce quality research",
  "Provide need-based technical advisory services.",
  "Intensify the operation of IGPs to increase its revenue generation",
  "Restructure the organizational system of the institution",
  "Good governance, transparent and efficient management of resource",
  "Strengthen the human resource development.",
];
