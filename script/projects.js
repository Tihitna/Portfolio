let uiux = document.getElementById("uiux");
let all = document.getElementById("all");
let web = document.getElementById("web");
let allProjects = document.getElementById("allProjects");
let uiuxProjects = document.getElementById("uiuxProjects");
let webProjects = document.getElementById("webProjects");

uiux.addEventListener("click", displayUiUxProjects);
all.addEventListener("click", displayAllProjects);
web.addEventListener("click", displayWebProjects);

function displayUiUxProjects() {
  allProjects.style.display = "none";
  webProjects.style.display = "none";
  uiuxProjects.style.display = "grid";
  uiux.style.color = "gray";
  web.style.color = "white";
  all.style.color = "white";
}
function displayAllProjects() {
  webProjects.style.display = "none";
  uiuxProjects.style.display = "none";
  allProjects.style.display = "grid";
  all.style.color = "gray";
  web.style.color = "white";
  uiux.style.color = "white";
}
function displayWebProjects() {
  uiuxProjects.style.display = "none";
  webProjects.style.display = "grid";
  allProjects.style.display = "none";
  web.style.color = "gray";
  all.style.color = "white";
  uiux.style.color = "white";
}
