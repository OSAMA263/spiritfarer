import React from "react";
import { motion,  } from "framer-motion";

export const RevealElement = ({ children }: { children: React.ReactNode }) => {

  return (
    <motion.div
className="w-full h-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, offset: "200px" }}
      transition={{ duration: 0.4, type: "tween" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
