import { getProjectsList } from "@/sanity/sanity.query";
import { ProjectType } from "@/types";
import { Metadata } from "next";

type Iprops = {
  params: {
    project: string;
  };
};

  async function generateMetadata({ params }: Iprops): Promise<Metadata> {
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
export { generateMetadata };
