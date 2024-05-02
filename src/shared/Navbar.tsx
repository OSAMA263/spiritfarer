import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { MainButton } from "../componenets/MainButton";
import { motion } from "framer-motion";
import { useLocation } from "react-router";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const { hash } = useLocation();
  useEffect(() => {
    setActiveLink(hash);
  }, [hash]);
  return (
    <div className="sticky top-2 z-[69696969]">
      <Header>
        <a href="#/" className="text-2xl font-bold ms-4">
          LOGO
        </a>
        
        <nav className="flex items-center gap-6">
          <ul className="flex items-center gap-4">
            {navigateLinks.map(({ name, link }) => (
              <li className="relative" key={name}>
                <a
                  href={link}
                  className="w-full"
                  onClick={() => setActiveLink(link)}
                  onMouseLeave={() => setActiveLink(hash)}
                  onMouseEnter={() => setActiveLink(link)}
                >
                  {name}
                </a>
                {activeLink === link && (
                  <motion.div
                    layoutId="underDesk"
                    className="bg-gray-600 left-0 absolute w-full -bottom-1 h-[2px] rounded-full"
                  ></motion.div>
                )}
              </li>
            ))}
          </ul>
          <MainButton className="bg-black ms-6 text-white" />
        </nav>
      </Header>
    </div>
  );
};

const Header = tw.header`
container-layout
!min-h-full
flex
justify-between
items-center
bg-white
rounded-full
p-2

`;

const navigateLinks: NavigateLinksType[] = [
  {
    name: "What We Do",
    link: "#what-we-do",
  },
  {
    name: "Who Is It For",
    link: "#who-is-it-for",
  },
  {
    name: "Workflow",
    link: "#workflow",
  },
  {
    name: "Pricing",
    link: "#pricing",
  },
  {
    name: "Students",
    link: "#students",
  },
  {
    name: "FAQ",
    link: "#faq",
  },
];

type NavigateLinksType = {
  name: string;
  link: string;
};
