import React, { Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import SignUp from '../../pages/signUp';
import LogIn from '../../pages/login';
import ForgotPassword from '../../pages/forgotPassword';
import './gnav.js';
class HomiesHeader extends Component{
    render(){
      return(
       <div className="sticky homies-gn">
            <div className="Grid gn-container">
                <div className="homies_logo Col-md-3 Col-xl-3 Col-xs-4">
                    <a className="gnav_logo" aria-label="homies_logo" href="/" title="HomiesLogo">
                        <img alt="Homies_logo" className="homeLogo" src={require(`../../resource/logo/black_logo.png`)}></img>
                    </a>
                </div>        
                <div className="rightSection Col-md-9 Col-xs-8">
                    <div className="gn_floatright padding_40 font_size_30">
                        <a href="/postadd" className="postAdd"  data-label="PostAdd" aria-label="Post Add">Post ADD</a>
                        <a href="/savedlist" className="saveditems hidden margin_left_20" data-label="myPost" aria-label="My Post">Saved Items</a>
                        <a href="#!" className="gnavsignIn margin_left_20" data-label="myPost" aria-label="My Post">SignIn</a>
                        <div className="loggedinmenu hidden">
                            <a className="dropbtn gnavmyAccount">Welcome </a><span className="gndroparrow fa fa-angle-down"></span> 
                            <div className="loggedinmenu-content">
                                <a href="/myAccount">My Account</a>
                                <a href="/myAccount">My Posts</a>
                                <a className="gnsignout">Sign Out</a>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <SignUp></SignUp>
            <LogIn></LogIn>
            <ForgotPassword></ForgotPassword>
        </div>
      );
    }
  }
  export default HomiesHeader;