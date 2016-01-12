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