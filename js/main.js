// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
$('a.smoothscroll').bind('click', function(event) {
var $anchor = $(this);
$('html, body').stop().animate({
scrollTop: $($anchor.attr('href')).offset().top
}, 500, 'easeInOutExpo');
event.preventDefault();
});
});
