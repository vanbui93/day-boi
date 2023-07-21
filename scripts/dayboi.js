// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "slideShow",
      "thumbs",
      "zoom",
      "fullScreen",
      "share",
      "close"
    ],
    loop: false,
    protect: true
  });

$('.js-menu-button').click(function() {
  $('.navigation').toggleClass('is-active');
})

$('.navigation_link').click(function() {
  $('.navigation').removeClass('is-active');
})

// fixed menu
$(window).scroll(function() {
  if ($(this).scrollTop() >70) {
      $('.header-wrap').addClass("fixed-top");
  } else {
      $('.header-wrap').removeClass("fixed-top");
  }
});

// Smooth scrolling page
$("a[href*='#']:not([href='#'])").click(function() {
  let target = $(this).attr("href");
  $('html,body').stop().animate({
    scrollTop: $(target).offset().top
  }, 1000);
  event.preventDefault();
});  