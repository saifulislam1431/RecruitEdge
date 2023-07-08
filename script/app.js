const activePage = window.location.pathname;
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

const search = () =>{
    const box = document.getElementById("search-bar").value.toUpperCase();
    const candidatesContainer = document.getElementById("candidate-container");
    const candidates = document.querySelectorAll(".candidate")
    const candidateRole = candidatesContainer.querySelectorAll(".candidate-role")
    const candidateLocation = candidatesContainer.querySelectorAll(".candidate-location")

    for (let i = 0 ; i < candidateRole.length && i < candidateLocation.length ; i++){
        let match = candidates[i].querySelectorAll(".candidate-role")[0] || candidates[i].querySelectorAll(".candidate-location")[0];

        if(match){
            let value = match.textContent || match.innerHTML;

            if(value.toUpperCase().indexOf(box) > -1){
                candidates[i].style.display = "";
            }else{
                candidates[i].style.display = "none";
            }
        }

    }
}
