// script to handle modal presentation
//

let showMessage = true;

document.addEventListener("DOMContentLoaded", () => {
    if (showMessage) {
        document.getElementById("modal").style.display = "flex";
    } else {
        document.getElementById("modal").style.display = "none";
    }
});

document.getElementById("modal").addEventListener("click", closeModal);
// window.addEventListener("click", closeModal);

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

document.getElementById("year-span").innerHTML = new Date().getFullYear();
