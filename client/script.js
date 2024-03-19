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

document.addEventListener("DOMContentLoaded", () => {
    let groups = document.querySelectorAll('.group');

    groups.forEach(function(group) {
        group.addEventListener('click', () => {
            group.classList.toggle('clicked');
        });
    });
});
