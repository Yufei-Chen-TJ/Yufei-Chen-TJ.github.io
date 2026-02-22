/**
 * Menu
 */
$("a.menu-icon").on("click", function(event) {
  var w = $(".menu");

  w.css({
    display: (w.css("display") === "none")
      ? "block"
      : "none"
  });
});

/**
 * Footer year
 */
$(document).ready(function() {
  $("#year").text(new Date().getFullYear());
});

/**
 * Footer email
 */
$(document).ready(function() {
  $(".email-link-cloaked").on("click", function(event) {
    const _link = event.target;

    const _user = reverseString(_link.getAttribute("data-resu"));
    const _domain = reverseString(_link.getAttribute("data-eman-niamod"));
    const _tld = reverseString(_link.getAttribute("data-dlt-niamod"));

    window.location.href = `mailto:${_user}@${_domain}.${_tld}`;
  });
});

/**
 * Reverses a string
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * Moves WeChat widget
 */
function moveWidget(event) {
  var w = $("#wechat-widget");

  w.css({
    left: event.pageX - 25,
    top: event.pageY - w.height() - 60
  });
}

$("a#wechat-link").on("mouseenter", function(event) {
  $("#wechat-widget").css({ display: "block" });

  moveWidget(event);
});

$("a#wechat-link").on("mousemove", function(event) {
  moveWidget(event);
});

$("a#wechat-link").on("mouseleave", function(event) {
  $("#wechat-widget").css({ display: "none" });
});

/**
 * Seamless infinite slider
 */
$(document).ready(function () {

  const $slides = $(".slides");
  if ($slides.length === 0) return;

  const $images = $slides.children();
  const total = $images.length;

  if (total <= 1) return;

  // 克隆第一张
  const $firstClone = $images.first().clone();
  $slides.append($firstClone);

  let index = 0;
  let isTransitioning = false;

  function nextSlide() {
    if (isTransitioning) return;

    index++;
    isTransitioning = true;

    $slides.css("transition", "transform 0.6s ease-in-out");
    $slides.css("transform", `translateX(-${index * 100}%)`);
  }

  $slides.on("transitionend", function () {

    // 如果到了克隆图
    if (index === total) {
      $slides.css("transition", "none");
      $slides.css("transform", "translateX(0%)");
      index = 0;
    }

    isTransitioning = false;
  });

  setInterval(nextSlide, 3000);

});