import React from "react";
import home2 from "../src/images/home2.jpg";
import Common from "./Common";

const About = () => {
  return (
    <div>
      <Common
        name="Hi! This is Pravin Vargad."
        imgUrl={home2}
        visit="/contact"
        btname="Contact Me"
        disc=" Develop web app using ReactJs and Firebase. "
      />
    </div>
  );
};

export default About;
