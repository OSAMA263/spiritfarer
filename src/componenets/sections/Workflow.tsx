import React from "react";
import tw from "tailwind-styled-components";
import { SectionHeader } from "../SectionHeader";
import { Section } from "../../shared/Section";
import { WorkflowGrid } from "../../utilities/staticData";
import { RevealElement } from "../../utilities/RevealElement";

export const Workflow = () => {
  return (
    <Section id="workflow">
      <RevealElement>
        <SectionHeader
          title="Workflow"
          header="Embark on your design sprint journey"
        />
      </RevealElement>
      <div className="space-y-20">
        {WorkflowGrid.map(({ img, title, text }, i) => (
          <GridTextImage key={title} {...{ img, title, text, i }} />
        ))}
      </div>
    </Section>
  );
};

const GridTextImage = (props: DataType) => {
  const { img, title, text, i } = props;
  return (
    <RevealElement>
      <GridContainer i={i}>
        <div className="rounded-xl lg:flex-1 ">
          <img src={img} className="w-full max-sm:h-[200px]" alt={title} />
        </div>
        <div className="space-y-6 text-balance lg:flex-1 col-span-2">
          <h1 className="sm:text-3xl text-lg">
            Day {i ? i + 1 : 1} : {title}
          </h1>
          <p className="sm:text-lg">{text}</p>
        </div>
      </GridContainer>
    </RevealElement>
  );
};

const GridContainer = tw.div<{ i: number | undefined }>`
${({ i }) => (i && (i + 1) % 2 === 0 ? "lg:flex-row-reverse" : "flex-row")}
lg:flex
sm:grid
grid-cols-3
grid-flow-col
sm:items-center
gap-x-[8%]
justify-between
`;

type DataType = {
  img: string;
  title: string;
  text: string;
  i?: number;
};
