import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ imageUrl, title }) => {
  return (
    <div id="cardSize" className="col-md-4 col-10 mx-auto">
      <div className="card h-100">
        <img src={imageUrl} class="card-img-top imgSize" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <NavLink to="/contact" className="btn btn-primary">
            Explore
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
