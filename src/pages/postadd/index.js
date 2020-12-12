import React, { Component} from "react";
import './index.css';
import './postadds.js';
class PostAdd extends Component{
    render(){
        return( 
        <div className="container">
            <div className="postheadingcontainer">
                <h1 className="postHeading">Add Your Property</h1>
                <p className="postPar">Reach millions of renters. Screen applicants.
                                Sign leases. Set up rent payments. </p>
            </div>
            <div className="inputfieldContainer">
                <div className="addressfield margin_bottom_20">
                    <label className="postLabel">Address* </label>
                    <p className="errorMessage hidden">This field is required*</p>
                    <input type="text" id="postInputAddress" 
                    className="postInput postInputAddress" placeholder="Enter the address"></input>  
                </div>
                <div className="titleField margin_bottom_20">
                    <label className="postLabel">Title* </label>
                    <p className="errorMessage hidden">This field is required*</p>
                    <input type="text" id="postTitle" 
                    className="postInput postTitle" placeholder="Enter Title"></input>  
                </div>

                <div className="addressTypefield margin_bottom_20">
                    <label className="postLabel ">Property Type* </label>
                    <p className="errorMessage hidden">This field is required*</p>
                    <select className="postInput" name="propertyType" id="propertyType">
                        <option value="select">Select</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Singl Room">Single Room</option>
                        <option value="Shared Room">Shared Room</option>
                        <option value="pg">Paying Guest</option>
                        <option value="Single Famil House">Single Family House</option>
                        <option value="Condominium">Condominium</option>
                        <option value="TownHouse">TownHouse</option>
                    </select>
                </div>

                <div className="splitfield margin_bottom_20">
                    <div className="leftField bedRoomsField">
                        <label className="postLabel">BedRooms* </label>
                        <p className="errorMessage hidden">This field is required*</p>
                        <select className="postInput" name="noBedRooms" id="noBedRooms">
                            <option value="select">Select</option>
                            <option value="studio">Studio</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <div className="rightField bathRoomsField">
                        <label className="postLabel">Baths*</label>
                        <p className="errorMessage hidden">This field is required*</p>
                        <select className="postInput" name="noBaths" id="noBaths">
                            <option value="select">Select</option> 
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                </div>
                
                <div className="splitfield margin_bottom_20">
                    <div className="leftField roomMatesField">
                        <label className="postLabel">Current Room mates </label>
                        <p className="errorMessage hidden">This field is required*</p>
                        <select className="postInput" name="noRoomMates" id="noRoomMates">
                            <option value="select">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <div className="rightField genderField">
                        <label className="postLabel">Gender Preference*</label>
                        <p className="errorMessage hidden">This field is required*</p>
                        <select className="postInput" name="genderPreference" id="genderPreference">
                            <option value="select">Select</option> 
                            <option value="any">Any</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div> 
                </div>

                <div className="splitfield margin_bottom_20">
                    <div className="leftField monthlyRentField">
                        <label className="postLabel">Monthly Rent $*</label>
                        <p className="errorMessage hidden">This field is required*</p>
                        <input type="text" id="monthlyrent" 
                        className="postInput monthlyrent" placeholder="Rent Per Month."></input>
                    </div>
                    <div className="rightField depositField">
                        <label className="postLabel">Deposit $</label>
                        <p className="errorMessage hidden">This field is required*</p>
                        <input type="text" id="deposit" 
                        className="postInput deposit" placeholder="Move In Deposit"></input>
                    </div> 
                </div>

                <div className="amenitiesSection margin_bottom_20">
                    <label className="postLabel">Amenities Available</label>
                    <div className="amenitiesContainer amenitiesSelect">
                        <div className="amenitiespodContainer">
                            <div className="amenitiespod">
                            <input type="checkbox" id="aWater"/>
                            <label className="IconCursor" htmlFor="aWater">
                                <img className="iconHold" src={require('../../resource/postAdd/amenities/water.jpg')} />
                                water
                            </label>
                            </div>
                        </div>

                         <div className="amenitiespodContainer">
                            <div className="amenitiespod">
                            <input type="checkbox" id="aAc"/>
                            <label className="IconCursor" htmlFor="aAc">
                                <img className="iconHold" src={require('../../resource/postAdd/amenities/ac.png')} />
                                AirCondition
                            </label>
                            </div>
                        </div>

                        <div className="amenitiespodContainer">
                            <div className="amenitiespod">
                            <input type="checkbox" id="aElectricity"/>
                            <label className="IconCursor" htmlFor="aElectricity">
                                <img className="iconHold" src={require('../../resource/postAdd/amenities/electricity.png')} />
                                Electricity
                            </label>
                            </div>
                        </div>

                        <div className="amenitiespodContainer">
                            <div className="amenitiespod">
                            <input type="checkbox" id="aFridge"/>
                            <label className="IconCursor" htmlFor="aFridge">
                                <img className="iconHold" src={require('../../resource/postAdd/amenities/fridge.png')} />
                                Fridge
                            </label>
                            </div>
                        </div>

                        <div className="amenitiespodContainer">
                            <div className="amenitiespod">
                            <input type="checkbox" id="aHeater"/>
                            <label className="IconCursor" htmlFor="aHeater">
                                <img className="iconHold" src={require('../../resource/postAdd/amenities/heater.png')} />
                                Heater
                            </label>
                            </div>
                        </div>

                         <div className="amenitiespodContainer">
                            <div className="amenitiespod">
                            <input type="checkbox" id="aKitchen"/>
                            <label className="IconCursor" htmlFor="aKitchen">
                                <img className="iconHold" src={require('../../resource/postAdd/amenities/kitchen.png')} />
                                Kitchen
                            </label>
                            </div>
                        </div>

                        <div className="amenitiespodContainer">
                            <div className="amenitiespod">
                            <input type="checkbox" id="aMicrowave"/>
                            <label className="IconCursor" htmlFor="aMicrowave">
                                <img className="iconHold" src={require('../../resource/postAdd/amenities/microwave.png')} />
                                microwave
                            </label>
                            </div>
                        </div>

                         <div className="amenitiespodContainer">
                            <div className="amenitiespod">
                            <input type="checkbox" id="aWifi"/>
                            <label className="IconCursor" htmlFor="aWifi">
                                <img className="iconHold" src={require('../../resource/postAdd/amenities/wifi.png')} />
                                WiFi
                            </label>
                            </div>
                        </div>

                        <div className="amenitiespodContainer">
                            <div className="amenitiespod">
                            <input type="checkbox" id="aFoodService"/>
                            <label className="IconCursor" htmlFor="aFoodService">
                                <img className="iconHold" src={require('../../resource/postAdd/amenities/foodservice.png')} />
                                Food Service
                            </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="splitfield margin_bottom_20">
                    <div className="leftField availableDateField">
                        <label className="postLabel">Avaiable From* </label>
                        <p className="errorMessage hidden">This field is required*</p>
                        <input type="date" className="postInput availabledate" id="availabledate" name="availabledate"></input>
                    </div>
                    <div className="rightField leaseField">
                        <label className="postLabel">Lease (if any)</label>
                        <p className="errorMessage hidden">This field is required*</p>
                        <select className="postInput" name="lease" id="leaseperiod">
                            <option value="select">Select</option>
                            <option value="none">None</option>
                            <option value="month2month">Month to Month</option>
                            <option value="yearly">Yearly</option>
                            <option value="six month">Six Months</option>
                        </select>
                    </div>
                </div>

                <div className="addressfield margin_bottom_20">
                    <label className="postLabel">University/Company Near by</label>
                    <input type="text" id="landmarks" 
                    className="postInput landmarks" placeholder="Enter the address"></input>  
                    <div id="landmarkslist" className="landmarkslist">

                    </div>
                </div>

                <div className="uploadImageContainer margin_bottom_20">
                    <label className="postLabel">Upload Images (max 5)</label>
                     <input type="file" className="postInput uploadImage" id="files" name="files[]" multiple />
                     <div id="galery" className="galery"></div>
                </div> 

                <div className="utilitiesSection margin_bottom_20">
                    <label className="postLabel">Utilities Available</label>
                    <div className="amenitiesContainer utilitiesSelect">
                        <div className="amenitiespodContainer">
                            <div className="amenitiespod">
                            <input type="checkbox" id="uswimmingPool"/>
                            <label className="IconCursor" htmlFor="uswimmingPool">
                                <img className="iconHold" src={require('../../resource/postAdd/utilities/swimming.jpg')} />
                                pool
                            </label>
                            </div>
                        </div>

                         <div className="amenitiespodContainer">
                            <div className="amenitiespod">
                            <input type="checkbox" id="uparking"/>
                            <label className="IconCursor" htmlFor="uparking">
                                <img className="iconHold" src={require('../../resource/postAdd/utilities/parking.png')} />
                                Parking
                            </label>
                            </div>
                        </div>

                        <div className="amenitiespodContainer">
                            <div className="amenitiespod">
                            <input type="checkbox" id="ugarbage"/>
                            <label className="IconCursor" htmlFor="ugarbage">
                                <img className="iconHold" src={require('../../resource/postAdd/utilities/garbage.png')} />
                                Garbage
                            </label>
                            </div>
                        </div>

                        <div className="amenitiespodContainer">
                            <div className="amenitiespod">
                            <input type="checkbox" id="usecurity"/>
                            <label className="IconCursor" htmlFor="usecurity">
                                <img className="iconHold" src={require('../../resource/postAdd/utilities/security.png')} />
                                Security
                            </label>
                            </div>
                        </div>

                        <div className="amenitiespodContainer">
                            <div className="amenitiespod">
                            <input type="checkbox" id="ulaundry"/>
                            <label className="IconCursor" htmlFor="ulaundry">
                                <img className="iconHold" src={require('../../resource/postAdd/utilities/laundry.jpg')} />
                                Laundry
                            </label>
                            </div>
                        </div>

                         <div className="amenitiespodContainer">
                            <div className="amenitiespod">
                            <input type="checkbox" id="ugym"/>
                            <label className="IconCursor" htmlFor="ugym">
                                <img className="iconHold" src={require('../../resource/postAdd/utilities/gym.jpg')} />
                                Gym
                            </label>
                            </div>
                        </div>

                        <div className="amenitiespodContainer">
                            <div className="amenitiespod">
                            <input type="checkbox" id="ubackyard"/>
                            <label className="IconCursor" htmlFor="ubackyard">
                                <img className="iconHold" src={require('../../resource/postAdd/utilities/backyard.jpg')} />
                                BackYard
                            </label>
                            </div>
                        </div> 
                    </div>
                </div>

                <div className="preferencesSection margin_bottom_20">
                    <label className="postLabel">Preference*</label>
                    <div className="amenitiesContainer preferenceSelect"> 
                        <div className="splitfield margin_bottom_20">
                            <div className="leftField foodField">
                                <label className="postLabel">Food </label>
                                <p className="errorMessage hidden">This field is required*</p>
                                <select className="postInput" name="foodOption" id="foodOption">
                                    <option value="select">Select</option>
                                    <option value="veg">Veg</option>
                                    <option value="non_veg">Veg/Non-Veg</option>
                                </select>
                            </div>
                            <div className="rightField petField">
                                <label className="postLabel">Pets</label>
                                <p className="errorMessage hidden">This field is required*</p>
                                <select className="postInput" name="pets" id="pets">
                                    <option value="select">Select</option> 
                                    <option value="Pets Not Allowed">Pets Not Allowed</option>
                                    <option value="pets Allowed">Pets Allowed</option>
                                    <option value="Only Cat">Only Cat</option>
                                    <option value="Only Dog">Only Dog</option>
                                </select>
                            </div>
                        </div>

                         <div className="splitfield margin_bottom_20">
                            <div className="leftField smoakingField">
                                <label className="postLabel">Smoaking </label>
                                <p className="errorMessage hidden">This field is required*</p>
                                <select className="postInput" name="smoaking" id="smoaking">
                                    <option value="select">Select</option>
                                    <option value="Not Allowed">Not Allowed</option>
                                    <option value="Allowed">Allowed</option>
                                    <option value="Only Outside">Only Outside</option>
                                </select>
                            </div>
                            <div className="rightField roomConditionField">
                                <label className="postLabel">Room Condition</label>
                                <p className="errorMessage hidden">This field is required*</p>
                                <select className="postInput" name="roomCondition" id="roomCondition">
                                    <option value="select">Select</option> 
                                    <option value="Fully Furnished">Fully Furnished</option>
                                    <option value="Semi Furnished">Semi Furnished</option>
                                    <option value="Not Furnished">Not Furnished</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="additionalInformation margin_bottom_20">
                    <label className="postLabel">Additional Information*</label>
                    <p className="errorMessage hidden">This field is required*</p>
                    <textarea className="postInput addInfo" id="addInfo" placeholder="Enter additional Informations..." name="addInfo">
                        
                    </textarea>  
                </div>

                <div className="submitPostContainer">
                    <button className="submitPost">
                            <span className="postsubmittext">Submit Post</span>
                    </button>
                    <p className="errorMessage postsubmiterror hidden">Please complete all required fiels*</p>
                </div> 
            </div>  
        </div>
        )
    }
  }
  export default PostAdd;