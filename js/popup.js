$(".close").click(function () {
    // 消失
    $("#overly").removeClass("active");
    $(".dialog").removeClass("active");
    $(".overly-window").removeClass("active");
  });
  
  $(".open").click(function () {
    alert("hi");
    $("#overly").toggleClass("active");
    $(".popup").toggleClass("active");
  
  });
  