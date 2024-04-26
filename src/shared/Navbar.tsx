import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { MainButton } from "../componenets/MainButton";
import { motion } from "framer-motion";
import { useLocation } from "react-router";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const { hash } = useLocation();

  return (
    <div>
      <header className="flex justify-between items-center">
        <a href="hero">hero</a>
        <nav className="flex items-center gap-6">
          <ul className="flex items-center gap-3">
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
                    className="bg-gray-400 left-0 absolute w-full bottom-0 h-1"
                  ></motion.div>
                )}
              </li>
            ))}
          </ul>
          <MainButton />
        </nav>
      </header>
    </div>
  );
};

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
    link: "#fqa",
  },
];

type NavigateLinksType = {
  name: string;
  link: string;
};
