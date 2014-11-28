/**************************************************** 
					Mobil Flyout 
****************************************************/
$(function() {
	$('.mobilicon').on('click', function() {
		$('.wrap').toggleClass('flyout');
    $('.fixedheader').toggleClass("navWidth");
    $('.mobilnav').toggleClass("active");
  });
});
/**************************************************** 
					Fixed Header 
****************************************************/
$(window).bind('scroll', function() {
   var pos = $(window).scrollTop();
   if (pos > 500)  { 
       $('.fixedheader').addClass('fixed');
   }
   else  {
       $('.fixedheader').removeClass('fixed');
   }
});