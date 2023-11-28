"use client";
import Wrapper from "@/app/components/shared/Tools/Wrapper/Wrapper";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/components/asserts/logo/logo.png";
import HeaderData from "@/app/components/shared/Data/HeaderData/HeaderData";
import { Navlinks } from "@/app/components/shared/Data/HeaderData/HeaderData";
import DarkTheme from "@/app/components/shared/Tools/DarkMode/DarkTheme";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const notForMobile = typeof window !== "undefined"
  const [isClicked, setisClicked] = useState(false);
  const HeaderToggle = () => {
    setisClicked(!isClicked);
  };
  const Animation = {
    notVisible: { opacity: 0, y:notForMobile && window.innerWidth >= 768 ? -50 : 0 },
    visible: {
      opacity: 1,
      y:notForMobile && window.innerWidth >= 768 ? 0 : 0,
      transition: { duration: notForMobile && window.innerWidth >= 768 ? 0.5 : 0.2 },
    },
  };
  return (
    <motion.header className="dark:border-b sticky top-0 dark:border-zinc-800 border-b border-gray-50 
    z-50 backdrop backdrop-blur-md font-normal" initial="notVisible" animate="visible" variants={Animation}>
      <div className="dark:bg-zinc-900">
        <Wrapper>
          <div className="flex items-center justify-between py-5">
            <div>
              <Link href={"/"}>
                <Image src={Logo} alt="logo" className="w-7 h-7" />
              </Link>
            </div>
            <ul className="md:flex hidden items-center list-none justify-center gap-x-8">
              {Navlinks.map((data, href) => (
                <div key={href}>
                  <li className="hover:text-purple-400 duration-300">
                    <HeaderData title={data.title} href={data.path} />
                  </li>
                </div>
              ))}
              <div className="flex mt-1">
                <DarkTheme />
              </div>
            </ul>
            <div className="flex md:hidden mt-1.5 gap-x-3">
              <DarkTheme />
              <button
                className="inline-flex md:hidden items-center justify-center"
                onClick={HeaderToggle}
              >
                {isClicked ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 duration-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 duration-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </Wrapper>
      </div>

      <div className="md:hidden list-none text-center z-50 backdrop-filter backdrop-blur-md">
        {isClicked && (
          <div>
            <div className="space-y-4 py-8">
              {Navlinks.map((data, href) => (
                <div key={href}>
                  <li className="hover:text-purple-400 duration-300 py-2">
                    <HeaderData title={data.title} href={data.path} />
                  </li>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
