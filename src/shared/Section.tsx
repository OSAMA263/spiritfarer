import React from "react";
import tw from "tailwind-styled-components";
type PropsType = {
  className?: string;
  id: string;
  children: React.ReactNode;
};

export const Section = ({ children, ...rest }: PropsType) => {
  return <Container className="container-layout" {...rest}>{children}</Container>;
};

const Container = tw.section`
[&_img]:rounded-lg
container-layout
`;
