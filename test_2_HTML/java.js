
let choix = 0; // Declare choix globally

function change(pion) {
    let button = document.getElementById("pion");
    
    if (choix === 0) {
        button.style.backgroundColor = "green";
        choix += 1;
    } else if (choix === 1) {
        button.style.backgroundColor = "red";
        choix += 1;
    } else {
        button.style.backgroundColor = "black";
        choix = 0;
    }
}

