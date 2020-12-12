import React from "react";
import "./index.css";
import '../../resource/externalLibs/css/swiper.min.css';
import "./featuredmodel.js";
function FeaturedModel() {
  return (
    <div className="featureModelSection container">
        <div className="swiperHeading">
           Explore houses near you.
        </div>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            
          </div>
            
          <div className="swiper-pagination"></div>
          
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
    </div>
  );
}
export default FeaturedModel;

