import React from "react";
import tw from "tailwind-styled-components";
import { FooterLinks } from "../utilities/staticData";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="container-layout !min-h-full">
        <div className="sm:flex justify-between max-sm:space-y-6 mb-20">
          <div>
            <a href="#/" className="text-2xl font-bold">
              <img src="/logo.svg" alt="logo" />
            </a>
            <h1>Unleash the power of design sprints.</h1>
          </div>
          <nav className="flex gap-20">
            {FooterLinks.map((col, i) => (
              <ul className="sm:space-y-3" key={i}>
                {col.map(({ link, text }) => (
                  <li key={text}>
                    <Link to={link} offset={-80} href={link}>
                      {text}
                    </Link>
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
