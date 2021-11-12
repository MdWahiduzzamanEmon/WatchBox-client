import React from "react";
import { Link } from "react-router-dom";
import ad from "../../../images/Facebook Ad 1200x628 px.jpeg";
const Advertise = () => {
  return (
    <div>
      <Link to="/allProducts">
        <img
          src={ad}
          alt=""
          style={{
            margin: "30px 0",
          }}
          className="adImage"
        />
      </Link>
    </div>
  );
};

export default Advertise;
