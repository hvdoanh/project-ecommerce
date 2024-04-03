import React from "react";
import banner from "../../assets/images/banner1.avif";
import "../../styles/home/banner.css";
function Banner() {
  return (
    <div>
      <div className="img_banner">
        <img src={banner} alt="img_banner" />
      </div>
    </div>
  );
}

export default Banner;
