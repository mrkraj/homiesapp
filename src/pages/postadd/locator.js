//locate the universities near by.

//reference =>http://jsfiddle.net/jeremyhawes/1kdd9ouo/1/

       
// <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places"></script>
// <div id="map-canvas"></div>

function initialize() {
    var myLatLng = new google.maps.LatLng( 33.4941700, -111.9260520 );
    var MY_MAPTYPE_ID = 'custom_style';
    myOptions = {
      zoom: 14,
      center: myLatLng,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
        mapTypeId: MY_MAPTYPE_ID
    };
    // Set map to custom map
    map = new google.maps.Map( document.getElementById( 'map-canvas' ), myOptions );
    var styledMapOptions = {
      name: 'Custom Style'
    };
    
    var request = {
      location: myLatLng,
      radius: 500,
      types: ['school']
    };
    // Marker for center of map
    new google.maps.Marker({
      position: myLatLng,
      map: map
    });
    // Clickable labels for places request
    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
    // Polygon  
        
  } // End of Initialize
  // Populate Places request
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }
  // Places map markers
  function createMarker(place) {
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';  
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      icon: iconBase + 'schools_maps.png',
      position: place.geometry.location
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
    
  };
  function setLocationOnMap(){
    marker = new google.maps.Marker( {position: myLatLng, map: map} );    
      marker.setMap( map );
      moveMarker( map, marker );   
  }
  google.maps.event.addDomListener(window, 'load', initialize);