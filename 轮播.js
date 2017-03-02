$(document).ready(function(){
  var cur =0;
  var imgs=$("#flash").find("img");
    var lis=$("#flash").find("li");
  setInterval(autorun,1000);
  function autorun(){
    cur++;
    if(cur==3){
      cur=0;
    }
    for(var i =0; i<imgs.length;i++){
      imgs[i].style.display="none";
    }
    imgs[cur].style.display="block";
  for(var i=0;i<lis.length;i++){
    lis[i].className="";
  }
 lis[cur].className="cur";
 }
});
