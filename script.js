document.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('pageshow', function (event) {
    if (event.persisted ||
       (typeof window.performance !== "undefined" && window.performance.navigation.type === 2)) {
      window.location.reload();
    }
  });


  const clickAudio = new Audio('boot.wav');

  const backgroundAudio = new Audio('space.wav');
  backgroundAudio.loop = true;
  backgroundAudio.muted = true;

  backgroundAudio.play().catch(err => {
    console.warn("Muted autoplay failed:", err);
  });

  const fadeOverlay = document.getElementById('fadeOverlay');
  const enterButton = document.getElementById('enterButton');
  const heroTextElements = document.querySelectorAll('.hero-text');
  const volumeIcon = document.getElementById('volumeIcon');

  let isMuted = true; 

  volumeIcon.addEventListener('click', () => {
    if (isMuted) {
 
      backgroundAudio.muted = false;
      backgroundAudio.play().catch(err => {
        console.warn("Audio play failed:", err);
      });
      volumeIcon.textContent = '🔊';
      isMuted = false;
    } else {

      backgroundAudio.muted = true;
      volumeIcon.textContent = '🔇';
      isMuted = true;
    }
  });


  enterButton.addEventListener('click', () => {
    clickAudio.play().catch(err => {
      console.warn("Click audio play failed:", err);
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
