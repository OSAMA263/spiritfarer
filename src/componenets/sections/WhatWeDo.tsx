import React, { useRef } from "react";
import { Section } from "../../shared/Section";
import { SectionHeader } from "../SectionHeader";
import { useTransform, motion } from "framer-motion";
import { SliderImgsData, LogosData } from "../../utilities/staticData";
import { ScrollAnimation } from "../../utilities/ScrollAnimation";
import { RevealElement } from "../../utilities/RevealElement";

export const WhatWeDo = () => {
  return (
    <>
      <Section id="what-we-do">
        <div className="sm:space-y-10 space-y-4">
          <SectionHeader
            className="mb-0 mx-auto text-center"
            title="Satisfied customers"
          />
          {/* logos customers */}
          <RevealElement>
            <div className="flex sm:gap-10 gap-6 flex-wrap justify-center">
              {LogosData.map((logo) => (
                <img
                  src={logo}
                  key={logo}
                  alt={logo}
                  className="sm:h-5 h-3 !rounded-none"
                />
              ))}
            </div>
          </RevealElement>
          {/* grid images with text */}
          <RevealElement>
            <div className="space-y-10">
              <div className="grid grid-cols-2 sm:gap-12 gap-6">
                <div className="md:space-y-8 space-y-4">
                  <img src="/customers-img1.webp" alt="img1" />
                  <h1 className="sm:text-4xl text-3xl font-semibold">
                    why should you learn facilitation and design spirnt?
                  </h1>
                </div>
                <img src="/customers-img2.webp" alt="img2" />
              </div>
              {/* animate the text from opacity .5 top 1 when you scroll? */}
              <TextOpacity />
            </div>
          </RevealElement>
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
      <motion.p
        className="relative sm:text-2xl text-xl overflow-hidden"
        ref={text1}
        style={{ opacity: opacity1 }}
      >
        Are you tired of watching your competitors launch new products and
        services while you're still stuck in the endless cycle of brainstorming,
        sketching, and prototyping?
      </motion.p>

      {/*  */}
      <motion.p
        className="relative sm:text-2xl text-xl overflow-hidden"
        ref={text2}
        style={{ opacity: opacity2 }}
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
    <div ref={container} className="sm:h-[200vh]">
      <RevealElement>
        <div className="sm:h-screen sticky overflow-x-hidden top-0 grid grid-rows-2 gap-4">
          {SliderImgsData.map((slide, i) => (
            <motion.div
              style={{ x: (i && i) === 0 ? slider1 : slider2 }}
              className={`flex gap-4 ${
                (i && i) === 0 ? "items-end" : "items-start"
              }`}
              key={i}
            >
              {slide.map((img, j) => (
                <img
                  loading="lazy"
                  src={img}
                  alt={img}
                  key={img + j}
                  className="rounded-xl max-sm:h-[25vh] h-full"
                />
              ))}
            </motion.div>
          ))}
        </div>
      </RevealElement>
    </div>
  );
};
