$(function(){
  $('#rec-slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay:true,
    speed:1000,
    autoplayspeed:5000,
    arrows:false,
    centerpadding:"100px",
    centermode:true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerpadding: 0,

          }
        }
      ]
  });
});

$(function(){
  $('#nav-btn').on('click',function(){
    $(this).toggleClass('-active');
    $('#nav').toggleClass('-active');
  });
});

$(function(){
  $('.js-accordion').on('click',function(){
    $(this).next().slideToggle();
  });
});

$(function(){
  new WOW().init();
});