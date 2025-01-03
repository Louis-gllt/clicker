let NbCadeaux = 0;

document.getElementById("BoutonPereNoel").addEventListener("click", function() {
    NbCadeaux++;
    updateDisplay();
    if (NbCadeaux == 10) {
        alert("🎉 Bravo ! Tu as créé 10 cadeaux ! 🎁 Continue, Noël dépend de toi !");
    }
});

let CoutMachineMagique = 5;
let NbMachineMagique = 0;

document.getElementById("MachineMagique").addEventListener("click", function() {
    if (NbCadeaux >= CoutMachineMagique) {
        NbCadeaux -= CoutMachineMagique;
        NbMachineMagique++;
        updateDisplay();
    }
});

let CoutLutin = 5;
let NbLutin = 0;

document.getElementById("Lutin").addEventListener("click", function() {
    if (NbMachineMagique >= CoutLutin) {
        NbMachineMagique -= CoutLutin;
        NbLutin++;
        updateDisplay();
    }
});

let CountTraineau = 10;
let NbTraineau = 0;

document.getElementById("Traineau").addEventListener("click", function() {
    if (NbLutin >= CountTraineau) {
        NbLutin -= CountTraineau;
        NbTraineau++;
        updateDisplay();
    }
});

function updateGifts() {
    // Production par machine magique
    NbCadeaux += NbMachineMagique;
    NbCadeaux += NbLutin * 5;
    NbCadeaux += NbTraineau * 10;
    // Sauvegarder les cookies
    setCookie("NbCadeaux", NbCadeaux.toString(), 7);
    setCookie("NbMachineMagique", NbMachineMagique.toString(), 7);
    setCookie("NbLutin", NbLutin.toString(), 7);
    setCookie("NbTraineau", NbTraineau.toString(), 7);
    //met a jour l'affichage
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("NbCadeaux").textContent = NbCadeaux;
    document.getElementById("NbMachineMagique").textContent = NbMachineMagique;
    document.getElementById("NbLutin").textContent = NbLutin;
    document.getElementById("NbTraineau").textContent = NbTraineau;

}

setInterval(updateGifts, 1000);

// Fonction pour créer un cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Durée en jours
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Fonction pour lire un cookie
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(name + "=") === 0) {
            return c.substring(name.length + 1);
        }
    }
    return null;
}

window.onload = function() {
    const savedGiftCount = getCookie("NbCadeaux");
    if (savedGiftCount) {
        NbCadeaux = parseInt(savedGiftCount, 10);
        document.getElementById("NbCadeaux").textContent = NbCadeaux;
    }
    const savedGiftCount2 = getCookie("NbMachineMagique");
    if (savedGiftCount2) {
        NbMachineMagique = parseInt(savedGiftCount2, 10);
        document.getElementById("NbMachineMagique").textContent = NbMachineMagique;
    }
    const savedGiftCount3 = getCookie("NbLutin");
    if (savedGiftCount3) {
        NbLutin = parseInt(savedGiftCount3, 10);
        document.getElementById("NbLutin").textContent = NbLutin;

    }
    const savedGiftCount4 = getCookie("NbTraineau");
    if (savedGiftCount4) {
        NbTraineau = parseInt(savedGiftCount4, 10);
        document.getElementById("NbTraineau").textContent = NbTraineau;
        
    }
}