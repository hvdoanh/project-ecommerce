import React from "react";
import banner from "../../assets/images/banner1.avif";
import "../../styles/home/banner.css";

function Banner({ src = banner }) {
  return (
    <div className="all_banner">
      <div className="img_banner">
        <img src={src} alt="img_banner" />
      </div>
    </div>
  );
}

export default Banner;
