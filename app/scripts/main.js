// jshint devel:true
$(document).ready(function(){
  $(".nav a").on("click", function(){
    var $active = $(".nav").find(".active");
     $active.removeClass("active");
     $(this).parent().addClass("active");
     var $el = $(this);
     navSelector($el.attr('id'));
  });

  function navSelector(unHide){
    var pages = $('.page-section');
    $.each(pages, function(){
      if(this.className.split(' ')[1] != "hidden"){
        $(this).addClass('hidden');
      }
    });
    $('#'+unHide+'-page').removeClass('hidden');
  }

  $('#home').click();
});
