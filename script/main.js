const center_btn = document.querySelectorAll(".btn_accueil")
const left_btn = document.querySelectorAll(".btn_projets");
const right_btn = document.querySelectorAll(".btn_competences");
const bottom_btn =document.querySelectorAll(".btn_parcours")
const high_btn = document.querySelectorAll(".btn_contact");

const movable = document.querySelector(".movable");

center_btn.forEach(btn => {
    btn.addEventListener("click", function(){
        movable.style.transform="";
        console.log(movable.style.transform);
    });
});

left_btn.forEach(btn => {
    btn.addEventListener("click", function(){
        movable.style.transform="translateX(100vw)";
        console.log(movable.style.transform);
    });
});
right_btn.forEach(btn => {
    btn.addEventListener("click", function(){
        movable.style.transform="translateX(-100vw)";
        console.log(movable.style.transform);
    });
});


bottom_btn.forEach(btn => {
    btn.addEventListener("click", function(){
        movable.style.transform="translateY(-100vh)";
        console.log(movable.style.transform);
    });
});

high_btn.forEach(btn => {
    btn.addEventListener("click", function(){
        movable.style.transform="translateY(100vh)";
        console.log(movable.style.transform);
    });
});