import React, { useCallback } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { projects } from "@/data";
import { IoSparklesSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { Amiri } from "next/font/google";

const amiri = Amiri({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Projects = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    <section
      id="projects"
      className="w-full max-w-[1300px] px-6 md:px-12 lg:px-16 mx-auto"
    >
      <h2
        className={`text-[42px] md:text-[62px] leading-none ${amiri.className} mt-20 md:mt-24 mb-12 md:mb-16 text-center`}
      >
        Projects
      </h2>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {projects.map((item, index) => (
              <Link
                href={item.link}
                target="_blank"
                rel="noreferrer noopener"
                key={`project-${index}`}
                className="embla__slide border border-[#e5e5e8] bg-[#fbfbfb] rounded-2xl p-6 md:p-12 flex flex-col justify-start gap-24 my-10"
              >
                <div className="flex flex-col-reverse lg:flex-row justify-between gap-12 lg:gap-8">
                  <div className="flex flex-col justify-between gap-5 max-w-full lg:max-w-[480px]">
                    <div className="flex flex-col items-start justify-between gap-5">
                      <div className="border rounded-full border-black/25 flex items-center justify-center gap-2 py-1 px-4 text-[#53535c] text-sm">
                        <IoSparklesSharp className="rotate-90" />
                        <p className="text-[12px] md:text-[14px]">
                          {item.category}
                        </p>
                      </div>
                      <h3
                        className={`text-3xl md:text-4xl text-[#1c1c1c] font-medium ${amiri.className}`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-base text-[#53535c] leading-7">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      {item.technologies.map((tech, techIndex) => (
                        <Image
                          key={`${index}-${techIndex}`}
                          src={tech}
                          className="w-8 h-8 object-contain"
                          alt={tech}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="h-auto md:h-[460px] max-h-[399px] flex justify-center">
                    <Image
                      src={item.image}
                      className="w-auto h-[100%] object-contain object-center lg:object-right rounded-2xl"
                      alt={item.title}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="embla__controls">
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Projects };
