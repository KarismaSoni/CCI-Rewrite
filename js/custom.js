(function() {

    // Script to activate the boostrap carousel
    $('.carousel').carousel({
        interval: 4000 //changes the speed
    });
    
    /* Script to active lightGallery slider on the following pages
    * color-cards.html
    * specialitycolor-stains-finishes.html
    * the-art-of-color.html
    */
    $('#light-gallery').lightGallery();


    // Script to show/hide tooltip on hover
    $('.slider-images span').css('display', 'none')
    $('.slider-images').hover(function() {
        $(this).find('span').slideDown('100')
    }, function() {
        $(this).find('span').slideUp('100')
    });

    /* Script to active pgwSlider on the following pages 
    * automotive-oem-refinish.html
    * color-solutions.html
    */
    $('.pgwSlideshow').pgwSlideshow({
        autoSlide: true,
        intervalDuration: 4000
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
    });

    // Splash Page Script
    if($('.splash').is(':visible')) {
        $('.navbar, .cci-wrapper, #myCarousel').hide();
    }
    $('.btn-splash').click(function() {
        $('.splash').hide();
        $('.navbar, .cci-wrapper, #myCarousel').fadeToggle(1000);
    });
    
})();