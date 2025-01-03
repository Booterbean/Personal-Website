document.addEventListener('DOMContentLoaded', () => {
  const audio = new Audio('boot.wav');
  const fadeOverlay = document.getElementById('fadeOverlay');
  const enterButton = document.getElementById('enterButton');
  const heroTextElements = document.querySelectorAll('.hero-text');

  enterButton.addEventListener('click', () => {
    audio.play().catch(err => {
      console.warn("Audio play failed:", err);
    });

    heroTextElements.forEach(el => {
      el.classList.add('text-wipe');
    });

    setTimeout(() => {
      fadeOverlay.classList.add('fade-to-white');
    }, 1500);

    fadeOverlay.addEventListener('animationend', () => {
      window.location.href = "https://publish.obsidian.md/corey";
    }, { once: true });
  });
});
