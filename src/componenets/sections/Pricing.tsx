import React from "react";
import tw from "tailwind-styled-components";
import { SectionHeader } from "../SectionHeader";
import { MainButton } from "../MainButton";

export const Pricing = () => {
  return (
    <div>
      <SectionHeader title="Pricing" header="Ready to get started?" />
      <div className="grid gap-10">
        {cardData.map(({ title, price, headingBold, bg }) => (
          <PricingCard key={title} {...{ title, price, headingBold, bg }} />
        ))}
      </div>
    </div>
  );
};

const PricingCard = (props: cardDataProps) => {
  const { title, price, headingBold, bg } = props;
  return (
    <div className="grid gap-8">
      <CardContainer bg={bg}>
        <div>
          <span>{title}</span>
          <h1>${price}</h1>
        </div>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <div>
          <h1>{headingBold} </h1>
          <MainButton />
        </div>
      </CardContainer>
    </div>
  );
};

const CardContainer = tw.div<{ bg: string }>`
${({ bg }) =>
  bg === "white"
    ? "text-black bg-white [&_button]:text-white [&_button]:bg-black"
    : "text-white bg-black [&_button]:text-black [&_button]:bg-white"}
p-10
rounded-lg
flex 
flex-col
justify-between
*:space-y-3
divide-y
`;

const cardData: cardDataProps[] = [
  {
    title: "Individuals",
    price: 699,
    headingBold: "Unlock your inner innovation hero",
    bg: "white",
  },
  {
    title: "Team",
    price: 6969,
    headingBold: "Transform your team into a design sprint powerhouse",
    bg: "black",
  },
];

type cardDataProps = {
  title: string;
  price: number;
  headingBold: string;
  bg: string;
};
