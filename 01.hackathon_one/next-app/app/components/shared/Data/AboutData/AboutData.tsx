interface TypeData {
    Title: string,
    Description: string,
    SpanDiscription:string,
    slug: number,
}

const AboutData: TypeData[] = [
    {
        slug: 1,
        Title: "Introduction:",
        Description: "Passionate about creating seamless and delightful user experiences, I am a skilled TypeScript Next.js developer with a strong foundation in web development.\n",
        SpanDiscription: "My journey in the world of programming began [mention how and when you started], and since then, I have been on a continuous quest to enhance my skills and stay abreast of the latest technologies.",
    },
    {
        slug: 2,
        Title: "Professional Background:",
        Description: "Early in my career, I gained valuable experience working on various projects that involved mention technologies or frameworks I worked with it.\n",
        SpanDiscription: "My journey in the world of programming began [mention how and when you started], and since then, I have been on a continuous quest to enhance my skills and stay abreast of the latest technologies.",
    },
]

export default AboutData

export const Experties: { slug: number; title: string; discription: string }[] = [
    {
        slug: 1,
        title: "Specialities:",
        discription: "I've spent few days working on my skills. In no particular order, here are a few of them."
    }
]