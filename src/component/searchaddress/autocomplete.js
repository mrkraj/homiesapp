/* eslint no-undef: "off"*/
window.onload = (event) => {
	console.log( "ready!" );
	try{
		var googleSearchInitialized = false;
		var enteredAddress='';
		var userPlace='';
		var zipCode = '';
		var longaddress1, longcity, longstate, longzipcode,longstreetnumber,longroute;

		$('.searchApartments').on('click', function (e) { 
			if(longzipcode != undefined || longcity != undefined){
				$('.quickSearch .errorMessage').addClass('hidden');
				var searchApt = '/home?zipCode='+longzipcode+'&&city='+longcity+'&&state='+longstate;
				window.location.href = searchApt;
			}else{
				$('.quickSearch .errorMessage').removeClass('hidden');
			}
		})

		$('.quickSearchLookup').on('keyup', function (e) {
		    enteredAddress = $(this).val();
			loadGoogleScript();
		})

		function loadGoogleScript() {
			if (!window.google || !window.google.maps) {
				var channel = getPlatform(),
					gglScript = document.createElement('script');
				gglScript.type = 'text/javascript';
				gglScript.rel = 'stylesheet';
				gglScript.async = 'true';
				gglScript.src = 'https://maps.googleapis.com/maps/api/js?client=gme-verizonwireless2&channel=vzw-' + channel + '&libraries=places&callback=initGoogleSearch';
				(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gglScript);
			} else if (!googleSearchInitialized) {
				initGoogleSearch()
			}
		};
		
		function initGoogleSearch() {
			if(window.google) {
				var input, infowindow;
				googleSearchInitialized= true;
				input = document.getElementById('quickSearchLookup');
				infowindow = new google.maps.InfoWindow();
				autocomplete = new google.maps.places.Autocomplete(input);
				autocomplete.setComponentRestrictions({ 'country': ['us'] });
				autocomplete.setTypes(['geocode']);
				 autocomplete.addListener('place_changed', function () {
					userPlace = autocomplete.getPlace();
					for (let i = 0; i < userPlace.address_components.length; i++) {
						for (let j = 0; j < userPlace.address_components[i].types.length; j++) { 
							if(userPlace.address_components[i].types[j] ==="administrative_area_level_1"){ 
							  longstate = userPlace.address_components[i].long_name; 
							}else if(userPlace.address_components[i].types[j] ==="postal_code"){ 
								longzipcode = userPlace.address_components[i].long_name; 
								console.log("zipCode:"+longzipcode);
							}else if(userPlace.address_components[i].types[j] ==="street_number"){ 
								longstreetnumber = userPlace.address_components[i].long_name; 
							}else if(userPlace.address_components[i].types[j] ==="route"){ 
								longroute = userPlace.address_components[i].long_name; 
							}else if(userPlace.address_components[i].types[j] ==="locality"){ 
								 longcity = userPlace.address_components[i].long_name; 
								 console.log("City:"+longcity);
							}
						}	  	 
					}
				})
			} 
		}	 	
	}catch(error){

	}
 }
