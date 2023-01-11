var correctId = "";
var ids = ["a", "b", "c", "d", "e",
 "f", "g", "h", "i"
];
var index = 0;
var tries = 3;
var found = false;

function select(id) {
 if (found) {
  alert

  return;
 } else {
  if (tries === 0) {
   gameOver();
  } else {
   index = Math.round((Math
    .random() * 9));
   correctId = ids[index];
   tries -= 1;
   document.getElementById("tries")
    .innerHTML =
    "You have " + tries + " tries";
   if (id === correctId) {
    document.getElementById(id)
     .innerHTML = "💰";
    document.getElementById(
      "message").innerHTML =
     "You found it!";
    10;
    window.location.href =
     "won.html";
    found = true;
   } else {
    document.getElementById(id)
     .innerHTML = "☠️";
    document.getElementById(
      "message").innerHTML =
     "You aren't very good at this.";
   }
  }
 }
}

function gameOver() {
 found = true;
 document.getElementById("message")
  .innerHTML =
  "Sorry, better luck next time!";
}

function reset()  {
window.location.href = "cata.html";
}
