import React from "react";
import tw from "tailwind-styled-components";
import { FooterLinks } from "../utilities/staticData";

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="container-layout !min-h-full">
        <div className="sm:flex justify-between max-sm:space-y-6 mb-20">
          <a href="#/" className="text-2xl font-bold">
            LOGO
          </a>
          <nav className="flex gap-20">
            {FooterLinks.map((col, i) => (
              <ul className="sm:space-y-3" key={i}>
                {col.map(({ link, text }) => (
                  <li key={text}>
                    <a href={link}>{text}</a>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>
        <small>
          Built by{" "}
          <a
            href="https://github.com/OSAMA263"
            target="_blank"
            className="underline"
          >
            OSAMA263
          </a>
        </small>
      </div>
    </FooterContainer>
  );
};
const FooterContainer = tw.div`
py-20
sm:pt-40
rounded-t-3xl
bg-black
text-white
hover:[&_a]:underline
`;
