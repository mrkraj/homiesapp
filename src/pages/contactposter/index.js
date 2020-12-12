import React, { Component} from "react";
import './index.css';
import './contactposter.js';
class ContactPoster extends Component{
    render(){
      return(
        <div id="contactPosterContainer" className="hidden modalWrapper">
            <div className="modalContainer">
                <button className="close-btn" tabIndex="0" aria-label="Close overylay button" analyticstrack="5G-Home-close-customer-popup">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20">
                <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="square">
                    <path d="M.665.833l18.82 18.821M.665 19.654L19.485.834"></path>
                </g>
                </svg>
                </button>
            <div className="postheadingcontainer">
                <h1 className="postHeading">Contact Poster</h1>
            </div>
            <div className="logininputfieldContainer contactPosterContainer">
                <div className="senderemailfield margin_bottom_20">
                    <label className="postLabel">Enter your Email Address* </label>
                    <p className="errorMessage hidden">Please enter valid email address</p>
                    <input type="email" id="sender-email" 
                    className="postInput sender-email" placeholder="Enter the email address"></input>  
                </div>

                <div className="sharephoneField margin_bottom_20">
                    <label className="postLabel">Phone Number (9999999999)</label>
                    <p className="errorMessage hidden">Plese enter valid Number*</p>
                    <input type="tel" id="sharephonenumber" 
                    className="postInput sharephonenumber" placeholder="Enter the phone number"></input>  
                </div>

                <div className="rentquoteField margin_bottom_20">
                    <label className="postLabel">Quote your Price</label>
                    <input type="tel" id="rentquote" 
                    className="postInput rentquote" placeholder="Quote the Rent $"></input>  
                </div>

                <div className="email-messageField margin_bottom_20">
                    <label className="postLabel">Message to Poster*</label>
                    <p className="errorMessage hidden">This field is required*</p>
                    <textarea className="postInput email-message" id="addInfo" placeholder="Enter message..." name="addInfo">
                        
                    </textarea>  
                </div>
               
                <div className="submitPostContainer">
                    <button className="contactpostertrigger">
                            <span className="signUpText">Send Mail</span>
                    </button>
                    <p className="errorMessage contactposterfillError hidden">Please complete all required fiels*</p>
                       
                 </div>
                
            </div>
            <div className="email_sent hidden">
                <h2>Mail Sent.</h2>
            </div> 
            </div>          
        </div>
        );
    }
  }
  export default ContactPoster;