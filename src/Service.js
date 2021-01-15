import React from "react";
import home2 from "../src/images/home2.png";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <section id="header" className="mb-5">
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {Sdata.map((data, ind) => (
                  <Card key={ind} imageUrl={data.imageUrl} title={data.title} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
