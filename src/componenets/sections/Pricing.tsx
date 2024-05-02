import React from "react";
import tw from "tailwind-styled-components";
import { SectionHeader } from "../SectionHeader";
import { MainButton } from "../MainButton";
import { Section } from "../../shared/Section";
import { PricingData } from "../../utilities/staticData";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { MdCheck } from "react-icons/md";
import { RevealElement } from "../../utilities/RevealElement";

export const Pricing = () => {
  return (
    <Section id="pricing">
      <RevealElement>
        <SectionHeader title="Pricing" header="Ready to get started?" />
      </RevealElement>
      <RevealElement>
        <div className="grid lg:grid-cols-2 gap-10">
          {PricingData.map((data) => (
            <PricingCard key={data.title} {...data} />
          ))}
        </div>
      </RevealElement>
    </Section>
  );
};

const PricingCard = (props: cardDataProps) => {
  const { title, price, headingBold, features, bg } = props;
  return (
    <CardContainer bg={bg}>
      <div>
        <span className="text-2xl">{title}</span>
        <h1 className="sm:text-5xl text-3xl">${price}</h1>
      </div>
      <List className="max-sm:!space-y-2">
        {features.map((feature) => (
          <ListItem key={feature}>
            <ListIcon as={MdCheck} /> {feature}
          </ListItem>
        ))}
      </List>
      <div>
        <h1 className="font-bold text-lg">{headingBold}</h1>
        <MainButton />
      </div>
    </CardContainer>
  );
};

const CardContainer = tw.div<{ bg: string }>`
p-10
rounded-xl
flex
flex-col
justify-between
*:sm:space-y-10
*:space-y-4
*:py-4
divide-y
${({ bg }) =>
  bg === "white"
    ? "text-black bg-gray-100 [&_button]:text-white [&_button]:bg-black divide-black"
    : "text-white bg-black [&_button]:text-black [&_button]:bg-white divide-white"}
`;

type cardDataProps = {
  title: string;
  price: number;
  headingBold: string;
  bg: string;
  features: string[];
};
