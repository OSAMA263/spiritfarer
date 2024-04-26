import React from "react";
import { SectionHeader } from "../SectionHeader";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";

export const FAQ = () => {
  return (
    <div>
      <SectionHeader
        header="All you want to know about the training"
        title="FAQ"
      />
      <div className="flex justiy-between items-center">
        {" "}
        {/* accordion question & answers */}
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <span>text</span> <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel></AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

const SmallCard = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-16"></div>
  );
};
