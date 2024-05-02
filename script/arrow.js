let arrow = document.getElementById("arrow");
let arrow1 = document.getElementById("arrow1");
let arrow2 = document.getElementById("arrow2");
let rowSpan = document.getElementById("rowSpan");
let rowSpan1 = document.getElementById("rowSpan1");
let rowSpan2 = document.getElementById("rowSpan2");
let firstCol = document.getElementById("firstCol");
let secondCol = document.getElementById("secondCol");
let thirdCol = document.getElementById("thirdCol");


arrow.addEventListener("click", showSpan);
arrow1.addEventListener("click", showSpan1);
arrow2.addEventListener("click", showSpan2);

function showSpan(){
    var rowSpanDisplayStyle = window.getComputedStyle(rowSpan).display;
    if(rowSpanDisplayStyle === "none"){
        rowSpan.style.display="flex";
        arrow.classList.add('rotate')
        secondCol.style.height="300px";
        
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
        firstCol.style.height="300px";
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
        thirdCol.style.height="230px";
    }
    else{
        rowSpan2.style.display="none";
        arrow2.classList.remove('rotate');
        thirdCol.style.height=''
    }
    
}