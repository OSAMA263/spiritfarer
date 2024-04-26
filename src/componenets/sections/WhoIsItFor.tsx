import React from "react";
import tw from "tailwind-styled-components";
import { SectionHeader } from "../SectionHeader";
import { ImBooks, ImDatabase, ImContrast } from "react-icons/im";

export const WhoIsItFor = () => {
  return (
    <div>
      <SectionHeader
        header="Who are our courses for?"
        title="Facilitation & Workshopping Training"
      />
      <div className="grid grid-cols-3 gap-6">
        {cardsData.map((card) => (
          <CourseCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
};

const CourseCard = (props: CourseCardType) => {
  const { bg, Icon, title, par } = props;
  return (
    <Card style={{ backgroundColor: bg }}>
      <span>
        <Icon />
      </span>
      <div className="space-y-6 divide-y">
        <h1>{title}</h1>
        <p className="mt-4">{par}</p>
      </div>
    </Card>
  );
};

const Card = tw.div`
rounded-lg
p-8
flex
flex-col
justify-between
`;

const cardsData = [
  {
    Icon: ImContrast,
    title: "Startups & Small businesses",
    par: "Reduced time to marketImproved product qualityIncreased stakeholder buy-in",
    bg: "#e1efe3",
  },
  {
    Icon: ImBooks,
    title: "Individual Employees",
    par: "Improved team collaborationEnhanced problem-solving skillsDeveloped rapid prototyping skills",
    bg: "#efe1ff",
  },
  {
    Icon: ImDatabase,
    title: "Consultants & Coaches",
    par: "ncreased client satisfactionEnhanced credibilityImproved profitability",
    bg: "#dae4fb",
  },
];
type CourseCardType = {
  Icon: React.ComponentType;
  title: string;
  par: string;
  bg: string;
};
