


document.getElementById("hero-image")
 .addEventListener("touchstart",
  displayMessage);

function displayMessage() {
 document.getElementById("message")
  .innerHTML = "";
}


document.getElementById("max")
 .addEventListener("touchstart",
  displayName);

function displayName() {
 document.getElementById("bebe")
  .innerHTML = "Hi We're SG Lewis and Janelle Monae, we're happy to be here on Sunny!";
}







// Create the audio element for the player
let curr_track = document.createElement('audio');
 
// Define the list of tracks that have to be played
let track_list = [






































































































































































































































{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },







{
    name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1best.mp3",
  },







{
     name: "Starlette (instrumental)",
    artist: "BB & Q Band ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/BB & Q Band - Starlette (instrumental).mp3",
  },









{
    name: "Dancin' (1976)",
    artist: "Crown Heights Affair ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Crown Heights Affair - Dancin' (single).mp3",
  


},









{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },





{
    name: "   Are You With Me  ",
    artist: "Lost Frequencies ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Lost Frequencies - Are You With Me.mp3",
  },








{
     name: " Endless Summer ",
    artist: "Sam Feldt   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Sam Feldt - Endless Summer.mp3",
  },



{
     name: "  Houdini (maxi)",
    artist: "Dua Lipa  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Dua Lipa - Houdin1 (maxi).mp3",
  },





{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  },









{
    name: "   Paradise",
    artist: "Sophie And The Giants   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Sophie And The Giants - Paradise.mp3",
  },
{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  },
 
{
    name: "   Lose Myself ",
    artist: "Post Malone & The Weeknd ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Post Malone & The Weeknd - Lose Myself.mp3",
  },


{
     name: "Cold Heart",
    artist: "Elton John & Dua Lipa",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Microfoon Elton & Dua.mp3",
  },

 












{
    name: " Cold Heart",
    artist: "Elton John & Dua Lipa",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Elton & Dua - Cold Heart.mp3",
  },









 





{
    name: "Blinding Lights",
    artist: "The Weeknd  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/The weeknd - Blinding Lights.mp3", 
  },


















{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },

















{
     name: "   Just Be ",
    artist: "Tiesto ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek06/Tiesto - Just Be.mp3",
  },




























{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },

 



{
    name: "Welcome!",
    artist: "Purple Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
  


}, 




{
    name: " Hip Hop Lollipop",
    artist: "Bootsy Collins",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Bootsy Collins, Fantaazma - Hip Hop Lollipop.mp3",
  },


{
    name: "Hollywood",
    artist: "Madonna ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Madonna - Hollywood.mp3",
  },



{
    name: "To Be Loved",
    artist: "Lizzo",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Lizzo - To be loved.mp3",
  },


{
    name: "Chillhouse Del Mar",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/chillhouse del mar02.mp3",
  },


{
    name: "Chillhouse Del Mar",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/chillhouse del mar03.mp3",
  },

























{
    name: " Good Luck",
    artist: "Mabel, Jack Jones , Galantis",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Mabel, Jack Jones , Galantis - Good Luck.mp3",
  },

















{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


}, 




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },
{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },
 
{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/let's go back.mp3",
  },





{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },


 {
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you33.mp3",
  },












{
    name: "Seven Days In Sunny June",
    artist: "Jamiroquaii",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Jamiroquaii - Seven Days in sunny  Junet.mp3",
  


},












{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/return classics.mp3",
  },


{
    name: " Can't Wait Another Minute ",
    artist: "Five Star ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Five Star - Can't Wait Another Minute.mp3",
  


},













{
    name: "Bad Company",
    artist: "Purple Disco Machine ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek06/Purple Disco Machine - Bad Company.mp3",
  },



{
     name: " Don't Forget My Love",
    artist: "Diplo & Miguel ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Diplo & Miguel - Don't forget my love.mp3",
  },





{
    name: "  All Nighter",
    artist: "Tiesto  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek06/Tiesto - All Nighter.mp3",
  },



{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
  },


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },



{
     name: " Pearls ",
    artist: "Jesse Ware ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek06/Jesse Ware - Pearls.mp3",
  },




{
     name: "   Giving Me  ",
    artist: "Jazzy  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek06/Jazzy  - Giving Me.mp3",
  },


{
    name: "   Disconnect",
    artist: "Becky Hill ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek06/Becky Hill - Disconnect.mp3",
  },



 
{
    name: " Fly Robin Fly ",
    artist: "Silver Convention",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Silver Convention - Fly Robin Fly.mp3",
  },





{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },


















 






































{
    name: "Machine Gun (1974)",
    artist: "Commodores",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Commodores - Machine gun.mp3",
  


},







{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you222.mp3",
  },








{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you33.mp3",
  },
















{
    name: "Looking Now",
    artist: "Bebe Rexha   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Bebe Rexha - Looking now.mp3",
  },







{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },
 



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },
























];




















 // Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");



let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
 
let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
 
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
 






// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;















function loadTrack(track_index) {
  // Clear the previous seek timer
  clearInterval(updateTimer);
  resetValues();
 
  // Load a new track
  curr_track.src = track_list[track_index].path;
  curr_track.load();
 
  // Update details of the track
  track_art.style.backgroundImage =
     "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent =
     "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  // Set an interval of 1000 milliseconds
  // for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);
 
  // Move to the next track if the current finishes playing
  // using the 'ended' event
  curr_track.addEventListener("ended", nextTrack);
 
  // Apply a random background color
  random_bg_color();
}
 
function random_bg_color() {
  // Get a random number between 64 to 256
  // (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;
 
  // Construct a color withe the given values
  let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
 
  // Set the background to the new color
  document.body.style.background = bgColor;
}
 
// Function to reset all values to their default
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}









function playTrack() {
  // Play the loaded track
  curr_track.play();
  isPlaying = true;
 
  // Replace icon with the pause icon
  playpause_btn.innerHTML = '<img id= "med"  src="images/pause button6.png">';
}



function playpauseTrack() {
  // Play the loaded track
  curr_track.play();
  isPlaying = true;
 
  // Replace icon with the pause icon
  playpause_btn.innerHTML = '<img id= "med"  src="images/pause button6.png">';
}



function nextTrack() {
  // Go back to the first track if the
  // current one is the last in the track list
  if (track_index < track_list.length - 1)
    track_index +=1;
  else track_index = 0;
 
  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}
 



 
function prevTrack() {
  // Go back to the last track if the
  // current one is the first in the track list
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
   
  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}



function seekTo() {
  // Calculate the seek position by the
  // percentage of the seek slider
  // and get the relative duration to the track
  seekto = curr_track.duration * (seek_slider.value / 100);
 
  // Set the current track position to the calculated seek position
  curr_track.currentTime = seekto;
}
 
function setVolume() {
  // Set the volume according to the
  // percentage of the volume slider set
  curr_track.volume = volume_slider.value / 100;
}
 
function seekUpdate() {
  let seekPosition = 0;
 
  // Check if the current track duration is a legible number
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;
 
    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
 
    // Add a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
 
    // Display the updated duration
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}




// Load the first track in the tracklist
loadTrack(track_index);

$(document).ready(function(){
  $("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("fast");
    $("#div3").fadeIn(0);
  });
});




/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction1() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}











window.setInterval(function()  {
startTime();
}, 1000);





 $('.btn').click(function () {
            $(this).toggleClass("click");
        });













