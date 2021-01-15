import React from "react";
import { NavLink } from "react-router-dom";
import home_img from "../src/images/home-page.jpg";
import Common from "./Common";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Common
        name="Grow your business with"
        imgUrl={home_img}
        visit="/service"
        btname="Get Started"
      />
    </div>
  );
};

export default Home;
