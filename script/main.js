const center_btn = document.querySelectorAll(".btn_accueil")
const left_btn = document.querySelectorAll(".btn_projets");
const right_btn = document.querySelectorAll(".btn_competences");
const bottom_btn =document.querySelectorAll(".btn_parcours")
const high_btn = document.querySelectorAll(".btn_contact");
const fleurs = document.querySelectorAll('.fleur');


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
        fleurs.forEach(fleur => {
            fleur.classList.remove('poussee'); // Retirer toute ancienne animation
        });
    
        // Ajouter un délai pour appliquer la classe .poussee
        setTimeout(() => {
            fleurs.forEach(fleur => {
                fleur.classList.add('poussee'); // Lancer l'animation
            });
        }, 100); // Délai pour permettre de réinitialiser visuellement
    });
    // Réinitialiser les fleurs pour permettre de rejouer l'animation
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

document.querySelectorAll('.fleur-zone').forEach(zone => {
    zone.addEventListener('click', (e) => {
        e.preventDefault();
        const section = zone.getAttribute('data-section');
        document.querySelector(`#${section}`).scrollIntoView({ behavior: 'smooth' });
    });
});
