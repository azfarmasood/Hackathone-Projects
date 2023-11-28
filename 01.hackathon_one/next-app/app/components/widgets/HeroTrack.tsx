"use client";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import Wrapper from "@/app/components/shared/Tools/Wrapper/Wrapper";
import Link from "next/link";
import HeroSvg from "@/app/components/asserts/logo/HeroSvg";
import { Facebook,Twitter,Linkedin,Github } from "@/app/components/shared/Data/IconsData/IconsData";
import { motion } from "framer-motion"



// eslint-disable-next-line @next/next/no-async-client-component
const Hero = async () => {
  const isClient = typeof window !== "undefined";
  const profile: ProfileType[] = await getProfile();
const Animation = {
  initial: { opacity: 0, x: isClient && window.innerWidth >= 768 ? 50 : 0 },
  animate: {
    opacity: 1,
    x: isClient && window.innerWidth >= 768 ? 1 : 0,
  },
  exit: { opacity: 0, x: isClient && window.innerWidth >= 768 ? 50 : 0 },
};
  const aniMation = {
    notVisible: {
      opacity: 0,
      x: isClient && window.innerWidth >= 768 ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: isClient && window.innerWidth >= 768 ? 0 : 0,
    },
  };
  const ICONS = {
    facebook: <Facebook />,
    twitter: <Twitter />,
    linkedin: <Linkedin />,
    github: <Github />,
  };
  return (
    <main>
      <Wrapper>
        <section>
          <main className="flex md:flex-row flex-col lg:mt-28 mt-20">
            <motion.div
              className="flex-1"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={Animation}
              transition={{
                duration: isClient && window.innerWidth >= 768 ? 0.5 : 0.2,
                delay: isClient && window.innerWidth >= 768 ? 0.5 : 0.2,
              }}
            >
              {profile &&
                profile.map((data) => (
                  <div
                    key={data._id}
                    className="lg:max-w-xl max-w-2xl md:text-start text-center"
                  >
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-5xl md:leading-tight lg:leading-3.7 lg:w-700 min-w-full">
                      {data.headline}
                    </h1>
                    <p className="lg:text-lg md:text-base text-sm mt-4 font-bold leading-relaxed">
                      {data.shortBio}
                    </p>
                    <ul className="flex md:text-start text-center md:justify-start justify-center items-center gap-x-6 mt-6">
                      {Object.entries(data.socialLinks)
                        .sort()
                        .map(([key, value], id) => (
                          <li
                            key={id}
                            className="flex gap-x-3 mb-5 hover:text-purple-400 duration-300"
                          >
                            <Link
                              href={value}
                              className="bg-gradient-to-tr from-zinc-500 via-slate-800 dark:text-white text-white rounded-full md:p-2 p-1.5 md:text-xl text-base"
                            >
                              {
                                ICONS[
                                  key as
                                    | "facebook"
                                    | "twitter"
                                    | "linkedin"
                                    | "github"
                                ]
                              }
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </motion.div>

            <motion.div
              className="flex flex-1 md:flex-row flex-col justify-center"
              animate="visible"
              initial="notVisible"
              variants={aniMation}
              transition={{
                duration: isClient && window.innerWidth >= 768 ? 0.5 : 0.2,
                delay: isClient && window.innerWidth >= 768 ? 0.5 : 0.2,
              }}
            >
              <HeroSvg />
            </motion.div>
          </main>
        </section>
      </Wrapper>
    </main>
  );
};

export default Hero;
