import { setupRadio, playTrack } from './main24.js';
import { generateScript } from './voiceover.js';

document.addEventListener("DOMContentLoaded", () => {
  setupRadio();
  playTrack();
});





function myFunction1() {
  const links = document.getElementById("myLinks");
  const icon = document.querySelector(".icon span");

  const isOpen = links.style.display === "block";

  // Close
  if (isOpen) {
    links.style.display = "none";
    icon.style.opacity = "0";

    setTimeout(() => {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
      icon.style.opacity = "1";
    }, 150); // micro-pause
  }

  // Open
  else {
    links.style.display = "block";
    icon.style.opacity = "0";

    setTimeout(() => {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
      icon.style.opacity = "1";
    }, 150); // micro-pause
  }
}
