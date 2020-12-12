/* eslint no-undef: "off"*/
window.addEventListener("load",function(event) {
    console.log("ready postadd!");
	try{
		var postAddress="", 
			landmarkAddress="",
			postTitle ="",
			postAddressObj ={}, 
			landmarks = [],
			postImages = [],
			postZipCode = "",
			postLat="",
			postLng="",
			postAddressAutoComplete=false,
			landMarkAutoComplete=false,
			postCity = "",
			postUser="",
			longstate="",
			requestParam ={};
 
		//Land Mark Auto Complete. 
		$('.landmarks').on('keyup', function (e) {
			landmarkAddress = $(this).val();
			if(!landMarkAutoComplete){
				LandMarkSearch();
			}
		})
		
		function LandMarkSearch() {
			if(window.google) {
				landMarkAutoComplete=true;
				var landmarkinput, infowindow;
				var streetName;
				landmarkinput = document.getElementById('landmarks');
				infowindow = new google.maps.InfoWindow();
				autocomplete = new google.maps.places.Autocomplete(landmarkinput);
				autocomplete.setComponentRestrictions({ 'country': ['us']});
				autocomplete.setTypes(['geocode']);
				 autocomplete.addListener('place_changed', function () {
					try{
						var autoObj = autocomplete.gm_accessors_.place;
						console.log(autoObj);
						var prediction_address1 = autoObj.qe.formattedPrediction;
						if(prediction_address1 != null && prediction_address1 != ""){
							streetName = prediction_address1.split(',')[0]; 
							console.log(streetName);
							landmarks.push(streetName);
						}
					}catch(e){
						console.log("auto suggestion object is empty");
					} 
						console.log("inside object");
						var html = '';
						for (var i = 0; i < landmarks.length; i++) {
							html += '<li>' + landmarks[i];
							html += '</li>';
							console.log(landmarks[i]);
							console.log(html);
						}
						document.getElementById('landmarkslist').innerHTML = '<ul>' + html + '</ul>';
					
				})
			} 
		}	 	

		function getCookie(name) {
			match = document.cookie.match(new RegExp(name + '=([^;]+)'));
			if (match) return match[1];
		}

		//Street Address Auto Complete. 
		$('.postInputAddress').on('keyup', function (e) {
			postAddress = $(this).val();
			if(!postAddressAutoComplete){
				postAddressSearch();
			}
		})
		
		function postAddressSearch(){
			if(window.google) { 
				postAddressAutoComplete=true;
				var postinput,infowindow;
				var address2, longcity, longzipcode,longstreetnumber,longroute;
				postinput = document.getElementById('postInputAddress');
				infowindow = new google.maps.InfoWindow();
				autocomplete = new google.maps.places.Autocomplete(postinput);
				autocomplete.setComponentRestrictions({ 'country': ['us']});
				autocomplete.setTypes(['geocode']);
				autocomplete.addListener('place_changed', function () {
						var	userPlace = autocomplete.getPlace();
					try{
						postLat = (autocomplete.getPlace().geometry && userPlace.geometry.location && userPlace.geometry.location.lat()) || '';
						postLng = (autocomplete.getPlace().geometry && userPlace.geometry.location && userPlace.geometry.location.lng()) || '';
					}catch(e){
						console.log("error while getting the lat/lng"+e);
					}
				try{
						var autoObj = autocomplete.gm_accessors_.place;
						console.log(autoObj);
						for (let i = 0; i < userPlace.address_components.length; i++) {
							for (let j = 0; j < userPlace.address_components[i].types.length; j++) { 
								if(userPlace.address_components[i].types[j] ==="administrative_area_level_1"){ 
									longstate = userPlace.address_components[i].long_name; 
								}else if(userPlace.address_components[i].types[j] ==="postal_code"){ 
									longzipcode = userPlace.address_components[i].long_name; 
									postZipCode = longzipcode;
								}else if(userPlace.address_components[i].types[j] ==="street_number"){ 
									longstreetnumber = userPlace.address_components[i].long_name; 
								}else if(userPlace.address_components[i].types[j] ==="route"){ 
									longroute = userPlace.address_components[i].long_name; 
								}else if(userPlace.address_components[i].types[j] ==="locality"){ 
										 longcity = userPlace.address_components[i].long_name; 
										 postCity = longcity;
									}
							}	  	 
						}
						longaddress1 = longstreetnumber + " " + longroute;
						var prediction_address1 = autoObj.qe.formattedPrediction;
						if(prediction_address1 != null && prediction_address1 != ""){
							longaddress1 = prediction_address1.split(',')[0]; 
						}
						postAddressObj = {"address1": longaddress1, "address2": address2, "city": longcity, "state": longstate, "zipcode": longzipcode, "lat": postLat, "lng":postLng };
					}catch(e){
						console.log("auto suggestion object is empty");
					} 
					 
				})
			} 
		}	 
		
	}catch(error){
		console.log("error:"+error)
	}

	//Image Upload and preview
	try{
		$("#files").on("change", function(e) {
			var files = e.target.files,
			  filesLength = files.length;
			for (var i = 0; i < filesLength; i++) {
			  var f = files[i]
			  var fileReader = new FileReader();
			  fileReader.onloadend = (function(file) {
				return function(e) {
					var imageobj = {};
					imageobj={"fileName":file.name,"file":e.target.result};
					postImages.push(imageobj);
					$('.galery').append("<span class=\"pip\">" +
					"<br/><span  id=\"" + file.name.split('.')[0] + "\" class=\"clearImage\">x</span>" +
					"<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name.split('.')[0] + "\"/>" +
					"</span>");
					$(".clearImage").click(function(){
						$(this).parent(".pip").remove();
						var removefile = this.id;
						for(var j=0; j<postImages.length ; j++){
							if(postImages[j].fileName === removefile){
								postImages.splice(j,1);
							}
						}
				 	}); 
				};
			  })(f);
 			  fileReader.readAsDataURL(f);
			}
		  });		
	}catch(error){
		console.log("error while fetching images"+ e);
	}

	try{
	//Event Listener
			$('.postInputAddress').on('keyup', function (e) {
				$('.addressfield .errorMessage').addClass('hidden');
			});

			$('.postTitle').on('keyup', function (e) {
				$('.postTitleField .errorMessage').addClass('hidden');
			});
			$( "#propertyType" ).change(function(){
				$('.addressTypefield .errorMessage').addClass('hidden');
			});

			$( "#noBedRooms" ).change(function(){
				$('.bedRoomsField .errorMessage').addClass('hidden');
			});

			$( "#noBaths" ).change(function(){
				$('.bathRoomsField .errorMessage').addClass('hidden');
			});

			$( "#noRoomMates" ).change(function(){
				$('.roomMatesField .errorMessage').addClass('hidden');
			});

			$( "#genderPreference" ).change(function(){
				$('.genderField .errorMessage').addClass('hidden');
			});

			$('.monthlyrent').on('keyup', function (e) {
				$('.monthlyRentField .errorMessage').addClass('hidden');
			});

			$('.deposit').on('keyup', function (e) {
				$('.depositField .errorMessage').addClass('hidden');
			});

			$('.availabledate').change(function(){
				$('.availableDateField .errorMessage').addClass('hidden');
			});

			$( "#leaseperiod").change(function(){
				$('.leaseField .errorMessage').addClass('hidden');
			});

			$( "#foodOption").change(function(){
				$('.foodField .errorMessage').addClass('hidden');
			});

			$( "#pets").change(function(){
				$('.petField .errorMessage').addClass('hidden');
			});

			$( "#smoaking" ).change(function(){
				$('.smoakingField .errorMessage').addClass('hidden');
			});

			$( "#roomCondition" ).change(function(){
				$('.roomConditionField .errorMessage').addClass('hidden');
			});

			$('.addInfo').on('keyup', function (e) {
				$('.additionalInformation .errorMessage').addClass('hidden');
			});
		}catch(error){

		}

	//Submit Post
	function uploadPost(params) {
		if(getCookie("cus_homies")){
			var url = "/homies/Upload";
			$.ajax({
				async: true,
				type: 'POST',
				url: url,
				headers: {
					"Content-Type": "application/json"
				},
				data: JSON.stringify(params),
				dataType: "json",
				success: function(response) {
					console.log(response);
					console.log("Add Posted");
				 
				},
				error: function(error) {
					console.log(error);
				}
			});	
		}else{
			var customerPopup = $('#LoginContainer');
            $('body').append(customerPopup);
            $('body > div').attr('aria-hidden','true').attr('tabindex','-1');
			customerPopup.removeAttr('aria-hidden').removeAttr('tabindex').removeClass('hidden');
			
			//listen for the cus_homies cookie getting added from login.
			var timer = setInterval(postAfterLogin, 1000);
				function postAfterLogin() {
					if(getCookie("cus_homies")) {
						var decookieValue = getCookie("cus_homies");
						var decodeString = atob(decookieValue);
						var parseCookie = decodeString.split("||");
						postUser = parseCookie[1];
						requestParam['postUser']=postUser;
					    uploadPost(requestParam);
						clearInterval(timer);
					}
				}
			}
		}	

	//Validate Input entries.
 
		var postInputAddress,PropertyType,noBedRooms,noBaths,noRoomMates,genderPreference,
		monthlyrent,deposit,availabledate,leaseperiod,foodOption,pets,smoaking,roomCondition,
		addInfo;
		var amenitiesList = [];
		var utilitiesList = [];

		$('.submitPost').on('click', function (e) {
				var fieldsClear = true;
				postInputAddress = $('#postInputAddress').val(); 
				if(postInputAddress === null || postInputAddress === ""){
					$('.addressfield .errorMessage').removeClass('hidden');
					fieldsClear = false;
				}
				postTitle = $('#postTitle').val(); 
				if(postTitle === null || postTitle === ""){
					$('.postTitle .errorMessage').removeClass('hidden');
					fieldsClear = false;
				}
				PropertyType= $('#propertyType').val();
				if(PropertyType === null || PropertyType === "" || PropertyType === "select"){
					$('.addressTypefield .errorMessage').removeClass('hidden');
					fieldsClear = false;
				}
				noBedRooms = $('#noBedRooms').val();
				if(noBedRooms === null || noBedRooms === "" || noBedRooms === "select"){
					$('.bedRoomsField .errorMessage').removeClass('hidden');
					fieldsClear = false;
				}
				noBaths = $('#noBaths').val();
				if(noBaths === null || noBaths === "" || noBaths === "select"){
					$('.bathRoomsField .errorMessage').removeClass('hidden');
					fieldsClear = false;
				}
				noRoomMates = $('#noRoomMates').val();
				if(noRoomMates === null || noRoomMates === "" || noRoomMates === "select"){
					$('.roomMatesField .errorMessage').removeClass('hidden');
					fieldsClear = false;
				}
				genderPreference = $('#genderPreference').val();
				if(genderPreference === null || genderPreference === "" || genderPreference === "select"){
					$('.genderField .errorMessage').removeClass('hidden');
					fieldsClear = false;
				}
				monthlyrent = $('#monthlyrent').val();
				if(monthlyrent === null || monthlyrent === "" || monthlyrent === "select"){
					$('.monthlyRentField .errorMessage').removeClass('hidden');
					fieldsClear = false;
				}
				deposit = $('#deposit').val();
				if(deposit === null || deposit === "" || deposit === "select"){
					$('.depositField .errorMessage').removeClass('hidden');
					fieldsClear = false;
				}
				availabledate = $('#availabledate').val();
				if(availabledate === null || availabledate === "" || availabledate === "select"){
					$('.availableDateField .errorMessage').removeClass('hidden');
					fieldsClear = false;
				}
				leaseperiod = $('#leaseperiod').val();
				if(leaseperiod === null || leaseperiod === "" || leaseperiod === "select"){
					$('.leaseField .errorMessage').removeClass('hidden');
					fieldsClear = false;
				}
				foodOption = $('#foodOption').val();
				if(foodOption === null || foodOption === "" || foodOption === "select"){
					$('.foodField .errorMessage').removeClass('hidden');
					fieldsClear = false;
				}
				pets = $('#pets').val();
				if(pets === null || pets === "" || pets === "select"){
					$('.petField .errorMessage').removeClass('hidden');
					fieldsClear = false;
				}
				smoaking = $('#smoaking').val();
				if(smoaking === null || smoaking === "" || smoaking === "select"){
					$('.smoakingField .errorMessage').removeClass('hidden');
					fieldsClear = false;
				}
				roomCondition = $('#roomCondition').val();
				if(roomCondition === null || roomCondition === "" || roomCondition === "select"){
					$('.roomConditionField .errorMessage').removeClass('hidden');
					fieldsClear = false;
				}
				addInfo = $('#addInfo').val();
				if(addInfo === null || addInfo === "" || addInfo === "select"){
					$('.additionalInformation .errorMessage').removeClass('hidden');
					fieldsClear = false;
				}
				$('.amenitiesSelect input:checked').each(function() {
					amenitiesList.push($(this).attr('id'));
				});
				$('.utilitiesSelect input:checked').each(function() {
					utilitiesList.push($(this).attr('id'));
				});
				console.log("fieldClear:"+fieldsClear)
				if(fieldsClear=== true){
					$('.postsubmiterror').addClass('hidden');
					if(getCookie("cus_homies")) {
						var decookieValue = getCookie("cus_homies");
						var decodeString = atob(decookieValue);
						var parseCookie = decodeString.split("||");
						postUser = parseCookie[1];
					}
					requestParam =  {
						"postUser":postUser,
						"postTitle":postTitle,
						"postAddress":postInputAddress,
						"postZipCode":postZipCode,
						"postCity":postCity,
						"postState":longstate,
						"postLat":postLat,
						"postLng":postLng,
						"formatedAddress":postAddressObj,
						"bedRooms":noBedRooms,
						"baths":noBaths,
						"propertyType":PropertyType,
						"roomMates":noRoomMates,
						"gender":genderPreference,
						"rent":monthlyrent, 
						"deposit":deposit, 
						"availableDate":availabledate, 
						"lease":leaseperiod, 
						"foodOption":foodOption, 
						"pets":pets, 
						"smoaking":smoaking, 
						"roomCondition":roomCondition, 
						"addInfo":addInfo, 
						"amenities":amenitiesList, 
						"utilities":utilitiesList, 
						"images":postImages, 
						"landmarks":landmarks
					};
					console.log("requestParams:"+requestParam);
					uploadPost(requestParam);
				}else{
					$('.postsubmiterror').removeClass('hidden');
				}
			
		});
	
 });
