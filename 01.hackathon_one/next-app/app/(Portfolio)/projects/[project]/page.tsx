"use client"
import { getProjectsList } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import Fallbackimage from "@/public/project.png";
import Wrapper from "@/app/components/shared/Tools/Wrapper/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Iprops = {
  params: {
    project: string;
  };
};

const Project = ({ params }: Iprops) => {
const slug = params.project;
  const [dynamicproject, isSetDynamic] = useState<ProjectType>();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -500px 0px",
  });
  useEffect(() => {
    const DynamicProjects = async () => {
      const dynamicProjects = await getProjectsList(slug)
      isSetDynamic(dynamicProjects);
    }
    DynamicProjects();
  }, [slug]);
  const notForMobileView = typeof window !== "undefined";
  const Animation = {
    notVisible: {
      opacity: 0,
      y: notForMobileView && window.innerWidth >= 768 ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: notForMobileView && window.innerWidth >= 768 ? 0 : 0,
      transition: {
        duration: notForMobileView && window.innerWidth >= 768 ? 0.5 : 0.2,
        delay: notForMobileView && window.innerWidth >= 768 ? 0.5 : 0.2,
      },
    },
  };
  const aniMation = {
    notVisible: { opacity: 0, y: notForMobileView && window.innerWidth >= 768 ? -50 : 0 },
    visible: {
      opacity: 1,
      y: notForMobileView && window.innerWidth >= 768 ? 0 : 0,
    }
  }

  return (
    <Wrapper>
      <section>
        {dynamicproject && (
          <div className="max-w-3xl mx-auto md:px-16 px-8">
            <motion.div
              className="flex items-center justify-between mt-4"
              initial="notVisible"
              animate="visible"
              variants={Animation}
            >
              <h1 className="font-bold md:text-5xl text-3xl md:leading-tight mt-4 uppercase">
                {dynamicproject.name}
              </h1>
              <Link
                href={dynamicproject.projectUrl}
                rel="noreferrer noopener"
                className="bg-secondary md:text-lg text-sm flex items-center mt-4 hover:border-purple-700 text-white border border-transparent rounded-md px-4 py-2"
              >
                Explore
              </Link>
            </motion.div>
            <motion.div
              className="flex"
              initial="notVisible"
              animate="visible"
              variants={Animation}
            >
              <Image
                src={dynamicproject.coverImage.image || Fallbackimage}
                alt={dynamicproject.coverImage.alt || dynamicproject.name}
                width={900}
                height={460}
                className="rounded-xl border border-zinc-800 mt-4 flex-shrink-0"
              />
            </motion.div>
            <motion.div
              className="flex flex-col md:text-lg text-sm gap-y-6 mt-8 leading-7 font-bold"
              initial="notVisible"
              animate={inView ? "visible" : "notVisible"}
              variants={aniMation}
              ref={ref}
              transition={{
                duration:
                  notForMobileView && window.innerWidth >= 768 ? 1 : 0.5,
              }}
            >
              <PortableText value={dynamicproject.description} />
            </motion.div>
          </div>
        )}
      </section>
    </Wrapper>
  );
};

export default Project;
