// ===== DŹWIĘKI =====
const creeperSss = new Audio("creeper.mp3");
creeperSss.volume = 0.15; // cicho

function playCreeper() {
  creeperSss.currentTime = 0;
  creeperSss.play().catch(() => {});
}

// ===== KLIKANIE KART / LINKÓW =====
document.addEventListener("DOMContentLoaded", () => {
  const clickableElements = document.querySelectorAll("a, .card");

  clickableElements.forEach(el => {
    el.addEventListener("click", playCreeper);
  });
});

// ===== KOPIOWANIE IP (TWOJA FUNKCJA + DŹWIĘK) =====
function copyIP() {
  navigator.clipboard.writeText("veilmc.pl");

  // dźwięk creepera przy kopiowaniu
  playCreeper();

  const btn = document.getElementById("copyBtn");
  btn.classList.add("copied");
  btn.innerText = "Skopiowano!";

  setTimeout(() => {
    btn.classList.remove("copied");
    btn.innerText = "Skopiuj IP";
  }, 1500);
}
