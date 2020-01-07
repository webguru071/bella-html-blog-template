(function($) {

    "use strict";



   /*------------------------------------------------------------
    *  search
    * ------------------------------------------------------ */
    $(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    
    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
});
	
	
	 /*------------------------------------------------------------
    *               Banner-Slider 
    * ------------------------------------------------------ */
	
	
	
	$('.banner-slider').owlCarousel({
 		loop: true,
 		margin: 0,
		 dots:false,
		autoplay:true,
autoplayTimeout:3000,
autoplayHoverPause:true,
		responsive: {
 			0: {
 				items: 1
 			},
			360:{
				items: 1
			},
 			576: {
 				items:2
 			},
			1920: {
 				items:4
 			},
			1200: {
 				items:3
 			},
 			992: { 
 				items: 2
 			}	
 		}
		
 	});
	
$(function () {
    $(".asd").slice(0, 0).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".asd:hidden").slice(0, 1).slideDown();
        if ($(".asd:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});
	
	
 /*------------------------------------------------------------
             home-one-Slider-one 
  * ------------------------------------------------------ */
	
	$('.blog-post-slider-one').owlCarousel({
 		loop: true,
 		margin: 20,
	    navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
		 dots:false,
		nav:true,
		autoplay:true,
autoplayTimeout:8000,
autoplayHoverPause:true,
		responsive: {
 			0: {
 				items: 1
 			},
			360:{
				items: 1
			},
 			600: {
 				items:2
 			},
 			1000: { 
 				items: 2
 			}	
 		}
 	});
	
		 /*------------------------------------------------------------
    *           sidebar-Slider
    * ------------------------------------------------------ */
	
	
	
	$('.widget-slider-item').owlCarousel({
 		loop: true,
 		margin: 0,
				 navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
		 dots:false,
		nav:true,
		autoplay:true,
autoplayTimeout:3000,
autoplayHoverPause:true,
		responsive: {
 			0: {
 				items: 1
 			},
			360:{
				items: 1
			},
 			600: {
 				items:1
 			},
 			1000: { 
 				items: 1
 			}	
 		}
 	});
	
	
		
		 /*------------------------------------------------------------
    *          main-content-Slider
    * ------------------------------------------------------ */
	
	
	
	$('.blog-slider-two').owlCarousel({
 		loop: true,
 		margin: 0,
				 navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
		 dots:false,
		nav:true,
		autoplay:true,
autoplayTimeout:3000,
autoplayHoverPause:true,
		responsive: {
 			0: {
 				items: 1
 			},
			360:{
				items: 1
			},
 			600: {
 				items:1
 			},
 			1000: { 
 				items: 1
 			}	
 		}
 	});
	
	
	/*------------------------------------------------------------
    *        Home-2 banner slider
    * ------------------------------------------------------ */
	
	
	
	$('.home-two-banner-slider').owlCarousel({
 		loop: true,
 		margin: 0,
		 navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
		 dots:true,
		nav:true,
		autoplay:true,
autoplayTimeout:6000,
autoplayHoverPause:true,
		responsive: {
 			0: {
 				items: 1
 			},
			360:{
				items: 1
			},
 			600: {
 				items:1
 			},
 			1000: { 
 				items: 1
 			}	
 		}
 	});
	/*------------------------------------------------------------
    *        Home-2 two slider
    * ------------------------------------------------------ */
	
	
	
	$('.instagram-slider').owlCarousel({
 		loop: true,
 		margin: 0,
		 navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
		 dots:false,
		nav:true,
		autoplay:true,
autoplayTimeout:2000,
autoplayHoverPause:true,
		responsive: {
 			0: {
 				items: 1
 			},
			360:{
				items: 2
			},
 			600: {
 				items:2
 			},
 			1000: { 
 				items: 4
 			}	
 		}
 	});
	
	
	/*------------------------------------------------------------
    *        Home-3 tree slider
    * ------------------------------------------------------ */
	
	
	
	$('.home-tree-banner-slider').owlCarousel({
 		loop: true,
 		margin: 10,
		 navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
		 dots:false,
		nav:true,
		autoplay:true,
autoplayTimeout:2000,
autoplayHoverPause:true,
		responsive: {
 			0: {
 				items: 1
 			},
			360:{
				items: 1
			},
 			600: {
 				items:1
 			},
 			1000: { 
 				items: 3
 			}	
 		}
 	});
	
	
	
	/*------------------------------------------------------------
    *        Home-4 banner slider
    * ------------------------------------------------------ */
	
	
	
	$('.blog-banner-slider-4').owlCarousel({
 		loop: true,
 		margin: 10,
		 dots:true,
		nav:false,
		autoplay:true,
autoplayTimeout:10000,
autoplayHoverPause:true,
		responsive: {
 			0: {
 				items: 1
 			},
			360:{
				items: 1
			},
 			600: {
 				items:1
 			},
 			1000: { 
 				items: 1
 			}	
 		}
 	});	
	/*------------------------------------------------------------
    *        Home-4 downslider
    * ------------------------------------------------------ */
	
	
	
	$('.down-slider-wrapper').owlCarousel({
 		loop: true,
 		margin: 10,
		 dots:false,
		navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
		nav:true,
		autoplay:true,
autoplayTimeout:10000,
autoplayHoverPause:true,
		responsive: {
 			0: {
 				items: 1,
 			},
			360:{
				items: 1,
			},
 			600: {
 				items:1,
 			},
 			1000: { 
 				items: 1
 			}	
 		}
 	});	
	/*------------------------------------------------------------
    *        Home-5 downslider
    * ------------------------------------------------------ */
	
	
	
	$('.blog-five-wedget-slider').owlCarousel({
 		loop: true,
 		margin: 10,
		 dots:true,
		nav:false,
		autoplay:true,
autoplayTimeout:10000,
autoplayHoverPause:true,
		responsive: {
 			0: {
 				items: 1
 			},
			360:{
				items: 1
			},
 			600: {
 				items:2
 			},
 			1000: { 
 				items: 2
 			}	
 		}
 	});	
	/*------------------------------------------------------------
    *        Home-4 slider
    * ------------------------------------------------------ */
	
	
	
	$('.arrow-slider-wrapper').owlCarousel({
 		loop: true,
 		margin: 30,
		 dots:true,
		nav:false,
		autoplay:true,
autoplayTimeout:10000,
autoplayHoverPause:true,
		responsive: {
 			0: {
 				items: 1
 			},
			360:{
				items: 1
			},
 			600: {
 				items:2
 			},
 			1000: { 
 				items: 3
 			}	
 		}
 	});	
	
	
	/*------------------------------------------------------------
    *       Blog-detail-page-with-sidebar
    * ------------------------------------------------------ */
	
	
	
	$('.slider-related').owlCarousel({
 		loop: true,
 		margin: 30,
		 navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
		 dots:false,
		nav:true,
		autoplay:true,
autoplayTimeout:10000,
autoplayHoverPause:true,
		responsive: {
 			0: {
 				items: 1
 			},
			360:{
				items: 1
			},
 			600: {
 				items:2
 			},
 			1000: { 
 				items: 3
 			}	
 		}
 	});	
	
	$(window).on('load', function () {
 		$('#status').fadeOut();
 		$('#preloader').delay(350).fadeOut('slow');
 	});
	/*------------------------------------------------------------
    *    Image Magnifier Glass active
    * ------------------------------------------------------ */	
	
	})(jQuery); 