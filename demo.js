$(function(){
  $("#left").mouseover(function(){
    $("#left #cover").show();
    $("#right").show();
  })
  $("#left").mouseout(function(){
  $("#left #cover").hide();
  $("#right").hide();
})
  $("#left").mouseout(function(e){
    var m_left=e.pageX;
    var m_top=e.pageY;
     var div_left=$("#left").offset().left;
     var div_top=$("#left").offset().top;
     var left=m_left-div_left-100;
     var top=m_top-div_top-100;
     if(left<0){
       left=0;
     }
     if(left>200){
       left=200;
     }
     if(top<0){
       top=0;
     }
     if(top>200){
       top=200;
     }
     $("#left #cover").css({
       "left":left+"px","top":top+"px"
     });
var right_left=-2*left;
var right_top=-2*top;
$("#right img").css({"left":right_left+"px","top":right_top+"px"});
  })
})
