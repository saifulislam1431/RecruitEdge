const activePage = window.location.pathname;
console.log(activePage);
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links")

const navLinks = document.querySelectorAll("nav a").forEach(link =>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add("linkActive")
    }
})

hamburger.addEventListener("click" , ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")
})