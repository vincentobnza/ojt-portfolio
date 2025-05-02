import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowUpRight } from "lucide-react";
import Paragraph from "../shared/paragraph";

export function AgencyInfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <ArrowUpRight />
          View Agency Info
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-screen-md max-h-[90vh] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>About the College</DialogTitle>
          <DialogDescription>
            {paragraphs.map((paragraph) => (
              <Paragraph>{paragraph}</Paragraph>
            ))}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

const paragraphs: string[] = [
  "Occidental Mindoro State College in the only state college in the province of Occidental Mindoro located in the heart of them municipality of San Jose, which is a stone’s throw away from the Municipal Hall and the St. Joseph, The Work Cathedral. The town on the other hand, is located 130 kilometers southeast of the Provincial Capital and in approximately 230 nautical miles from the National Capital Region.",

  "The College had its humble beginning as a Barrio High School in 1966 patterned after Dr. Pedro Orata’s Barangay High School, an idea conceived by San Jose Pilot Elementary School PTA President and also town Mayor Juan G. Santos, Sr. and worked out by the Schools Division Superintendent, Mr. Sofronio Fadre and East District Supervisor, Mr. Mariano Ramirez.Mayor Tirso Abeleda in 1967approved Resolution No. 23 adopting and constituting the self-supporting public secondary school as the San Jose Municipal High School",

  "The late Congressman Pedro C. Medalla, Sr. authored R.A. No. 6568, which elevated San Jose Municipal High School into San Jose National High School (SJNHS). Mr. Bernabe Macaraig was appointed Principal. Enrollment grew significantly during that time, reaching up to 3,000.",

  "On June 24, 1986, by the virtue of Batas Pambansa Blg. 531, sponsored by the late Congressman Pedro T. Mendiola, Sr. SJNHS was elevated into Occidental Mindoro State College with Mr. Bernabe Macaraig as its first Superintendent.",

  "On April 1, 1886, Ministry of Educational Culture and Sports (MECS) Minister, Lourdes R. Quisumbing appointed Mrs. Virginia A. Sicat, then Assistant Principal, as Officer-In-Charge of OMSC. On the same year, Dr. Ofelia A. Rebong was installed as the first President of the College. It was during her seven years’ term as College President that staff development was given due consideration.",

  "In the school year 1991-1992, the College absorbed the Occidental Mindoro Community College, Mamburao as a satellite campus offering baccalaureate and non-degree courses. It had likewise acquired the 98.8725-hectare lot from the Organization for the International Scientific and Cultural Advancement Council (OISCA) through the Provincial Board and Provincial Development Council. The satellite campus became known as the OMSC-Mamburao Campus.",

  "After the retirement of Dr. Rebong, the then Vice President of Academic Affairs and Dean of the Graduate School, Dr. Sofronio S. Sanqui, was appointed College President on December 19, 1994 and sworn into office on December 29, of the same year by DECS Secretary Ricardo T. Gloria.",

  "Focusing on human resource development and student's welfare, Dr. Sanqui's management priorities brought about significant shifts in the social, cultural and economis structure of the College.",
  "OMSC has grown tremendously and has opened up four (4) service areas namely: the Damayan Center constructed in a 2-hectare land donated by Mr. Romeo Lumbo in San Isidro, San Jose, Occidental Mindoro; OMSC-Mamburao; the Experimental Forestry - 28.4974 – hectare land adjacent to the Damayan Center; the Caminawit Extension Program in Caminawit, San Jose, Occidental Mindoro and the Agro-Forestry Center which is now fully developed located at a 8.7 hectare land at Brgy. Labangan, San Jose, Occidental Mindoro.",

  "In the year 200, R.A. 8760, otherwise known as the General Appropriations Act brought about significant reforms in the educational system especially to OMSC. It became the host CHED supervised institutions in the province, namely; the Occidental Mindoro Polytechnic College (OMPC) in Murtha San Jose, Occidental Mindoro and the Pedro T. Mendiola, Sr. Memorial Technological and Polytechnic College in Brgy. Bagong Sikat, San Jose, Occidental Mindoro. With the integration, OMPC became known as OMSC – OMPC Campus, while the PTMSMTPC was renamed to OMSC – PTMSMTPC and now situated at the Labangan Campus. ",

  "The metamorphoses of the institution from a Barangay High School into a host SUC in the province, poses a continuing challenge for its officials and the academic community as it serves the youths of Occidental Mindoro and its neigh boring provinces. ",

  "After 15 years of sterling and dedicated service to the institution. Dr. Sofronio S. Sanqui, the 2nd College President retired. He was replaced by Dr. Arnold N. Venturina, when the Board of Trustees of the College elected the latter as the 3rd College President on September 11, 2009. With the change of administration several significant changes on the programs and policies of the college were also affected. ",

  "Three months to Dr. Venturina’s presidency, her Excellency Gloria MacapagalArroyo signed R.A. 9747, otherwise known as an “act renaming Occidental Mindoro National College as the Occidental Mindoro State College”, on November 10, 2009, whose principal sponsor was Congresswoman and deputy Speaker, Hon. Amelita C. Villarosa. ",

  "On May 1, 210, the College was conferred the “San Jose Builders Award” (Education Sector) by the San Jose Centennial Commission. This was in recognition of its significant contributions to the progress and development of the town of San Jose. ",

  "Guided by its Vision, Mission, Goals and Objectives and by its four pillars of service – Institution, Research Development, Extension and Production, the College continues its pursuit for quality tertiary education in the province and is committed to serve the youth as an institution of higher learning. ",
];
