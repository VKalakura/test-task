import $ from 'jquery';
import '@fortawesome/fontawesome-free/js/all';
import './images';
import 'slick-carousel';
import "magnific-popup";



$('.shaker-slider').slick({
	infinite: false,
	slidesToShow: 4,
  	slidesToScroll: 1,
  	prevArrow: '.arrow__right',
  	nextArrow: '.arrow__left',
  	autoplay: true,
  	autoplaySpeed: 2000,
  	responsive: [
  		{
  			breakpoint: 426,
  			settings: {
  				slidesToShow: 1,
  				slidesToScroll: 1
  			}
  		}
  	]
});
  $(".popup").magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });


$('.burger').click(function(){
	$(this).toggleClass('burger__item--opened');
	$('.nav-menu').toggleClass('mobile-menu');
});
