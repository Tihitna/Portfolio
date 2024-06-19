let about = document.getElementById("about");
let projects = document.getElementById("projects");
let skills = document.getElementById("skills");
let contact = document.getElementById("contact");
let aboutLink = document.getElementById("aboutLink");
let projectsLink = document.getElementById("projectsLink");
let skillsLink = document.getElementById("skillsLink");
let contactLink = document.getElementById("contactLink");

aboutLink.addEventListener("click", showAbout);
projectsLink.addEventListener("click", showProjects);
skillsLink.addEventListener("click", showskills);
contactLink.addEventListener("click", showContact);

function showAbout() {
  about.style.display = "block";
  projects.style.display = "none";
  skills.style.display = "none";
  contact.style.display = "none";
  aboutLink.style.paddingBottom = "10px";
  aboutLink.style.borderBottom = "1px solid #e8bcf0";
  projectsLink.style.borderBottom = "0px";
  contactLink.style.borderBottom = "0px";
  skillsLink.style.borderBottom = "0px";
  moveSocial();
}
function showProjects() {
  about.style.display = "none";
  projects.style.display = "grid";
  skills.style.display = "none";
  contact.style.display = "none";
  projectsLink.style.paddingBottom = "10px";
  projectsLink.style.borderBottom = "1px solid #e8bcf0";
  aboutLink.style.borderBottom = "0px";
  skillsLink.style.borderBottom = "0px";
  contactLink.style.borderBottom = "0px";
  moveSocial();
  moveH1();
}
function showskills() {
  about.style.display = "none";
  projects.style.display = "none";
  skills.style.display = "block";
  contact.style.display = "none";
  skillsLink.style.paddingBottom = "10px";
  skillsLink.style.borderBottom = "1px solid #e8bcf0";
  aboutLink.style.borderBottom = "0px";
  projectsLink.style.borderBottom = "0px";
  contactLink.style.borderBottom = "0px";
  moveSocial();
}
function showContact() {
  about.style.display = "none";
  projects.style.display = "none";
  skills.style.display = "none";
  contact.style.display = "block";
  contactLink.style.paddingBottom = "10px";
  contactLink.style.borderBottom = "1px solid #e8bcf0";
  aboutLink.style.borderBottom = "0px";
  skillsLink.style.borderBottom = "0px";
  projectsLink.style.borderBottom = "0px";
  moveSocial();
}
