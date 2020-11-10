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

function is_landscape(id) {
  var landscape = [2, 6, 10];
  return landscape.includes(id);
}

function image_pop(toggle, id, slide) {
  var elem = $(".gallery-pop-wrap");
  var pbd = elem.find(".pop-body");
  var img = pbd.find("#img"+id);

  var viewport_width = document.documentElement.clientWidth;
  if (is_landscape(id)) {
    var img_height = viewport_width * 0.8 * 816 / 1225;
    console.log("ls" + img_height);
  } else {
    var img_height = viewport_width * 0.8 * 1225 / 816;
    console.log("pt" + img_height);

  }
  var elem_slider = $(".slider > a");

  if (toggle === "open"){

    if (slide != 1) {
      elem.css({
        "opacity": 1,
        "transform": "translate3d(0,0,0)"
      });

      pbd.css({"visibility": "visible"}).delay(200).animate({
        "opacity": 1
      }, 200);
    }

    img.css({
      "visibility": "visible",
      "height": img_height + "px"
    }).delay(200).animate({
      "opacity": 1,
    }, 200);

    elem_slider.css({
      "height": img_height + "px"
    });

    $("#picnum").html(id + " / 12");

    scrollFixed();

  } else if(toggle === "close"){
    if (slide != 1) {
      elem.removeAttr("style");
      pbd.removeAttr("style");
    }
    var i;
    var num_img = 12;
    for (i = 1; i < num_img+1; i++) {
      var img = pbd.find("#img" + i);
      img.removeAttr("style");
    }
    scrollAuto();
  }
}

function slide(direction, id) {
  console.log(direction + " from " + id);
  if (direction == "prev") {
    if (id > 1) {
      image_pop("close", 0, 1);
      image_pop("open", id - 1);
    }
  } else if (direction == "next") {
    if (id < 12) {
      image_pop("close", 0, 1);
      image_pop("open", id + 1);
    }
  }



}

