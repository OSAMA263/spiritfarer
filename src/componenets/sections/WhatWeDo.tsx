import React, { useRef } from "react";
import { Section } from "../../shared/Section";
import { SectionHeader } from "../SectionHeader";
import { useTransform, motion } from "framer-motion";
import { SliderImgsData, LogosData } from "../../utilities/staticData";
import { ScrollAnimation } from "../../utilities/ScrollAnimation";

export const WhatWeDo = () => {
  return (
    <>
      <Section id="what-we-do" className="">
        <div className="space-y-10">
          <SectionHeader
            className="mb-0 mx-auto text-center"
            title="Satisfied customers"
          />
          {/* logos customers */}
          <div className="flex gap-10 flex-wrap justify-center">
            {LogosData.map((logo) => (
              <img
                src={logo}
                key={logo}
                alt={logo}
                className="h-5 !rounded-none"
              />
            ))}
          </div>
          {/* grid images with text */}
          <div className="space-y-10">
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-8">
                <img src="/customers-img1.webp" alt="img1" />
                <h1 className="text-4xl font-semibold">
                  why should you learn facilitation and design spirnt?
                </h1>
              </div>
              <img src="/customers-img2.webp" alt="img2" />
            </div>
            {/* animate the text from opacity .5 top 1 when you scroll? */}
            <TextOpacity />
          </div>
        </div>
      </Section>
      {/* two slider images */}
      <SliderImages />
    </>
  );
};
// TWO LINES OPACITY ANIMATION TEXT----------------
const TextOpacity = () => {
  const text1 = useRef<HTMLDivElement>(null);
  const text2 = useRef<HTMLDivElement>(null);

  const opacity1 = useTransform(
    ScrollAnimation({ target: text1, offset: ["0 1", "1 .4"] }),
    [0, 1],
    ["10%", "100%"]
  );
  const opacity2 = useTransform(
    ScrollAnimation({ target: text1, offset: ["0 .7", "1 .2"] }),
    [0, 1],
    ["10%", "100%"]
  );
  return (
    <>
      <div className="relative text-2xl overflow-hidden">
        <motion.p ref={text1} style={{ opacity: opacity1 }}>
          Are you tired of watching your competitors launch new products and
          services while you're still stuck in the endless cycle of
          brainstorming, sketching, and prototyping?
        </motion.p>
      </div>
      {/*  */}
      <motion.p
        ref={text2}
        style={{ opacity: opacity2 }}
        className="text-2xl relative"
      >
        Design sprints are a revolutionary new approach to product development
        that helps you go from idea to prototype in just five days. It's like
        putting your product team on steroids.
      </motion.p>
    </>
  );
};
// TWO SLIDER IMAGES -----------
const SliderImages = () => {
  const container = useRef<HTMLDivElement>(null);

  const slider1 = useTransform(
    ScrollAnimation({ target: container, offset: ["0 1", ".8 0"] }),
    [0, 1],
    ["0%", "-40%"]
  );
  const slider2 = useTransform(
    ScrollAnimation({ target: container, offset: ["0 1", "1 0"] }),
    [0, 1],
    ["-40%", "0%"]
  );

  return (
    <div ref={container} className="h-[200vh]">
      <div className="h-screen sticky overflow-x-hidden top-0 justify-center grid grid-rows-2 gap-4">
        {SliderImgsData.map((slide, i) => (
          <motion.div
            style={{ x: (i && i) === 0 ? slider1 : slider2 }}
            className="flex gap-4"
            key={i}
          >
            {slide.map((img, j) => (
              <img
                loading="lazy"
                src={img}
                alt={img}
                key={img + j}
                className="rounded-xl w-full"
              />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
