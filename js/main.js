/*FACE*/
$(document).ready(function(){
    var tab = $('.tab');
    tab.click(function(){
       var target = $(this).attr('href');
        $('.acord-win').slideUp();
        $(target).slideDown();
    });
});
/*BODY SHUGARING*/
$(document).ready(function(){
    var tab_body = $('.tab-body');
    tab_body.click(function(){
       var target = $(this).attr('href');
        $('.acord-win-body').slideUp();
        $(target).slideDown();
    });
});
/*BODY WRAPPING*/
$(document).ready(function(){
    var tab_body_wrapping = $('.tab-body-wrapping');
    tab_body_wrapping.click(function(){
       var target = $(this).attr('href');
        $('.acord-win-body-wrapping').slideUp();
        $(target).slideDown();
    });
});

 $(document).ready(function(){
    /*$("#menu").on("click","a", function (event)*/
   $(".scrolling").on("click", function (event)
   {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 3000);
    });
});

/*$(document).ready(function(){
  $('.tab-style').on("click", function (event) {
      event.preventDefault();
    var tab_down = $(this).attr('href');
    $(tab_down).fadeIn();
    });
});*/