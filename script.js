document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const loveBtn = document.getElementById("loveBtn");
  const popup = document.getElementById("lovePopup");
  const backBtn = document.getElementById("backBtn");

  // Attempt auto-play (desktop)
  music.play().catch(err => {
    console.log("Auto-play blocked, will play on button click:", err);
  });

  // Love button click → popup + firework + music
  loveBtn.addEventListener("click", () => {
    // Play music (mobile safe)
    music.play().catch(err => console.log("Music play blocked:", err));

    // Show popup
    popup.style.transform = "scale(1)";

    // Firework effect
    for (let i = 0; i < 30; i++) {
      createFirework();
    }
  });

  // Back button → hide popup
  backBtn.addEventListener("click", () => {
    popup.style.transform = "scale(0)";
  });

  // Firework function
  function createFirework() {
    const heart = document.createElement("div");
    heart.className = "firework";
    heart.innerText = "💖";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight - 40 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1200);
  }
});
