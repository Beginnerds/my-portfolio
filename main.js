const hamburger = document.getElementById("hamburger");
const links = document.querySelectorAll(".link");

let isNavOpen = false;

// close nav bar after clicking a link
links.forEach(link => {
    link.addEventListener("click",()=>{
        const navLinks = document.querySelector(".links");
        if(isNavOpen){
            navLinks.style.display = "none"
            const lines = document.querySelectorAll(".line");
            lines[2].style = "";
            lines[0].style = "";
            lines[1].style = "";
        }
    })
})


function toggleNav(){
    
    const navLinks = document.querySelector(".links");
    if(navLinks.style.display == "none" || navLinks.style.display == ""){
        navLinks.style.display = "flex";
        isNavOpen = true;

        const lines = document.querySelectorAll(".line");
        lines[2].style.display = "none";
        lines[0].style.transform = "rotate(45deg) translateY(2vh";
        lines[1].style.transform = "rotate(-45deg) translateY(-2vh)";
    }
    else{
        navLinks.style.display = "none"
        isNavOpen = false;

        const lines = document.querySelectorAll(".line");
        lines[2].style = "";
        lines[0].style = "";
        lines[1].style = "";
    }
   
}

hamburger.addEventListener("click",toggleNav)