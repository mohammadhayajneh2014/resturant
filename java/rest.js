"use strict";

 let cnt=0;
 let priceOfShawarma=0;
 let numperOfShawarma=0;
function shawarma(){
cnt=parseInt(cnt)+parseInt(1);
numperOfShawarma=parseInt(numperOfShawarma)+parseInt(1)
priceOfShawarma= numperOfShawarma*1.75;
 let divData=document.getElementById("Shawarma1");
 divData.innerHTML="Number of Meal: ("+cnt +") prise of shawarma: ("+priceOfShawarma +")";
}
let zingerCnt=0
let priceOfZinger=0;
let numperOfZinger=0;

function zinger(){
    zingerCnt=parseInt(zingerCnt)+parseInt(1);
    numperOfZinger=parseInt(numperOfZinger)+parseInt(1)
    priceOfZinger=numperOfZinger*2;
 let divData=document.getElementById("zinger1");
 divData.innerHTML="Number of Meal: ("+ zingerCnt+") prise of zinger1: ("+priceOfZinger +")";
}

let MansafCnt=0
let priceOfMansaf=0;
let numperOfMansaf=0;

function MANSAF(){
    MansafCnt=parseInt(MansafCnt)+parseInt(1);
    numperOfMansaf=parseInt(numperOfMansaf)+parseInt(1)
    priceOfMansaf= numperOfMansaf*6;
 let divData=document.getElementById("MANSAF");
 divData.innerHTML="Number of Meal: ("+MansafCnt +") prise of MANSAF: ("+priceOfMansaf +")";
}