

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
 $('.btn').click(function () {
            $(this).toggleClass("click");
        });









function update() {
 var el = document.querySelector(
  ".content, .more");
 el.innerHTML =
  "A beautiful mix of new Dance songs<br> and older Dance & Disco classics!";
};



function update2() {
 var el = document.querySelector(
  ".inhoud, .meer");
 el.innerHTML =
  "A beautiful mix of new Rock & Pop songs<br> to help you through the day!";
};




function update3() {
 var el = document.querySelector(
  ".jazzex, .minder");
 el.innerHTML =
  "A beautiful mix of Soul & Classicjazz songs<br> to help you through the day!";
};
