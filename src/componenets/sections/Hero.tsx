import React from "react";
import tw from "tailwind-styled-components";
import {
  RiProhibitedLine,
  RiSettings4Line,
  RiShieldCheckLine,
  RiVipDiamondLine,
} from "react-icons/ri";
import { Section } from "../../shared/Section";
import { RevealElement } from "../../utilities/RevealElement";

export const Hero = () => {
  return (
    <Section id="/" className="max-lg:pt-20 pt-4">
      <RevealElement>
        <Container>
          {/* text */}
          <div className="flex text-balance gap-10 flex-col justify-around">
            <div className="space-y-8">
              <h1 className="md:text-7xl text-6xl max-md:font-semibold">
                Facilitation & Design sprint bootcamps
              </h1>
              <p className="text-gray-500">
                Transform your ideas into reality in just 5 days (and HAVE FUN
                doing it)
              </p>
            </div>
            {/* badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map(({ Icon, title, bg }) => (
                <Badge bg={bg} key={title}>
                  <Icon />
                  {title}
                </Badge>
              ))}
            </div>
          </div>
          {/* right image */}
          <div className="ms-auto max-lg:w-full max-lg:h-[600px]">
            <img
              src="./hero-img.webp"
              className="w-full h-full bg-top"
              alt="hero-image"
            />
          </div>
        </Container>
      </RevealElement>
    </Section>
  );
};

const Badge = (props: BadgePropsType) => {
  const { children, bg } = props;
  return (
    <span
      style={{ backgroundColor: bg }}
      className="rounded-2xl px-2 flex gap-4 items-center max-sm:text-sm"
    >
      {children}
    </span>
  );
};

const Container = tw.div`
lg:grid
lg:grid-cols-2
space-y-10
w-full
justify-between
`;

const badges: badgesType[] = [
  {
    Icon: RiSettings4Line,
    title: "Tailored Curriculum",
    bg: "#fffbdc",
  },
  {
    Icon: RiProhibitedLine,
    title: "Industry-Recognized Certification",
    bg: "#e1efe3",
  },
  {
    Icon: RiShieldCheckLine,
    title: "Practical, Actionable Learning",
    bg: "#efe1ff",
  },
  {
    Icon: RiVipDiamondLine,
    title: "Expert Instructors with Proven Expertise",
    bg: "#dae4fb",
  },
];

type badgesType = {
  Icon: React.ComponentType;
  title: string;
  bg: string;
};

type BadgePropsType = {
  children: React.ReactNode;
  bg: string;
};
