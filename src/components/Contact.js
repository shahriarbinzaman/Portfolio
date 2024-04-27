import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import { Amiri } from "next/font/google";

const amiri = Amiri({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Contact = () => {
  return (
    <footer id="contact" className="bg-[#333333] text-white relative overflow-hidden mt-36 md:mt-56">
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="w-full max-w-[1300px] px-6 md:px-12 lg:px-16 mx-auto my-8 pt-12">
        <div
          style={{
            background: `url('stars.svg')`,
            backgroundSize: "800px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-[#333333]/50 flex flex-col items-center justify-center">
            <h2
              className={`text-[42px] md:text-[62px] leading-tight ${amiri.className} mt-20 md:mt-24 mb-12 md:mb-16 text-center`}
            >
              Have a vision for an <br className="hidden md:block" /> amazing
              project?
            </h2>
            <Link
              href="mailto:shahriarbin.zaman@gmail.com"
              className="bg-white text-black px-8 md:px-12 py-5 md:py-7 rounded-full mb-36 text-[16px] lg:text-[18px]"
            >
              Let's chat
            </Link>
          </div>
        </div>
        <hr />
        <div className="py-10 flex flex-col-reverse md:flex-row justify-between items-center gap-6 label">
          <p>&copy; 2024 Shahriar Bin Zaman.</p>
          <div className="flex gap-2 sm:gap-6 md:gap-8">
            <Link
              href="https://linkedin.com/in/shahriar-bin-zaman/"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn&nbsp;
              <MdArrowOutward />
            </Link>
            <Link
              href="https://gitlab.com/users/shahriarbin.zaman/projects"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitLab&nbsp;
              <MdArrowOutward />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Contact };
