import React from "react";
import tw from "tailwind-styled-components";
import { SectionHeader } from "../SectionHeader";
import { Section } from "../../shared/Section";
import { CardsData } from "../../utilities/staticData";
import { RevealElement } from "../../utilities/RevealElement";

export const WhoIsItFor = () => {
  return (
    <Section id="who-is-it-for">
      <RevealElement>
        <SectionHeader
          title="Who are our courses for?"
          header="Facilitation & Workshopping Training"
        />
      </RevealElement>
      <div className="grid lg:grid-cols-3 gap-6">
        {CardsData.map((card) => (
          <CourseCard key={card.title} {...card} />
        ))}
      </div>
    </Section>
  );
};

const CourseCard = (props: CourseCardType) => {
  const { bg, Icon, title, par } = props;
  return (
    <RevealElement>
      <Card style={{ backgroundColor: bg }}>
        <span className="sm:text-5xl text-3xl">
          <Icon />
        </span>
        <div className="sm:space-y-6 divide-y-2 divide-black">
          <h1 className="sm:text-3xl text-xl">{title}</h1>
          <p className="pt-4">{par}</p>
        </div>
      </Card>
    </RevealElement>
  );
};

const Card = tw.div`
rounded-xl
px-10
py-10
flex
flex-col
justify-between
sm:gap-28
gap-10
w-full
h-full
`;

type CourseCardType = {
  Icon: React.ComponentType;
  title: string;
  par: string;
  bg: string;
};
