import React from "react";

export const Students = () => {
  return <div>Students</div>;
};


const reviewsData: reviewsType[] = [
  {
    opinion:
      "I'm so grateful for this training. It's helped me to become a better designer.",
    avatar: "",
    name: "Jonathan Clamer",
    role: "VP @ AirMaster",
  },
  {
    opinion: "I'm seeing a huge difference in the quality of our products",
    avatar: "",
    name: "Valerie Auburn",
    role: "Design Director @Soundbreeze",
  },
  {
    opinion:
      "I'm now able to lead design sprints that are both productive and fun",
    avatar: "",
    name: "Vincent Blair",
    role: "Product Designer @Assos",
  },
];

type reviewsType = {
  opinion: string;
  avatar: string;
  name: string;
  role: string;
};
