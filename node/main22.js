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




// Create the audio element for the player
let curr_track = document.createElement('audio');
 
// Define the list of tracks that have to be played
let track_list = [


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },
 





{
    name: " About them time",
    artist: "Lizzo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek01/Lizzo - About them time.mp3",
  },



{
    name: "Gonna Get Over You",
    artist: "Beverlei Brown ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek04/Gonna get over you - Beverlei Brown.mp3",
  },



{
    name: "  Satellite",
    artist: " Khalid  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek01/Khalid - Satellite.mp3",
  },




{
    name: " New Moon",
    artist: "Mo",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek03/Mo - New Moon.mp3",
  },




{
     name: "  Houdini",
    artist: "Dua Lipa  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Dua Lipa - Houdini.mp3",
  },


{
    name: "Midnight Sky",
    artist: "Miley Cyrus ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies03/Miley Cyrus - Midnight Sky.mp3",
  },

{
    name: " Stay With Me",
    artist: "Calvin Harris",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek03/Calvin Harris - Stay with me.mp3",
  },




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
  },



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you22.mp3",
  },


{
    name: " Good Life (12inch)",
    artist: "Inner City  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies05/Inner City - Good Life.mp3",
  },


{
    name: " Too Funky (12inch)",
    artist: "George Michael  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies04/George Michael - Too Funky.mp3",
  },





{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },

















{
     name: "Experience",
    artist: "Victoria Monet ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek04/Victoria Monet - Experience.mp3",
  },







 {
     name: "  Promise Me",
    artist: "Rose Gray  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek04/Rose Gray - Promise Me.mp3",
  },






{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  },
 










{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
  },











{
    name: " Into My Body",
    artist: "Upsahl  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek01/Upsahl - Into my body.mp3",
  },






{
     name: "(Don't) Give Hate A Chance ",
    artist: "Jamiroquai ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek04/Jamiroquai - (Don't) give hate a chance.mp3",
  },









{  
    name: "You Rock My World",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies01/Michael Jackson - You rock my world.mp3",
  },











{
    name: "Sunny (Ruud Remix)",
    artist: "Boney M  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies03/Boney M - Sunny.mp3",
  },



{
     name: "Freak Of Nature",
    artist: "Amir",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek01/Amir - Freak of Nature.mp3",
  },








{
    name: "Miss A Thing",
    artist: "Kylie Minogue   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek01/Kylie Minogue - Miss a thing.mp3",
  },











{
    name: "Passion",
    artist: "Gat Decor",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies02/Gat Decor - Passion.mp3",
  },






{
    name: "DNA",
    artist: "Craig David  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek01/Craig David - DNA2.mp3",
  },



{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },



{
    name: "Takes A Little Time",
    artist: "Total Contrast ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies01/Total Contrast - Takes a little time.mp3",
  },

























{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },









{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },
 


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },
 











{
    name: "  Back In Time",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/back in time jingle.mp3",
  },


{
    name: "Devils Gun (12inch)",
    artist: "CJ & Co  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies01/CJ & Co - Devils Gun.mp3",
  },
  
 
{
    name: "Gimme Gimme Gimme",
    artist: "Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek01/Bebe Rexha - Gimme gimme gimme.mp3",
  },

{
    name: "Hideaway",
    artist: "Kiesza  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek02/Kiesza - Hideaway.mp3",
  },


 {
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },



{
    name: "Love On My Mind (12inch) ",
    artist: "Freemasons",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies02/Freemasons - Love on my mind.mp3",
  },



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  },








{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/reklame/reklame1.mp3",
  },




 {
    name: "Game Of Life (12inch)",
    artist: "Sugar Rainbow",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek03/Sugar rainbow - Game of life.mp3",
  },


{
    name: " Who Is She 2 U",
    artist: "Brandy",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek02/Brandy - Who is she 2 U.mp3",
  


}, 

{
    name: "    Nothing Left To Loose ",
    artist: "Everything But The Girl  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Everything But The Girl - Caution To The Wind.mp3",
  },
 
{
    name: "   Love Is My Drug ",
    artist: "Post Malone   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Post Malone - Love Is My Drug.mp3",
  },









{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },









{
    name: "let's go back",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/let's go back.mp3",
  },










{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you333.mp3",
  },




















{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },







{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },
















{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  },








{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/reklame/reklame1.mp3",
  },




 




 
  
{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },
 




{
    name: "From 9 Untill",
    artist: "Lakeside  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies01/Lakeside - From 9 untill.mp3",
  },





{
    name: "Hurricane",
    artist: "Cannons",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek03/Cannons - Hurricane.mp3",
  },


{
    name: "  When You Touch Me",
    artist: "Freemasons ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies04/Freemasons - When You touch me.mp3",
  },















{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


}, 



{
    name: "Mesmerized (12inch)",
    artist: "Freemasons",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies04/Freemasons  - Mesmerized.mp3",
  },





{
    name: "Todays News",
    artist: "Nos Journaal",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


}, 



 {
    name: "Sweet Baby",
    artist: "Macy Gray",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies01/Macy Gray Sweet Baby.mp3",
  


},


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  },






{
    name: " You Know How To Love Me (12inch)",
    artist: "Phyllis Hyman  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies05/Phyllis Hyman - You Know How To Love Me (12inch).mp3",
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
    name: "  Drinkin'",
    artist: "JoelCorry & Rita Ora ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek06/JoelCorry & Rita Ora - Drinkin'.mp3",
  


},
















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },


{
    name: "   Good Good",
    artist: "Usher ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek06/Usher - Good Good.mp3",
  


},


{
     name: " Rush",
    artist: "Troye Sivan  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek06/Troye Sivan - Rush.mp3",
  },































































 {
    name: "Born To Be Alive",
    artist: "Patrick Hernandez ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies01/Patrick Hernandez Born to be alive.mp3",
  },



{
    name: "Rain On Me",
    artist: "Gaga & Ariana  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek04/Gaga & Ariana - Rain on me.mp3",
  },



{
    name: "What You Waiting For",
    artist: "Gwen Stefani ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies04/Gwen Stefani - What you waiting for.mp3",
  },


{
    name: " People Are People",
    artist: "Depeche Mode ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies04/Depeche mode- People are people.mp3",
  },







{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies02/Crown Heights Afffair - Dancin'.mp3",
  },

{
    name: "  The Boss (12inch)",
    artist: "Diana Ross   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies03/Diana Ross - The Boss.mp3",
  },
































{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },

{
    name: "Too Hot (12inch)",
    artist: "Kool and the gang",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies03/Kool and the gang - Too hot.mp3",
  },
{
    name: "Nothing more to say",
    artist: "Calvin Harris  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek01/Calvin Harris - Nothing more to say.mp3",
  },






{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/do not turnoff receiver.mp3",
  },








{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you222.mp3",
  },
















{
     name: "Alarmschijf",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Alarm schijf.mp3",
  },







{
     name: "   Still Believe In Love",
    artist: "Mary J. Blige   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Mary J. Blige - Still Believe In Love.mp3",
  },

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },
 

 












];

































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




document.getElementById("hero-image")
 .addEventListener("touchstart",
  displayMessage);

function displayMessage() {
 document.getElementById("message")
  .innerHTML = "";
}


document.getElementById("travolta")
 .addEventListener("touchstart",
  displayName);

function displayName() {
 document.getElementById("bebe")
  .innerHTML = "Hi We're The Weeknd and Bebe Rexha, we're happy to be here on Sunny!";
}






window.setInterval(function()  {
startTime();
}, 1000);





 $('.btn').click(function () {
            $(this).toggleClass("click");
        });












