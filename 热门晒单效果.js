$(function(){
  setInterval(function(){
    $(".list li").last().css("height:0");
    $(".list").prepend($(".list li").last());
    $(".list li").first().animate({"height":"80px"},2000);
  },1000);
});
