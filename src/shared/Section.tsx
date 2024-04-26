import React from "react";
import tw from "tailwind-styled-components";
type PropsType = {
  className?: string;
  id: string;
  children: React.ReactNode;
};

export const Section = ({ children, ...rest }: PropsType) => {
  return <Container {...rest}>{children}</Container>;
};

const Container = tw.section`
text-white
w-[70%]
mx-auto
[&_img]:rounded-lg
`;
