import React, { Component} from "react";
import "./index.css";
import '../../resource/externalLibs/css/swiper.min.css';
import "./viewdetail.js";
import axios from 'axios';
import FeatureModel from '../../component/featuredModel';
import ContactPoster from '../../pages/contactposter';
import $ from 'jquery'; 

class ViewDetails extends Component{
    constructor(props) {
        super(props);
          this.state = {

        };
      }

      amenitiesSwitch(param) {
        switch(param.num) {
          case 'aMicrowave': $('.aMicrowave').removeClass('hidden'); break
          case 'aAc': $('.aAc').removeClass('hidden');break
          case 'aElectricity': $('.aElectricity').removeClass('hidden');break
          case 'aHeater': $('.aHeater').removeClass('hidden');break
          case 'aKitchen': $('.aKitchen').removeClass('hidden');break
          case 'aWifi': $('.aWifi').removeClass('hidden');break
          case 'aFood': $('.aFood').removeClass('hidden');break
          case 'aFridge': $('.aFridge').removeClass('hidden');break
          default: ;
        }
      };

      utilitiesSwitch(param) {
        switch(param.num) {
          case 'ulaundry': $('.ulaundry').removeClass('hidden');break
          case 'uswimmingPool': $('.uswimmingPool').removeClass('hidden');break
          case 'ubackyard': $('.ubackyard').removeClass('hidden');break
          case 'ugarbage': $('.ugarbage').removeClass('hidden');break
          case 'uparking': $('.uparking').removeClass('hidden');break
          case 'ugym': $('.ugym').removeClass('hidden');break
          case 'usecurity': $('.usecurity').removeClass('hidden');break
          default: ;
        }
      };

      //On page load make a ajax call to get the products. 
      componentDidMount() { 
        const productParam = {};
        const ajaxURL = "/homies/prodcutdetails";
        const requestUrl = window.location.href;
        const url = new URL(requestUrl);
        const productId = url.searchParams.get("productid"); 
        productParam.productId = productId;
        // window.showLoader();
        
          axios
            .post(ajaxURL, productParam)
            .then((response) => {
              if (response.status === 200) {
                const postTitle = response.data[0].map.postTitle;
                const postID = response.data[0].map.postID;
                const postUser = response.data[0].map.postUser;
                const postAddress = response.data[0].map.postAddress;
                const postZipCode = response.data[0].map.postZipCode;
                const postCity = response.data[0].map.postCity;
                const postLat = response.data[0].map.postLat;
                const postLng = response.data[0].map.postLng;
                const bedRooms = response.data[0].map.bedRooms;
                const baths = response.data[0].map.baths;
                const propertyType = response.data[0].map.propertyType;
                const roomMates = response.data[0].map.roomMates;
                const gender = response.data[0].map.gender;
                const rent = response.data[0].map.rent;
                const deposit = response.data[0].map.deposit;
                const availableDate = response.data[0].map.availableDate;
                const lease = response.data[0].map.lease;
                const foodOption = response.data[0].map.foodOption;
                const pets = response.data[0].map.pets;
                const smoaking = response.data[0].map.smoaking;
                const roomCondition = response.data[0].map.roomCondition;
                const addInfo = response.data[0].map.addInfo;
                const amenitie = response.data[0].map.amenities.replace(/'/g, '"'); 
                const amenities = JSON.parse(amenitie);
                const utilitie = response.data[0].map.utilities.replace(/'/g, '"');
                const utilities = JSON.parse(utilitie);
                const images = response.data[0].map.images;
                const landmark = response.data[0].map.landmarks.replace(/'/g, '"'); 
                const landmarks = JSON.parse(landmark);
                const postedDate = response.data[0].map.postedDate;
                const firstName = response.data[0].map.firstName;
                const phoneNumber = response.data[0].map.phoneNumber;
                const emailAddress = response.data[0].map.emailAddress;  

                this.setState({ postTitle ,postID ,postUser,postAddress ,postZipCode,postCity,
                    postLat, postLng,bedRooms, baths,propertyType,roomMates,gender, rent,
                    deposit,availableDate,lease,foodOption,pets,smoaking,roomCondition,addInfo,
                    amenities,utilities, images,landmarks,postedDate,firstName,phoneNumber,emailAddress});
                console.log(response.statusCode);
              } else {
                // window.hideLoader();
               }
            })
            .catch((error) => {
              // window.hideLoader();
             }); 
      };
      render(){ 
  return (
    <div className="container">
        <div className="viewdetailsContainer">
            <div className="viewDetailTitleContainer boxedcontainer">
                <h1 className="viewdetail-heading"> 
                    {this.state.postTitle}</h1>
                <p className="postPar">{this.state.postAddress}</p>
            </div>
            <div className="roomhighlightscontainer">
                <div className="roomdetails">
                    <ul className="clearfix">
                        <li>
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/viewdetailsicons/propertytype.jpg')} />
                            </div>
                            <div className="details-high-label">
                                <p className="highlights-label">Property Type</p>
                                <p className="highlights-value ">{this.state.propertyType}</p>
                            </div>
                        </li>
                        <li>
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/viewdetailsicons/rooms.png')} />
                            </div>
                            <div className="details-high-label">
                                <p className="highlights-label">No of Rooms</p>
                                <p className="highlights-value">{this.state.bedRooms}</p>
                            </div>
                        </li>
                        <li>
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/viewdetailsicons/calender.png')} />
                            </div>
                            <div className="details-high-label">
                                <p className="highlights-label">Available Date</p>
                                <p className="highlights-value">{this.state.availableDate}</p>
                            </div>
                        </li>
                        <li>
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/viewdetailsicons/gender.png')} />
                            </div>
                            <div className="details-high-label">
                                <p className="highlights-label">Gender</p>
                                <p className="highlights-value">{this.state.gender}</p>
                            </div>
                        </li>
                        <li>
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/viewdetailsicons/furnished.png')} />
                            </div>
                            <div className="details-high-label">
                                <p className="highlights-label">Room Condition</p>
                                <p className="highlights-value">{this.state.roomCondition}</p>
                            </div>
                        </li>
                        <li>
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/viewdetailsicons/lease.png')} />
                            </div>
                            <div className="details-high-label">
                                <p className="highlights-label">Lease</p>
                                <p className="highlights-value">{this.state.lease}</p>
                            </div>
                        </li>
                        <li>
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/viewdetailsicons/baths.png')} />
                            </div>
                            <div className="details-high-label">
                                <p className="highlights-label">No of Baths</p>
                                <p className="highlights-value">{this.state.baths}</p>
                            </div>
                        </li>
                        <li>
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/viewdetailsicons/calender.png')} />
                            </div>
                            <div className="details-high-label">
                                <p className="highlights-label">Posted Date</p>
                                <p className="highlights-value">{this.state.postedDate}</p>
                            </div>
                        </li>
                        <li>
                            <div className="details-high-label">
                                <p className="highlights-value poster_name">Posted By: {this.state.firstName}</p>
                                <p className="highlights-value poster_contact">contact: {this.state.phoneNumber}</p>
                                <p className="highlights-value hidden poster_email">Email: {this.state.emailAddress}</p>
                            </div>
                        </li> 
                    </ul> 
                </div>
                <div className="room-detail-img-container">
                    <div className="room-rent-container">
                        <h2 className="swiper_rent_field">{this.state.rent}/Month</h2>
                    </div>
                    <div className="image-swiper-container">
                        <div className="swiper-wrapper">
                            <div className='swiper-slide'>
                                <div className="swiperImageContainer">
                                    <img className="swiperImagehold" src={require('../../resource/viewdetailsicons/rooms.png')} />
                                </div>
                            </div>
                            <div className='swiper-slide'>
                                <div className="swiperImageContainer">
                                    <img className="swiperImagehold" src={require('../../resource/viewdetailsicons/calender.png')} />
                                </div>
                            </div>
                            <div className='swiper-slide'>
                                <div className="swiperImageContainer">
                                    <img className="swiperImagehold" src={require('../../resource/viewdetailsicons/propertytype.jpg')} />
                                </div>
                            </div>
                            <div className='swiper-slide'>
                                <div className="swiperImageContainer">
                                    <img className="swiperImagehold" src={require('../../resource/viewdetailsicons/lease.png')} />
                                </div>
                            </div>
                        </div> 
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
            
            <div className="viewDetailaddInfoContainer boxedcontainer">
                <h3 className="viewdetail-heading">Poster's Statement</h3>
                <p className="additionalInfo"> 
                   {this.state.addInfo}</p>

                <h3 className="viewdetail-heading">Major Locations Near By</h3>
                <ul className="clearfix"> 
                    { this.state.landmarks && this.state.landmarks.map(num => (
                        <li>{num}</li>
                    ))}  
                </ul>
            </div>

             <div className="viewDetailaddInfoContainer boxedcontainer">
                <h3 className="viewdetail-heading">More Information</h3>

                <div className="room-moreinfo">
                    <ul className="clearfix">
                        <li> 
                            <div className="room-moreinfo-con">
                                <p className="highlights-label">Accomaodates</p>
                                <p className="highlights-value">{this.state.roomMates}</p>
                            </div>
                        </li>
                        <li> 
                            <div className="room-moreinfo-con">
                                <p className="highlights-label">Deposit</p>
                                <p className="highlights-value">${this.state.deposit}</p>
                            </div>
                        </li>
                        <li> 
                            <div className="room-moreinfo-con">
                                <p className="highlights-label">Food Allowed</p>
                                <p className="highlights-value">{this.state.foodOption}</p>
                            </div>
                        </li>
                        <li> 
                            <div className="room-moreinfo-con">
                                <p className="highlights-label">Pets</p>
                                <p className="highlights-value">{this.state.pets}</p>
                            </div>
                        </li>
                        <li> 
                            <div className="room-moreinfo-con">
                                <p className="highlights-label">Smoaking</p>
                                <p className="highlights-value">{this.state.smoaking}</p>
                            </div>
                        </li>
                    </ul>
                </div>    
            </div>

            <div className="viewdetail-amenities boxedcontainer">
                <h3 className="viewdetail-heading">Amenities Available</h3>
                <div className="room-amenities">
                    <ul className="clearfix"> 
                        { this.state.amenities && this.state.amenities.map(num => (
                            this.amenitiesSwitch({num})
                        ))}  
                        <li className="aAc hidden"> 
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/postAdd/amenities/ac.png')} />
                            </div>
                            <div className="room-moreinfo">
                                <p className="amenities-value">AirCondition</p>
                            </div>
                        </li>  
                        <li className="aElectricity hidden"> 
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/postAdd/amenities/electricity.png')} />
                            </div>
                            <div className="room-moreinfo">
                                <p className="amenities-value">Electricity</p>
                            </div>
                        </li>
                        <li className="aFood hidden"> 
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/postAdd/amenities/foodservice.png')} />
                            </div>
                            <div className="room-moreinfo">
                                <p className="amenities-value">Food Service</p>
                            </div>
                        </li>
                        <li className="aFridge hidden"> 
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/postAdd/amenities/fridge.png')} />
                            </div>
                            <div className="room-moreinfo">
                                <p className="amenities-value">Fridge</p>
                            </div>
                        </li>
                        <li className="aHeater hidden">  
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/postAdd/amenities/heater.png')} />
                            </div>
                            <div className="room-moreinfo">
                                <p className="amenities-value">Heater</p>
                            </div>
                        </li>
                        <li className="aKitchen hidden">  
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/postAdd/amenities/kitchen.png')} />
                            </div>
                            <div className="room-moreinfo">
                                <p className="amenities-value">Kitchen</p>
                            </div>
                        </li>
                        <li className="aMicrowave hidden"> 
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/postAdd/amenities/microwave.png')} />
                            </div>
                            <div className="room-moreinfo">
                                <p className="amenities-value">Microwave</p>
                            </div>
                        </li>
                        <li className="aWifi hidden">  
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/postAdd/amenities/wifi.png')} />
                            </div>
                            <div className="room-moreinfo">
                                <p className="amenities-value">WiFi</p>
                            </div>
                        </li>
                    </ul>
                </div>    
            </div>

             <div className="viewdetail-utilities boxedcontainer">
                <h3 className="viewdetail-heading">Utilities Available</h3>
                <div className="room-amenities">
                    <ul className="clearfix">
                        { this.state.utilities && this.state.utilities.map(num => (
                            this.utilitiesSwitch({num})
                        ))}  
                        <li className="ubackyard hidden">  
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/postAdd/utilities/backyard.jpg')} />
                            </div>
                            <div className="room-moreinfo">
                                <p className="amenities-value">Back Yard</p>
                            </div>
                        </li>
                        <li className="ugarbage hidden">  
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/postAdd/utilities/garbage.png')} />
                            </div>
                            <div className="room-moreinfo">
                                <p className="amenities-value">Garbage Disposel</p>
                            </div>
                        </li>
                        <li className="ugym hidden">   
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/postAdd/utilities/gym.jpg')} />
                            </div>
                            <div className="room-moreinfo">
                                <p className="amenities-value">Gym</p>
                            </div>
                        </li>
                        <li className="ulaundry hidden">   
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/postAdd/utilities/laundry.jpg')} />
                            </div>
                            <div className="room-moreinfo">
                                <p className="amenities-value">Laundry</p>
                            </div>
                        </li>
                        <li className="uparking hidden">   
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/postAdd/utilities/parking.png')} />
                            </div>
                            <div className="room-moreinfo">
                                <p className="amenities-value">Parking</p>
                            </div>
                        </li>
                        <li className="usecurity hidden">  
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/postAdd/utilities/security.png')} />
                            </div>
                            <div className="room-moreinfo">
                                <p className="amenities-value">Security System</p>
                            </div>
                        </li>
                        <li className="uswimmingPool hidden">  
                            <div className="details-high-icon">
                              <img className="iconHold" src={require('../../resource/postAdd/utilities/swimming.jpg')} />
                            </div>
                            <div className="room-moreinfo">
                                <p className="amenities-value">Swimming Pool</p>
                            </div>
                        </li>
                    </ul>
                </div>    
            </div>
            <div className="contact-poster-container">
                <button className="contact-poster" fn={this.state.firstName} mail= {this.state.emailAddress}>
                    Contact Poster
                </button>
            </div>
        <FeatureModel></FeatureModel>
        <ContactPoster></ContactPoster>
        </div>
    </div>
  );
      }
}
export default ViewDetails;

