
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

let searchButton = document.querySelector(".middle-btn");
let searchMenu = document.getElementById("hidden-search-menu");

searchButton.addEventListener("click" , () => {
    searchButton.classList.toggle("active");
    searchMenu.classList.toggle("active");
});

let cancelButton = document.getElementById("cancel-btn");

cancelButton.addEventListener("click" , () => {
    cancelButton.classList.toggle("active");
    searchMenu.classList.toggle("active")
})



