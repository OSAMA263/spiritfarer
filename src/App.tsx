import tw from "tailwind-styled-components";
import { WhatWeDo } from "./componenets/sections/WhatWeDo";
import { WhoIsItFor } from "./componenets/sections/WhoIsItFor";
import { Workflow } from "./componenets/sections/Workflow";
import { Pricing } from "./componenets/sections/Pricing";
import { Students } from "./componenets/sections/Students";
import { FAQ } from "./componenets/sections/FAQ";
import { Navbar } from "./shared/Navbar";
import { Footer } from "./shared/Footer";
import { Hero } from "./componenets/sections/Hero";
import { Contact } from "./componenets/sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Hero />
        <WhatWeDo />
        <WhoIsItFor />
        <Workflow />
        <Pricing />
        <Students />
        <FAQ />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

const Container = tw.div`
sm:space-y-28
space-y-10
`;

export default App;
