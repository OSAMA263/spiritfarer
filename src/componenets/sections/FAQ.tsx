import React from "react";
import { SectionHeader } from "../SectionHeader";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import tw from "tailwind-styled-components";
import { MainButton } from "../MainButton";
import { Section } from "../../shared/Section";

export const FAQ = () => {
  return (
    <Section id="faq">
      <SectionHeader
        header="All you want to know about the training"
        title="FAQ"
      />
      <div className="flex justify-between items-center gap-24">
        {/* accordion question & answers */}
        <Accordion allowToggle className="w-full space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <AccordionItem key={i}>
              {({ isExpanded }) => (
                <>
                  <AccordionButton className="flex flex-col text-start justify-between p-4 rounded-2xl bg-[#e8e8e8]">
                    <AccordionIcon isExpanded={isExpanded} />
                    <AccordionPanel mt={20}>
                      consectetur adipisicing elit. Numquam maiores repellat
                      quas eius, eligendi aperiam ea modi possimus et, ullam
                      quae. Sint, amet eos et autem dolorem repudiandae commodi
                      odit?
                    </AccordionPanel>
                  </AccordionButton>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
        {/* card on the right */}
        <SmallCard />
      </div>
    </Section>
  );
};

const SmallCard = () => {
  return (
    <Card>
      <img src="/founderxdd.webp" alt="the founder" />
      <h1 className="font-bold">
        “A Facilitator Helps Teams Accomplish More While Having a Great Time” -
        Shaan Livy
      </h1>
      <span>Fonder of Sprintify</span>
      <MainButton className="bg-white text-black"/>
    </Card>
  );
};

const AccordionIcon = ({ isExpanded }: { isExpanded: boolean }) => {
  return (
    <div className="flex w-full items-center justify-between ">
      <span className="text-xl">Lorem ipsum dolor sit amet.</span>
      <div
        className={`text-2xl font-semibold transition-all duration-500 ${
          isExpanded ? "rotate-[135deg]" : "rotate-0"
        }`}
      >
        +
      </div>
    </div>
  );
};

const Card = tw.div`
flex
flex-col
gap-4
items-center
justify-center
px-10
py-16
rounded-2xl
bg-black 
text-white
text-center
`;
