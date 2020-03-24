// // GENERIC ANIMATION ONSCROLL
//
// $(document).ready(function() {
//
//
// 	$('.animate').each( function(i){
//
//             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//
//             /* If the object is completely visible in the window, fade it it */
// 			if( bottom_of_window > bottom_of_object - 700){
//
//                 /*$(this).animate({'opacity':'1','top':'0px'},2000); */
// 				$(this).addClass('globalfadeUp');
//             }
// 		/*
// 			else{
// 				$(this).addClass('setZero');
// 			}
//            */
//         });
//
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
//
//         /* Check the location of each desired element */
//         $('.animate').each( function(i){
//
//             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//
//             /* If the object is completely visible in the window, fade it it */
// 			if( bottom_of_window > bottom_of_object - 700){
//
//                 /*$(this).animate({'opacity':'1','top':'0px'},(easeInQuart),1200);*/
// 				$(this).addClass('globalfadeUp');
//             }
//
//         });
//
//     });
//
// });


// GENERIC ANIMATION ONSCROLL

$(document).ready(function() {


	$('.animateOut').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
			if( bottom_of_window > bottom_of_object - 0){

                /*$(this).animate({'opacity':'1','top':'0px'},2000); */
				$(this).addClass('globalfadeOut');
            }
		/*
			else{
				$(this).addClass('setZero');
			}
           */
        });

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.animateOut').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
			if( bottom_of_window > bottom_of_object - 0){

                /*$(this).animate({'opacity':'1','top':'0px'},(easeInQuart),1200);*/
				$(this).addClass('globalfadeOut');
            }

        });

    });

});
