import React, { Component} from "react";
import './index.css';
import './forgotPassword.js';
class ForgotPassword extends Component{
    render(){
      return(
        <div id="forgotPasswordContainer" className="hidden modalWrapper">
            <div className="modalContainer">
            <button className="close-btn" tabIndex="0" aria-label="Close overylay button" analyticstrack="5G-Home-close-customer-popup">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20">
               <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="square">
                  <path d="M.665.833l18.82 18.821M.665 19.654L19.485.834"></path>
               </g>
            </svg>
            </button>
            <div className="postheadingcontainer">
                <h1 className="postHeading">Forgot password</h1>
            </div>
            <div className="logininputfieldContainer">
                <div className="forgotemailField margin_bottom_20">
                    <label className="postLabel">Email Address* </label>
                    <p className="errorMessage hidden">Please enter the email</p>
                    <input type="email" id="forgotemailaddress" 
                    className="postInput forgotemailaddress" placeholder="Enter the email address"></input>  
                </div>
                 
                <div className="submitPostContainer">
                    <button className="forgotPasswordtrigger">
                            <span className="signUpText">Send Mail</span>
                    </button>
                    <p className="errorMessage forgotNotfillError hidden">Please complete all required fiels*</p>
                      <p className="forgotemailerror errortext hidden">Email Address does not exist.</p>
                      <p className="forgotmember hidden">
                        Password Sent to your email, Please  
                        <a id="membersection" className="membersection" href="#!"> Login</a> 
                    </p>
                 </div>
                <hr className="horizontalLine"></hr>
                <div className="notMemberContainer">
                    <p className="notMember">
                        <a id="signUpsection" className="signUpsection" href="#!">Sign up</a>  if you are not a member
                    </p>
                </div>
            </div> 
            </div>          
        </div>
        );
    }
  }
  export default ForgotPassword;