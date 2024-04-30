import React from "react";

export const MainButton = (props: propsType) => {
  const {
    children = "Book a discovery call",
    as = "button",
    className,
  } = props;

  return as === "button" ? (
    <button className={"rounded-full px-6 py-2 " + className}>
      {children}
    </button>
  ) : (
    as === "a" && (
      <a className={"rounded-full px-6 py-2 " + className} href="#">
        {children}
      </a>
    )
  );
};

type propsType = {
  children?: React.ReactNode;
  className?: string;
  as?: "button" | "a";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
