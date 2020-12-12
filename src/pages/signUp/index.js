import React, { Component} from "react";
import './index.css';
import './signup.js';
class SignUp extends Component{
    render(){
      return(
        <div id="SignUpContainer" className="hidden modalWrapper">
        <div className="modalContainer overlaycontent">
            <button className="close-btn" tabIndex="0" aria-label="Close overylay button" analyticstrack="5G-Home-close-customer-popup">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20">
                <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="square">
                    <path d="M.665.833l18.82 18.821M.665 19.654L19.485.834"></path>
                </g>
                </svg>
            </button>
            <div className="postheadingcontainer">
                <h1 className="postHeading">Sign UP</h1>
                <p className="postPar">With Few Simple Details.</p>
            </div>
            <div className="logininputfieldContainer">

            <div className="signupemailField margin_bottom_20">
                    <label className="postLabel">Email Address* </label>
                    <p className="errorMessage hidden">This field is required*</p>
                    <input type="email" id="signupemailaddress" 
                    className="postInput signupemailaddress" placeholder="Enter the email address"></input>  
            </div>

            <div className="splitfield margin_bottom_20">
                    <div className="leftField signuppasswordField">
                        <label className="postLabel">Password* (min 8 char)</label>
                        <p className="errorMessage hidden">Need Minimun 8 char</p>
                        <input type="password" id="signuppasswrod" 
                        className="postInput signuppassword" placeholder="Enter Password"></input>
                    </div>
                    <div className="rightField confirmPasswordField">
                        <label className="postLabel">Confirm Password*</label>
                        <p className="errorMessage hidden">Password not matching</p>
                        <input type="password" id="confirmPassword" 
                        className="postInput confirmPassword" placeholder="Enter Password"></input>
                    </div> 
            </div>

            <div className="splitfield margin_bottom_20">
                    <div className="leftField fNameField">
                        <label className="postLabel">First Name*</label>
                        <p className="errorMessage hidden">This field is required*</p>
                        <input type="text" id="fname" 
                        className="postInput fname" placeholder="Enter First Name"></input>
                    </div>
                    <div className="rightField lNameField">
                        <label className="postLabel">Last Name*</label>
                        <p className="errorMessage hidden">This field is required*</p>
                        <input type="text" id="lname" 
                        className="postInput lname" placeholder="Enter Last Name"></input>
                    </div> 
                </div>

                <div className="phoneField margin_bottom_20">
                    <label className="postLabel">Phone Number (9999999999)</label>
                    <p className="errorMessage hidden">Plese enter valid Number*</p>
                    <input type="tel" id="phonenumber" 
                    className="postInput phonenumber" placeholder="Enter the phone number"></input>  
                </div>

                <div className="splitfield margin_bottom_20">
                    <div className="AddressleftField  margin_bottom_20">
                        <label className="postLabel">Address </label>
                        <input type="text" id="userAddress" 
                        className="postInput userAddress" placeholder="Enter the address"></input>  
                    </div>
                    <div className="AddressrightField  margin_bottom_20">
                        <label className="postLabel">Apt # </label>
                        <input type="text" id="apartmentNo" 
                        className="postInput apartmentNo" placeholder="Apt #"></input>  
                    </div>
                </div>

                <div className="splitfield margin_bottom_20">
                    <div className="leftField studentField">
                        <label className="postLabel">Are you student</label>
                        <select className="postInput" name="isStudent" id="isStudent">
                            <option value="select">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="rightField notificationField">
                        <label className="postLabel">Recieve Notification*</label>
                        <select className="postInput" name="allowNotification" id="allowNotification">
                            <option value="select">Select</option> 
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div> 
                </div>
                <div className="errorMessage hidden memberContainer">
                    <p className="member">
                    It seems your already a member, Please 
                        <a id="membersection" className="membersection" href="#!"> Login</a> 
                    </p>
                </div>

                <div className="submitPostContainer">
                    <button className="signUp">
                            <span className="signUpText">Sign Up</span>
                    </button>
                    <p className="errorMessage signUpError hidden">Please complete all required fiels*</p>
                </div>

            </div>  
            </div>         
        </div>
        );
    }
  }
  export default SignUp;