// cień paska po scrollu
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("scrolled", window.scrollY > 10);
});

// kopiowanie IP
function copyIP() {
    navigator.clipboard.writeText("veilmc.pl");
    alert("IP skopiowane: veilmc.pl");
}
