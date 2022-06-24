(function ($) {
  // variables
  (elementWidth = $("ul").width()),
    (containerWidth = $("nav").width()),
    (difference = elementWidth - containerWidth),
    (finalWidth = difference * 1.5),
    (element = $("ul"));

  // mouse move deplacement
  $("nav").mousemove(function (e) {
    var x = e.pageX - this.offsetLeft;
    if (x >= finalWidth) {
      element.css("left", finalWidth - x);
    }
  });

  // active on click
  $("li").on("click", function () {
    $("li").removeClass("active");
    $(this).addClass("active");
  });
})(jQuery);
