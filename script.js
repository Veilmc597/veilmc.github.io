function copyIP() {
  navigator.clipboard.writeText("veilmc.pl");

  const btn = document.getElementById("copyBtn");
  btn.classList.add("copied");
  btn.innerText = "Skopiowano!";

  setTimeout(() => {
    btn.classList.remove("copied");
    btn.innerText = "Skopiuj IP";
  }, 1500);
}
