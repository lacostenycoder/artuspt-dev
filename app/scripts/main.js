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
  });
//  breadcrumb navigation requires id with section prefix and
// data attribute 'pageId' for grouping. this pattern is reusable
// for pages which require sub-nav
  $(".breadcrumb a").on("click", function(){
    var $active = $(".breadcrumb").find(".active");
     $active.removeClass("active");
     $(this).parent().addClass("active");
     var $el = $(this);
     var sectionId = $el.attr('id');
     var pageId = $el.parent().closest('div').data('pageId');
     breadcrumbSelector(pageId, sectionId);
  });

  function breadcrumbSelector(pageId, sectionId){
    var hideGroup = $('.'+pageId);
    $.each(hideGroup, function(){
      if(this.className.split(' ')[0] != "hidden"){
        $(this).addClass('hidden');
      }
    });
    $('#'+pageId+'-'+sectionId).removeClass('hidden');
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

  $('#home').click(); // show home section when page loads

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

  function htmlBuilder(fileName){
    var str = fileName + '.html #loaded-html'
    return str
  }

// dynamically load pages for 'conditions treated' sections
  $(".conditions-loader").on("click", function(event){
    var filename = event.target.id.split('_')[1];
    //console.log(filename);
    filename = htmlBuilder(filename);
    $('#conditions-content').load(filename);
    var callback = function(){
      location.href = "#loader";
      $(".conditions-head").slideUp("slow", function(){});
    }
    callback();
  });

  //unhide conditions main jumbotron again when nav-button clicked
  $("#conditions").on('click', function(){
    $('.conditions-head').slideDown("slow", function(){});
  });

});
