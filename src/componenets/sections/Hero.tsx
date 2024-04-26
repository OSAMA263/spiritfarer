import React from "react";
import tw from "tailwind-styled-components";
import {
  HiOutlineAdjustmentsHorizontal,
  HiMiniShieldCheck,
  HiOutlineRocketLaunch,
  HiHome,
} from "react-icons/hi2";

export const Hero = () => {
  return (
    <Container>
      {/* text */}
      <div className="flex flex-col justify-between">
        <div className="space-y-4">
          <h1>Facilitation & Design sprint bootcamps</h1>
          <p>
            Transform your ideas into reality in just 5 days (and HAVE FUN doing
            it)
          </p>
        </div>
        {/* badges */}
        <div className="flex flex-wrap gap-2">
          {badges.map(({ Icon, title, bg }) => (
            <Badge bg={bg} key={title}>
              <Icon />
              {title}
            </Badge>
          ))}
        </div>
      </div>
      {/* right image */}
    </Container>
  );
};

const Badge = (props: BadgePropsType) => {
  const { children, bg } = props;
  return (
    <span
      style={{ backgroundColor: bg }}
      className={`rounded-2xl py-1 px-4 text-sm flex gap-2 items-center `}
    >
      {children}
    </span>
  );
};

const Container = tw.div`
grid 
grid-cols-2
gap-x-10
`;

const badges: badgesType[] = [
  {
    Icon: HiOutlineAdjustmentsHorizontal,
    title: "Tailored Curriculum",
    bg: "#fffbdc",
  },
  {
    Icon: HiMiniShieldCheck,
    title: "Industry-Recognized Certification",
    bg: "#e1efe3",
  },
  {
    Icon: HiOutlineRocketLaunch,
    title: "Practical, Actionable Learning",
    bg: "#efe1ff",
  },
  {
    Icon: HiHome,
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
