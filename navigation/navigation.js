const listMenu = document.querySelector(".bi-list");
const collapseMenu = document.querySelector(".nav-bar-collapse");

listMenu.addEventListener("click",()=>{
    if(collapseMenu.style.display==="none"){
        collapseMenu.style.display="block";
    }
    else{
        collapseMenu.style.display="none"
    }
});