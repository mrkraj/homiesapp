import React, { Component} from "react";
import './index.css';
import './autocomplete.js'
class SearchAddress extends Component{
    render(){
      return(
      <section className="SearchAddress container">
         <div className="heroSearchWrap">
            <h1 className="mainTitle quickSearchMainTitle">Discover Your New Home</h1>
            <p className="quickSearchSubTitle">Helping 100 million renters find their perfect fit.</p>
            <div className="quickSearch">
                <div className="inputWrap">
                    <input type="text" id="quickSearchLookup" 
                    className="quickSearchLookup" autoCorrect="false" 
                    autoComplete="off" placeholder="Enter City or Zipcode"></input>  
                    <button className="searchButton searchApartments">
                        <span className="searchText">Search</span>
                    </button>
                </div>
                 <p className="hidden errorMessage">Please Enter City or Zipcode.</p>
            </div>
        </div>
        <div className="geoHomepageHeroImage"></div>
        <div className="geoHomepageHeroImageoverlay"></div>
       </section>
      );
    }
  }
  export default SearchAddress;

  