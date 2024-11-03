


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
 document.getElementById("ava")
  .innerHTML = "Hi We're SG Lewis and Janelle Monae, we're happy to be here on Sunny!";
}







// Create the audio element for the player
let curr_track = document.createElement('audio');
 
// Define the list of tracks that have to be played
let track_list = [



































































































































































































































































































































































































{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },



{
    name: "Run",
    artist: "Becky Hill",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek03/Becky Hill - Run.mp3",
  },





{
    name: "  Right My Wrongs",
    artist: "Jastin Martin ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Jastin Martin - Right My Wrongs.mp3",
  },





 
{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
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
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },




{
    name: "  Stakker Humanoid (1988) ",
    artist: "Humanoid",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies06/Humanoid - Stakker Humanoid.mp3",
  },





 

{
    name: "  Contact  ",
    artist: "Kelela  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Kelela - Contact.mp3",
  },














{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you222.mp3",
  },


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  },




{
    name: "Bang Bang",
    artist: "The Knocks ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek02/The Knocks - Bang Bang.mp3",
  },








{
    name: "Chillhouse Del Mar",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek01/chillhouse del mar01.mp3",
  },

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },



{
    name: "Baby",
    artist: "Charli XCX",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek04/Charli XCX - Baby.mp3",
  


},

{
    name: " Moth To A Flame",
    artist: "The Weeknd",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek03/The weeknd - Moth to a flame2.mp3",
  },




{
    name: " In The Forest (1980)",
    artist: " Baby O  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Baby O - In The Forest.mp3",
  


},









{
    name: "Better Days",
    artist: "Craig David  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek01/Craig David2 - Better Days.mp3",
  },






{
    name: "The Message",
    artist: "Grandmaster Flash & The Furious Five",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies01/Grandmaster Flash & The Furious Five - The Message.mp3",
  },



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle22.mp3",
  },



















{
    name: "   Keep On Movin'",
    artist: "Soul II Soul ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies04/Soul II Soul - Keep on movin'.mp3",
  },



{
    name: " Feed Them",
    artist: "Kelis",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek03/Kelis - Feed Them.mp3",
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
    path: "muziek/jingles/Let op.mp3",
  },


{
    name: "   ASMR Lover ",
    artist: "RuPaul ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/RuPaul - ASMR Lover.mp3",
  },





{
    name: "  Sunny Danceradio",
    artist: "return classics",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/back in time jingle.mp3",
  },



{
    name: " Just An Illusion (12inch)",
    artist: "Imagination ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies01/Imagination - Just an Illusion 1982.mp3",
  


},



{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },











{
    name: "No Diggity",
    artist: "Blackstreet ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies03/Blackstreet - No Diggity ft. Dr. Dre, Queen Pen.mp3",
  


},





{
    name: "Hypnotize",
    artist: "The Notorious B.I.G  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies03/Hypnotize--The Notorious B.I.G..mp3",
  },


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },
 









{
    name: "  Sing It Back ",
    artist: "Moloko ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies04/Moloko - Sing It Back.mp3",
  },











{
    name: " Sweetest Pie",
    artist: "Stallion & Dua Lipa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek03/Stallion & Dua Lipa - Sweetest Pie.mp3",
  },





{
    name: "I Need You",
    artist: "Dua Lipa  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek03/Dua Lipa - I need you.mp3",
  },





 



 
{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle11.mp3",
  },









{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle22.mp3",
  },










 





 
{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
  },





{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you22.mp3",
  },


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },

{
    name: "Rainforest (12inch)",
    artist: "Paul Hardcastle",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies01/Paul Hardcastle - Rainforest.mp3",
  },


{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny dance jingle.mp3",
  },


{
    name: "  Work With You Love ",
    artist: "Alok    ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Alok - Work With You Love.mp3",
  },



{
    name: "   After Hours ",
    artist: "DVBBS   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/DVBBS - After Hours.mp3",
  },

{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },





{
    name: "Strawberry Letter 23",
    artist: "Brothers Johnson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies02/Strawberry Letter 23.mp3",
  },














{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
  },










{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },

{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
  },






{
    name: "Bond Theme 77",
    artist: "James Bond",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies03/James Bond - Bond theme 77.mp3",
  },






 
{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
  },





















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },
 

{
    name: "    Dance Dance   ",
    artist: "Gabry Ponte ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Gabry Ponte - Dance Dance.mp3",
  },








{
    name: " It's All The Way Live",
    artist: "Lakeside ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies04/Lakeside - It's All The Way Live.mp3",
  },








{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you222.mp3",
  },










{
    name: "    Starboy ",
    artist: "The Weeknd ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/The Weeknd - Starboy.mp3",
  },

{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
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
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/return classics.mp3",
  },



{
    name: "  Sexy (12inch)",
    artist: "MFSB    ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies04/MFSB - Sexy (12inch).mp3",
  },





 






















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  },








{
    name: "   Control ",
    artist: "Janet Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies05/Janet Jackson - Control.mp3",
  },





{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/return classics.mp3",
  },





{
    name: "Round Round (2002)",
    artist: "Sugababes",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies03/Sugababes - Round Round.mp3",
  },

 

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },

{
    name: "  Sandstorm",
    artist: "Darude",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies04/Darude - Sandstorm.mp3",
  },







{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },







{
    name: "Groovin' You",
    artist: "Harvey Mason",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies04/Harvey Mason - Groovin' You.mp3",
  


},

 
{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },













{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
  },



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  },






{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/DJ S.mp3",
  },

{
    name: "  Illusion",
    artist: "Dua Lipa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Dua Lipa - Illusion.mp3",
  },



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },


{
    name: " Summer",
    artist: "Calvin Harris  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies03/Calvin Harris - Summer.mp3",
  },






{
     name: " Words",
    artist: "Alesso ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek01/Alesso - Words.mp3",
  },
{
    name: "Today",
    artist: "Time Classic",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/back in time jingle.mp3",
  },

{
    name: "Lady Bug (1978)",
    artist: "Bumblebee Unlimited",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies01/Bumblebee Unlimited - Lady Bug.mp3",
  },

{
     name: "On An On",
    artist: "Armin Van Buuren",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek06/Armin Van Buuren - On An On.mp3",
  },


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
  },




{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
  },



{
    name: " Betcha Would'nt Hurt Me",
    artist: "Full Flava  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek04/Full Flava - Betcha would'nt hurt me.mp3",
  },










{
     name: "Twilight Zone (1979)",
    artist: "Manhattan Transfer ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Manhattan Transfer - Twilight Zone (1979).mp3",
  },














{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  },
 
















{
    name: "Just for You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },





{
    name: "  Sunny Danceradio",
    artist: "return classics",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/back in time jingle.mp3",
  },

{
    name: " Dancer (1979) ",
    artist: "Gino Soccio ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies06/Gino Soccio - Dancer (1979).mp3",
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













