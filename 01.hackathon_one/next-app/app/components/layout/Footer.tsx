"use client"
import Wrapper from "@/app/components/shared/Tools/Wrapper/Wrapper"
import Link from "next/link"
import FooterLinks from "@/app/components/shared/Data/FooterData/FooterLinks"
import { NavLinks } from "@/app/components/shared/Data/FooterData/FooterLinks"
import Logo from "@/app/components/asserts/logo/logo.png"
import Image from "next/image"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"
const Footer = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    const notForMobileView = typeof window !== "undefined";
    const Animation = {
        notVisible: { opacity: 0, y: notForMobileView && window.innerWidth >= 768 ? 50 : 0 },
        visible: {
            opacity: 1,
            y: notForMobileView && window.innerWidth >= 768 ? 0 : 0,
        },
    }
    return (
      <motion.footer
        className="mt-12 border border-t border-b-0 border-zinc-600 border-l-transparent border-r-transparent"
        ref={ref}
        initial="notVisible"
        animate={inView ? "visible" : "notVisible"}
        variants={Animation}
        transition={{
          duration: notForMobileView && window.innerWidth >= 768 ? 1 : 0.5,
          delay: notForMobileView && window.innerWidth >= 768 ? 0.5 : 0.2,
        }}
      >
        <Wrapper>
          <main className="text-white text-center mt-10 md:text-left flex md:flex-row flex-col md:justify-between  md:items-center md:mt-6 md:gap-x-12">
            <div className="flex-1 w-full md:w-40">
              <div>
                <div>
                  <Link
                    href={"/"}
                    className="flex md:items-start md:justify-start items-center justify-center"
                  >
                    <Image src={Logo} alt="logo" className="w-7 h-7" />
                  </Link>
                </div>
                <p className="md:text-lg font-semibold text-sm w-full md:mt-4 mt-3">
                  We can provide a good service and good protection from our
                  travel Agencies
                </p>
                <div className="mt-4">
                  <h1 className="font-bold md:text-xl text-base underline">
                    Follow Us
                  </h1>
                </div>
                <div className="flex mt-3 justify-center md:justify-start gap-x-4">
                  <Link
                    className="hover:scale-105 duration-500"
                    target="___blank"
                    href="https://www.facebook.com/groups/panaverse"
                  >
                    <div className="p-2 rounded-full bg-gradient-to-t from-slate-400 via-gray-600 duration-500 ">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        className="text-white group-hover:text-#00616c duration-2000 h-4 w-4 sm:h-5 sm:w-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                      </svg>
                    </div>
                  </Link>

                  <Link
                    className="hover:scale-105 duration-500 "
                    target="___blank"
                    href="https://www.youtube.com/@panaverse/streams"
                  >
                    <div className="p-2 rounded-full bg-gradient-to-t duration-500  from-slate-400 via-gray-600">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        className="text-white group-hover:text-#00616c duration-2000 h-4 w-4 sm:h-5 sm:w-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                      </svg>
                    </div>
                  </Link>

                  <Link
                    className="hover:scale-105 duration-500"
                    target="___blank"
                    href=" https://github.com/panaverse"
                  >
                    <div className="p-2 rounded-full bg-gradient-to-t  from-slate-400 via-gray-600 duration-500">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 496 512"
                        className="text-white h-4 w-4 group-hover:text-#00616c duration-2000 sm:h-5 sm:w-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                      </svg>
                    </div>
                  </Link>

                  <Link
                    className="hover:scale-105 duration-500"
                    target="___blank"
                    href="https://twitter.com/Panaverse_edu"
                  >
                    <div className="p-2 rounded-full bg-gradient-to-t from-slate-400 via-gray-600 duration-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        className="text-white group-hover:text-#00616c duration-2000 h-4 w-4 sm:h-5 sm:w-5"
                      >
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 md:flex md:justify-center md:mt-0 mt-10">
              <div>
                <h1 className="font-bold md:text-xl text-base underline">
                  Sections
                </h1>
                <ul className="flex flex-col cursor-pointer gap-y-1">
                  {NavLinks.map((Data, href) => (
                    <li
                      className="md:text-lg text-sm font-bold mt-2"
                      key={href}
                    >
                      <span className="text-white font-semibold hover:text-purple-500 duration-500">
                        <FooterLinks href={Data.path} title={Data.title} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-1 md:mt-0 mt-10">
              <h1 className="font-bold md:text-xl text-base underline">
                All Rights Reserved
              </h1>
              <p className="font-semibold md:text-lg text-sm md:mt-4 mt-2">
                Im currently looking for new opportunities, my inbox is always
                open. Whether you have a question or just want to say hi, Ill
                try my best to get back to you!
              </p>
            </div>
          </main>
          <div className="mt-4 flex items-center justify-center">
            <iframe
              id="map"
              className="map md:w-11/12"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.2908031388815!2d67.08686947517533!3d24.88806044415285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ecc0df36f65%3A0xb41c342d8565b2b5!2sBahria%20Auditorium!5e0!3m2!1sen!2sus!4v1699771241619!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </Wrapper>
      </motion.footer>
    );
}
export default Footer