function copyIP() {
    navigator.clipboard.writeText("veilmc.pl");
    const el = document.getElementById("ip");
    el.classList.add("copied");
    el.innerText = "Skopiowano!";
    setTimeout(() => {
        el.classList.remove("copied");
        el.innerText = "IP: veilmc.pl (kliknij aby skopiować)";
    }, 1500);
}
