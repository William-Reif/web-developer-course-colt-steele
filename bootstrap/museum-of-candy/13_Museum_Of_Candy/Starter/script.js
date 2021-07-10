const navbar = document.getElementById("main-navbar") 
console.log(navbar);

// navbar.style.backgroundColor = "blue";

console.log(navbar.offsetHeight);
window.onscroll = () => {
    if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};