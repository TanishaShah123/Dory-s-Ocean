var canvas=document.getElementById("myCanvas");
var drawimg=canvas.getContext("2d");
var dorywidth=100;
var doryheight=83;
var doryX=200;
var doryY=200;
var bg="bg.jpeg";
var dory="dory.jpeg";

function add(){
    var bgImgtag=new Image();
    bgImgtag.src=bg;
    bgImgtag.onload=uploadbg;

    var doryImgtag=new Image();
    doryImgtag.src=dory;
    doryImgtag.onload=uploaddory;
}
function uploadbg(){
drawimg.drawImage(bgImgtag,0,0,900,700);
}
function uploaddory(){
    drawimg.drawImage(doryImgtag,doryX,doryY,dorywidth,doryheight);
}
window.addEventListener("keydown",keydownf);

function keydownf(ed){
var clickedkc=ed.keyCode;
console.log(clickedkc);
if(clickedkc=="38"){
    up();
    console.log("upclick");
}

if (clickedkc=="40"){
    down();
    console.log("downclick");
}
if (clickedkc=="37"){
   left();
    console.log("leftclick");
}

if (clickedkc=="39"){
    right();
    console.log("rightclick");

}
}

function up(){
    if(doryY>0){
        doryY=doryY-10;
        uploadbg();
        uploaddory(); 
    }
}

function down(){
    if(doryY<600){
        doryY=doryY+10;
        uploadbg();
        uploaddory(); 
    }
}

function left(){
    if(doryX>0){
        doryX=doryX-10;
        uploadbg();
        uploaddory(); 
    }
}

function right(){
    if(doryX<800){
        doryX=doryX+10;
        uploadbg();
        uploaddory(); 
    }
}
