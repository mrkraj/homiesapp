import React, { Component} from "react";
import "./index.css";
import "./houses.js";
import ContactPoster from '../../pages/contactposter';

class HousesGW extends Component{
    render(){
      return(
        <div className="container">
            <div className="housesGridContainer">
                <div className="viewDetailTitleContainer boxedcontainer">
                  <h1 className="postresultfor"> </h1> 
                    <div className="housesgw">
                     
                    </div> 
                </div>
            </div>
            <div className="hidden modalWrapper" id="mapOverlaySection"> 
                <div className="modalContainer">
                <button className="close-btn" tabIndex="0" aria-label="Close overylay button" analyticstrack="5G-Home-close-customer-popup">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g fill="none" fillRule="evenodd" strokeWidth="4" stroke="#fff" strokeLinecap="square">
                        <path d="M.665.833l18.82 18.821M.665 19.654L19.485.834"></path>
                    </g>
                    </svg>
                </button>
                <div id="mapOverlayComponent" className="mapOverlayContainer"></div>
                </div>
            </div>
            <ContactPoster></ContactPoster>
        </div>
       
        );
    }
  }
  export default HousesGW;