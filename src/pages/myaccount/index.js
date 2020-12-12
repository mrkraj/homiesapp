import React, { Component} from "react";
import "./index.css";
import "./myaccount.js";
import PostAdd from '../postadd';

class MyAccount extends Component{
    render(){
      return(
        <div className="container">
            <div className="housesGridContainer">
                <div className="viewDetailTitleContainer boxedcontainer">
                  <h1 className="postresultfor"> Your Posts.</h1> 
                    <div className="housesgw userpostsgw">
                     
                    </div> 
                </div>
            </div> 
            <div id="edit_postadd" className="hidden modalWrapper">
                <div className="modalContainer">
                    <button className="close-btn" tabIndex="0" aria-label="Close overylay button" analyticstrack="5G-Home-close-customer-popup">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20">
                    <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="square">
                        <path d="M.665.833l18.82 18.821M.665 19.654L19.485.834"></path>
                    </g>
                    </svg>
                    </button>
                    <div className="postheadingcontainer">
                        <h1 className="postHeading">Do you want to detele the post?</h1>
                    </div>
                    <div className="logininputfieldContainer feedbackcontainer"> 
                        <div className="additionalInformation margin_bottom_20">
                            <label className="postLabel">We Appreciate your Feedback</label>
                            <textarea className="postInput posterFeedback" id="posterFeedback" placeholder="Your Feedbacks will help us to improve..." name="feedback">
                                
                            </textarea>  
                        </div>

                        <div className="submitPostContainer">
                            <button className="deletepost">
                                    <span className="signUpText">Delete</span>
                            </button> 
                            <button className="canceldeleteing whitebutton">
                                    <span className="signUpText">Cancel</span>
                            </button> 
                        </div>
                    </div> 
                    <div className="deleteConfirmation hidden">
                        <h1 className="postHeading">Your post is deleted, Thank you for using DesiHomies.</h1>
                    </div>
                 </div>
            </div>
        </div> 
        );
    }
  }
  export default MyAccount;