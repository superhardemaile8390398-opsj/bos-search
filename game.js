const video=document.getElementById("startupVideo");
const menu=document.getElementById("menu");
const startBtn=document.getElementById("startBtn");

let done=false;
const bootSound=new Audio("assets/boot.mp3");
bootSound.volume=.35;

video.play().then(()=>bootSound.play().catch(()=>{}))
.catch(()=>document.body.addEventListener("touchstart",start,{once:true}));

function start(){video.play();bootSound.play().catch(()=>{});}

video.onclick=end;video.ontouchstart=end;video.onended=end;

function end(){
 if(done) return;
 done=true;
 video.classList.add("fadeOut");
 let f=setInterval(()=>{
  if(bootSound.volume>0.05) bootSound.volume-=0.05;
  else{bootSound.pause();clearInterval(f);}
 },40);
 setTimeout(()=>{video.remove();menu.classList.add("show");},600);
}

startBtn.onclick=()=>{
 menu.style.display="none";
 document.querySelector("canvas").style.display="block";
};
