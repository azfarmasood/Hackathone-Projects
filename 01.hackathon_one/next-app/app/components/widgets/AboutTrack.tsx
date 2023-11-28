"use client"
import type { ProfileType } from "@/types";
import { getProfile } from "@/sanity/sanity.query";
import { BiEnvelope } from "react-icons/bi";
import Image from "next/image";
import Wrapper from "@/app/components/shared/Tools/Wrapper/Wrapper";
import AboutData, { Experties } from "@/app/components/shared/Data/AboutData/AboutData";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

const AboutTrack = () => {
  const [proFile, setProfile] = useState<ProfileType[]>([]);
  useEffect(() => {
    const profile = async () => {
      const useprofile = await getProfile();
      setProfile(useprofile);
    };
    profile();
  }, []);
  const notForMobileinview = typeof window !== "undefined"
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const Animation = {
    notVisible: { opacity: 0, y: notForMobileinview && window.innerWidth >= 768 ? -50 : 0 },
    visible: { opacity: 1, y: notForMobileinview && window.innerWidth >= 768 ? 0 : 0, } 
  }

  const aniMation = {
    notVisible: {
      opacity: 0,
      x: notForMobileinview && window.innerWidth >= 768? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: notForMobileinview && window.innerWidth >= 768 ? 0 : 0,
    },
  }
  return (
    <Wrapper>
      <main>
        {proFile &&
          proFile.map((data) => (
            <div
              key={data._id}
              className="grid md:grid-cols-2 grid-cols-1  gap-x-6 lg:mt-28 md:justify-start justify-center md:items-start items-center md:text-start text-center md:mt-24 mt-20"
            >
              <div className="xl:max-w-2xl">
                <div className="lg:order-none ">
                  <motion.h1
                    className="lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:leading-3.2 basis-1/2 max-w-lg"
                    initial="notVisible"
                    animate={"visible"}
                    variants={Animation}
                    transition={{
                      duration:
                        notForMobileinview && window.innerWidth >= 768
                          ? 1
                          : 0.5,
                      delay:
                        notForMobileinview && window.innerWidth >= 768
                          ? 0.5
                          : 0.2,
                    }}
                  >
                    I&apos;m {data.fullName} I live in {data.location}, Where I
                    design this Website
                  </motion.h1>
                  <div className="flex flex-col mt-4 font-bold text-lg">
                    {AboutData.map((Data) => (
                      <div key={Data.slug}>
                        <motion.h4
                          className="font-semibold md:text-3xl text-xl underline underline-offset-8 py-2"
                          initial="notVisible"
                          animate={"visible"}
                          variants={Animation}
                          transition={{
                            duration:
                              notForMobileinview && window.innerWidth >= 768
                                ? 1
                                : 0.5,
                            delay:
                              notForMobileinview && window.innerWidth >= 768
                                ? 0.5
                                : 0.2,
                          }}
                        >
                          {Data.Title}
                        </motion.h4>
                        <motion.p
                          className="font-bold md:text-lg text-sm whitespace-pre-line py-4"
                          initial="notVisible"
                          animate={"visible"}
                          variants={Animation}
                          transition={{
                            duration:
                              notForMobileinview && window.innerWidth >= 768
                                ? 1
                                : 0.5,
                            delay:
                              notForMobileinview && window.innerWidth >= 768
                                ? 0.5
                                : 0.2,
                          }}
                        >
                          {Data.Description}
                        </motion.p>
                        <motion.p
                          className="font-bold md:text-lg text-sm"
                          initial="notVisible"
                          animate={"visible"}
                          variants={Animation}
                          transition={{
                            duration:
                              notForMobileinview && window.innerWidth >= 768
                                ? 1
                                : 0.5,
                            delay:
                              notForMobileinview && window.innerWidth >= 768
                                ? 0.5
                                : 0.2,
                          }}
                        >
                          {Data.SpanDiscription}
                        </motion.p>
                      </div>
                    ))}
                    <motion.div
                      className="mt-10"
                      ref={ref}
                      initial="notVisible"
                      animate={inView ? "visible" : "notVisible"}
                      variants={Animation}
                      transition={{
                        duration:
                          notForMobileinview && window.innerWidth >= 768
                            ? 1
                            : 0.5,
                        delay:
                          notForMobileinview && window.innerWidth >= 768
                            ? 0.5
                            : 0.2,
                      }}
                    >
                      {Experties.map((data) => (
                        <div key={data.slug}>
                          <h4 className="font-semibold md:text-4xl text-3xl underline underline-offset-8 py-2">
                            {data.title}
                          </h4>
                          <p className="font-bold md:text-lg text-sm whitespace-pre-line py-4">
                            {data.discription}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  className="mt-3"
                  ref={ref}
                  initial="notVisible"
                  animate={inView ? "visible" : "notVisible"}
                  variants={Animation}
                  transition={{
                    duration:
                      notForMobileinview && window.innerWidth >= 768 ? 1 : 0.5,
                    delay:
                      notForMobileinview && window.innerWidth >= 768
                        ? 0.5
                        : 0.2,
                  }}
                >
                  <ul className="flex flex-wrap items-center md:text-start text-center md:justify-start justify-center gap-6">
                    {data.skills &&
                      data.skills.map((skill, id) => (
                        <li
                          key={id}
                          className="dark:bg-primary bg-gray-400 md:text-lg text-sm border border-transparent hover:text-purple-500 duration-500 hover:border-zinc-700 rounded-md px-2 py-1"
                        >
                          {skill}
                        </li>
                      ))}
                  </ul>
                </motion.div>
              </div>
              <motion.div
                className="flex  flex-col justify-center items-center md:mt-0 mt-8"
                initial="notVisible"
                animate="visible"
                variants={aniMation}
                transition={{
                  duration:
                    notForMobileinview && window.innerWidth >= 768 ? 1 : 0.5,
                  delay:
                    notForMobileinview && window.innerWidth >= 768 ? 0.5 : 0.2,
                }}
              >
                <Image
                  src={data.profileImage.image}
                  alt={data.profileImage.alt}
                  width={400}
                  height={400}
                  className="rounded-full"
                />
                <div className="mt-4">
                  <Link
                    href={`mailto:${data.email}`}
                    className="flex items-center gap-x-2 hover:text-purple-400 duration-300 md:py-0 py-4"
                  >
                    <BiEnvelope className="text-lg" />
                    {data.email}
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
      </main>
    </Wrapper>
  );
};

export default AboutTrack;
