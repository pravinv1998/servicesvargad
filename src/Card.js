import React from "react";

import Button from '@material-ui/core/Button';


const Card = ({ imageUrl, title, link }) => {
  return (
    <div id="cardSize" className="col-md-4 col-10 mx-auto">
      <div className="card h-100">
        <img src={imageUrl} class="card-img-top imgSize" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <Button variant="outlined" color="primary" href={link}>
            Visit Site
          </Button>


        </div>
      </div>
    </div>
  );
};

export default Card;
