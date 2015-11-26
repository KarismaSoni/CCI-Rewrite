 // Script to Activate the Carousel
    
    $('.carousel').carousel({
        interval: 4000 //changes the speed
    });

//Script for going from bottom to top

    $('a.back-to-top').click(function() {
    $('body').animate({
        scrollTop: 0
    }, '700');
    return false;
    });
