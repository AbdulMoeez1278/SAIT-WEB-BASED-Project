// JavaScript to handle the menu toggle button and close button
var hamBurger = document.querySelector(".hamburger");
var closeBtn = document.querySelector(".close-btn");
var sidebar = document.querySelector(".sidebar");

hamBurger.addEventListener("click", function () {
  sidebar.classList.add("show");
  if (hamBurger.style.display == "block") {
    hamBurger.style.display = "none";
  } else {
    hamBurger.style.display = "none";
  }
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show");
  if (sidebar.style.display == "none") {
    hamBurger.style.display = "block";
  } else {
    hamBurger.style.display = "block";
  }
});

// Close the sidebar when a link is clicked
var links = document.querySelectorAll(".sidebar a");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    sidebar.classList.remove("show");
  });
}
