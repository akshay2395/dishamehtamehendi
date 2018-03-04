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

/*    fade in effect to intro text    */
    $('#introText').animate({'opacity': '1'},2000);

    $('.bgOne').scroll().delay(1000).animate({'opacity': '1'},1000);
    $('.bgTwo').scroll().delay(1500).animate({'opacity': '1'},1000);
    $('.bgThree').scroll().delay(2000).animate({'opacity': '1'},1000);

    $("#Twitter").delay(1000).animate({'opacity': '1',
                                       'font-size':'-=0.2em'}
                                       ,500);

    $("#facebook").delay(500).animate({'opacity': '1',
                                       'font-size':'-=0.2em'}
                                       ,500);

    $("#instagram").delay(1500).animate({'opacity': '1',
                                         'font-size':'-=0.2em'}
                                         ,500);



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


  /*var lastScrollTop = 0;
  $(window).scroll(function() {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      $('#introText').animate({top: '-=10px'},2);
    }
    else {
      $('#introText').animate({top: '+=10px'},2);
    }
  });
*/
});
