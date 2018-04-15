
const initialize = function(){

    const container = document.querySelector('#main-map');
    const center = {lat: 55.810757, lng: -4.259944};
    const zoom = 14;
    const otherMarker = {lat: 55.810500, lng: -4.268531};


    // const map = new MapWrapper(container, center, zoom);
    // map.addMarker(center);

// How can i add an image of raining?
    const mainMap = new MapWrapper(container, center, zoom);
    mainMap.addClickEvent('its sunny!');
    mainMap.addInfoWindow(center,"<b>Our House</b><p>It's raining!</p></b>");
    // '<IMG BORDER="0" ALIGN="Left" SRC="rainy.jpg"> Oh Oh... ' + weatherInformation


      var goToArran = function(){
        var arran = { lat: 55.580616, lng: -5.210857 };
        mainMap.googleMap.setCenter(arran);
        mainMap.addInfoWindow(arran, "<h3>Arran is always a sunny place!</h3>");
      }

      var findLocation = function(){
        mainMap.geoLocate();
      }

      arranButton.addEventListener('click', goToArran);
      // checkLocation.addEventListener('click', findLocation);
    }


window.addEventListener('DOMContentLoaded', initialize);
