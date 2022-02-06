(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {

        
        $(".project-titles li").on('click', function() {
          
            var seletor = $(this).attr('data-filter');
            $(".project-list").isotope({

                filter: seletor
            });
            
        }),
            
       $(".project-list").isotope();
            
        
       $('.testimonial-carousel').owlCarousel({
           
        items: 1,
        autoplay: false,
        margin:30,
        loop: true,
         dots:true,
    });     


    });
    
    
    jQuery(window).load(function(){
        
        
        
        
    });

    

}(jQuery));