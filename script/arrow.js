let arrow = document.getElementById("arrow");
let arrow1 = document.getElementById("arrow1");
let arrow2 = document.getElementById("arrow2");
let rowSpan = document.getElementById("rowSpan");
let rowSpan1 = document.getElementById("rowSpan1");
let rowSpan2 = document.getElementById("rowSpan2");
let firstCol = document.getElementById("firstCol");
let secondCol = document.getElementById("secondCol");
let thirdCol = document.getElementById("thirdCol");
const screenWidth=window.innerWidth;


arrow.addEventListener("click", showSpan);
arrow1.addEventListener("click", showSpan1);
arrow2.addEventListener("click", showSpan2);

function showSpan(){
    var rowSpanDisplayStyle = window.getComputedStyle(rowSpan).display;
    if(rowSpanDisplayStyle === "none"){
        rowSpan.style.display="flex";
        arrow.classList.add('rotate');
        if(screenWidth <=992 && screenWidth >=769 ){
            secondCol.style.height="280px";
            
        }
        else if(screenWidth <=400 && screenWidth >=310){
            secondCol.style.height="270px";
        }
        else if(screenWidth <=480 && screenWidth >=401){
            secondCol.style.height="240px";
        }
        else if(screenWidth <=550 && screenWidth >=481){
            secondCol.style.height="280px";
        }
        else if(screenWidth <=620 && screenWidth >=551){
            secondCol.style.height="285px";
        }
        else if(screenWidth <=768 && screenWidth >=621){
            secondCol.style.height="280px";
        }
        else if(screenWidth <=1124 && screenWidth >=993){
            secondCol.style.height="335px";
        }
        else if(screenWidth <=2100 && screenWidth >=1881){
            secondCol.style.height="270px";
        }
        else{
            secondCol.style.height="295px";
        }
        
    }
    else{
        rowSpan.style.display="none";
        arrow.classList.remove('rotate')
        secondCol.style.height="";
    }
    
}
function showSpan1(){
    var rowSpanDisplayStyle = window.getComputedStyle(rowSpan1).display;
    
    if(rowSpanDisplayStyle === "none"){
        rowSpan1.style.display="flex";
        arrow1.classList.add('rotate');
        console.log(screenWidth)
        if(screenWidth <=992 && screenWidth >=769 ){
            firstCol.style.height="280px";
            
        }
        else if(screenWidth <=450 && screenWidth >=310){
            firstCol.style.height="270px";
        }
        else if(screenWidth <=480 && screenWidth >=451){
            firstCol.style.height="240px";
        }
        else if(screenWidth <=550 && screenWidth >=481){
            firstCol.style.height="280px";
        }
        else if(screenWidth <=620 && screenWidth >=551){
            firstCol.style.height="285px";
        }
        else if(screenWidth <=768 && screenWidth >=621){
            firstCol.style.height="280px";
        }
        else if(screenWidth <=1150 && screenWidth >=993){
            firstCol.style.height="335px";
        }
        else if(screenWidth <=2100 && screenWidth >=1881){
            firstCol.style.height="270px";
        }
        else {
            firstCol.style.height="295px";
        }
        
    }
    else{
        rowSpan1.style.display="none";
        arrow1.classList.remove('rotate');
        firstCol.style.height="";
    }
    
}
function showSpan2(){
    var rowSpanDisplayStyle = window.getComputedStyle(rowSpan2).display;
    if(rowSpanDisplayStyle === "none"){
        rowSpan2.style.display="flex";
        arrow2.classList.add('rotate');
        if(screenWidth <=992 && screenWidth >=769 ){
            thirdCol.style.height="210px";
            
        }
        else if(screenWidth <=480 && screenWidth >=310){
            thirdCol.style.height="175px";
        }
        else if(screenWidth <=550 && screenWidth >=481){
            thirdCol.style.height="210px";
        }
        else if(screenWidth <=620 && screenWidth >=551){
            thirdCol.style.height="215px";
        }
        else if(screenWidth <=768 && screenWidth >=621){
            thirdCol.style.height="210px";
        }
        else{
            thirdCol.style.height="230px";
        }
    }
    else{
        rowSpan2.style.display="none";
        arrow2.classList.remove('rotate');
        thirdCol.style.height=''
    }
    
}