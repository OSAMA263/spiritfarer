import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { MainButton } from "../componenets/MainButton";
import { motion } from "framer-motion";
import { useLocation } from "react-router";
import { Slide, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { NavigationLinks } from "../utilities/staticData";
import { CiMenuBurger } from "react-icons/ci";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [SM_devices] = useMediaQuery("(min-width: 888px)");

  return (
    <div className="sticky top-2 z-[69696969]">
      <Header>
        <a href="#/" className="text-2xl font-bold ms-4">
          Spiritfarer
        </a>
        <button
          aria-label="toggle navbar"
          className={SM_devices ? "hidden" : "block text-2xl"}
          onClick={onToggle}
        >
          <CiMenuBurger />
        </button>
        {SM_devices && <NavLinks />}
      </Header>
      {/* small devices navbar links*/}
      {!SM_devices && (
        <Slide
          className="!rounded-2xl pt-10 px-6 bg-white"
          direction="top"
          in={isOpen}
        >
          <NavLinks className="flex-col [&>ul]:flex-col p-6" />
        </Slide>
      )}
    </div>
  );
};

const NavLinks = ({ className }: { className?: string }) => {
  const [activeLink, setActiveLink] = useState("");
  const { hash } = useLocation();
  // update underline active whne the hash changes
  useEffect(() => {
    setActiveLink(hash);
  }, [hash]);

  return (
    <nav className={`flex items-center gap-6 ${className}`}>
      <ul className="flex items-center gap-4">
        {NavigationLinks.map(({ name, link }) => (
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
  );
};
const Header = tw.header`
lg:container-layout
lg:!min-h-full
flex
justify-between
items-center
bg-white
lg:rounded-full
p-2
max-lg:fixed
max-lg:left-1/2
max-lg:-translate-x-1/2
w-full
z-50
`;
