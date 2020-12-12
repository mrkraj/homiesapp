import React, { Component} from "react";
import './index.css';
import './logIn.js';
class logIn extends Component{
    render(){
      return(
        <div id="LoginContainer" className="hidden modalWrapper">
            <div className="modalContainer">
            <button className="close-btn" tabIndex="0" aria-label="Close overylay button" analyticstrack="5G-Home-close-customer-popup">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20">
               <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="square">
                  <path d="M.665.833l18.82 18.821M.665 19.654L19.485.834"></path>
               </g>
            </svg>
            </button>
            <div className="postheadingcontainer">
                <h1 className="postHeading">Sign In</h1>
            </div>
            <div className="logininputfieldContainer">
                <div className="loginemailField margin_bottom_20">
                    <label className="postLabel">Email Address* </label>
                    <p className="errorMessage hidden">Please enter the email</p>
                    <input type="email" id="loginemailaddress" 
                    className="postInput loginemailaddress" placeholder="Enter the email address"></input>  
                </div>
                <div className="loginpasswordField margin_bottom_20">
                    <label className="postLabel">Password</label>
                    <p className="errorMessage hidden">Please enter the Password</p>
                    <input type="password" id="loginpasswrod" 
                    className="postInput loginpassword" placeholder="Enter Password"></input>
                </div> 
                <div className="passwordField margin_bottom_20">
                    <a href="#!" className="forgotPassword" id="forgotPassword">Forgot Password ?</a>
                </div> 
                <div className="submitPostContainer">
                    <button className="logInTrigger">
                            <span className="signUpText">Log In</span>
                    </button>
                    <p className="passworderrorMessage errortext  hidden">Entered Password is not Correct.</p>
                    <p className="emailerrorMessage errortext hidden">Email Address does not exist.</p>
                    <p className="errorMessage logInError hidden">Please complete all required fiels*</p>
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
  export default logIn;