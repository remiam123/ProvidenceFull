$( document ).ready(function() {
    $('.slider').slick({
  centerMode: false,
  arrows: false,
  centerPadding: '60px',
  autoplay: true,
  autoplaySpeed: 3000,      
  slidesToShow: 3.66,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
    $('.sliderTwo').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }}
        ]
    });
});

$( ".nawBtn" ).click(function() {
  $(this).next().slideToggle(300);
});

$( ".btnFoot" ).click(function() {
  $(this).next().slideToggle(300);
});






//$('.slider').slick({
//  dots: true,
//  infinite: true,
//  speed: 300,
//  slidesToShow: 3.64,
//  adaptiveHeight: true
//});