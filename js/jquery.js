//popup

$(".close").click(function () {
  // 消失
  $("#overly").removeClass("active");
  $(".dialog").removeClass("active");
  $(".overly-window").removeClass("active");
});

$(".open").click(function () {
  $("#overly").toggleClass("active");
  $(".popup").toggleClass("active");
});




