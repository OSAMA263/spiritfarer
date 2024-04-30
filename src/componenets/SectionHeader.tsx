import React from "react";

export const SectionHeader = (props: propsType) => {
  const { title, header, className } = props;

  return (
    <div className={"w-[30%] space-y-4 mb-16 " +className}>
      <h2 className="text-2xl">{title}</h2>
      <h1 className="text-4xl font-semibold">{header}</h1>
    </div>
  );
};
type propsType = {
  header?: string;
  title?: string;
  className?: string;
};
