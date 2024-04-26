import React from "react";

export const MainButton = (props: propsType) => {
  const { children = "Book a discovery call", type = "button" } = props;

  return type === "button" ? (
    <button>{children}</button>
  ) : (
    type === "a" && <a href="#">{children}</a>
  );
};

type propsType = {
  children?: React.ReactNode;
  type?: "button" | "a";
};
