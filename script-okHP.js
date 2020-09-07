$(function(){
  $(window).scroll(function (){
    $(".fadeInUp").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade-on");
      } else {
        $(this).removeClass("fade-on");
      }
    });
  });

  $(window).scroll(function (){
    $(".rotater").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("rotate-on");
      } else {
        $(this).removeClass("rotate-on");
      }
    });
  });

  $(".menu-trigger").click(function(){
    $(this).toggleClass("active");
    if($(this).hasClass('active')){
      $(".header-contents-sp").show();
    }else{
      $(".header-contents-sp").hide();
    }
  });

  $(".header-link-sp").click(function(){
    if($(".menu-trigger").hasClass("active")){
      $(".header-contents-sp").hide();
      $(".menu-trigger").removeClass("active");
    }
  });

  //sliderの導入//
  $(".slider").slick({
    dots:true,
  });

});
