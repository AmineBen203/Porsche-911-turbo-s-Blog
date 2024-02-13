window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("loader--hidden");
});
document.getElementById("music-toggle").addEventListener("click", function() {
    var musicPlayer = document.getElementById("music-player");
    var arrowIcon = document.getElementById("arrow-icon");

    if (musicPlayer.style.right === "-310px") { // If music player is hidden
        musicPlayer.style.right = "0";
        arrowIcon.style.transform = "rotate(0deg)"; // Rotate arrow to point right
    } else {
        musicPlayer.style.right = "-310px";
        arrowIcon.style.transform = "rotate(180deg)"; // Rotate arrow to point left
    }
});
