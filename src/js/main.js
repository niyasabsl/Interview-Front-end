// Toggle mobile nav
document.getElementById("navbar__toggle").addEventListener('click', mobileNavToggle);
function mobileNavToggle() {
  var menu = document.getElementById("mobile__menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
