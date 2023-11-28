import Link from "next/link"
import { FC } from "react"

interface Iprop {
    title: string,
    href: string,
}

const HeaderData:FC<Iprop> = ({title,href}) => {
  return (
    <div>
        <Link href={href}>
            {title}
        </Link>
    </div>
  )
}

export default HeaderData

type NavLinks = {
    title: string,
    path: string
}

export const Navlinks:NavLinks[] = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Projects",
        path: "/projects",
    },
]