import React from "react";
import home2 from "../src/images/home2.png";
import Common from "./Common";

const About = () => {
  return (
    <div>
      <Common
        name="Welcome to About Page"
        imgUrl={home2}
        visit="/contact"
        btname="Contact Us"
      />
    </div>
  );
};

export default About;
