import { useScroll, useSpring } from "framer-motion";
import React from "react";

export const ScrollAnimation = (props: PropsType) => {
  const { target, offset } = props;
  const { scrollYProgress } = useScroll({
    target,
    offset,
  });
  const animation = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 50,
  });
  return animation;
};

type PropsType = {
  target: React.RefObject<HTMLDivElement>;
  offset: Array<`${number} ${number}`>;
};
