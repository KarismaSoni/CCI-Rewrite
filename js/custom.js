 // Script to Activate the Carousel
    
    $('.carousel').carousel({
        interval: 4000 //changes the speed
    });

//Script for going from bottom to top

    $(document).ready(function() {
        var offset = 220;
        var duration = 500;
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(duration);
            } else {
                $('.back-to-top').fadeOut(duration);
            }
        });
        
        $('.back-to-top').click(function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, duration);
            return false;
        })
    });



var vid = document.getElementById("embed-responsive-item");
vid.onloadstart = function() {
    alert("Starting to load video");
};

/*/image zoom*/


/*map*/

var myCenter=new google.maps.LatLng(45.434046,12.340284);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:18,
  mapTypeId:google.maps.MapTypeId.HYBRID
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

google.maps.event.addDomListener(window, 'load', initialize);