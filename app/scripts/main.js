// jshint devel:true
$(document).ready(function(){

// navbar unhides selected items
  $(".nav a").on("click", function(){
    var $active = $(".nav").find(".active");
     $active.removeClass("active");
     $(this).parent().addClass("active");
     var $el = $(this);
     navSelector($el.attr('id'));
     showSlider($el.attr('id'));
     // tooggle nav when item clicked in collapsed mode
    //  if($('.navbar-toggle').css('display') === "block"){
    //    $('.navbar-toggle').click();
    //  }
  });
//  breadcrumb used for about pages
  $(".breadcrumb a").on("click", function(){
    var $active = $(".breadcrumb").find(".active");
     $active.removeClass("active");
     $(this).parent().addClass("active");
     var $el = $(this);
    //  console.log($el.attr('id'));
     breadcrumbSelector($el.attr('id'));
  });

  function breadcrumbSelector(unHide){
    var abouts = $('.about');
    console.log(abouts[0]);
    $.each(abouts, function(){
      if(this.className.split(' ')[0] != "hidden"){
        $(this).addClass('hidden');
      }
    });
    $('#'+'about-'+unHide).removeClass('hidden');
  }

  function navSelector(unHide){
    var pages = $('.page-section');
    $.each(pages, function(){
      if(this.className.split(' ')[1] != "hidden"){
        $(this).addClass('hidden');
      }
    });
    $('#'+unHide+'-page').removeClass('hidden');
  }

// show slider on home page only
  function showSlider(activeTab){
    if(activeTab != "home"){
      $('.slider').hide();
    } else {
      $('.slider').show();
    }
  }

  $('#home').click();

  // init slider
  function initSlider() {
    var options = { $AutoPlay: true };
    var jssor_slider1 = new $JssorSlider$('slider1_container', options);

    //responsive code begin
      //you can remove responsive code if you don't want the slider scales
      //while window resizes
      function ScaleSlider() {
          var parentWidth = $('#slider1_container').parent().width();
          if (parentWidth) {
              jssor_slider1.$ScaleWidth(parentWidth);
          }
          else
              window.setTimeout(ScaleSlider, 30);
      }
      //Scale slider after document ready
      ScaleSlider();

      //Scale slider while window load/resize/orientationchange.
      $(window).bind("load", ScaleSlider);
      $(window).bind("resize", ScaleSlider);
      $(window).bind("orientationchange", ScaleSlider);
      //responsive code end

  }

  initSlider();

  // load externals

  // var conditions = $.getScript("scripts/conditions.js", function(loadConditions){
  //   return loadConditions;
  // });

  function htmlBuilder(fileName){
    var str = fileName + '.html #loaded-html'
    return str
  }

  $(".conditions-loader").on("click", function(event){
    var filename = event.target.id.split('_')[1];
    console.log(filename);
    filename = htmlBuilder(filename);
    $('#conditions-content').load(filename);
    var callback = function(){
      location.href = "#loader";
    }
    callback();
  });

});
