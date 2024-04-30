import React from "react";
import { SectionHeader } from "../SectionHeader";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import tw from "tailwind-styled-components";
import { ReviewsData } from "../../utilities/staticData";

export const Students = () => {
  const swiperProps = {
    speed: 700,
    effect: "fade",
    modules: [EffectFade, Autoplay],
    // loop:true,
    // autoplay: { delay: 2500 },
    centeredSlides: true,
  };
  return (
    <section id="students">
      <Swiper {...swiperProps} className="relative">
        <SectionHeader
          className="z-50 absolute text-center left-1/2 -translate-x-1/2 top-10"
          title="What our students say.."
        />
        {ReviewsData.map(({ name, opinion, avatar, role, ...rest }) => (
          <SwiperSlide key={name} style={{ ...rest }}>
            <SlideWrapper>
              <h1 className="text-5xl font-bold">"{opinion}"</h1>
              <div>
                <img src={avatar} alt={name} />
                <h1>{name}</h1>
                <span>{role}</span>
              </div>
            </SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const SlideWrapper = tw.div`
flex
flex-col
gap-10
text-center
items-center
[&_img]:rounded-2xl
justify-center
w-[60%]
py-48
mx-auto
*:flex
*:flex-col
*:items-center
`;
