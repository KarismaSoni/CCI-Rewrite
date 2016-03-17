(function() {

    // Script to activate the boostrap carousel
    $('.carousel').carousel({
        interval: 4000 //changes the speed
    });
    
    // Script to active lightGallery slider
    $('#art-color-gallery').lightGallery();


    // Script to show/hide tooltip on hover
    $('.col-md-3.slider-images span').css('display', 'none')
    $('.col-md-3.slider-images').hover(function() {
        $(this).find('span').slideDown('100')
    }, function() {
        $(this).find('span').slideUp('100')
    });


    // Script to active slider on color solution page
    $('.cci-solutions-slider').pgwSlideshow({
        autoSlide: true,
        intervalDuration: 4000
    });

    // Script to active slider on ColorTec page
    $('.cci-colorTac-slider').pgwSlideshow({
        autoSlide: true,
        intervalDuration: 4000,
        displayList: false
    });

    // Script to scroll page to top
    var offset = 220;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });
    
    $('.back-to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })

})();


