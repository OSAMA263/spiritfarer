import React from "react";
import tw from "tailwind-styled-components";
import {
  RiProhibitedLine ,
  RiSettings4Line  ,
  RiShieldCheckLine ,
  RiVipDiamondLine,
} from "react-icons/ri";

import { Section } from "../../shared/Section";

export const Hero = () => {
  return (
    <Section id="/" className="pt-0">
      <Container>
        {/* text */}
        <div className="flex text-balance flex-col justify-around">
          <div className="space-y-8">
            <h1 className="text-7xl font-semibold">
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
        <div className="ms-auto w-[500px] h-[600px]">
          <img src="/hero-img.webp" alt="hero-image" />
        </div>
      </Container>
    </Section>
  );
};

const Badge = (props: BadgePropsType) => {
  const { children, bg } = props;
  return (
    <span
      style={{ backgroundColor: bg }}
      className="rounded-2xl px-2 flex gap-4 items-center"
    >
      {children}
    </span>
  );
};

const Container = tw.div`
grid
grid-cols-2
w-full
justify-between
`;

const badges: badgesType[] = [
  {
    Icon: RiSettings4Line  ,
    title: "Tailored Curriculum",
    bg: "#fffbdc",
  },
  {
    Icon: RiProhibitedLine ,
    title: "Industry-Recognized Certification",
    bg: "#e1efe3",
  },
  {
    Icon: RiShieldCheckLine ,
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
