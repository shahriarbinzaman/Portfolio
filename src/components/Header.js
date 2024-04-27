import React from "react";
import Link from "next/link";
import { IoLogoGitlab } from "react-icons/io5";
import { LiaLinkedin } from "react-icons/lia";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="fixed z-10 text-base bg-[#ffffff]/80 backdrop-blur-lg items-center py-7 md:py-10 w-full mx-auto">
        <div className="flex justify-between max-w-[1300px] px-6 md:px-12 lg:px-16 mx-auto items-center">
          <div className="hidden lg:flex items-start justify-end lg:justify-start gap-8 md:gap-12 w-1/2 md:w-1/3 order-2 lg:order-1">
            <Link
              href="/#experience"
              className="hover:font-semibold transition-all"
            >
              Experience
            </Link>
            <Link
              href="/#projects"
              className="hover:font-semibold transition-all"
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="hover:font-semibold transition-all"
            >
              Contact
            </Link>
          </div>
          <Link
            href="/"
            className="hover:font-semibold transition-all order-1 lg:order-2"
          >
            Shahriar Bin Zaman
          </Link>
          <div className="flex items-end justify-end gap-4 md:gap-8 w-auto md:w-1/3 order-3">
            <Link
              href="https://www.linkedin.com/in/shahriar-bin-zaman/"
              className="border rounded-full p-1 hover:bg-black hover:text-white hover:border-white transition-all duration-500"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LiaLinkedin size={22} />
            </Link>
            <Link
              href="https://gitlab.com/users/shahriarbin.zaman/projects"
              className="border rounded-full p-1 hover:bg-black hover:text-white hover:border-white transition-all duration-500"
              target="_blank"
              rel="noreferrer noopener"
              style={{ padding: "6px" }}
            >
              <IoLogoGitlab size={18} strokeWidth={6} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
