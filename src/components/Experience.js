import React from "react";
import { experience } from "@/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Amiri } from "next/font/google";
import { FaRegCircleDot } from "react-icons/fa6";
import Reveal from "./Reveal";

const amiri = Amiri({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full max-w-[1300px] px-6 md:px-12 lg:px-16 mx-auto my-8"
    >
      <h2
        className={`text-[42px] md:text-[62px] leading-none ${amiri.className} my-12 md:my-16 text-center`}
      >
        Experience
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {experience.map((item, index) => (
          <Reveal direction="bottom" key={`experience-${index}`}>
            <AccordionItem value={`item-${index + 1}`}>
              <AccordionTrigger className="text-left hover:no-underline font-normal">
                <div>
                  <h2
                    className={`text-3xl md:text-4xl mt-8 md:mt-12 mb-4 md:mb-6 ${amiri.className}`}
                  >
                    {item.title}
                  </h2>
                  <h3 className="text-lg md:text-xl mb-6 md:mb-8">
                    {item.company}
                  </h3>
                  <p className="text-sm text-black/50 mt-3 leading-5 tracking-wide pb-8">
                    {item.duration}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="pb-12">
                  {item.details.map((detail, detailIndex) => (
                    <li
                      className="flex gap-5 py-1.5 text-[16px] leading-7"
                      key={`${index}-${detailIndex}`}
                    >
                      <div>
                        <FaRegCircleDot
                          className="text-black/50 mt-[7.5px]"
                          size={14}
                        />
                      </div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Reveal>
        ))}
      </Accordion>
    </section>
  );
};

export { Experience };
