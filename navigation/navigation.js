const listMenu = document.querySelector(".bi-list");
const collapseMenu = document.querySelector(".nav-bar-collapse");

listMenu.addEventListener("click",()=>{
    if(collapseMenu.style.display==="block"){
        collapseMenu.style.display="none";
    }
    else{
        collapseMenu.style.display="block";
    }
});