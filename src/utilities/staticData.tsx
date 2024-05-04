import { ImBooks, ImDatabase, ImContrast } from "react-icons/im";
// ------------navabr
const NavigationLinks = [
  {
    name: "What We Do",
    link: "what-we-do",
  },
  {
    name: "Who Is It For",
    link: "who-is-it-for",
  },
  {
    name: "Workflow",
    link: "workflow",
  },
  {
    name: "Pricing",
    link: "pricing",
  },
  {
    name: "Students",
    link: "students",
  },
  {
    name: "FAQ",
    link: "faq",
  },
];
// -------------who is it for
const CardsData = [
  {
    Icon: ImContrast,
    title: "Startups & Small businesses",
    par: "Reduced time to marketImproved product qualityIncreased stakeholder buy-in",
    bg: "#e1efe3",
  },
  {
    Icon: ImBooks,
    title: "Individual Employees",
    par: "Improved team collaborationEnhanced problem-solving skillsDeveloped rapid prototyping skills",
    bg: "#efe1ff",
  },
  {
    Icon: ImDatabase,
    title: "Consultants & Coaches",
    par: "ncreased client satisfactionEnhanced credibilityImproved profitability",
    bg: "#dae4fb",
  },
];
// ------------what we do
const LogosData: string[] = [
  "./logo1.webp",
  "./logo2.webp",
  "./logo3.webp",
  "./logo4.webp",
  "./logo5.webp",
  "./logo6.webp",
];
const SliderImgsData: string[][] = [
  [
    "./slider/img0.webp",
    "./slider/img1.webp",
    "./slider/img2.webp",
    "./slider/img3.webp",
    "./slider/img4.webp",
    "./slider/img0.webp",
    "./slider/img5.webp",
  ],
  [
    "./slider/img6.webp",
    "./slider/img7.webp",
    "./slider/img8.webp",
    "./slider/img9.webp",
    "./slider/img10.webp",
    "./slider/img6.webp",
    "./slider/img11.webp",
  ],
];
// -------------workflow
const WorkflowGrid = [
  {
    img: "./workflow/img0.webp",
    title: "Problem Exploration",
    text: "Welcome to the Design Sprint, where we embark on a whirlwind journey to transform your ideas into tangible solutions. Day 1 is all about defining the problem you're trying to solve, delving into the depths of user needs, and identifying the pain points that need addressing.",
  },
  {
    img: "./workflow/img1.webp",
    title: "Ideation Extravaganza",
    text: "Now that we've identified the problem, let's unleash the creative floodgates! Day 2 is all about generating a plethora of ideas, brainstorming solutions that will address the pain points and enhance the user experience.",
  },
  {
    img: "./workflow/img2.webp",
    title: "Prototype Power Hour",
    text: "It's time to transform those brilliant ideas into tangible prototypes, bridging the gap between imagination and reality. Day 3 is all about sketching out your concepts, creating rough drafts, and visualizing the potential solutions you've come up with.",
  },
  {
    img: "./workflow/img3.webp",
    title: "Validate Your Ideas",
    text: "Embark on a user testing expedition, putting your prototypes to the ultimate test. Gather insights from actual users, observing their interactions and reactions as they navigate your prototype.",
  },
];
// ------------- pricing
const PricingData = [
  {
    title: "Individuals",
    price: 699,
    headingBold: "Unlock your inner innovation hero",
    features: [
      "Gain the skills and confidence to lead your own design sprints",
      "Develop the skills to facilitate your own design sprints",
      "Learn how to apply design sprints to a variety of projects",
      "Receive personalized feedback from a certified facilitator",
      "Get access to a comprehensive toolkit of design sprint resource.",
      "Access to a private online community of design sprint practitioners.",
    ],
    bg: "white",
  },
  {
    title: "Team",
    price: 6969,
    headingBold: "Transform your team into a design sprint powerhouse",
    features: [
      "Train a team of up to 10 people into design sprint ninjas",
      "Boost team morale and collaboration through design sprints",
      "Create a structured framework for developing and testing new ideas",
      "Foster a culture of innovation and collaboration within your team",
      "Receive a customized set of design sprint templates and tools",
      "Access to a private online community for team-wide support",
    ],
    bg: "black",
  },
];
// -------------students
const ReviewsData = [
  {
    opinion:
      "I'm so grateful for this training. It's helped me to become a better designer.",
    avatar: "./students/avatar1.webp",
    name: "Jonathan Clamer",
    role: "VP @ AirMaster",
    backgroundColor: "#efe1ff",
    color: "#c41a68",
  },
  {
    opinion: "I'm seeing a huge difference in the quality of our products",
    avatar: "./students/avatar2.webp",
    name: "Valerie Auburn",
    role: "Design Director @Soundbreeze",
    backgroundColor: "#dae4fb",
    color: "#3d6bd4",
  },
  {
    opinion:
      "I'm now able to lead design sprints that are both productive and fun",
    avatar: "./students/avatar3.webp",
    name: "Vincent Blair",
    role: "Product Designer @Assos",
    backgroundColor: "#fffbdc",
    color: "#f19938",
  },
];
// -------------footer
const FooterLinks = [
  [
    { link: "/", text: "Home" },
    { link: "what-we-do", text: "What we do" },
    { link: "who-is-it-for", text: "Who is it for" },
  ],
  [
    { link: "workflow", text: "Workflow" },
    { link: "pricing", text: "Pricing" },
    { link: "students", text: "Students" },
  ],
  [
    { link: "faq", text: "FAQ" },
    { link: "contact", text: "Contact" },
  ],
];
export {
  LogosData,
  SliderImgsData,
  CardsData,
  WorkflowGrid,
  PricingData,
  ReviewsData,
  FooterLinks,
  NavigationLinks,
};
