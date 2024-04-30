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
    <Container>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WhoIsItFor />
      <Workflow />
      <Pricing />
      <Students />
      <FAQ />
      <Contact />
      <Footer />
    </Container>
  );
}

const Container = tw.div`
space-y-28
`;

export default App;
