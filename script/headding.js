let h1 = document.getElementById("h1");

function moveH1() {
  h1.classList.remove("h1");
  void h1.offsetWidth;
  h1.classList.add("h1");
}
