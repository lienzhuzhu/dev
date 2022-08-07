let homeBtn = document.getElementById("back-to-home-button");
homeBtn.onclick = () => {
    document.getElementById("landing").scrollIntoView();
}

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
