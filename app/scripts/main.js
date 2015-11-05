// jshint devel:true
$(document).ready(function(){
  var defaultImage;
  defaultImage = "s1.jpg";
// navbar unhides selected items
  $("#myNavbar .nav a").on("click", function(){
    var $active = $(".nav").find(".active");
     $active.removeClass("active");
     $(this).parent().addClass("active");
     var $el = $(this);
     navSelector($el.attr('id'));
     showSlider($el.attr('id'));
  });

  $("#about").on("click", function(){
    $('#about-page .nav-tabs li a').first().click();
  });
  $("#hands").on("click", function(){
    $('#hands-page .nav-tabs li a').first().click();
  });

  // show hover events for conditions treated when button hovers
  $('.conditions-loader').hover(function(){
      $('#' + $(this).data('hoverTarget')).addClass('pic-icon-hover');
    }, function(){
      $('#' + $(this).data('hoverTarget')).removeClass('pic-icon-hover');
    }
  );

  $('.pic-icon').hover(function(){
      $('#' + $(this).data('hoverTarget')).addClass('condition-loader-hover');
    }, function(){
      $('#' + $(this).data('hoverTarget')).removeClass('condition-loader-hover');
    }
  );

  $('.pic-icon').click(function(){
    $('#' + $(this).data('hoverTarget')).click();
  });

  // show directions on footer link
  $('#map-directions').click(function(){
    $('#contact').click();
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
