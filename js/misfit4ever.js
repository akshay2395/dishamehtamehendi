$(document).ready(function(){

/* Smooth transition whike scrolling */


  $(window).scroll(function(){
    var scrollTop = 0;
    scrollTop = $(window).scrollTop();

    if (scrollTop >= 100) {
      $('#navigationBar').addClass('scrolledNav');
    }
    else if (scrollTop < 100) {
      $('#navigationBar').removeClass('scrolledNav');
    }
});


/*     Shadow effect on menu items      */

  $("#homeLink").click(function(){
    $path=$("#firstPage").offset().top ;
    $("body,html").animate({scrollTop: $path},1000);
  });

  $("#aboutLink").click(function(){
    $path=$("#about").offset().top - 200;
    $("body,html").animate({scrollTop:$path},1000);
  });

  $("#contactLink").click(function(){
    $path=$("#ContactForm").offset().top - 200;
    $("body,html").animate({scrollTop:$path},1000);
  });


  <!--adding margin to form elements-->

});
