document.addEventListener("DOMContentLoaded", function() {

	// Custom JS
  
  
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  })

});
