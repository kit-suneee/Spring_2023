
  (function ($) {
  
  "use strict";

    
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });

    
    $('.hero-section').backstretch([
      "images/slideshow/afro-woman-cleaning-window-with-rag-home.jpg", 
      "images/slideshow/afro-woman-holding-bucket-with-cleaning-items.jpg",
      "images/slideshow/unrecognizable-cleaner-walking-into-hotel-room-with-tools-detergents.jpg"
    ],  {duration: 2000, fade: 750});
    
    
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
  
      scrollToDiv(elWrapped);
      return false;
  
      function scrollToDiv(element){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
    
  })(window.jQuery);


