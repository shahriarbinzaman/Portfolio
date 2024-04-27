import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import profile from "@/images/profile.png";
import { Amiri } from "next/font/google";
import { projects } from "@/data";

const amiri = Amiri({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const About = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: "y" }, [
    Autoplay({ delay: 1600 }),
  ]);
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1300px] px-6 md:px-12 lg:px-16 mx-auto my-24 pt-24">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center text-center gap-[28px]">
            <div>
              <h1
                className={`text-[36px] sm:text-[72px] md:text-[82px] leading-none pb-20 md:pb-24 ${amiri.className}`}
                style={{ fontWeight: "normal" }}
              >
                Hi I'm Shah,
                <div className="flex justify-center items-end">
                  <div className="text-secondary text-left">
                    <div className="header-embla">
                      <div className="header-embla__viewport" ref={emblaRef}>
                        <div className="header-embla__container">
                          {["Software Developer", "Data Scientist"].map(
                            (item, index) => (
                              <div key={`why-${index}`}>{item}</div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-0">
              <div className="flex flex-col justify-center gap-16 md:gap-20 text-center lg:text-left lg:flex-1">
                <div>
                  <h2 className="uppercase text-xs text-black/50 mt-3 leading-5 tracking-wide pb-5 md:pb-8">
                    Biography
                  </h2>
                  <p className="text-[15px] md:text-[16px]">
                    A Software Developer with a strong
                    programming foundation and experience in Data Science and
                    analytics, eager to drive innovation in a dynamic team
                    environments.
                  </p>
                </div>
                <div>
                  <h2 className="uppercase text-xs text-black/50 mt-3 leading-5 tracking-wide pb-5 md:pb-8">
                    Expertise
                  </h2>
                  <p className="text-[15px] md:text-[16px]">
                    Software Development
                    <br />
                    Data Science
                  </p>
                </div>
              </div>
              <Image
                src={profile}
                className="md:ml-4 lg:ml-8 h-[32rem] md:h-[42rem] object-contain my-12 lg:my-0 lg:max-w-[600px] lg:flex-1"
                alt="shahriar"
              />
              <div className="flex flex-col justify-center gap-12 md:gap-16 text-center lg:text-right lg:flex-1 max-w-auto lg:max-w-[215px]">
                <div>
                  <h2 className="uppercase text-xs text-black/50 mt-3 leading-5 tracking-wide pb-5 md:pb-8">
                    Education
                  </h2>
                  <p className="text-[15px] md:text-[16px]">
                    BSc in Computer Science , Minor in Data Science with Science
                    Coop Designation
                  </p>
                </div>
                <div>
                  <h2 className="uppercase text-xs text-black/50 mt-3 leading-5 tracking-wide pb-5 md:pb-8">
                    Years of Experience
                  </h2>
                  <p className={`text-[42px] md:text-7xl ${amiri.className}`}>
                    2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { About };
