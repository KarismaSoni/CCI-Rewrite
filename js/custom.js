// Script to activate the boostrap carousel
$('.carousel').carousel({
    interval: 4000 //changes the speed
});

// Script to active pgwSlider
$(document).ready(function() {
    $('.pgwSlideshow').pgwSlideshow({
        autoSlide: true,
        intervalDuration: 4000
    });
});

// Script to scroll page to top
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


