import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { MainButton } from "../componenets/MainButton";
import { motion } from "framer-motion";
import { Slide, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { NavigationLinks } from "../utilities/staticData";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-scroll";
import Headroom from "react-headroom";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [SM_devices] = useMediaQuery("(min-width: 888px)");

  return (
    <Headroom>
      <div className="relative">
        <Header className={SM_devices ? "container-layout" : ""}>
          <Link
            offset={-100}
            href="/"
            to="/"
            className="text-2xl font-bold ms-4"
          >
            Spiritfarer
          </Link>
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
            className="!rounded-2xl !absolute !z-40 pt-10 px-6 bg-white"
            direction="top"
            in={isOpen}
          >
            <NavLinks className="flex-col [&>ul]:flex-col p-6" />
          </Slide>
        )}
      </div>
    </Headroom>
  );
};

const NavLinks = ({ className }: { className?: string }) => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <nav className={`flex items-center gap-6 ${className}`}>
      <ul className="flex items-center gap-4">
        {NavigationLinks.map(({ name, link }) => (
          <li className="relative" key={name}>
            <Link
              spy
              href={link}
              to={link}
              offset={-80}
              className="w-full"
              onSetActive={() => setActiveLink(link)}
              onClick={() => setActiveLink(link)}
            >
              {name}
            </Link>
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
lg:!min-h-full
flex
justify-between
items-center
bg-white
lg:rounded-full
p-2
max-lg:absolute
max-lg:left-1/2
max-lg:-translate-x-1/2
max-lg:w-full
z-50
`;
