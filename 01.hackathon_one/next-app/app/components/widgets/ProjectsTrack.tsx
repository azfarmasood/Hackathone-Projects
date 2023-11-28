"use client"
import Wrapper from "@/app/components/shared/Tools/Wrapper/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import { ProjectType } from "@/types";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProjectsTrack = () => {
  const [isProfile, setProfile] = useState<ProjectType[]>([]);
  useEffect(() => {
    const setProjects = async () => {
      const profile = await getProjects();
      setProfile(profile)
    }
    setProjects();
  }, [])
  const notForMobileinview = typeof window !== "undefined";
  const Animation = {
    notVisible: {
      opacity: 0,
      y: notForMobileinview && window.innerWidth >= 768 ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: notForMobileinview && window.innerWidth >= 768 ? 0 : 0,
      transition: {
        duration: notForMobileinview && window.innerWidth >= 768 ? 1 : 0.5,
        delay: notForMobileinview && window.innerWidth >= 768 ? 0.5 : 0.2,
      },
    },
  };

const aniMation = {
  notVisible: {
    opacity: 0,
    y: notForMobileinview && window.innerWidth >= 768 ? -50 : 0,
  },

  visible: {
    opacity: 1,
    y: notForMobileinview && window.innerWidth >= 768 ? 0 : 0,
  },
};
  return (
    <Wrapper>
      <section className="mt-32">
        <motion.div
          className="max-w-2xl"
          initial="notVisible"
          animate="visible"
          variants={Animation}
        >
          <h1 className="md:text-5xl font-bold text-3xl md:tracking-tight md:leading-3.7 leading-tight">
            Features Projects I build over the few days
          </h1>
          <p className="md:text-lg text-sm leading-relaxed mt-4">
            I&apos;ve worked on tons of little projects over the few days but
            these are the ones that I&apos;m most proud of. Many of them are
            open-source, so if you see something that piques your interest,
            check out the code and contribute if you have ideas for how it can
            be improved.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16 ">
          {isProfile.map((data, animate) => (
            <motion.div
              key={data._id}
              initial="notVisible"
              animate="visible"
              variants={aniMation}
              transition={{
                duration:
                  notForMobileinview && window.innerWidth >= 768 ? 1 : 0.5,
                delay: notForMobileinview && window.innerWidth >= 768 ? animate * 0.8 : 0
              }}
            >
              <Link
                href={`/projects/${data.slug}`}
                className="flex items-center gap-x-4 dark:bg-secondary bg-gray-600 border border-transparent duration-500 hover:border-purple-500 p-4 rounded-lg ease-in-out"
              >
                <Image
                  src={data.logo}
                  alt={data.name}
                  className="dark:bg-zinc-800 bg-gray-600 rounded-md p-2"
                  width={60}
                  height={60}
                />
                <div>
                  <h2 className="font-semibold mb-1">{data.name}</h2>
                  <div className="text-sm text-zinc-400">{data.tagline}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default ProjectsTrack;
