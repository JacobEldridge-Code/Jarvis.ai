// searchbar border
let searchBar = document.getElementById("search-input");
let searchBorder = document.querySelector(".searchbar-wrapper");
searchBar.addEventListener("focus" , () => {
    searchBorder.classList.add("focused");
});
searchBar.addEventListener("blur" , () => {
    searchBorder.classList.remove("focused");
});
//searchbar border ends
//searchbar toggle
let searchButton = document.querySelector(".middle-btn");
let searchMenu = document.getElementById("hidden-search-menu");
searchButton.addEventListener("click" , () => {
    searchButton.classList.toggle("active");
    searchMenu.classList.toggle("active");
});
let cancelButton = document.getElementById("cancel-btn");
let blurOff = document.getElementById("blur-overlay");
cancelButton.addEventListener("click" , () => {
    cancelButton.classList.toggle("active");
    searchMenu.classList.toggle("active");
    blurOff.classList.remove("active");
});
document.body.addEventListener("click", (event) => {
    if (!searchMenu.contains(event.target) && !searchButton.contains(event.target)) {
        searchButton.classList.remove("active");
        searchMenu.classList.remove("active");
        blurOff.classList.remove("active");
    }
});
//searchbar toggle ends
//blur effect
let toggleBlur = () => {
    let blur = document.getElementById("blur-overlay");
    blur.classList.toggle("active");
}
//blur effect ends
//group click event
document.addEventListener("DOMContentLoaded", function() {
    let groups = document.querySelectorAll('.group');
    groups.forEach(function(group) {
        group.addEventListener('click', () => {
            group.classList.toggle('clicked');
        });
    });
});


//hamburger menu for main page

const navBar = document.querySelector('.header-right');
const hamMenu = document.querySelector('.hamburger');

hamMenu.addEventListener('click', () => {
    navBar.classList.toggle('active');
    hamMenu.classList.toggle('active');
})






//headers background changes color
let className = "inverted";
let scrollTrigger = 80;

window.onscroll = function() {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};
