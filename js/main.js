 $(document).ready(function(){
    /*$("#menu").on("click","a", function (event)*/
   $(".scrolling").on("click", function (event)
   {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1800);
    });
});

/*$(document).ready(function(){
  $('.tab-style').on("click", function (event) {
      event.preventDefault();
    var tab_down = $(this).attr('href');
    $(tab_down).fadeIn();
    });
});*/