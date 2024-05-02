import React from "react";

export const SectionHeader = (props: propsType) => {
  const { title, header, className } = props;

  return (
    <div className={"lg:w-[30%] space-y-4 mb-16 " + className}>
      <h2 className="sm:text-2xl text-xl">{title}</h2>
      <h1 className="sm:text-4xl text-2xl font-semibold">{header}</h1>
    </div>
  );
};
type propsType = {
  header?: string;
  title?: string;
  className?: string;
};
