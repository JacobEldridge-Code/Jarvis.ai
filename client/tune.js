document.addEventListener('DOMContentLoaded', function() {
    let hamMenu = document.querySelector('.ham-menu');
    let navBar = document.querySelector('.tune-header-left-a');

hamMenu.addEventListener('click' , () => {
    
    navBar.classList.toggle('active');
    hamMenu.classList.toggle('active');
});
});

function closeMenu () {
    let navBar = document.querySelector('.tune-header-left-a');
    navBar.classList.remove('active');
    hamMenu.classList.remove('active');
}

let links = document.querySelector('.tune-header-left-a .link');

links.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu(); 
    });
});

nameLink.addEventListener('click', () => {
    closeMenu();
});