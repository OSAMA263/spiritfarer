import React from "react";
import tw from "tailwind-styled-components";
import { SectionHeader } from "../SectionHeader";
import { Section } from "../../shared/Section";
import { CardsData } from "../../utilities/staticData";

export const WhoIsItFor = () => {
  return (
    <Section id="who-is-it-for">
      <SectionHeader
        title="Who are our courses for?"
        header="Facilitation & Workshopping Training"
      />
      <div className="grid grid-cols-3 gap-6">
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
    <Card style={{ backgroundColor: bg }}>
      <span className="text-5xl">
        <Icon />
      </span>
      <div className="space-y-6 divide-y-2 divide-black">
        <h1 className="text-3xl">{title}</h1>
        <p className="pt-4">{par}</p>
      </div>
    </Card>
  );
};

const Card = tw.div`
rounded-xl
p-10
flex
flex-col
justify-between
gap-28
`;

type CourseCardType = {
  Icon: React.ComponentType;
  title: string;
  par: string;
  bg: string;
};
