import React from "react";
import { SectionHeader } from "../SectionHeader";
import { MainButton } from "../MainButton";
import { motion } from "framer-motion";
import { RevealElement } from "../../utilities/RevealElement";
export const Contact = () => {
  return (
    <section id="contact">
      <motion.div {...AnimateBG} className="md:py-32 py-16">
        <RevealElement>
          <SectionHeader
            title="Let us know how we can help!"
            header="We'll get back to you within 2-3 million days :)"
            className="mx-auto text-center"
          />
        </RevealElement>
        <RevealElement>
          <form action="#" className="mx-auto md:w-[40%] w-[80%] space-y-4 *:space-y-2">
            <div>
              <label htmlFor="email"> Email</label>
              <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="what is youe email? credit number? address?"
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                id="message"
                placeholder="Tell us about your needs or project, your company"
              ></textarea>
            </div>
            <MainButton
              type="submit"
              className="w-full block bg-black text-white"
            >
              Get Started
            </MainButton>
          </form>
        </RevealElement>
      </motion.div>
    </section>
  );
};

const AnimateBG = {
  initial: { background: "#f0e3fc" },
  animate: {
    background: ["#f0e3fc", "#fdf8df", "#e1efe3", "#dde6f9", "#f0e3fc"],
    transition: { repeat: Infinity, duration: 20, ease: "linear" },
  },
};
