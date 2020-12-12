import React, { Component} from "react";
import './index.css';
class HomiesFooter extends Component{
    render(){
      return(
      <div className="homies-gf " id="mainFooter">
          <div className="Grid container">
            <div className="footer_social Col-sm-6 Col-xs-12">
                <a className="footerLogo cwhite" href="/">
                    <img className="homelogo" src={require(`../../resource/logo/white_logo.png`)}
                    className="footerMainLogo" title="Indian Room mates" alt="Desi Homies"/>
                </a>
                <p className="copyrightInfo cwhite">© 2020 Esthak Group, Inc.</p>
                <span className="socialIcons">
                    <a target="_blank" href="https://facebook.com/desiHomies.com" className="cwhite facebookIcon"></a>
                    <a target="_blank" href="https://twitter.com/desiHomies" className="cwhite twitterIcon"></a>
                    <a target="_blank" href="https://linkedin.com/company/desiHomies" className="cwhite linkedinIcon"></a>        
                    <a target="_blank" href="http://pinterest.com/desiHomies" className="cwhite pinterestIcon"></a>
                    <a target="_blank" href="https://www.youtube.com/user/desiHomies" className="cwhite youtubeIcon"></a>
                </span>
                <p className="ehoLabel">
                    <a className="cwhite" title="Equal Housing Opportunity" target="_blank" href="/policy/">
                        <i className="ehoIcon"></i>
                        Equal Housing Opportunity
                    </a>
                </p>
            </div>

            <div className="footerLinks Col-sm-3 Col-xs-6">
                <h5 className="cwhite">Advertisers</h5>
                <ul>
                    <li><a className="cwhite" href="/advertise" title="Advertise your Apartment, Home or Condo for Rent on Apartments.com">Advertise</a></li> 
                    <li><a className="cwhite" href="/add-property/" title="Add your listing on Apartments.com">Add a Property</a></li> 
                    <li><a className="cwhite" href="/advertise/advfeeds" title="Digital Feeds Program">Digital Feeds Program</a></li> 
                </ul>
            </div> 
            <div className="footerLinks Col-sm-3 Col-xs-6">
                <h5 className="cwhite">About Us</h5>
                <ul>
                    <li><a className="cwhite" href="/about" title="About Apartments.com">About Us</a></li> 
                    <li><a className="cwhite" href="https://www.costargroup.com/careers" title="Job Opportunities at Apartments.com">Careers</a></li> 
                    <li><a className="cwhite" href="/about/contact" title="Contact Apartments.com">Contact Us</a></li> 
                    <li><a className="cwhite" href="/about/legal-terms">Legal Notices</a></li> 
                    <li><a className="cwhite" href="/about/privacy-notice">Privacy Notice</a></li> 
                </ul>
            </div> 
        </div>
    </div>
      );
    }
  }
  export default HomiesFooter;