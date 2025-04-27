import { Container } from "@/components/container";
import Profile from "../assets/profile.jpg";
import { ImageWrapper } from "@/components/image-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <section className="flex items-center justify-center">
      <Container>
        <div className="flex w-full justify-between  gap-5">
          <div className="flex items-start gap-8">
            <ImageWrapper url={Profile} alt="profile" />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">
                Hello, I am Vincent Obenza 👋
              </h1>

              <p className="text-sm opacity-60 my-2">
                Bachelor of Science in Information Technology
              </p>

              <div className="flex mt-5 gap-3">
                <Button className="text-xs font-bold h-7">
                  <ArrowUpRight />
                  View Resume
                </Button>
                <Button className="text-xs font-bold h-7" variant="outline">
                  <Mail />
                  Email Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
