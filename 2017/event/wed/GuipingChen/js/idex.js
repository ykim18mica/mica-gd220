$(".slides").slidesjs({
  width: 600,
  height: 400,
  play: {
  active: false,
  effect: "slide",
  interval: 2000,
  auto: true,
  swap: true,
  pauseOnHover: false,
  restartDelay: 2500
  }
});
 

var $backToTop = $(".back-to-top");
$backToTop.hide();


$(window).on('scroll', function() {
  if ($(this).scrollTop() > 100) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

$backToTop.on('click', function(e) {
  $("html, body").animate({scrollTop: 0}, 500);
});


