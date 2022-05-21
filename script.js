var dec=document.getElementById("dec-btn");
var inc=document.getElementById("inc-btn");
var res=document.getElementById("res-btn");

dec.onclick=decrease;
inc.onclick=increase;
res.onclick=reset;


function decrease(){
   var val=Number(document.getElementById("value").innerHTML);
   val--;
   document.getElementById("value").innerHTML=val;
}

function increase(){
   var val=Number(document.getElementById("value").innerHTML);
   val++;
   document.getElementById("value").innerHTML=val;
}

function reset(){
   document.getElementById("value").innerHTML=0;
}