$(".nav__item  ").click(function(){
    // alert("12333");
    $(this).toggleClass("nav__item--active");
  });


$(".nav__triggrt  ").click(function(){
  $(".nav__triggrt a:first-of-type").toggleClass("d-none");
  $(".nav__triggrt a:last-of-type").toggleClass("d-none");
  $(".nav__wrap").toggleClass("nav__wrap--active");
});


$(".gray-section__title  ").click(function(){
  $(".add").toggleClass("d-none");
  $(".solid").toggleClass("d-none");
  $(".gray-section__body").toggleClass("gray-section__body--active");
});






$(document).ready(function(){
  $('.swiper-block').slick(
      {
          slidesToShow: 1,
          infinite: false,
//    slidesToScroll: 1,
//    asNavFor: '.swiper-block',
dots: true,
//    focusOnSelect: true
      }
  );
});


$(".close").click(function(){

  // 消失

  $("#overly").removeClass("active");
  $(".popup-box-red").removeClass("active");
  $(".popup-box").removeClass("active");
  $(".overly-window").removeClass("active");










});


$(".open").click(function(){

    // 出現

    $("#overly").toggleClass("active");
    $(".ques").toggleClass("active");



});



$("#date-click").click(function(){

  // 出現
  $("#overly").toggleClass("active");
  $(".date").toggleClass("active");


});


$("#cost-click").click(function(){

  // 出現
  $("#overly").toggleClass("active");
  $(".cost").toggleClass("active");


});

$("#account-click").click(function(){

  // 出現
  $("#overly").toggleClass("active");
  $(".account").toggleClass("active");


});





