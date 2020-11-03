function scrollFixed() {
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

function scrollAuto() {
  var hTop = $("html").css("top");
  var hTop_2 = hTop.split("px");
  var winTop = Math.abs(hTop_2[0]);

  $("html").removeAttr("style");
  window.scrollTo(0, winTop);
}

function image_pop(toggle, id) {
  var elem = $(".gallery-pop-wrap");
  var pbd = elem.find(".pop-body");
  var img = pbd.find("#img"+id);

  if(toggle === "open"){
    elem.css({
      "opacity": 1,
      "transform": "translate3d(0,0,0)"
    });

    pbd.css({"visibility": "visible"}).delay(400).animate({
      "opacity": 1
    }, 300);

    img.css({
      "visibility": "visible",
    }).delay(400).animate({
      "opacity": 1,
      "height": "100%"
    }, 300);

    scrollFixed();

  } else if(toggle === "close"){
    elem.removeAttr("style");
    pbd.removeAttr("style");
    var i;
    for (i = 1; i < 10; i++) {
      var img = pbd.find("#img" + i);
      img.removeAttr("style");
    }
    scrollAuto();
  }
}
