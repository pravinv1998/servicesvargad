import React from "react";

import home_img from "../src/images/home-page.jpg";
import Common from "./Common";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Common
        name="Hi!  This is Pravin Vargad"
        imgUrl={home_img}
        visit="/service"
        btname="Projects"
        disc="I am talented developer to making Web App using JavaScript."
      />
    </div>
  );
};

export default Home;
