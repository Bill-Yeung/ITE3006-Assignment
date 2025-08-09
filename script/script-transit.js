// Functions for entry page visual effects

function transit() {
    var entryPage = document.getElementById("entry-page");
    entryPage.style.opacity = 0;
    entryPage.style.transform = "scale(1.5)";
    setTimeout(transitToHome, 1000); // execute transitToHome after 1 second
}

function transitToHome() {
    var entryPage = document.getElementById("entry-page");
    entryPage.style.display = "none";
    window.location = "home.html"; // change url to home.html
}