import React, { Component} from "react";
import './index.css';
import SearchAddress from '../../component/searchaddress';
import FeatureModel from '../../component/featuredModel';
class HomePage extends Component{
    render(){
      return(
        <div>
        <SearchAddress></SearchAddress>
        <FeatureModel></FeatureModel>
        </div>
      );
    }
  }
  export default HomePage;