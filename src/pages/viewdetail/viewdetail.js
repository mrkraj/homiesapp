/* eslint no-undef: "off"*/
window.addEventListener("load",function(event) {
    console.log("Ready View Detail Script!"); 
    function initializeImageSwiper(){
        var swiper = new Swiper('.image-swiper-container', {
          slidesPerView: 1,
          spaceBetween: 10,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
  
      } 

      initializeImageSwiper();
      
    
});