let social=document.getElementById("social");
document.addEventListener("DOMContentLoaded", function() {
    moveSocial();
});
function moveSocial(){
    social.classList.remove('slide-animation');
    void social.offsetWidth;
    social.classList.add('slide-animation');
}