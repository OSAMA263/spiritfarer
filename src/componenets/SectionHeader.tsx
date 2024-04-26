import React from "react";

export const SectionHeader = (props: propsType) => {
  const { title, header, className } = props;

  return (
    <div className={className}>
      <h2>{title}</h2>
      <h1>{header}</h1>
    </div>
  );
};
type propsType = {
  header: string;
  title?: string;
  className?: string;
};
