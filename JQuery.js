var carouselWidth = $(".mycarousel-inner")[0].scrollWidth;
var cardWidth = $(".mycarousel-item").width();
var scrollPosition = 0;


$(".mycarousel-control-next").on("click", function () {
    if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
      scrollPosition += cardWidth;  //update scroll position
      $(".carousel-inner").animate({ scrollLeft: scrollPosition },
        600
      ); //scroll left
    }
  });


  $(".mycarousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $(".carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });

$(document).ready(function(){
  $("#page2").hide();
});

$("#forward").click(function(){
  $("#page1").hide();
  $("#page2").show();
  $("#firstPage").removeClass(active);
  $("#secondPage").addClass(active);
});
$("#back").click(function(){
  $("#page2").hide();
  $("#page1").show();
  $("#firstPage").addClass(active);
  $("#secondPage").removeClass(active);
});

