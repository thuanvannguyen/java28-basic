$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true, //Vong lap
    margin: 10, // k/c item
    nav: false, //Thanh dieu huong cua minh
    autoplay: true, // tu dong chay
    autoplayTimeout: 2000, //Thoi gian chay
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })


});