$(document).ready(function(){
    var window_width = $(window).width();
    var main_width = $(".photostring").width();
    var long_container = $(".long-container");
    var item = $(".slide-pic");
    var slide_number = 0;

    long_container.css("width", main_width * 3);
    item.css("width", long_container.width() / 8);

    $(".see-next").click(function(){
      if(slide_number < 7){
        slide_number++;

        if(slide_number == 7){
          $(".see-next").animate({opacity: 0});
        } 
        else {
          $(".see-next").animate({opacity: 1});
        }

        if(slide_number == 0){
          $(".see-previous").animate({opacity: 0});

        } else {
          $(".see-previous").animate({opacity: 1});
        }
        
        var item_width = $(".slide-pic").width();
        var pixels_moved = item_width * slide_number;

        long_container.animate({
          marginLeft: -pixels_moved
        });
      }
    });

    $(".see-previous").click(function(){
      if(slide_number > 0){
        slide_number--;

        if(slide_number == 7){
          $(".see-next").animate({opacity: 0});
        } 
        else {
          $(".see-next").animate({opacity: 1});
        }

        if(slide_number == 0){
          $(".see-previous").animate({opacity: 0});

        } else {
          $(".see-previous").animate({opacity: 1});
        }
        
        var item_width = $(".slide-pic").width();
        var pixels_moved = item_width * slide_number;

        long_container.animate({
          marginLeft: -pixels_moved
        });
      }
    });
  });