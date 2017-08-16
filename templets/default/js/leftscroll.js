var speedss=20; //数字越大速度越慢
var cab=document.getElementById("gundong");
var cab1=document.getElementById("gundong1");
var cab2=document.getElementById("gundong2");
cab2.innerHTML=cab1.innerHTML;
function Marquees(){
if(cab2.offsetWidth-cab.scrollLeft<=0)
cab.scrollLeft-=cab1.offsetWidth
else{
cab.scrollLeft++;
}
}
var MyMars=setInterval(Marquees,speedss);
cab.onmouseover=function() {clearInterval(MyMars)};
cab.onmouseout=function() {MyMars=setInterval(Marquees,speedss)};