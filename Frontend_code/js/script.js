/**
 * This is code for the Dropdown Menu(On mobile phones)
 * ------------------------------------------------------
 */

// Select the navbar toggle button and the navbar collapse menu
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

// Add a click event listener to the navbar toggle button
navbarToggler.addEventListener("click", function () {
  // Toggle the show class on the navbar collapse menu
  navbarCollapse.classList.toggle("show");
});
