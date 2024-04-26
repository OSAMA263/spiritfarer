import React from "react";
import { Section } from "../../shared/Section";

export const WhatWeDo = () => {
  return (
    <Section id="what-we-do" className="">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2>Satisfied customers</h2>
        <div className="space-y-4">logos</div>
      </div>
      {/* grid images with text */}
      <div className="grid grid-cols-2 gap-12 mb-12"></div>
      <div className="space-6">
        {/* animate the text from opacity .5 top 1 when you scroll? */}
        <p>
          Are you tired of watching your competitors launch new products and
          services while you're still stuck in the endless cycle of
          brainstorming, sketching, and prototyping?
        </p>
        <p>
          Design sprints are a revolutionary new approach to product development
          that helps you go from idea to prototype in just five days. It's like
          putting your product team on steroids.
        </p>
      </div>
    </Section>
  );
};

const SliderImages = () => {
  return (
    <div className="h-[200vh]">
      <div className="h-screen sticky top-0 grid-grid-rows-2 gap-4">
        <div className="flex gap4"></div>
        <div className="flex gap4"></div>
      </div>
    </div>
  );
};
