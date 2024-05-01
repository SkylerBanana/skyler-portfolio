"use client";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";
import { useState } from "react";

export default function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const links = [
    { text: "About", url: "#" },
    { text: "Work", url: "#" },
    { text: "Contact", url: "#" },
  ];

  function Toggledropdown() {
    setIsDropdownOpen((prevState) => !prevState);
  }

  return (
    <>
      <div
        id="nav_container"
        className="flex items-center w-full mt-8 md:sticky top-0 justify-between z-50 px-4 "
      >
        <div className="flex items-center justify-start gap-12">
          <div className="flex items-center gap-4">
            <FaAlignJustify
              id="hamburger"
              onClick={Toggledropdown}
              className={`${
                isDropdownOpen ? "rotate-90" : ""
              }   w-7 h-auto md:hidden `}
            />
            <a
              href="https://github.com/SkylerBanana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-2">
                <FaGithub className="w-10 h-auto" />
                <span className="font-bold select-none">Skyler Jones</span>
              </div>
            </a>
          </div>

          <nav className="hidden md:flex gap-12 text-[#A1A8D9]  ">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className=" hover:text-white transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>

        <a
          href="https://www.linkedin.com/in/skyler-jones-448a592a4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-8 h-auto fill-[#a1a8d9]" />
        </a>
      </div>

      <div className="flex  justify-center">
        <nav
          id="mobile_Dropdown"
          className={`${
            isDropdownOpen ? "flex" : "hidden"
          }  flex-col gap-2 text-[#A1A8D9] justify-start mt-4  bg-[#373c65] rounded-lg fixed width `}
        >
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className=" hover:text-white transition-colors duration-300 h-20 w-auto hover:bg-violet-600 rounded-lg  flex items-center "
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
