import { getProjectsList } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import Fallbackimage from "@/public/project.png";
import { Metadata } from "next";
import Wrapper from "@/app/components/shared/Tools/Wrapper/Wrapper";
import Image from "next/image";
import Link from "next/link";

type Iprops = {
  params: {
    project: string;
  };
};

export async function generateMetadata({ params }: Iprops): Promise<Metadata> {
  const slug = params.project;
  const project: ProjectType = await getProjectsList(slug);
  return {
    title: `${project.name} | Project`,
    description: project.tagline,
    openGraph: {
      images: project.coverImage?.image || "add-a-fallback-project-image-here",
      title: project.name,
      description: project.tagline,
    },
  };
}

const Project = async ({ params }: Iprops) => {
  const slug = params.project;
  const project: ProjectType = await getProjectsList(slug);
  return (
    <Wrapper>
      <section>
        <div className="max-w-3xl mx-auto md:px-16 px-8">
          <div className="flex items-center justify-between mt-4">
            <h1 className="font-bold md:text-5xl text-3xl md:leading-tight mt-4 uppercase">
              {project.name}
            </h1>
            <Link
              href={project.projectUrl}
              rel="noreferrer noopener"
              className="bg-secondary hover:border-purple-700 text-white border border-transparent rounded-md px-4 py-2"
            >
              Explore
            </Link>
          </div>
          <Image
            src={project.coverImage.image || Fallbackimage}
            alt={project.coverImage.alt || project.name}
            width={900}
            height={460}
            className="rounded-xl border border-zinc-800 mt-4 flex-shrink-0"
          />
          <div className="flex flex-col md:text-lg text-sm gap-y-6 mt-8 leading-7 font-bold">
            <PortableText value={project.description} />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Project;
