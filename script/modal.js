document.addEventListener("DOMContentLoaded", function () {
  var modalIMG = document.getElementById("modalIMG");
  var exampleModalLabel = document.getElementById("exampleModalLabel");
  var imgButtons = document.querySelectorAll('[data-bs-toggle="modal"]');
  imgButtons.forEach(function (img) {
    img.addEventListener("click", function () {
      var imgSrc = img.getAttribute("data-img-src");
      var text = img.getAttribute("title");
      modalIMG.src = imgSrc;
      exampleModalLabel.innerHTML = text;
    });
  });
});
