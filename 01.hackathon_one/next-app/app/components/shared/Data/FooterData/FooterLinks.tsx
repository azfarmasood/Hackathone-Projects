import Link from "next/link"
import { FC } from "react"

type Iprops = {
    href:string
    title:string
}

const FooterLinks:FC<Iprops> = ({href,title}) => {
    return(
        <Link href={href}>
            {title}
        </Link>
    )
}
export default FooterLinks

interface Links {
    title:string,
    path:string
}

export const NavLinks:Links[] = [
    {
        title: "Home",
        path: "/",
    
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