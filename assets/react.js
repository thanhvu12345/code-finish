$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-arrow-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-arrow-right"></i></button>`,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                arrows: true,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                arrows: true,
                infinite: true,
              },
            },
          ],
    });
  });
          



