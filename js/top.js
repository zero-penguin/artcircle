$(document).ready(function() {
  $(".slide").each(function() {
    var $imgs = $(this).find('img');
    var totalImgs = $imgs.length;
    var currentIdx = 0;

    function slide() {
      $($imgs[currentIdx]).fadeOut();
      currentIdx = (currentIdx + 1) % totalImgs;
      $($imgs[currentIdx]).fadeIn();
    }

    var slideInterval = setInterval(slide, 2500);

    $(this).hover(function() {
      clearInterval(slideInterval);
    }, function() {
      slideInterval = setInterval(slide, 2500);
    });
  });
});