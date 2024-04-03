import React from "react";
import Slider from "react-slick";
import "../../styles/home/slider.css";
import anh1 from "../../assets/images/anh1.jpg";
import anh2 from "../../assets/images/anh2.jpg";
import anh3 from "../../assets/images/anh3.jpg";
import anh4 from "../../assets/images/anh4.jpg";
import anh5 from "../../assets/images/anh5.jpg";

const SliderMain = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    arrows: false,
  };

  let imgMain = [
    { id: 1, src: anh1, title: "title 1" },
    { id: 2, src: anh2, title: "title 2" },
    { id: 3, src: anh3, title: "title 3" },
    { id: 4, src: anh4, title: "title 4" },
    { id: 5, src: anh5, title: "title 5" },
  ];
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {imgMain?.map((img) => (
          <div key={img.id} className="banner-img">
            <img src={img.src} alt={img.title} title={img.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderMain;
