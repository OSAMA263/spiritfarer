import React from "react";
import tw from "tailwind-styled-components";
import { SectionHeader } from "../SectionHeader";
import { Section } from "../../shared/Section";
import { WorkflowGrid } from "../../utilities/staticData";

export const Workflow = () => {
  return (
    <Section id="workflow">
      <SectionHeader
        title="Workflow"
        header="Embark on your design sprint journey"
      />
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
    <GridContainer i={i}>
      <div className="rounded-xl flex-1">
        <img src={img} className="w-full" alt={title} />
      </div>
      <div className="space-y-6 text-balance flex-1">
        <h1 className="text-3xl">
          Day {i !== undefined ? i + 1 : 1} : {title}
        </h1>
        <p className="text-lg">{text}</p>
      </div>
    </GridContainer>
  );
};

const GridContainer = tw.div<{ i: number | undefined }>`
${({ i }) => (i && (i + 1) % 2 === 0 ? "flex-row-reverse" : "flex-row")}
flex
items-center
gap-x-[8%]
justify-between
`;

type DataType = {
  img: string;
  title: string;
  text: string;
  i?: number;
};
