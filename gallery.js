function scrollFixed() { // 스크롤 Fixed
  var isTablet = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);
  var ovY;
  !isTablet === true ? (ovY = "scroll") : (ovY = "hidden");

  $("html").css({
    overflow : "hidden",
    "overflow-y" : ovY,
    position : "fixed",
    width : "100%",
    top : -$(window).scrollTop()
  });
}

function scrollAuto() {  // 스크롤 Auto
  var hTop = $("html").css("top");
  var hTop_2 = hTop.split("px");
  var winTop = Math.abs(hTop_2[0]);

  $("html").removeAttr("style");
  window.scrollTo(0, winTop);
}

function image_pop(toggle) {
  var elem = $(".gallery-pop-wrap");
  var pbd = elem.find(".pop-body");

  if(toggle === "open"){
    elem.css({
      "opacity": 1,
      "transform": "translate3d(0,0,0)"
    });

    pbd.css({
      "visibility": "visible",
      "opacity": 1,
    });

    scrollFixed();

  } else if(toggle === "close"){
    elem.removeAttr("style");
    pbd.removeAttr("style");
    scrollAuto();
  }
}
