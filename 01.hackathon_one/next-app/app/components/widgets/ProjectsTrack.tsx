import Wrapper from "@/app/components/shared/Tools/Wrapper/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import { ProjectType } from "@/types";

const ProjectsTrack = async () => {
  const projects: ProjectType[] = await getProjects();
  return (
    <Wrapper>
      <section className="mt-32">
        <div className="max-w-2xl">
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16 ">
          {projects.map((data) => (
            <div key={data._id}>
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
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default ProjectsTrack;
