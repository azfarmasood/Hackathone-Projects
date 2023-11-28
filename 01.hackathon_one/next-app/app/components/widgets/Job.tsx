"use client"
import { getJob } from "@/sanity/sanity.query"
import type { JobType } from "@/types"
import Wrapper from "@/app/components/shared/Tools/Wrapper/Wrapper";
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Job = () => {
 const [job, setJob] = useState<JobType[]>([]);
  const Heading: string = "Learning Experience";
  const notForMobile = typeof window !== "undefined";
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const aniMation = {
    notVisible: {
      opacity: 0,
      x: notForMobile && window.innerWidth >= 768 ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: notForMobile && window.innerWidth >= 768 ? 0 : 0,
      transition: {
        duration: notForMobile && window.innerWidth >= 768 ? 1 : 0.5,
        delay: notForMobile && window.innerWidth >= 768 ? 0.5 : 0.2,
      },
    },
  };

 useEffect(() => {
     const fetchJob = async () => {
     const result = await getJob();
     setJob(result);
   };
   fetchJob();
 }, []);
  return (
    <motion.section
      className="mt-32"
      ref={ref}
      variants={aniMation}
      initial="notVisible"
      animate={inView ? "visible" : "notVisible"}
    >
      <Wrapper>
        <div>
          <h2 className="font-bold md:text-4xl text-3xl md:text-start text-center">
            {Heading}
          </h2>
        </div>
        <div className="flex flex-col md:gap-y-12 md:text-start md:justify-start md:items-start text-center justify-center items-center">
          {job.map((Data) => (
            <div
              key={Data._id}
              className="md:max-w-2xl max-w-full flex mt-10 items-start  md:gap-x-6 gap-x-4 relative before:absolute before:bottom-0 before:top-4.5 before:left-7 before:w-.1 h-calc before:bg-zinc-800"
            >
              <div className="flex">
                <Link
                  href={Data.url}
                  rel="noreferrer noopener"
                  className="rounded-md overflow-clip relative min-w-60 min-h-60"
                >
                  <Image
                    src={Data.logo}
                    alt={`${Data.name} logo`}
                    fill
                    className="object-cover"
                  />
                </Link>
              </div>
              <div className="flex flex-col md:items-start">
                <h3 className="text-xl font-bold">{Data.name}</h3>
                <p>{Data.jobTitle}</p>
                <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                  {Data.startDate.toString()} - {Data.endDate.toString()}
                </small>
                <p className="text-zinc-400 md:text-base text-sm my-4">
                  {Data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default Job