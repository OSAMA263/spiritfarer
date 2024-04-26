import React from "react";
import tw from "tailwind-styled-components";
import { SectionHeader } from "../SectionHeader";

export const Workflow = () => {
  return (
    <div>
      <SectionHeader
        header="Workflow"
        title="Embark on your design sprint journey"
      />
      <div className="space-y-12">
        {data.map(({ img, title }, i) => (
          <GridTextImage key={title} {...{ img, title, i }} />
        ))}
      </div>
    </div>
  );
};

const GridTextImage = (props: DataType) => {
  const { img, title, i } = props;
  return (
    <GridContainer i={i}>
      <div className="flex-1 rounded-xl ">
        <img src={img} className="w-full" alt={title} />
      </div>
      <div className="flex-1">
        <div>
          <h1 className="mb-6">
            Day {i && i + 1} : {title}
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus nemo neque voluptatem eum sequi dolorem aperiam
            cupiditate alias impedit consectetur rem, voluptatum qui molestiae
            doloremque!
          </p>
        </div>
      </div>
    </GridContainer>
  );
};

const GridContainer = tw.div<{ i: number | undefined }>`
${({ i }) => (i && (i + 1) % 2 === 0 ? "flex-row" : "flex-row-reverse")}
flex
items-center
gap-12
`;

const data: DataType[] = [
  { img: "/workflow/img0.webp", title: "Problem Exploration" },
  { img: "/workflow/img1.webp", title: "Ideation Extravaganza" },
  { img: "/workflow/img2.webp", title: "Prototype Power Hour" },
  { img: "/workflow/img3.webp", title: "Validate Your Ideas" },
];

type DataType = {
  img: string;
  title: string;
  i?: number;
};
