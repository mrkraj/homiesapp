/* eslint no-undef: "off"*/
window.addEventListener("load",function(event) {
    console.log("ready forgotPassword.js!" ); 
    //zipcode, state, city.
    //get the matching based on these values. 

    var requestUrl = window.location.href;
    if(requestUrl.includes('/home')){ 
    var url = new URL(requestUrl);
    var state = url.searchParams.get("state"); 
    var zipCode = url.searchParams.get("zipCode");  
    var city = url.searchParams.get("city"); 

    $('.postresultfor').text('Posts From -'+zipCode +" "+city+" "+state); 

    var filterParams ={}; 
    filterParams =  {
        "state":state,
        "zipCode":zipCode,
        "city":city
    }; 
    getHomiesGW(filterParams);

    $(document).on('click', '.showmaplocation', function(e){ 
        var overlaymap = $('#mapOverlaySection');
        var latitude = parseFloat($(this).attr("lat"));
        var langitude = parseFloat($(this).attr("lng")); 
        $('body').append(overlaymap);
        $('body > div').attr('aria-hidden','true').attr('tabindex','-1');
        overlaymap.removeAttr('aria-hidden').removeAttr('tabindex').removeClass('hidden');
        initMap('mapOverlayComponent',latitude, langitude);
    });

    function getHomiesGW(filterParams){
        var url = "/homies/housesgw";
		$.ajax({
			async: true,
			type: 'POST',
			url: url,
			headers: {
				"Content-Type": "application/json"
			},
			data: JSON.stringify(filterParams),
			dataType: "json",
			success: function(response) {
                console.log(response);  
                var gwsize = response.length;
                for(var i=0; i<gwsize;i++){ 
                    var tempval = response[i];
                var gwhtml = "<div class='girdsplitcontainer'>\
                    <div class='househighlightscontainer'>\
                        <div class='housedetails'>\
                            <h3 class='houses-grid-title'>"+tempval.map.postTitle+"</h3>\
                            <p class='house-grid-address'>"+tempval.map.postAddress+"</p>\
                            <ul class='house-feature-list'>\
                                <li>\
                                    <div class='details-high-label'>\
                                    <p class='highlights-label'>Posted By</p>\
                                    <p class='highlights-value'>"+tempval.map.firstName+"</p>\
                                    </div>\
                                </li>\
                                <li>\
                                    <div class='details-high-label'>\
                                    <p class='highlights-label'>Contact:</p>\
                                    <p class='highlights-value'>"+tempval.map.phoneNumber+"</p>\
                                    </div>\
                                </li>\
                                <li>\
                                    <div class='details-high-label'>\
                                    <p class='highlights-label'>Posted On</p>\
                                    <p class='highlights-value'>"+tempval.map.postedDate+"</p>\
                                    </div>\
                                </li>\
                                <li>\
                                    <div class='details-high-label'>\
                                    <p class='highlights-label'>Property Type</p>\
                                    <p class='highlights-value'>"+tempval.map.propertyType+"</p>\
                                    </div>\
                                </li>\
                                <li>\
                                    <div class='details-high-label'>\
                                    <p class='highlights-label'>Available Date</p>\
                                    <p class='highlights-value'>"+tempval.map.availableDate+"</p>\
                                    </div>\
                                </li>\
                                <li>\
                                    <div class='details-high-label'>\
                                    <p class='highlights-label'>Gender</p>\
                                    <p class='highlights-value'>"+tempval.map.gender+"</p>\
                                    </div>\
                                </li>\
                            </ul>\
                            <div class='grid-tile-action-container'>\
                                <div class='tile-action'>\
                                    <button mail="+tempval.map.emailAddress+" fn="+tempval.map.firstName+" class='contact-poster tile-action-button'>Contact</button>\
                                </div>\
                                <div class='tile-action'>\
                                    <button onclick=window.location.href='/viewdetails?productid="+tempval.map.postID+"' class='tile-action-button'>View More</button>\
                                </div>\
                                <div class='tile-action'>\
                                    <button lat="+tempval.map.postLat+" lng="+tempval.map.postLng+" class='showmaplocation tile-action-button'>View Map</button>\
                                </div>\
                            </div>\
                        </div>\
                        <div class='house-img-container'>\
                            <span class='price-badge'>"+tempval.map.rent+"</span>\
                            <img class='swiperImagehold' src='https://images1.apartments.com/i2/5u0Xua6LrsvhB_Z3C04WDs3eZyHF7IzYNUZmckZQhkQ/117/15fifty5-walnut-creek-ca-building-photo.jpg'/>\
                        </div>\
                    </div>\
                </div>"; 
                $('.housesGridContainer .housesgw').append(gwhtml);
                }
            }, 
			error: function(error) {
				console.log(error);
			}
		});	
    } 
        var map, maxZoomService;
        //Initialize google map on overlay.
        function initMap(id, lat, lng) { 
            maxZoomService = new google.maps.MaxZoomService();
            var myLatLng = new google.maps.LatLng(lat, lng);
            var mapOptions = {
                zoom: 18,
                center: myLatLng,
                rotateControl: false,
                fullscreenControl: false, 
                mapTypeId: google.maps.MapTypeId.HYBRID
            }; 
            map = new google.maps.Map(document.getElementById(id), mapOptions);
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map 
            }); 
        }

        

        $("body").on("click", "#mapOverlaySection .close-btn", function (e) {
            $('#mapOverlaySection').addClass('hidden');
            $('body > div').removeAttr('aria-hidden').removeAttr('tabindex');
        }); 
        
    } 
});
