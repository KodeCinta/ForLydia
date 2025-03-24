let AL = [{text:"When I went"},{text:"to the park"},{text:"I recognized"},{text:"you at a glance"},{text:"Face to face"},{text:"we smiled And"},{text:"I finally..."},{text:"held your hands"},{text:""}];


let image = document.getElementById("hand");

let temp = document.getElementById("fill");
let button = document.getElementById("tes");
let audio = document.getElementById("bgm");
let comet = document.getElementById("cmt");

let svn = document.getElementById("svn");
let shad = document.getElementById("shadow");
let paragraf = document.getElementById("paragraf");

let index=0;
let lastpic = document.getElementById("lastpic");

function play(){
    backgroundmusic();
    initialize(index);
    button.classList.remove("btn");
    button.classList.add("hidden");
}

 function initialize(){
    if(index>=AL.length)return;
    if(index==AL.length-2){
        showimg();
    }else if(index==AL.length-1){
        image.classList.add("hidden");
        temp.classList.remove("textres");
        paragraf.classList.add("paragraf")
        paragraf.classList.remove("hidden");
        lastpic.classList.remove("hidden");
        lastpic.classList.add("show1");
    }
    temp.textContent = AL[index].text;
    temp.classList.add("textres");
    index++;
    let trans;
    if(index==1){
        trans = 2100;
    }else if(index==2){
        shad.classList.remove("hidden");
        shad.classList.add("show");
        trans = 2800;
    }else if(index==3){
        shad.classList.remove("show");
        shad.classList.add("hidden");
        trans = 4000;
    }else if(index==4){
        svn.classList.remove("hidden");
        svn.classList.add("show");
        trans = 3600;
    }else if(index==5){
        svn.classList.remove("show");
        svn.classList.add("hidden");
        trans = 3200;
    }else if(index==6){
        trans= 2500;
    }else if(index==7){
        trans = 3400;
    }else if(index==8){
        comet.classList.remove("hidden");
        comet.classList.add("fly");
        trans = 3400;
    }
    else if(index==9){
        trans = 15000;
    }
    setTimeout(initialize,trans);
 }


 function showimg(){
    image.classList.remove("hidden");
 }

function backgroundmusic(){
    audio.oncanplaythrough = function(){
        audio.currentTime=170;
        audio.play();
    }
    document.body.addEventListener("click",function(){
        if(audio.paused)audio.play();
    },{once:true});
}








