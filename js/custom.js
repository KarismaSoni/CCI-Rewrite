(function() {

    // Script to activate the boostrap carousel
    $('.carousel').carousel({
        interval: 4000 //changes the speed
    });
    
    // Script to active lightGallery slider
    $('#art-color-gallery').lightGallery();


    // Script to show/hide tooltip on hover
    $('.slider-images span').css('display', 'none')
    $('.slider-images').hover(function() {
        $(this).find('span').slideDown('100')
    }, function() {
        $(this).find('span').slideUp('100')
    });


    // Script to active slider on color solution page
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
    })

})();


/*automotive*/
$('#banners li').each(function(index, value) {
    setTimeout(function() {
        $(value).show().siblings().hide();
    }, 1000 * (index + 1));
});

 
