 // Select all the elements in the HTML page and assign them to a variable
let now_playing = document.querySelector(".now-playing");

let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");


let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");









// Specify globally used values
// GLOBAL AUDIO CHAIN STATE
let audioCtx = null;
let sourceNode = null;
let eqNodes = [];
let boostGain = null;
let loudnessGain = null;
let masterGain = null;

let track_index = 0;
let currentTrack = null;  
let updateTimer;


// Create the audio element for the player
let curr_track = document.createElement('audio');



function initAudioChain() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    loudnessGain = audioCtx.createGain();
    boostGain = audioCtx.createGain();
    masterGain = audioCtx.createGain();

    loudnessGain.gain.value = 1;
    boostGain.gain.value = 1;
    masterGain.gain.value = 1;

    masterGain.connect(audioCtx.destination);
  }
}
function applyEQ(eq) {
  eqNodes.forEach(n => n.disconnect());
  eqNodes = [];

  if (!eq) return;

  const bass = audioCtx.createBiquadFilter();
  bass.type = "lowshelf";
  bass.frequency.value = 200;
  bass.gain.value = eq.bass || 0;

  const mid = audioCtx.createBiquadFilter();
  mid.type = "peaking";
  mid.frequency.value = 1000;
  mid.Q.value = 1;
  mid.gain.value = eq.mid || 0;

  const treble = audioCtx.createBiquadFilter();
  treble.type = "highshelf";
  treble.frequency.value = 3000;
  treble.gain.value = eq.treble || 0;

  eqNodes = [bass, mid, treble];
}








// ── Shuffle Helper ──
function fisherYatesShuffle(array) {
  let m = array.length, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    [array[m], array[i]] = [array[i], array[m]];
  }
  return array;
}
// --- Helpers ---
const purifyTrack = (track) => ({
  ...track,
  timeCategory: track.timeCategory?.trim().toLowerCase(),
  mood: track.mood?.trim().toLowerCase(),
  artist: track.artist?.trim(),
  name: track.name?.trim()
});



// Define your track list with time categories
let trackList = [
  






//soulful

{
     name: "Sunny Souloldies",
    artist: "Motown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnysouloldies.netlify.app/Best motown classic songs 60's 70's 1.mp3",
 timeCategory: "soulful"

},





  {
     name: "Sunny Souloldies",
    artist: "Motown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnysouloldies.netlify.app/Best motown classic songs 60's 70's 2.mp3",
 timeCategory: "soulful"

},




  {
     name: "Sunny Souloldies",
    artist: "Motown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnysouloldies.netlify.app/Best motown classic songs 60's 70's 3.mp3",
 timeCategory: "soulful"

},





  {
     name: "Sunny Souloldies",
    artist: "Motown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnysouloldies.netlify.app/Best motown classic songs 60's 70's 4.mp3",
 timeCategory: "soulful"

},








  {
     name: "Sunny Souloldies",
    artist: "Motown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnysouloldies.netlify.app/Best motown classic songs 60's 70's 5.mp3",
 timeCategory: "soulful"

},







  {
     name: "Sunny Souloldies",
    artist: "Motown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnysouloldies.netlify.app/Best motown classic songs 60's 70's 6.mp3",
 timeCategory: "soulful"

},





  {
     name: "Sunny Souloldies",
    artist: "Motown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnysouloldies.netlify.app/Best motown classic songs 60's 70's 7.mp3",
 timeCategory: "soulful"

},





  {
     name: "Sunny Souloldies",
    artist: "Motown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnysouloldies.netlify.app/Best motown classic songs 60's 70's 8.mp3",
 timeCategory: "soulful"

},





  {
     name: "Sunny Souloldies",
    artist: "Motown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnysouloldies.netlify.app/Best motown classic songs 60's 70's 9.mp3",
 timeCategory: "soulful"

},





  {
     name: "Sunny Souloldies",
    artist: "Motown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnysouloldies.netlify.app/Best motown classic songs 60's 70's 10.mp3",
 timeCategory: "soulful"

},





  {
     name: "Sunny Souloldies",
    artist: "Motown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnysouloldies.netlify.app/Best motown classic songs 60's 70's 11.mp3",
 timeCategory: "soulful"

},




  {
     name: "Sunny Souloldies",
    artist: "Motown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnysouloldies.netlify.app/Best motown classic songs 60's 70's 12.mp3",
 timeCategory: "soulful"

},








  {
     name: "Sunny Souloldies",
    artist: "Motown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnysouloldies.netlify.app/Best motown classic songs 60's 70's 13.mp3",
 timeCategory: "soulful"

},





  {
     name: "Sunny Souloldies",
    artist: "Motown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnysouloldies.netlify.app/Best motown classic songs 60's 70's 14.mp3",
 timeCategory: "soulful"

},





  {
     name: "Sunny Souloldies",
    artist: "Motown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnysouloldies.netlify.app/Best motown classic songs 60's 70's 15.mp3",
 timeCategory: "soulful"

},





  






  {
     name: "Sunny Souloldies",
    artist: "Motown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnysouloldies.netlify.app/Best motown classic songs 60's 70's 17.mp3",
 timeCategory: "soulful"

},
















{
    name: "Bob Sinclair ",
    artist: "Live From Paris ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnydanceoldies09.netlify.app/Bob Sinclar (live) - From Paris 01.mp3",
       timeCategory: "special-mix",
volumeBoost:0.60
},



{
    name: "Bob Sinclair ",
    artist: "Live From Paris",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnydanceoldies09.netlify.app/Bob Sinclair - Live from Paris3.mp3",
       timeCategory: "special-mix",
volumeBoost:0.60
},

{
    name: "Bob Sinclair ",
    artist: "Live From Paris",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnydanceoldies09.netlify.app/Bob Sinclair - Live from Paris4.mp3",
       timeCategory: "special-mix",
volumeBoost:0.60
},




{
    name: "  Ibiza (mini mix) ",
    artist: "  Ministry Of Sound",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies08.netlify.app/Ibiza mini mix - Ministry of Sound1.mp3",
   timeCategory: "special-mix",
  trackDuration: "8:43",
 playcount: 0,
volumeBoost: 0.10
},


{
    name: "  Ibiza (mini mix) ",
    artist: "  Ministry Of Sound",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies08.netlify.app/Ibiza mini mix - Ministry of Sound2.mp3",
   timeCategory: "special-mix",
  trackDuration: "9:46",
 playcount: 0,
volumeBoost: 0.10
},






{
     name: " Live Mix ",
    artist: "Corne Klijn",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies09.netlify.app/Corne Kleyns- Live Mix 022.mp3",
    trackDuration: "13:00",
timeCategory: "special-mix"
},

{
     name: "Live Mix   ",
    artist: "Corne Klijn",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies09.netlify.app/Corne Kleyns- Live Mix 01.mp3",
     trackDuration: "14:35",
timeCategory: "special-mix"

},









{
    name: "    Dance (Do What You Wanna Do) ",
    artist: " The Sun  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Sun - Dance (Do What You Wanna Do).mp3",
 timeCategory: "seventies",
   isLoud: true,          
   trackDuration: "5:53",
loudnessValue: 0.72,    
     quickFade: true,
        playcount: 0
},

{
    name: "   Ugly Ego (classic)",
    artist: "Cameo  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Cameo - Ugly Ego.mp3",
   timeCategory: "seventies",
  trackDuration: "4:49",
quickFade: true,
volumeBoost:0.10
},

{
    name: "   Strictly Seventies",
    artist: "Sunny ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/Strictly%20seventies%20show.mp3",
       timeCategory: "seventies",
quickFade: true
  
},




{
    
    name: " San Salvador (1979)",
    artist: "Azoto ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Azoto - San Salvador.mp3",
      trackDuration: "6:50",
 timeCategory: "seventies",
volumeBoost: 0.25
},




{
    name: "Too Hot (12inch)",
    artist: "Kool and the gang",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Kool and the gang - Too hot.mp3",
     trackDuration: "5:47",
playcount: 0,
timeCategory: "seventies"


},


{
     name: "Welcome! todays program☀️",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
 
 timeCategory: "seventies"

},




{
     name: "Welcome! todays program☀️",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
 
 timeCategory: "seventies"

},
{
    name: "   Strictly Seventies",
    artist: "Sunny ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/Strictly%20seventies%20show.mp3",
       timeCategory: "seventies",
quickFade: true
  
},

{
     name: "Welcome! todays program☀️",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
 
 timeCategory: "seventies"

},


{
    name: "Welcome!",
    artist: "Sunny Jazzradio  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
 timeCategory: "seventies"

},

{
    name: "   Just A Touch (1979) ",
    artist: "Slave ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Slave - Just A Touch (1979).mp3",
       timeCategory: "seventies",
 trackDuration: "6:23",
quickFade: true
  
},


{
    
    name: "Lady Bug",
    artist: "Bumblebee Unlimited",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/Bumblebee Unlimited - Lady Bug.mp3",
      timeCategory: "seventies",
  trackDuration: "9:45",
eq: { bass: 1, mid: 2, treble: +1 },
volumeBoost: 0.80
},







{
    name: " Black Sun 1978) ",
    artist: "The Far Out Orchestra ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/The far out monster orchestra - Black sun.mp3",
   trackDuration: "6:45",
   playcount: 0,
   timeCategory: "seventies",
   volumeBoost: 0.15
},



{
    name: "Sunny (Ruud Remix)",
    artist: "Boney M  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Boney M - Sunny.mp3",
    playcount: 0,
   trackDuration: "6:56",
   timeCategory: "seventies",
   volumeBoost: 0.16
},



{
    name: " Bounce Skate Roll (12inch) ",
    artist: "Vaughan  Mason & Crew",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Vaughan  Mason & Crew - Bounce skate roll.mp3",
  trackDuration: "6:32",
 playcount: 0,
timeCategory: "seventies",
  volumeBoost: 0.35
},




{
    name: "Machine Gun (1974)",
    artist: "Commodores",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Commodores - Machine gun.mp3",
    trackDuration: "4:28",
volumeBoost: 0.45,


timeCategory: "seventies"


},


{
    name: "   Good Times  ",
    artist: "Chic vs Sugarhill Gang ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/Chic vs Sugarhill Gang - Good Times.mp3",
  timeCategory: "seventies",
    trackDuration: "11:56", 
quickFade: true,
  volumeBoost: 0.10,
    playcount: 0

},


{
    name: " Fly Robin Fly (1975) ",
    artist: "Silver Convention",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Silver Convention - Fly Robin Fly.mp3",
   timeCategory: "seventies",
volumeBoost: 0.45

},




{
     name: " Right In The Socket",
    artist: "Shalamar ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies09.netlify.app/Shalamar - Right In The Socket.mp3",
   timeCategory: "seventies",
volumeBoost: 0.25
},


{
    name: "   Strictly Seventies",
    artist: "Sunny ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/Strictly%20seventies%20show.mp3",
       timeCategory: "seventies",
quickFade: true
  
},


{
    name: "Across 110th Street (1973)",
    artist: "Bobby Womack ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Bobby Womack - Across 110th street.mp3",
timeCategory: "seventies",
volumeBoost: 0.35
},





{
    name: " It's All The Way Live (1978)",
    artist: "Lakeside ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Lakeside - It's All The Way Live.mp3",
         timeCategory: "seventies",
volumeBoost: 0.35
},




{
  
    name: "Spank (1979) ",
    artist: "Jimmy Bo Horne  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/Jimmy Bo Horne - Spank (1979).mp3",
timeCategory: " seventies",
     quickFade: true,
    volumeBoost: 0.25,
   eq: { bass: 0, mid: 2, treble: +1 } 
},






{
    name: "  Sexy (12inch)",
    artist: "MFSB    ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/MFSB - Sexy (12inch).mp3",
timeCategory: "seventies",
volumeBoost: 0.40
},


{
  
    name: " TSOP",
    artist: "MFSB  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/MFSB - TSOP.mp3",
timeCategory: " seventies",
     quickFade: true,
    volumeBoost: 0.25,
   eq: { bass: 0, mid: 2, treble: +1 } 
},




{
    name: "  Nights Over Egypt ",
    artist: "Jones Girls ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Jones Girls - Nights Over Egypt.mp3",
 timeCategory: "seventies",
volumeBoost:0.65
},


{
    name: "   Strictly Seventies",
    artist: "Sunny ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/Strictly%20seventies%20show.mp3",
       timeCategory: "seventies",
quickFade: true
  
},

{
    name: "Groovin' You (1979)",
    artist: "Harvey Mason",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Harvey Mason - Groovin' You.mp3",
  
volumeBoost: 0.40,

         timeCategory: "seventies"

},
{
    name: " What You Waiting For  ",
    artist: "Stargard",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies08.netlify.app/Stargard - What you waiting for.mp3",
timeCategory: "seventies",
  volumeBoost: 0.35,
 playcount: 0
},

{
    name: "Radiation Level (12inch)",
    artist: "The Sun ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/The Sun - Radiation Level.mp3",
         timeCategory: "seventies",
volumeBoost: 0.35
},


{
    name: " Let's All Chant (1977) ",
    artist: "Michael Zager Band  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies08.netlify.app/Michael Zager Band - Let's All Chant (1977).mp3",
   timeCategory: "seventies",
     quickFade: true,
  volumeBoost: 0.15,
   eq: { bass: 2, mid: 2, treble: +1 } ,
 playcount: 0

},


{
     name: "Let's Start To Dance (12inch)",
    artist: "Hamilton Bohannon ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies09.netlify.app/Hamilton Bohannon - Let's Start To Dance 12 inch.mp3",
  eq: { bass: 3, mid: 3, treble: +1 } ,
volumeBoost: 0.75,
timeCategory: "seventies"

},





{
    name: "  Shaft In Africa (1973)",
    artist: "Johnny Pate ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Johnny Pate - Shaft In Africa.mp3",
  
 timeCategory: "seventies",
volumeBoost: 0.20
},


{
    name: "Bond Theme 77",
    artist: "James Bond",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/James Bond - Bond theme 77.mp3",
   timeCategory: "seventies",
    quickFade: true,
    volumeBoost: 0.50,
playcount: 0
},


{
     name: "Jazz Carnaval",
    artist: "Azymuth",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnydanceoldies08.netlify.app/Azymuth - Jazz carnaval.mp3",
   timeCategory: "seventies",
    quickFade: true,
    volumeBoost: 0.40,
playcount: 0
},




{
    name: " All Night Long",
    artist: "Splendor ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Splendor - All night long.mp3",
  volumeBoost:0.55,


      timeCategory: "seventies"
},





{
    name: " Da Ya Think I'm Sexy (1978) ",
    artist: "Rod Stewart  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Rod Stewarrt - Da Ya Think I'm Sexy.mp3",
      
timeCategory: "seventies",
 eq: { bass: 2, mid: 2, treble: +1 } ,
volumeBoost:0.75
},








//morning




{
     name: "  Sun Goddess",
    artist: "RAMSEY LEWIS - EARTH WIND FIRE  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/RAMSEY LEWIS - EARTH WIND FIRE - Sun Goddess.mp3",
    timeCategory: "morning"

},
  

















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1best.mp3",
    timeCategory: "morning"

},











{

    name: "Best Of",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Benny Goodman - Best of.mp3",
       timeCategory: "morning"

},









{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Benny Goodman - Best of5.mp3",
       timeCategory: "morning"

},


{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Best of6.mp3",
       timeCategory: "morning"

},

{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Best of7.mp3",
      timeCategory: "morning"

},







 



{
    name: "Three Little Words",
    artist: "Best of ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 16.mp3",
      timeCategory: "morning"

},
   


{
    name: "On The Beat (1980)",
    artist: "BB & Q Band ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/BB Q Band - On the Beat.mp3",
  playcount: 0,
timeCategory: "morning",
  volumeBoost: 0.30
},




{
     name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
        timeCategory: "morning"

},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
       timeCategory: "morning"

},



{
    name: "OldskoolJazz ",
    artist: "Best Of ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of Jazz Divas s- Vol. 15.mp3",
       timeCategory: "morning"

},




{
    name: "Our Love",
    artist: "Louis Armstrong ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Louis Armstrong - Our Love.mp3",
     timeCategory: "morning"

},

 




{
    name: "Boo Boo",
    artist: "Ella Fitzgerald ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Ella Fitzgerald - Boo boo.mp3",
      timeCategory: "morning"

},


  
 

{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
       timeCategory: "morning"

},




{
    name: "One Fortune",
    artist: "Stan Getz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
       timeCategory: "morning"

},



{
    name: "I Love You ",
    artist: "Zoot Sims ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Zoot sims - I love you .mp3",
       timeCategory: "morning"

},


{

    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Trumpet jazz 4.mp3",
       timeCategory: "morning"

},






{
    name: "My Mama Don't  ",
    artist: "Sunny Jazz  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
        timeCategory: "morning"

},





{
     name: "Jazz Icons",
    artist: "Count Basie (live) 1962",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
        timeCategory: "morning"

},





{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


 timeCategory: "morning"

},
 

{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame.mp3",
    timeCategory: "morning"

},    


{
    name: "Strange Fruit",
    artist: "Billie Holiday ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin15 .mp3",
       timeCategory: "morning"

},











{
    name: "I Wish You ",
    artist: "Peggy Lee",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Peggy Lee - I wish you.mp3",
  timeCategory: "morning"

},







{
    name: "Left Where I Was ",
    artist: "John Coltrane  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/John Coltrane - Left where I was.mp3",
 timeCategory: "morning"

},







{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
        timeCategory: "morning"

},










    


{
    name: "Ain't Got Rhythm",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Billy Holiday & Lester Young vol.1.mp3",
  
 timeCategory: "morning"

},

  


{
    name: "Nobody Cares",
    artist: "Earl Klugh",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Earl Klugh - Nobody cares.mp3",
       timeCategory: "morning"

},


{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
       timeCategory: "morning"

},



{
    name: "My Mama Don't  ",
    artist: "Sunny Jazz  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
       timeCategory: "morning"

},







{
    name: "Mad About You",
    artist: "Tammy Whynet ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/Tammy Whynet - Made about you .mp3",
       timeCategory: "morning"

},
   




{
     name: "OldskoolJazz ",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
       timeCategory: "morning"

},


{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Yellow basket.mp3",
       timeCategory: "morning"

},

{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Trumpet jazz.mp3",
        timeCategory: "morning"

},










{
    name: "I ll Get By (1937)",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.7.mp3",
        timeCategory: "morning"

},






























    


{
    name: "Ain't Got Rhythm",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Billy Holiday & Lester Young vol.1.mp3",
    timeCategory: "morning"

},
  


  


 {
   name: "Kisses Used To Be",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.2.mp3",
    timeCategory: "morning"

},
  















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
    timeCategory: "morning"

},
  









{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
    timeCategory: "morning"

},
  


{

    name: "I Cry For You",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 18.mp3",
     timeCategory: "morning"

},
  















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
    timeCategory: "morning"

},
  



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame.mp3",
    timeCategory: "morning"

},
      

















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


 timeCategory: "morning"

},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame.mp3",
  


 timeCategory: "morning"

},










{
    name: "Fever ",
    artist: "Peggy Lee",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Peggy Lee - Fever.mp3",


 timeCategory: "morning"

},




{
     name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles//smooth jazz jingle.mp3",


 timeCategory: "morning"

},



  



{
    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 2.mp3",
           timeCategory: "morning"

},


{
    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin5 .mp3",
         timeCategory: "morning"

},








{
   name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
          timeCategory: "morning"

},
 




{
   name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.13.mp3",
         timeCategory: "morning"

},



 {
   name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 13.mp3",
         timeCategory: "morning"

},
 



{
   name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.13.mp3",
        timeCategory: "morning"

},

{
    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.14.mp3",
         timeCategory: "morning"

},

 {
   name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 13.mp3",
        timeCategory: "morning"

},
 
{
    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.15.mp3",
          timeCategory: "morning"

},








{
    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 11.mp3",
        timeCategory: "morning"

},


{
   name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/are of mine.mp3",
       timeCategory: "morning"

},


{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Dansez maintenant.mp3",
              timeCategory: "morning"

},
 

{

    name: "Ain T Got That Swing",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/The very best of jazz2.mp3",
            timeCategory: "morning"

},

{

    name: "Ain T Got That Swing",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/The very best of jazz17.mp3",
           timeCategory: "morning"

},


{

    name: "Very Best Of",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/ain t got that swing.mp3",
             timeCategory: "morning"

},






{

    name: "Wonderful World",
    artist: "Louis Armstrong",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Wonderful world.mp3",
           timeCategory: "morning"

},





{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
              timeCategory: "morning"

},

{
    name: "   Push the Button ",
    artist: " Sugababes ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Sugababes - Push the Button.mp3",
    timeCategory: "morning",
  eq: { bass: 1, mid: 1, treble: +1 } ,
    volumeBoost: 0.35
},



{
    name: "  Right on ",
    artist: " The pasadenas  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/The pasadenas - Right on.mp3",
    timeCategory: "morning",
  eq: { bass: 0, mid: 1, treble: 0 } ,
    volumeBoost: 0.45
},

{
    name: "Somewhere Over The Rainbow (1958)",
    artist: "Sarah Vaughan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sarah vaughn/Sarah Vaughan - Somewhere Over The Rainbow (live from Holland) (1958).mp3",
            timeCategory: "morning"

},


{
    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.14.mp3",
       timeCategory: "morning"

},








































{
     name: "Welcome! todays program☀️",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
 
 timeCategory: "morning"

},



































{
    name: " Won't Forget You",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/DJ Sapphire - Good Vibes4.mp3",
        timeCategory: "morning"
},

























































































































































































  



















{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Best of8.mp3",
           timeCategory: "morning"

},






{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Best of9.mp3",
             timeCategory: "morning"

},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


           timeCategory: "morning"

},
































































































{
    name: "My Mama Don't  ",
    artist: "Sunny Jazz  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
           timeCategory: "morning"

},






{
    name: " Won't Forget You",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/DJ Sapphire - Good Vibes3.mp3",
        timeCategory: "morning"
},








{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/jazz divas 03.mp3",
   timeCategory: "morning"

},



{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.20.mp3",
  timeCategory: "morning"

},






{
    name: "I Got It Bad",
    artist: "Ella Fitzgerald ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Best of classicJazz singin17 .mp3",
   timeCategory: "morning"

},


{
    name: "Welcome!",
    artist: "Sunny Jazzradio  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
 timeCategory: "morning"

},



{
    name: " Won't Forget You",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/DJ Sapphire - Good Vibes2.mp3",
        timeCategory: "morning"
},



{
    name: "Never Be The Same",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.11.mp3",
  timeCategory: "morning"

},






{
    name: "Best Of",
    artist: "Sunny Jazz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/jazz divas 01.mp3",
   timeCategory: "morning"

},






{

    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Trumpet jazz 8.mp3",
  timeCategory: "morning"

},



{

    name: "Blue Skies (1927)",
    artist: "Josephine Baker  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Josephine Baker - Blue Skies (1927).mp3",
   timeCategory: "morning"

},











{
    name: " Won't Forget You",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/DJ Sapphire - Good Vibes.mp3",
        timeCategory: "morning"
},



{  
    name: "See Me Laughing",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin12 .mp3",
     timeCategory: "morning"

},
 
     {
    

    name: "In A Silent Way ",
    artist: "Miles Davis ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
     timeCategory: "morning"

},
 


{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
     timeCategory: "morning"

},







{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
             timeCategory: "morning"

},











   





{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame.mp3",
             timeCategory: "morning"

},   

{
      name: "In A Silent Way ",
    artist: "Miles Davis ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
            timeCategory: "morning"

},

 












 











{
    name: "I ll Get By (1937)",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.7.mp3",
 
 timeCategory: "morning"

},

































{

    name: " Fortune's Child",
    artist: "Nat Adderley ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://soulfullforever.netlify.app/Nat Adderley - Fortune's Child - 1979.mp3",
  
 timeCategory: "morning"

},






{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
 
 timeCategory: "morning"

},





 







{
 name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin4 .mp3",
         timeCategory: "morning"

},







{
    name: "Don' T Let Go ",
    artist: "Ella Fitzgerald ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Ella Fitzgerald - Don' t let go.mp3",
         timeCategory: "morning"

},














{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.10.mp3",
         timeCategory: "morning"

},









{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1.mp3",
          timeCategory: "morning"

},







{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
         timeCategory: "morning"

},



  




{
    name: "In A Sentimental Mood (1961) Live",
    artist: "Sarah Vaughan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sarah vaughn/Sarah Vaughan - In A Sentimental Mood (1961) Live (1964).mp3",
 
 timeCategory: "morning"

},





















{
  name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.18.mp3",
       timeCategory: "morning"

},











{
    name: "Brrr",
    artist: "Zoot Sims ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Zoot sims - Brrr.mp3",
        timeCategory: "morning"

},




{

    name: "Ain't Misbehavin' (1945)",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Benny Goodman - Best of3.mp3",
       timeCategory: "morning"

},






{
    name: "Benny Goodman - Best Of ",
    artist: "Benny Goodman ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Benny Goodman - Best of4.mp3",
       timeCategory: "morning"

},

{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
       timeCategory: "morning"

},







{

    name: "Ain T Got That Swing",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz14.mp3",
       timeCategory: "morning"

},



{

    name: "Oldskool Jazz",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz15.mp3",
       timeCategory: "morning"

},



























  










{

    name: "All Of Me",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz17.mp3",
           timeCategory: "morning"

},


 


  
 


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
   timeCategory: "morning"

},






{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
  timeCategory: "morning"

},

















{
    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 20.mp3",
    timeCategory: "morning"

},


{

    name: "God Bless The Child",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 06.mp3",
    timeCategory: "morning"

},

{

    name: "Good Luck",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 05.mp3",
  timeCategory: "morning"

},











  {
    name: "Best Of",
    artist: "Sunny Jazz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  timeCategory: "morning"

},


{
    name: "Yesterdays (1939)",
    artist: "Billie Holiday ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin6 .mp3",
   timeCategory: "morning"

},


{

    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 16.mp3",
   timeCategory: "morning"

},









   



   





{
     name: "In A Silent Way ",
    artist: "Miles Davis ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
             timeCategory: "morning"

},

 


 {
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
              timeCategory: "morning"

},









 














{
    name: "Now They Call It Swing",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.24.mp3",
        timeCategory: "morning"

},




 {
   name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 13.mp3",
      timeCategory: "morning"

},

 
{
    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.15.mp3",
      timeCategory: "morning"

},







{
    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 11.mp3",
      timeCategory: "morning"

},









{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1best.mp3",
 timeCategory: "morning"

},






{
    name: "Que Bonito",
    artist: "Cafe del Mar, Jose Padilla  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
    timeCategory: "morning"

},

















{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/sweet sue.mp3",
       timeCategory: "morning"

},
  


{
   name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Trumpet jazz 3.mp3",
       timeCategory: "morning"

},
  













{

   name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/Trumpet jazz 6.mp3",
       timeCategory: "morning"

},

















 {  
    name: "Schoolboy Pie",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin13 .mp3",
     timeCategory: "morning"

},

   







{
    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.15.mp3",
          timeCategory: "morning"

},

{



    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 11.mp3",
          timeCategory: "morning"

},









{
    name: "Pennys From Heaven",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.21.mp3",
 
 timeCategory: "morning"

},



 {
   name: "Kisses Used To Be",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.2.mp3",
 
 timeCategory: "morning"

},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
 
 timeCategory: "morning"

},










{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
             timeCategory: "morning"

},




{
    name: "One Fortune",
    artist: "Stan Getz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/Stan Getz - One Fortune.mp3",
           timeCategory: "morning"

},


{
    name: "I Love You ",
    artist: "Zoot Sims ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Zoot sims - I love you .mp3",
            timeCategory: "morning"

},


{

    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Trumpet jazz 4.mp3",
           timeCategory: "morning"

},





{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
           timeCategory: "morning"

},




{
    name: "Foolish Heart",
    artist: "Brenda Lee ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Brenda Lee - Foolish heart.mp3",
 

 timeCategory: "morning"

},



{
    name: "Turkish Fruit",
    artist: "Benny Goodman  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Turkish fruit.mp3",


 timeCategory: "morning"

},







{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
 timeCategory: "morning"

},

{

    name: "The man I Love",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 15.mp3",
 timeCategory: "morning"

},







{
    name: "My Man ",
    artist: "Ella Fitzgerald",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 19.mp3",
  timeCategory: "morning"

},

{
    name: "You Trust In Me",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 18.mp3",
 timeCategory: "morning"

},







{
    name: "Love Me Or Leave Me",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divas s- Vol. 17.mp3",
  timeCategory: "morning"

},





{
    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.5.mp3",
 timeCategory: "morning"

},



{

    name: "Body & Soul",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas11.mp3",
   timeCategory: "morning"

},



{

    name: "Bei Mir",
    artist: "Ella Fitzgerald",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 19.mp3",
 timeCategory: "morning"

},







{

    name: "Goodnight My Love",
    artist: "Ella Fitzgerald",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 13.mp3",
 timeCategory: "morning"

},


  


{
    name: " Nature Boy",
    artist: "Hazel Fernandes  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Hazel Fernandes - Nature Boy.mp3",
        timeCategory: "morning"

},







{
    name: " Sunrise (12inch)",
    artist: "Simply Red   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Simply Red - Sunrise (Extended).mp3",
  timeCategory: "morning"

},




{
    name: "   Un-break My Heart",
    artist: " Toni Braxton ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Toni Braxton - Un-break my heart.mp3",
    timeCategory: "morning"

},









{
    name: "Teach Me Tonight ",
    artist: "Al Jarreau",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
 timeCategory: "morning"

},












{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
          timeCategory: "morning"

}, 
 

















  





{

    name: "Ain't Misbehavin' (1945)",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Benny Goodman - Best of3.mp3",
         timeCategory: "morning"

}, 


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
         timeCategory: "morning"

},



{
    name: "Benny Goodman - Best Of ",
    artist: "Benny Goodman ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Benny Goodman - Best of4.mp3",
           timeCategory: "morning"

},














{
    name: " Bewitched (1956)",
    artist: "Ella Fitzgerald ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Ella Fitzgerald - Bewitched (1956).mp3",
         timeCategory: "morning"

},

{
    name: "  When You touch me",
    artist: "Freemasons ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Freemasons - When You touch me.mp3",
    timeCategory: "morning",
isLoud: true,          
  loudnessValue: 0.70 


},


{
    name: "Around The World ",
    artist: "Daft Punk ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Daft Punk - Around The World.mp3",
        timeCategory: "morning",
     quickFade: true,
     eq: { bass: 1, mid: 1, treble: +1 } ,
 volumeBoost: 0.45,
    playcount: 0
},


{
    name: " Lose Yourself To Dance  ",
    artist: "Daft Punk ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Daft Punk - Lose Yourself To Dance.mp3",
        timeCategory: "morning",
     quickFade: true,
     eq: { bass: 1, mid: 1, treble: +1 } ,
 volumeBoost: 0.25,
    playcount: 0
},











{
    name: "  Sing It Back ",
    artist: "Moloko ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Moloko - Sing It Back.mp3",
    timeCategory: "morning",
volumeBoost: 0.25

},



















{
    name: "I ll Get By (1937)",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.7.mp3",
         timeCategory: "morning"

},

















   {
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
       timeCategory: "morning"

}, 


{
    name: "Ain't Got Rhythm",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Billy Holiday & Lester Young vol.1.mp3",
         timeCategory: "morning"

},
  

{
    name: "Pennys From Heaven",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.21.mp3",
         timeCategory: "morning"

},


 {
   name: "Kisses Used To Be",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.2.mp3",
         timeCategory: "morning"

},


   {
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
          timeCategory: "morning"

},














{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
           timeCategory: "morning"

},




{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
    timeCategory: "morning"

},



{

    name: "I Cry For You",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 18.mp3",
           timeCategory: "morning"

},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


         timeCategory: "morning"

},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
  

         timeCategory: "morning"

},












{
    name: "Foolish Heart",
    artist: "Brenda Lee ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Brenda Lee - Foolish heart.mp3",
       timeCategory: "morning"

},





{
    name: "Somewhere Over The Rainbow (1958)",
    artist: "Sarah Vaughan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sarah vaughn/Sarah Vaughan - Somewhere Over The Rainbow (live from Holland) (1958).mp3",
     timeCategory: "morning"

},
























{
    name: "Now They Call It Swing",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.24.mp3",
 timeCategory: "morning"

},






{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
         timeCategory: "morning"

},








{

    name: "Ain T Got That Swing",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz14.mp3",
         timeCategory: "morning"

},



{

    name: "Ain T Got That Swing",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz15.mp3",
           timeCategory: "morning"

},










{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
         timeCategory: "morning"

},


















{
    name: "Rose Carrousel",
    artist: "Sunny Jazz",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnydanceoldies08.netlify.app/Sunny radio jingles.mp3",
       timeCategory: "jingle-time"

},























{
    name: "Rose Rouge",
    artist: "St Germain",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/St Germain - Rose Rouge.mp3",
       timeCategory: "morning"

},


{
    name: "Midway ",
    artist: "Brenda Lee  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Brenda Lee - Midway.mp3",
        timeCategory: "morning"

},












{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1.mp3",
          timeCategory: "morning"

},


{
    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 2.mp3",
         timeCategory: "morning"

},


{
    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin5 .mp3",
        timeCategory: "morning"

},

 
{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
          timeCategory: "morning"

},




{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
  
       timeCategory: "morning"

},  


{
   name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
        timeCategory: "morning"

},
 


{
    name: "Who Wants Love",
    artist: "Billy Holiday ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.17.mp3",
  timeCategory: "morning"

},




{
    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Best of classicJazz singin1 .mp3",
   timeCategory: "morning"

},




{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  timeCategory: "morning"

},






{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  timeCategory: "morning"

},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
   timeCategory: "morning"

},








  
 {
    name: "Welcome!",
    artist: "Sunny Radio  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
   timeCategory: "morning"

},



{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  timeCategory: "morning"

},



{

    name: "Aura",
    artist: "Olli Ahvenlahti  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://soulfullforever.netlify.app/Olli Ahvenlahti - Aura - 1976.mp3",
  timeCategory: "morning"

},

{
    name: "Breakin' Away",
    artist: "Al Jarreau",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  timeCategory: "morning"

},









{
   name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz7.mp3",
  timeCategory: "morning"

},



 {
   name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Best of classicJazz singin2 .mp3",
   timeCategory: "morning"

},
  

{
   name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin3 .mp3",
   timeCategory: "morning"

},

{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
    timeCategory: "morning"

},








   {  
   name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 14.mp3",
  timeCategory: "morning"

},


    {
    name: "Welcome!",
    artist: "Play Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
   timeCategory: "morning"

},
  
 {
    name: "Welcome!",
    artist: "Sunny Radio  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
   timeCategory: "morning"

},


{

    name: "Aura",
    artist: "Olli Ahvenlahti  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://soulfullforever.netlify.app/Olli Ahvenlahti - Aura - 1976.mp3",
  timeCategory: "morning"

},

{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
 timeCategory: "morning"

},





































{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1best.mp3",
           timeCategory: "morning"

},
















































































































































































{
  name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.18.mp3",
          timeCategory: "morning"

},











{
    name: "Brrr",
    artist: "Zoot Sims ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Zoot sims - Brrr.mp3",
          timeCategory: "morning"

},

{
    name: "Nobody Cares",
    artist: "Earl Klugh",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Earl Klugh - Nobody cares.mp3",
         timeCategory: "morning"

},

{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
          timeCategory: "morning"

},



{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
          timeCategory: "morning"

},







{
    name: "Mad About You",
    artist: "Tammy Whynet ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/Tammy Whynet - Made about you .mp3",
          timeCategory: "morning"

},
   









{
     name: "OldskoolJazz ",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
          timeCategory: "morning"

},


{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Yellow basket.mp3",
           timeCategory: "morning"

},

{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Trumpet jazz.mp3",
            timeCategory: "morning"

},






{
     name: "Jazz Icons",
    artist: "Count Basie (live) 1962",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
          timeCategory: "morning"

},





{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
    timeCategory: "morning"

},
 

{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
    timeCategory: "morning"

},  














{
    name: "Strange Fruit",
    artist: "Billie Holiday ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin15 .mp3",
     timeCategory: "morning"

},



{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/sweet sue.mp3",
       timeCategory: "morning"

},
  


{
   name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Trumpet jazz 3.mp3",
       timeCategory: "morning"

},
  













{

   name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/Trumpet jazz 6.mp3",
  timeCategory: "morning"

},















{

    name: "Am I Blue",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 08.mp3",
  timeCategory: "morning"

},


{
    name: "Rose Rouge",
    artist: "Sunny",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
},


 



{  
    name: "Schoolboy Pie",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin13 .mp3",
  timeCategory: "morning"

},
   



{  
    name: "See Me Laughing",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin12 .mp3",
  timeCategory: "morning"

},
 
 

 









 


 {
    name: "Our Love",
    artist: "Louis Armstrong ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Louis Armstrong - Our Love.mp3",
  timeCategory: "morning"

},

 

  {
    name: "Boo Boo",
    artist: "Ella Fitzgerald ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Ella Fitzgerald - Boo boo.mp3",
  timeCategory: "morning"

},


  
 {
    name: "Tonight On Sunny!",
    artist: "Sunny - In A Silent Way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  timeCategory: "morning"

},











{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
    timeCategory: "morning"

},













{
    name: "Misty Live (1964)",
    artist: "Sarah Vaughan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sarah vaughn/Sarah Vaughan - Misty Live (1964).mp3",
       timeCategory: "morning"

},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
      timeCategory: "morning"

},





{
    name: "A Long Walk ",
    artist: "Jill Scott  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Jill Scott A Long Walk.mp3",
    timeCategory: "morning"
},

 



//afternoon

{
    name: "You Can't Change That",
    artist: "Ray Parker Junior",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://jazzmusic05.netlify.app/Ray Parker jr -You can t change that.mp3",
        timeCategory: "afternoon",
    quickFade: true,
    volumeBoost: 0.75,
    playcount: 0
},


  
{
    name: "Jimmy Bo Horne",
    artist: "Spank 69",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://jazzmusic05.netlify.app/Spank 69.mp3",
        timeCategory: "afternoon",
    quickFade: true,
     isLoud: true,          
  loudnessValue: 0.60, 
 playcount: 0
},

{
    name: "Dance (Disco Heat)",
    artist: "Sylvester",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://jazzmusic05.netlify.app/Sylvester - Dance (Disco Heat) live.mp3",
        timeCategory: "afternoon",
    quickFade: true,
   isLoud: true,          
  loudnessValue: 0.60, 
playcount: 0
},

{
    name: "Volume 6",
    artist: "Lounge Beats",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hoteldel.netlify.app/Lounge Beats01.mp3",
    timeCategory: "afternoon"
  },




{
    name: "Volume 6",
    artist: "Lounge Beats",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hoteldel.netlify.app/Lounge Beats02.mp3",
    timeCategory: "afternoon"
  },


{
    name: "Volume 6",
    artist: "Lounge Beats",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hoteldel.netlify.app/Lounge Beats03.mp3",
    timeCategory: "afternoon"
  },



{
    name: "Volume 6",
    artist: "Lounge Beats",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hoteldel.netlify.app/Lounge Beats04.mp3",
    timeCategory: "afternoon"
  },



{
    name: "Volume 6",
    artist: "Lounge Beats",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hoteldel.netlify.app/Lounge Beats05.mp3",
    timeCategory: "afternoon"
  },



{
    name: "Volume 6",
    artist: "Lounge Beats",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hoteldel.netlify.app/Lounge Beats06.mp3",
    timeCategory: "afternoon"
  },


{
    name: "Que Bonito",
    artist: "Cafe del Mar, Jose Padilla  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
    timeCategory: "afternoon"

},

{
    name: "   What Cha Gonna Do For Me ",
    artist: " Chaka Khan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Chaka Kahn - What Cha Gonna Do For Me.mp3",
       timeCategory: "afternoon"

},


{
    name: "   Sing sing sing ",
    artist: " Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Benny Goodman - Sing sing sing.mp3",
       timeCategory: "afternoon"

},


{
    name: "   Inside Out ",
    artist: "Odyssey",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/Odyssey - Inside Out.mp3",
  timeCategory: "afternoon",
     quickFade: true,
  volumeBoost: 0.45,
      eq: { bass: 0, mid: 1, treble: +1 } ,
playcount: 0

},



{
    name: "   What You Waiting For (maxi) ",
    artist: "Stargard ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/Stargard - What You Waiting For (maxi).mp3",
  timeCategory: "afternoon",
     quickFade: true,
  volumeBoost: 0.60,
    playcount: 0

},







{
    name: " Last Night A DJ (maxi)",
    artist: "InDeep ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/InDeep - Last Night A DJ (maxi).mp3",
  timeCategory: "afternoon",
     quickFade: true,
  volumeBoost: 0.55,
    playcount: 0

},

{
    name: " Yah Mo B There",
    artist: "James Ingram  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/James Ingram - Yah Mo B There.mp3",
  timeCategory: "afternoon",
       year: 1983,
quickFade: true,
  volumeBoost: 0.55,
   eq: { bass: 2, mid: 2, treble: +1 } 
 


},


 




















   




























{
     name: "La Vie En Rose ",
    artist: "Grace Jones",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Grace Jones - La Vie En Rose.mp3",
  timeCategory: "afternoon",
  eq: { bass: 2, mid: 2, treble: +1 } ,
    quickFade: true,
    volumeBoost: 0.45
},





{
     name: "  Souvenirs",
    artist: "Voyage ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Voyage - Souvenirs.mp3",
   timeCategory: "afternoon"

},








{
     name: "Slave To The Rhythm ",
    artist: "Grace Jones (1985)",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/GRACE JONES. Slave to the rhythm. 1985..mp3",
 timeCategory: "afternoon"

},










{
    name: "Golden",
    artist: "Jill Scott  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Jill Scott  Golden.mp3",
   timeCategory: "afternoon"

},































































































































































{
    name: "Welcome todays program!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
   timeCategory: "afternoon"

},













































































































































































































































{
     name: "  Machine Gun (1974)",
    artist: "Commodores ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Commodores - Machine gun.mp3",
        timeCategory: "afternoon"

}, 




{
    name: " Home Fires Burnin'",
    artist: "Millie Jackson ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Millie Jackson - Keep The Home Fires Burnin'.mp3",
    timeCategory: "afternoon",
   volumeBoost: 0.25,
    playcount: 0
},




















 



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
         timeCategory: "afternoon"

}, 



{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sunny ship/starten met Sunny.mp3",
 timeCategory: "afternoon"

},


















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj1.mp3",
        timeCategory: "afternoon"

},














{
    name: " Billie Jean (1982)",
    artist: "Michael Jackson   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies08.netlify.app/Michael Jackson - Billy Jean (1982).mp3",
      timeCategory: "afternoon",
     eq: { bass: 2, mid: 2, treble: +2 } ,
volumeBoost: 0.45

},








{
    name: "Best Of",
    artist: "Sunny  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
        timeCategory: "afternoon"

},






{
    name: "One Day In Your Life",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Michael Jackson - One day in your life.mp3",
     timeCategory: "afternoon"
},




{
    name: "   Woman Of The Ghetto (1969) ",
    artist: "Marlena Shaw ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Marlena Shaw - Woman Of The Ghetto.mp3",
       timeCategory: "afternoon"

},









{
    name: "   Sunny Disco ",
    artist: "Discomix 70",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Discomix 70.mp3",
        timeCategory: "afternoon"

},



{
    name: "   Sunny Disco ",
    artist: "Discomix 70",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Discomix 70 2.mp3",
       timeCategory: "afternoon"

},
















  




 
















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
       timeCategory: "afternoon"

},

   
  {
    name: "Baubles, Bangles And Beads (live 1964)",
    artist: "Sarah Vaughan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sarah vaughn/Sarah Vaughan - Baubles, Bangles And Beads (live 1964).mp3",
      timeCategory: "afternoon"

},



{
    name: " Honeysuckle Rose (live 1964)",
    artist: "Sarah Vaughan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sarah vaughn/Sarah Vaughan - Honeysuckle Rose - ( live 1964).mp3",
      timeCategory: "afternoon"

},















{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
 
 timeCategory: "afternoon"

},



{
     name: " Stop To Love",
    artist: "Luther Vandross ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Luther Vandross - Stop To Love.mp3",
         timeCategory: "afternoon"

},











{
    name: "Still In The Groove",
    artist: "Ray Parker Junior",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://jazzmusic05.netlify.app/Ray Parker Junior - Still in the groove.mp3",
        timeCategory: "afternoon",
    quickFade: true,
    volumeBoost: 0.75,
      eq: { bass: 2, mid: 2, treble: +1 } ,
playcount: 0
},




{
    name: "A Woman Needs Love",
    artist: "Ray Parker Junior",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://jazzmusic05.netlify.app/Ray Parker jr - A woman needs love.mp3",
        timeCategory: "afternoon",
      volumeBoost: 0.75,
      eq: { bass: 2, mid: 2, treble: +1 } ,
    playcount: 0
},






{
    name: " Won't Forget You",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/DJ Sapphire - Good Vibes4.mp3",
        timeCategory: "afternoon"
},









{
    name: "In The Dark",
    artist: "Purple Disco Machine ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Purple disco machine - in the Dark.mp3",
        timeCategory: "afternoon",
    quickFade: true,
    volumeBoost: 0.35,
    playcount: 0
},



{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
           timeCategory: "afternoon"

},








{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
           timeCategory: "afternoon"

},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sunny ship/starten met Sunny.mp3",
       timeCategory: "afternoon"

},









{
     name: " Manhattan Skyline",
    artist: "Orchestra 88 ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Orchestra 88- Manhattan skyline.mp3",
       timeCategory: "afternoon"

},












{
     name: " Human ",
    artist: " Human League ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Human - Human League.mp3",
       timeCategory: "afternoon"

},




{  
    name: "You Rock My World",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Michael Jackson - You rock my world.mp3",
       timeCategory: "afternoon"

},



 {
    name: " Let's Wait A While",
    artist: "Janet Jackson ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://jazzmusic05.netlify.app/Janet Jackson - Let's wait a while.mp3",
        timeCategory: "afternoon",
    quickFade: true,
    playcount: 0
},




{
    name: "Real Groove",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Kylie Minogue -Real Groove.mp3",
  
playcount: 0,

    timeCategory: "afternoon"
},
{
    name: " Won't Forget You",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/DJ Sapphire - Good Vibes3.mp3",
        timeCategory: "afternoon"
},

{
    name: "A Long Walk ",
    artist: "Jill Scott  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Jill Scott A Long Walk.mp3",
playcount: 0,

    timeCategory: "afternoon"
},

{
    name: " Love holds No limit",
    artist: "Full Flava  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Full Flava - Love holds no limit.mp3",
playcount: 0,
volumeboost: 0.10,
    timeCategory: "afternoon"
},

{
    name: "  Thriller ",
    artist: "Michael Jackson ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies08.netlify.app/Michael Jackson Thriller.mp3",
    playcount: 0,
timeCategory: "afternoon",
  volumeBoost: 0.40
},

{
    name: "   Automatic",
    artist: "Pointer Sisters ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies08.netlify.app/Pointer Sisters - Automatic.mp3",
   timeCategory: "afternoon",
    playcount: 0,
volumeBoost: 0.30

},

{
    name: "  Jump (for my love)",
    artist: "Pointer Sisters  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies08.netlify.app/Pointer Sisters - Jump (for my love).mp3",
     eq: { bass: 1, mid: 1, treble: +1 } ,

playcount: 0,
timeCategory: "afternoon",
  volumeBoost: 0.25

},

{
    name: " Won't Forget You",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/DJ Sapphire - Good Vibes2.mp3",
        timeCategory: "afternoon"
},



{
    name: "  You and I (1979)",
    artist: "Delegation   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/Delegation - You and I.mp3",
    timeCategory: "afternoon"


},




{
    name: "Dolce Vita (12inch)",
    artist: "Ryan Paris",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Ryan Paris - Dolce Vita.mp3",
   playcount: 0,
timeCategory: "afternoon",
  eq: { bass: 0, mid: 1, treble: 0 } ,
volumeBoost: 0.20
},

{
    name: " Crazy In Love (2003)",
    artist: "Beyonce",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Beyonce - Crazy In Love.mp3",
  playcount: 0,
timeCategory: "afternoon",
  volumeBoost: 0.45


},


{
    name: "Return Of The Mack (12inch) ",
    artist: "Mark Morrison",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Mark Morrison - Return of the mack.mp3",
        playcount: 0,
timeCategory: "afternoon",
  volumeBoost: 0.10


},

{
    name: " Won't Forget You",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/DJ Sapphire - Good Vibes.mp3",
        timeCategory: "afternoon"
},




{
    name: "It's Your Night",
    artist: "Ray Parker Junior",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://jazzmusic05.netlify.app/Ray Parker jr - It's your night.mp3",
        timeCategory: "afternoon",
    quickFade: true,
      eq: { bass: 2, mid: 2, treble: +1 } ,
    volumeBoost: 1.5
},
















{
    name: "Love Come Down (classic)",
    artist: "Evelyn King ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Evelyn King - Love come down.mp3",
     timeCategory: "afternoon",
    quickFade: true,
   playcount: 0,
   volumeBoost: 0.35
},


{
    name: "Promised Land (12inch)",
    artist: "Joe Smooth",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Joe Smooth - Promised Land.mp3",
       timeCategory: "afternoon"


},

{
    name: "Love Foolosophy",
    artist: "Jamiroquaii",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Jamiroquaii - Love Foolosophy.mp3",
    quickFade: true,
   playcount: 0,
   volumeBoost: 0.35
},
{
    name: "Enjoy The Silence (1989)",
    artist: "Depeche Mode ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Depeche Mode - Enjoy The Silence.mp3",
    timeCategory: "afternoon",
    quickFade: true,
  
    playcount: 0
},


{
     name: "   Natural Thing  ",
    artist: "Innocence ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Innocence - Natural Thing.mp3",
      timeCategory: "afternoon"


},

{
    name: "Little L",
    artist: "Jamiroquaii",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Jamiroquaii - Little L.mp3",
      timeCategory: "afternoon"


},
{
    name: " Just An Illusion (12inch)",
    artist: "Imagination ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Imagination - Just an Illusion 1982.mp3",
  volumeBoost: 0.10,
      timeCategory: "afternoon"

},

{
    name: "Money's Too Tight (12inch)",
    artist: "Simply Red",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Simply Red - Money's too tight (to mention).mp3",
      timeCategory: "afternoon",
volumeBoost: 0.45,
playcount: 0
},


{
    name: " Betcha Would'nt Hurt Me",
    artist: "Donna Gardier  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Donna Gardier - Betcha would 'nt hurt me.mp3",
     playcount: 0,
timeCategory: "afternoon",
  volumeBoost: 0.05

},

{
    name: "Honey I'm Rich",
    artist: "Ray Parker Junior",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://jazzmusic05.netlify.app/Ray Parker jr -Honey I'm rich.mp3",
        timeCategory: "afternoon",
    quickFade: true,
    volumeBoost: 0.75,
    playcount: 0
},


{
    name: "Jack & Jill",
    artist: "Ray Parker Junior",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://jazzmusic05.netlify.app/Ray Parker jr - Jack & Jill.mp3",
        timeCategory: "afternoon",
    quickFade: true,
    volumeBoost: 0.75,
    playcount: 0
},






{
    name: " Won't Forget You",
    artist: "Shouse",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Shouse - won't forget you.mp3",
        timeCategory: "afternoon",
    quickFade: true,
    volumeBoost: 0.15,
    playcount: 0
},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
       timeCategory: "afternoon"

},




{
    name: "  Ain't Nobody ",
    artist: " Chaka Khan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Ain't Nobody - Chaka Khan.mp3",
       timeCategory: "afternoon"

}, 









{
    name: "Indra",
    artist: "Thievery Corporation ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Thievery Corporation - Indra.mp3",
         timeCategory: "afternoon"

}, 













{
     name: "Starlette (instrumental)",
    artist: "BB & Q Band ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/BB & Q Band - Starlette (instrumental).mp3",
         timeCategory: "afternoon",
  eq: { bass: 0, mid: 0, treble: +1 } ,
    volumeBoost: 0.45
},






{
     name: "  Orchestra 88",
    artist: "The Love Boat Theme ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/The love boat theme.mp3",
        timeCategory: "afternoon"

}, 




{
     name: "Givin' Up Givin' In",
    artist: "Three Degrees ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Three Degrees - Givin' up givin 'in.mp3",
    timeCategory: "afternoon",
    volumeBoost: 0.20,
    playcount: 0
},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
       timeCategory: "afternoon"

}, 
















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
       timeCategory: "afternoon"

}, 








{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
       timeCategory: "afternoon"

}, 




{
    name: "Dancin' (single) ",
    artist: " Crown Heights Affair ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Crown Heights Affair - Dancin' (single).mp3",
    timeCategory: "afternoon",
    quickFade: true,
    volumeBoost: 0.55,
    playcount: 0
},


{
    name: "   Fallin'",
    artist: "Alicia Keys ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Alicia Keys - Fallin'.mp3",
       timeCategory: "afternoon"

},


{
    name: "   A Woman's Worth",
    artist: "Alicia Keys ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Alicia Keys - A Woman's Worth.mp3",
       timeCategory: "afternoon"

},

{
    name: " If I Ain't Got You",
    artist: "Alicia Keys ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Alicia Keys - If I Ain't Got You.mp3",
       timeCategory: "afternoon"

},






{
     name: "Do It ",
    artist: "B T Express (1974) ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/B T Express - Do It(Till You're  Satisfied).mp3",
       timeCategory: "afternoon",

     quickFade: true

},







{
    name: "Now They Call It Swing",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.24.mp3",
       timeCategory: "afternoon"

},






















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
       timeCategory: "afternoon"

},




{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Best of8.mp3",
        timeCategory: "afternoon"

},





{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
        timeCategory: "afternoon"

},


{
    name: "My Mama Don't  ",
    artist: "Sunny Jazz  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
       timeCategory: "afternoon"

},












{
    name: "Tender Lips",
    artist: "Billy Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.12.mp3",
     timeCategory: "afternoon"

},
  




{

    name: "Georgia",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas17.mp3",
       timeCategory: "afternoon"

},





{

    name: "Willow Tree (1936)",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/jazz divas 04.mp3",
      timeCategory: "afternoon"

},




















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
 timeCategory: "afternoon"

},






 







{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
        timeCategory: "afternoon"

},




















{
    name: "Magic",
    artist: "Dinah Washington ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Dinah Washington - Magic.mp3",
 timeCategory: "afternoon"

},








    {
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
   timeCategory: "afternoon"

},






   
{

    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/jazz divas 02.mp3",
 timeCategory: "afternoon"

},








{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame.mp3",
  


 timeCategory: "afternoon"

},   









{
     name: "   Glide",
    artist: "Pleasure ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Pleasure - Glide.mp3",
         timeCategory: "afternoon"

}, 




{
    name: "Glow Of Love",
    artist: "Change ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Change - Glow Of Love.mp3",
        timeCategory: "afternoon",
      quickFade: true,
    volumeBoost: 0.45,
    playcount: 0
},








{
     name: "  Fallin' In Love ",
    artist: "Surface ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Surface - Fallin'in love.mp3",
       timeCategory: "afternoon"

}, 












{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
     timeCategory: "afternoon"

},






{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


 timeCategory: "afternoon"

},















{
    name: "Hi!",
    artist: "Supperclub Best Of 15 Years",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnylounge01.netlify.app/Supperclub - Best of 15 years1.mp3",
    timeCategory: "afternoon"
  },


{
    name: "Hi!",
    artist: "Supperclub Best Of 15 Years",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnylounge01.netlify.app/Supperclub - Best of 15 years3.mp3",
    timeCategory: "afternoon"
  },















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
    timeCategory: "afternoon"

},
  













{
    name: "Hi!",
   artist: "Supperclub Best Of 15 Years",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnylounge01.netlify.app/Supperclub - Best of 15 years4.mp3",
     timeCategory: "afternoon"
  },




{
    name: "Hi!",
   artist: "Supperclub Best Of 15 Years",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnylounge01.netlify.app/Supperclub - Best of 15 years5.mp3",
       timeCategory: "afternoon"
  },


























{
    name: " Sweet Baby",
    artist: "Macy Gray  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Macy Gray Sweet Baby.mp3",
      timeCategory: "afternoon"

},





















{
    name: "Silent Way ",
    artist: " Miles Davis ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/silent way 01.mp3",
       timeCategory: "afternoon"

},





{
    name: "Silent Way ",
    artist: " Miles Davis ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/silent way 03.mp3",
       timeCategory: "afternoon"

},


{
    name: "Silent Way ",
    artist: " Miles Davis ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/silent way 04.mp3",
       timeCategory: "afternoon"

},



{
    name: "Silent Way ",
    artist: " Miles Davis ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/silent way 02.mp3",
       timeCategory: "afternoon"

},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
       timeCategory: "afternoon"

},












{
    name: "  Fall In Love With Me (1982) ",
    artist: " EARTH WIND & FIRE ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/EARTH WIND & FIRE - Fall In Love With Me (1982).mp3",
    timeCategory: "afternoon",
    volumeBoost: 0.55,
    playcount: 0
},




{
    name: "Too Hot (12inch)",
    artist: "Kool And The Gang",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Kool and the gang - Too hot.mp3",
      timeCategory: "afternoon"

},








{
    name: "Midway ",
    artist: "Brenda Lee  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Brenda Lee - Midway.mp3",
        timeCategory: "afternoon"

},


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
    timeCategory: "afternoon"

},  












{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
 
 timeCategory: "afternoon"

},




{
     name: "Tell Me What We're Gonna Do Now",
    artist: "Joss Stone",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Tell Me What We're Gonna Do Now.mp3",
         timeCategory: "afternoon"

},


















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
  timeCategory: "afternoon"

},






{
    name: "Que Bonito",
    artist: "Cafe del Mar, Jose Padilla  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
    timeCategory: "afternoon"

},

{
     name: " People Gotta Move",
    artist: "Gino Vanelli ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Gino Vanelli - People gotta move.mp3",
    timeCategory: "afternoon",
    year: 1974,
    eq: { bass: 2, mid: 2, treble: +1 } ,
    quickFade: true,
    volumeBoost: 0.45
},


{
    name: "Fall",
    artist: "Full Flava",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Full Flava - Fall.mp3",
      timeCategory: "afternoon"

},



{

    name: " Centrifugal Force",
    artist: "John Klemmer ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://soulfullforever.netlify.app/John Klemmer - Centrifugal Force - 1972.mp3",
    timeCategory: "afternoon"

},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
      timeCategory: "afternoon"

},


 {
     name: "  Nights Over Egypt",
    artist: "Jones Girls ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Jones Girls - Nights Over Egypt.mp3",
     timeCategory: "afternoon"

},





{
     name: " Got My Mind Made Up (1978)",
    artist: "Instant Funk ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Instant Funk Got My Mind Made Up (1978).mp3",
    timeCategory: "afternoon",
    quickFade: true,
    volumeBoost: 0.40,
    playcount: 0
},



{
     name: "  Lady Sun",
    artist: "Earth Wind & Fire",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Earth, Wind & Fire - Lady Sun.mp3",
         timeCategory: "afternoon",
 eq: { bass: 1, mid: 1, treble: +1 } ,
},





{
     name: " Best Love",
    artist: "Rose Royce ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies08.netlify.app/Rose Royce - Best Love (single).mp3",
         timeCategory: "afternoon",
   eq: { bass: +1, mid: 2, treble: +2 } ,
playcount: 0,
volumeBoost: 0.40
},








{
     name: " Try It Out",
    artist: "Gino Soccio ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies09.netlify.app/Gino Soccio - Try It Out (maxi).mp3",
    timeCategory: "afternoon",
     quickFade: true,
    volumeBoost: 0.80,
    playcount: 0
},





















































































































{
     name: " Pipeline ",
    artist: "Bruce Johnston",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Bruce Johnston- Pipeline.mp3",
       timeCategory: "afternoon"

},

















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  
 timeCategory: "afternoon"

},





{

    name: "Blue Skies (1927)",
    artist: "Josephine Baker  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Josephine Baker - Blue Skies (1927).mp3",
 timeCategory: "afternoon"

},






{

    name: "Body & Soul",
    artist: "Frank Sinatra",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz18.mp3",
timeCategory: "afternoon"

},







{

    name: "Cheeck To Cheeck",
    artist: "Ella & Louis",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of jazz11.mp3",
  timeCategory: "afternoon"

},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


timeCategory: "afternoon"

},

{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
  


timeCategory: "afternoon"

},    





{
    name: "OldskoolJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.8.mp3",
 timeCategory: "afternoon"

},




{
    name: "OldskoolJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.9.mp3",
 timeCategory: "afternoon"

},



{

    name: "Summertime",
    artist: "Sunny",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 14.mp3",
  timeCategory: "afternoon"

},




{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


 timeCategory: "afternoon"

},










{
     name: " More More More ",
    artist: "Andrea True ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Andrea True Connection - More More More.mp3",
     quickFade: true,
    volumeBoost: 0.45,
    year: 1976,
 timeCategory: "afternoon"
},












































































{

    name: "Rocking Chair",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas12.mp3",
 timeCategory: "afternoon"

},
  



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
 timeCategory: "afternoon"

},








 {
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame.mp3",
  


timeCategory: "afternoon"

},   


 








{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin9 .mp3",
  timeCategory: "afternoon"

},




{
    name: " You Are My Melody  ",
    artist: "Change  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Change - You Are My Melody.mp3",
    timeCategory: "afternoon",
     year: 1984,
quickFade: true,
    volumeBoost: 0.55,
    eq: { bass: 1, mid: 2, treble: +1 } 

},










 



 




{

    name: "M. Dupont",
    artist: "The Dining Rooms ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/The Dining Rooms - M. Dupont.mp3",
 timeCategory: "afternoon"

},
 








{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
  timeCategory: "afternoon"

},



{
    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Nina Simone birds.mp3",
 timeCategory: "afternoon"

},

































{
    name: "OldskoolJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 7.mp3",
 timeCategory: "afternoon"

},

{
    name: "OldskoolJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.19.mp3",
  timeCategory: "afternoon"

},







{
    name: " Get It Out Your System",
    artist: "Millie Jackson ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Millie - Jackson - Get It Out Your System.mp3",
   timeCategory: "afternoon"

},





{

    name: "I Cry For You",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 18.mp3",
  timeCategory: "afternoon"

},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  timeCategory: "afternoon"

},





{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
 timeCategory: "afternoon"

},


{
    name: "Tammy Whynet ",
    artist: "You Love Me",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/Tammy Whynet - You love me.mp3",
 timeCategory: "afternoon"

},








{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
    timeCategory: "afternoon"
  },



{
    name: "Volume 1",
    artist: "Hotel del Mar ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hoteldel.netlify.app/Hotel del Mar01.mp3",
    timeCategory: "afternoon",
  eq: { bass: 1, mid: 1, treble: 0 } ,
     quickFade: true,
    volumeBoost: 0.45,
    playcount: 0
},




{
    name: "Volume 1",
    artist: "Hotel del Mar ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hoteldel.netlify.app/Hotel del Mar02.mp3",
      timeCategory: "afternoon",
   eq: { bass: 1, mid: 1, treble: 0 } ,
     quickFade: true,
    volumeBoost: 0.45,
    playcount: 0
},




{
    name: "Volume 1",
    artist: "Hotel del Mar ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hoteldel.netlify.app/Hotel del Mar03.mp3",
    timeCategory: "afternoon",
   eq: { bass: 1, mid: 1, treble: 0 } ,
     quickFade: true,
    volumeBoost: 0.45,
    playcount: 0
},



{
    name: "Volume 1",
    artist: "Hotel del Mar ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hoteldel.netlify.app/Hotel del Mar04.mp3",
    timeCategory: "afternoon",
   eq: { bass: 1, mid: 1, treble: 0 } ,
     quickFade: true,
    volumeBoost: 0.45,
    playcount: 0
},




{
    name: "Volume 1",
    artist: "Hotel del Mar ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hoteldel.netlify.app/Hotel del Mar05.mp3",
   timeCategory: "afternoon",
   eq: { bass: 1, mid: 1, treble: 0 } ,
     quickFade: true,
    volumeBoost: 0.45,
    playcount: 0
},


{
    name: "Volume 1",
    artist: "Hotel del Mar ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hoteldel.netlify.app/Hotel del Mar06.mp3",
   timeCategory: "afternoon",
   eq: { bass: 1, mid: 1, treble: 0 } ,
     quickFade: true,
    volumeBoost: 0.45,
    playcount: 0
},








{
    name: "Tonight On Sunny!",
    artist: "Miles Sunny - In A Silent Way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
       timeCategory: "afternoon"

},


{
    name: "Dr Beat (12inch)",
    artist: "Miami Sound Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Miami Sound Machine - Dr Beat.mp3",
       timeCategory: "afternoon"

},







{
    name: "20 Dollars",
    artist: "Angie Stone",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Angie Stone  20 dollars.mp3",
       timeCategory: "afternoon"

},






{
    name: "  Sexy (1975)",
    artist: "MFSB    ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/MFSB - Sexy (12inch).mp3",
       timeCategory: "afternoon",
volumeBoost: 0.40
},


















{
    name: "Popcorn ", 
    artist: "Popcorn Makers (1969) ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Popcorn - Popcorn Makers.mp3",
       timeCategory: "afternoon"

},





















{
    name: "Rose Rouge",
    artist: "St Germain",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/St Germain - Rose Rouge.mp3",
        
isLoud: true,          
  loudnessValue: 0.70,
 timeCategory: "afternoon"

},








{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1.mp3",
         timeCategory: "afternoon"

},




{
    name: "Best Of",
    artist: "Sunny Jazz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
         timeCategory: "afternoon"

},



{

    name: " Fortune's Child",
    artist: "Nat Adderley ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://soulfullforever.netlify.app/Nat Adderley - Fortune's Child - 1979.mp3",
         timeCategory: "afternoon"

},




   {
    name: "OldskoolJazz",
    artist: "Sunny",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
          timeCategory: "afternoon"

},






{
    name: "Best Of",
    artist: "Sunny Jazz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
          timeCategory: "afternoon"

},

{
    name: "Fever ",
    artist: "Peggy Lee",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Peggy Lee - Fever.mp3",
        timeCategory: "afternoon"

},


{
    name: "My Mama Don't  ",
    artist: "Sunny Jazz  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles//smooth jazz jingle.mp3",
     timeCategory: "afternoon"

},




{
    name: "Foolish Heart",
    artist: "Brenda Lee ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Brenda Lee - Foolish heart.mp3",
   timeCategory: "afternoon"

},




{
    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 2.mp3",
          timeCategory: "afternoon"

},


{
    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin5 .mp3",
           timeCategory: "afternoon"

},

 






{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame.mp3",
    timeCategory: "afternoon"

},  


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
          timeCategory: "afternoon"

},
 




{
   name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.13.mp3",
    timeCategory: "afternoon"

},


{
    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.14.mp3",
    timeCategory: "afternoon"

},









{
    name: " Bewitched (1956)",
    artist: "Ella Fitzgerald ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Ella Fitzgerald - Bewitched (1956).mp3",
        timeCategory: "afternoon"

},





















{
    name: "In A Sentimental Mood (1961) Live",
    artist: "Sarah Vaughan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sarah vaughn/Sarah Vaughan - In A Sentimental Mood (1961) Live (1964).mp3",
         timeCategory: "afternoon"

},

















{
    name: " Come Into My Life (1987)",
    artist: "Joyce Sims ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Joyce Sims - Come Into My Life.mp3",
 timeCategory: "afternoon",
volumeBoost: 0.20
},





{
    name: "My Mama Don't Told Me",
    artist: "Dinah Washington  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Dinah Washington - My mama don't told me.mp3",
       timeCategory: "afternoon"

},

























{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
   timeCategory: "afternoon"

},





{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  timeCategory: "afternoon"

},

  
 










  






{
    name: "Que Bonito",
    artist: "Cafe del Mar, Jose Padilla  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
    timeCategory: "afternoon"

},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
    timeCategory: "afternoon"

},




























































































































//evening



{

    name: " Fly Over The Horizon",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic05.netlify.app/Azymuth - Fly over the horizon.mp3",
        timeCategory: "evening"

},





{

    name: " Orange Clouds",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic05.netlify.app/Azymuth - Orange Clouds.mp3",
        timeCategory: "evening"

},




{

    name: " Mimosa",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic05.netlify.app/Azymuth  - Mimosa.mp3",
      timeCategory: "evening"

},





{

    name: "Fly Over The Horizon",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic05.netlify.app/Azymuth - Fly over the horizon.mp3",
      timeCategory: "evening"

},




{
    name: "Loving You",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Loving You - Michael Jackson.mp3",
          timeCategory: "evening"

},





{
     name: "Welcome! evening program",
    artist: "Listen Live Sunny Jazzradio☀️",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
 timeCategory: "evening"

},

 























































































































































































































{
    name: " Turn On Tune In  ",
    artist: "Freak Power ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Freak Power - Turn On Tune In Cop Out.mp3",
 timeCategory: "evening"

},















{
    name: " You Cant Hide",
    artist: "David Joseph  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://Sunnydanceoldies04.netlify.app/David Joseph - You Cant Hide (Your Love From Me).mp3",
  timeCategory: "evening"

},

































{
    name: " Razzmatazz",
    artist: "Quincy Jones ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Quincy Jones& Patti Austin -  Razzmatazz.mp3",
 timeCategory: "evening"

},




{
    name: "   True Colors   ",
    artist: "Jalisa Rey ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Jalisa Rey - True Colors.mp3",
  timeCategory: "evening"

},


{
     name: "La Vie En Rose ",
    artist: "Grace Jones",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Grace Jones - La Vie En Rose.mp3",
         timeCategory: "evening",
    eq: { bass: 2, mid: 2, treble: +1 } ,
    quickFade: true,
    volumeBoost: 0.45
 
},





{
     name: "  Souvenirs",
    artist: "Voyage ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Voyage - Souvenirs.mp3",
          timeCategory: "evening"

},







{
    name: " Funky Sensation ",
    artist: "Gwen McCrae  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Gwen McCrae - Funky Sensation.mp3",
  timeCategory: "evening"

},

{
    name: "  Flashdance",
    artist: "Irene Cara   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Irene Cara - Flashdance.mp3",
    playcount: 0,
timeCategory: "evening",
  volumeBoost: 0.10

},

{
    name: "  Don't Look Any Further",
    artist: "Dennis Edwards        ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies07.netlify.app/Dennis Edwards - Don't Look Any Further    .mp3",
    playcount: 0,
timeCategory: "evening",
isLoud: true,          
  loudnessValue: 0.50

},


{
    name: "Right Here ",
    artist: "SWV ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/SWV - Right Here.mp3",
  timeCategory: "evening"

},



{
    name: " It's All The Way Live",
    artist: "Lakeside ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Lakeside - It's All The Way Live.mp3",    
  timeCategory: "evening"

},
{
    name: "No One's Gonna Love You (1984)",
    artist: "SOS Band ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/SOS Band - No One's Gonna Love You (1984).mp3",
    timeCategory: "evening"

},



{
    name: "Sunny (Ruud Remix)",
    artist: "Boney M  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Boney M - Sunny.mp3",
  timeCategory: "evening"

},

















{
    name: "Stomp! (Album Version) ",
    artist: "The Brothers Johnson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/THE BROTHERS JOHNSON - Stomp! (Album Version) HQ.mp3",
  timeCategory: "evening"

},

{
    name: "Strawberry Letter 23",
    artist: "Brothers Johnson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Strawberry Letter 23.mp3",
         timeCategory: "evening"
},

{
    name: "Ain't We Funkin' Now",
    artist: "Brothers Johnson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Brothers Johnson - Ain't We Funkin' Now!!2.mp3",
         timeCategory: "evening"
},



{
    name: " Can You Handle It",
    artist: "Sharon Redd ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Sharon Redd Can you handle it.mp3",
      quickFade: true,
volumeBoost: 1.0,
playcount: 0,
  eq: { bass: 1, mid: 3, treble: 0 } ,
timeCategory: "evening"
},



{
    name: "K-Jee",
    artist: "MFSB  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/MFSB - K-Jee.mp3",
         timeCategory: "evening",
isLoud: true,          
  loudnessValue: 0.90


},



{
    name: "Rainforest (12inch)",
    artist: "Paul Hardcastle",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Paul Hardcastle - Rainforest.mp3",
        timeCategory: "evening"
},




{
    name: "Classic",
    artist: "The Knocks ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/The Knocks - Classic.mp3",
   timeCategory: "evening"

},


{
     name: " Yes Sir  I Can Boogie  ",
    artist: "Baccara ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Baccara - Yes Sir  I Can Boogie.mp3",
         timeCategory: "evening"

},  





{
     name: " Funkin For Jamaica",
    artist: "Tom Brown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies09.netlify.app/Tom Brown Funkin For Jamaica.mp3",
    timeCategory: "evening",
volumeBoost: 0.40
},






{
     name: "Lowdown",
    artist: "Boz Scaggs  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Boz Scaggs3 - Lowdown.mp3",
        timeCategory: "evening"

},





{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
  timeCategory: "evening"


},













{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj1.mp3",
         timeCategory: "evening"

}, 




{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
         timeCategory: "evening"

}, 





{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
         timeCategory: "evening"

}, 

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio☀️",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/return classics.mp3",
       timeCategory: "evening"

}, 







{
     name: " Instant Replay",
    artist: "Dan Hartman",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Dan Hartman - Instant replay.mp3",
        timeCategory: "evening",
     quickFade: true,
    volumeBoost: 0.35,
    playcount: 0
},




{
    name: " Birdland (1979) ",
    artist: "Manhattan Transfer ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Manhattan Transfer - Birdland (1979).mp3",
       timeCategory: "evening"

},


{
    name: " Bewitched (1956) ",
    artist: "Ella Fitzgerald  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Ella Fitzgerald - Bewitched (1956).mp3",
       timeCategory: "evening"

},

{
    name: "   True Colors   ",
    artist: "Jalisa Rey ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Jalisa Rey - True Colors.mp3",
       timeCategory: "evening"

},







{
    name: "In The Dark",
    artist: "Purple Disco Machine ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Purple disco machine - in the Dark.mp3",
          timeCategory: "evening"

},






{

    name: " Fortune's Child",
    artist: "Nat Adderley ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://soulfullforever.netlify.app/Nat Adderley - Fortune's Child - 1979.mp3",
        timeCategory: "evening"

},







{
     name: "   Glide",
    artist: "Pleasure ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Pleasure - Glide.mp3",
        timeCategory: "evening"

},





{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1best.mp3",
  timeCategory: "evening"

},


{
     name: " Manhattan Skyline",
    artist: "Orchestra 88 ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Orchestra 88- Manhattan skyline.mp3",
        timeCategory: "evening"

},

{
     name: "  Sunny Dance",
    artist: "80's Mix  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/80 mix 04.mp3",
   timeCategory: "evening"
},






{
     name: "  Let's Go Together",
    artist: "Change ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Change - Let's go together.mp3",
         timeCategory: "evening"

},








{
    name: " Rockit",
    artist: "Herbie Hancock  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Herbie Hancock - Rockit.mp3",
   timeCategory: "evening"
},



{
    name: " Don't Call  Me Baby ",
    artist: "Madison Avenue  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Madison Avenue - Don't Call  Me Baby.mp3",
   timeCategory: "evening"
},





















{
    name: "  Jazz Carnaval",
    artist: "Azymuth ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Azymuth - Jazz carnaval.mp3",
  timeCategory: "evening",
volumeBoost: 0.40



},








{
     name: "   I Wanna Be Your Man",
    artist: "Roger ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Roger - I wanna be your man.mp3",
  timeCategory: "evening",
 playcount: 0,        // start at zero
    volumeBoost: 0.5     // target volume
},



{
    name: "   Mellow Mellow Right On ",
    artist: "Lowrell",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Lowrell - Mellow Mellow Right On.mp3",
  timeCategory: "evening"

},

{
     name: "Do It ",
    artist: "B T Express (1974) ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/B T Express - Do It(Till You're  Satisfied).mp3",
       timeCategory: "evening",
     quickFade: true

},




{
    name: " Get Lucky",
    artist: " Daft Punk",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/Daft Punk - Get Lucky2.mp3",
    timeCategory: "evening",
quickFade: true,
    volumeBoost: 0.45,
    playcount: 0

},










{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
 timeCategory: "evening"

},


 




{
    name: "Best Of My Love",
    artist: "T-Connection",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/T-Connection - Best of my Love.mp3",
         timeCategory: "evening"

}, 











{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  timeCategory: "evening"

},






{
    name: "  You Gotta Be",
    artist: "Des'ree ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Des'ree - You gotta be.mp3",
 timeCategory: "evening"

},


{
    name: "This Is It",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Michael Jackson - This is it.mp3",
  


 timeCategory: "evening"

},










{
    name: " Won't Forget You",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/DJ Sapphire - Good Vibes.mp3",
        timeCategory: "evening"
},








{
    name: " 2nite",
    artist: "Carol Riddick ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Carol Riddick - 2nite.mp3",
         timeCategory: "evening"

},

{
     name: " Starlette (1981)",
    artist: "B B & Q Band   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/B B & Q Band - Starlette (extended version).mp3",
         timeCategory: "evening",
  eq: { bass: 0, mid: 0, treble: +1 } ,
    volumeBoost: 0.45
},



{
     name: "  Still In Love",
    artist: "Rose Royce ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Rose Royce Still in love.mp3",
    timeCategory: "evening",
  playcount: 0,
  eq: { bass: +2, mid: 2, treble: +2 } ,
volumeBoost: 0.40
},

{
    name: " About them time",
    artist: "Lizzo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Lizzo - About them time.mp3",
  timeCategory: "evening"

},

{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
    timeCategory: "evening"

},

{
    name: " Miracles (12inch)",
    artist: "Change ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://Sunnydanceoldies04.netlify.app/Change - Miracles.mp3",
  timeCategory: "evening"

},


{
    name: " What Is Love ",
    artist: "Haddaway ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Haddaway - What Is Love.mp3",
    timeCategory: "evening",
    volumeBoost: 0.20,
    playcount: 0
},



{
  name: "Make It Right",
  artist: "Donna Odain",
  image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
  path: "https://sunny-dancemusic03.netlify.app/Donna Odain - Make it right.mp3",
  trackDuration: "4:27",
  timeCategory: "evening"
},




{
    name: " Won't Forget You",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/DJ Sapphire - Good Vibes2.mp3",
        timeCategory: "evening"
},



{
     name: "    Number One",
    artist: "Patrice Rushen",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Patrice Rushen - Number one.mp3",
  timeCategory: "evening"

},




{
     name: " The Greatest Dancer",
    artist: "Sisters Sledge ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Sisters Sledge - He's The Greatest Dancer (12inch).mp3",
  timeCategory: "evening"

},



{
    name: "Super Duper Love",
    artist: "Joss Stone",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Joss Stone - Super Duper Love.mp3",
  timeCategory: "evening"

},
























{
    name: " Won't Forget You",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/DJ Sapphire - Good Vibes3.mp3",
        timeCategory: "evening"
},













































{
    name: "Lost",
    artist: "Jonathan Jeremiah   ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "https://sunnyrockradio.com/muziek/muziek01/Jonathan Jeremiah -  Lost.mp3",
         timeCategory: "evening"

}, 















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ3.mp3",
         timeCategory: "evening"

},


















  




{
    name: " Won't Forget You",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/DJ Sapphire - Good Vibes4.mp3",
        timeCategory: "evening"
},



{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
       timeCategory: "evening"

},




{
    name: "Happiness",
    artist: "Jonathan Jeremiah  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
   path: "https://sunnyrockradio.com/muziek/muziek01/Jonathan Jeremiah -  Happiness.mp3",

         timeCategory: "evening"

},




{
    name: "  Popcorn Makers (1969)",
    artist: "Popcorn ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Popcorn - Popcorn Makers.mp3",
       timeCategory: "evening"

},






{
    name: "Volume 12",
    artist: "Cafe Del Mar ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hotelcostes.netlify.app/Cafe12 01.mp3",
 timeCategory: "evening"

},


{
    name: "Volume 12",
    artist: "Cafe Del Mar ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hotelcostes.netlify.app/Cafe12 02.mp3",
 timeCategory: "evening"

},


{
    name: "Volume 12",
    artist: "Cafe Del Mar ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hotelcostes.netlify.app/Cafe12 03.mp3",
 timeCategory: "evening"

},


{
    name: "Volume 12",
    artist: "Cafe Del Mar ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hotelcostes.netlify.app/Cafe12 04.mp3",
 timeCategory: "evening"

},





{
    name: "Volume 12",
    artist: "Cafe Del Mar ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hotelcostes.netlify.app/Cafe12 05.mp3",
 timeCategory: "evening"

},


{
    name: "Cresecent",
    artist: "John Coltrane ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/John Coltrane - Cresecent01.mp3",
       timeCategory: "evening"

},

{
    name: "Cresecent",
    artist: "John Coltrane ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/John Coltrane - Cresecent02.mp3",
       timeCategory: "evening"

},


{
    name: "Cresecent",
    artist: "John Coltrane ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/John Coltrane - Cresecent04.mp3",
       timeCategory: "evening"

},

 {
    name: "Cresecent",
    artist: "John Coltrane ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/John Coltrane - Cresecent05.mp3",
       timeCategory: "evening"

},

 {
    name: "Cresecent",
    artist: "John Coltrane ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/John Coltrane - Cresecent03.mp3",
       timeCategory: "evening"

},



{
    name: "Indra",
    artist: "Thievery Corporation ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Thievery Corporation - Indra.mp3",
       timeCategory: "evening"

},





{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Best of9.mp3",
       timeCategory: "evening"

},







{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj1.mp3",
     timeCategory: "evening"

},

{
    name: "Arkansa Blues",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Best of classicJazz singin7 .mp3",
  timeCategory: "evening"

},



{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_07.mp3",
    timeCategory: "evening",
 volumeBoost:0.40,
   playcount: 0
},






{
    name: " Crazy In Love (2003)",
    artist: "Beyonce",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Beyonce - Crazy In Love.mp3",
   volumeBoost: 0.45,
timeCategory: "evening"

},
 







{
    name: "Live At Basy",
    artist: "Oscar Peterson ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Oscar Peterson 04.mp3",
       timeCategory: "evening"

},

{
    name: "Live At Basy",
    artist: "Oscar Peterson ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Oscar Peterson 01.mp3",
       timeCategory: "evening"

},


{
    name: "Live At Basy",
    artist: "Oscar Peterson ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Oscar Peterson 02.mp3",
       timeCategory: "evening"

},


{
    name: "Live At Basy",
    artist: "Oscar Peterson ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Oscar Peterson 03.mp3",
       timeCategory: "evening"

},

{
    name: "Live At Basy",
    artist: "Oscar Peterson ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Oscar Peterson 05.mp3",
       timeCategory: "evening"

},



{
    name: "Live At Basy",
    artist: "Oscar Peterson ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Oscar Peterson 06.mp3",
       timeCategory: "evening"

},


{
    name: "Live At Basy",
    artist: "Oscar Peterson ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Oscar Peterson 07.mp3",
       timeCategory: "evening"

},

{
    name: "Live At Basy",
    artist: "Oscar Peterson ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Oscar Peterson 08.mp3",
       timeCategory: "evening"

},

{
    name: "Live At Basy",
    artist: "Oscar Peterson ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Oscar Peterson 09.mp3",
       timeCategory: "evening"

},




{
    name: "Live At Basy",
    artist: "Oscar Peterson ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Oscar Peterson 10.mp3",
       timeCategory: "evening"

},

{
    name: "Live At Basy",
    artist: "Oscar Peterson ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic04.netlify.app/Oscar Peterson 11.mp3",
       timeCategory: "evening"

},

{
     name: " Shine (1978)",
    artist: "Bar-Kays ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Bar-Kays - Shine 1978.mp3",
   timeCategory: "evening",
  eq: { bass: 0, mid: 1, treble: +1 }, 
volumeBoost:0.50,
   playcount: 0
},











{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1.mp3",
      timeCategory: "evening"

},







{
     name: "Slave To The Rhythm ",
    artist: "Grace Jones (1985)",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/GRACE JONES. Slave to the rhythm. 1985..mp3",
           timeCategory: "evening"

},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
           timeCategory: "evening"

},


{
     name: " And The Beat Goes On ",
    artist: "The Whispers",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/The Whispers - And the beat goes on.mp3",
   timeCategory: "evening",
    quickFade: true,
volumeBoost: 0.20,
playcount: 0
},








{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
 
 timeCategory: "evening"

},




{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1.mp3",
      timeCategory: "evening"

},




{
    name: "Megamix 2023",
    artist: "Purple Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_01.mp3",
    timeCategory: "evening",
 volumeBoost:0.40,
   playcount: 0
},



{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_03.mp3",
    timeCategory: "evening",
 volumeBoost:0.40,
   playcount: 0
},





{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_05.mp3",
    timeCategory: "evening",
 volumeBoost:0.40,
   playcount: 0
},





{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_06.mp3",
    timeCategory: "evening",
 volumeBoost:0.40,
   playcount: 0
},








{
    name: "Volume 4",
    artist: "Hotel Costes",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hotelcostes.netlify.app/Costes03.mp3",
 timeCategory: "evening"

},


{
    name: "Volume 4",
    artist: "Hotel Costes",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hotelcostes.netlify.app/Costes04.mp3",
 timeCategory: "evening"

},



{
    name: "Volume 4",
    artist: "Hotel Costes",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hotelcostes.netlify.app/Costes05.mp3",
 timeCategory: "evening"

},



{
    name: "Volume 4",
    artist: "Hotel Costes",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hotelcostes.netlify.app/Costes06.mp3",
 timeCategory: "evening"

},


{
    name: "Volume 4",
    artist: "Hotel Costes",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hotelcostes.netlify.app/Costes07.mp3",
 timeCategory: "evening"

},

{
    name: "Volume 4",
    artist: "Hotel Costes",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://hotelcostes.netlify.app/Costes08.mp3",
 timeCategory: "evening"

},







{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
 timeCategory: "evening"

},







{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/female dj2.mp3",
    timeCategory: "evening"

},


{

    name: "Biaozinho Carioca",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic05.netlify.app/Azymuth - Biaozinho Carioca.mp3",
    timeCategory: "evening",
    quickFade: true,
    volumeBoost: 0.7,
    playcount: 0
},





{

name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
     timeCategory: "evening"

},




{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
       timeCategory: "evening"

},










{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
       timeCategory: "evening"

},


{
    name: " On How Life Is",
    artist: "Macy Gray  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Macy Gray - On how life is.mp3",
   timeCategory: "evening"

},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj6.mp3",
  timeCategory: "evening"

},







































{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj6.mp3",
         timeCategory: "evening"

},



{
    name: "   70 Disco ",
    artist: "Discomix 70",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Discomix 70.mp3",
          timeCategory: "evening",
eq: { bass: 1, mid: 1, treble: 0 } ,
  volumeBoost: 0.40
},



{
    name: "  70 Disco ",
    artist: "Discomix 70",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Discomix 70 2.mp3",
         timeCategory: "evening",
eq: { bass: 1, mid: 1, treble: 0 } ,
  volumeBoost: 0.45
},


















{
    name: " Waterfalls",
    artist: "TLC ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/TLC - Waterfalls.mp3",
        timeCategory: "evening"

},



{
     name: "I Like (single)",
    artist: "Young & Company ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Young & Company - I Like (single).mp3",
        timeCategory: "evening"

},









 

{
     name: "  Fly Robin Fly",
    artist: "Silver Convention ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Silver Convention - Fly Robin Fly.mp3",
         timeCategory: "evening"

}, 


{
    name: " Let's go ",
    artist: "Average White Band  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Average White Bans - Let's go round again.mp3",
         timeCategory: "evening"

},

 



{
     name: "  Black Sun",
    artist: "The far Out Monster Orchestra ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/The far out monster orchestra - Black sun.mp3",
          timeCategory: "evening"

},








{
    name: "Too Hot (12inch)",
    artist: "Kool And The Gang",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Kool and the gang - Too hot.mp3",
         timeCategory: "evening"

},




{
     name: " Shine (1978)",
    artist: "Bar-Kays ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Bar-Kays - Shine 1978.mp3",
       timeCategory: "evening",
  eq: { bass: 0, mid: 1, treble: +1 }, 
volumeBoost:0.50
},















{
     name: "   Disco Nights",
    artist: "G.Q ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/G.Q - Disco Nights.mp3",
    timeCategory: "evening",
    quickFade: true,
    volumeBoost: 0.65,
eq: { bass: 1, mid: 1, treble: +1 } ,
playcount: 0
},





{
    name: " All Night Long",
    artist: "Splendor ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Splendor - All night long.mp3",
    timeCategory: "evening",
    playcount: 0,        // start at zero
    volumeBoost: 0.8     // target volume
},



{
     name: " The Chase",
    artist: "Gorgio Moroder ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Gorgio Moroder - The Chase.mp3",
   timeCategory: "evening"

},








{
     name: "  Lady Sun",
    artist: "Earth Wind & Fire",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Earth, Wind & Fire - Lady Sun.mp3",
   timeCategory: "evening"

},





{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
       timeCategory: "evening"

},





{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
           timeCategory: "evening"

},









{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
         timeCategory: "evening"

},







{
     name: " Everybody Dance (1978)",
    artist: "Chic  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Chic - Everybody Dance (1978).mp3",
       timeCategory: "evening"

}, 








{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
        timeCategory: "evening"

}, 



{
    name: " Don't Stop The Music (1980)",
    artist: "Yarbrough & Peoples  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Yarbrough & Peoples - Don't Stop The Music.mp3",
          timeCategory: "evening",
volumeBoost:0.50
}, 








{
     name: "  Sunshine Hotel (1978)",
    artist: "Richard  T. Bear ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Richard  T. Bear - Sunshine Hotel.mp3",
       timeCategory: "evening"

},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
 timeCategory: "evening"

},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
 timeCategory: "evening"

},




















{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_04.mp3",
    timeCategory: "evening",
 volumeBoost:0.40,
   playcount: 0
},





























{
    name: "  The Love We Had",
    artist: "Joss Stone ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Joss Stone - The Love We Had.mp3",
   timeCategory: "evening"

},



{
    name: "A Walk In The Park ",
    artist: "Nick Straker ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Nick Straker Band - A walk in the park 7inch.mp3",
 timeCategory: "evening"

},



{
    name: " Juicy Fruit",
    artist: "Mtume ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Mtume - Juicy Fruit.mp3",
  


 timeCategory: "evening"

},




{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
   timeCategory: "evening"

},





{
    name: " Sunrise (12inch)",
    artist: "Simply Red   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Simply Red - Sunrise (Extended).mp3",
  timeCategory: "evening"

},


{
    name: "Best Of",
    artist: "Sunny Jazz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  timeCategory: "evening"

},






{
    name: "Fever ",
    artist: "Peggy Lee",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Peggy Lee - Fever.mp3",
       timeCategory: "evening"

},




{
    name: "My Mama Don't  ",
    artist: "Sunny Jazz  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles//smooth jazz jingle.mp3",
       timeCategory: "evening"

},







 {
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
  timeCategory: "evening"

},





{
     name: " Can You Feel It",
    artist: "The Jackson Five",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/The Jacksons - Can You Feel It.mp3",
  timeCategory: "evening",
volumeBoost: 0.40
},



























{
    name: " I Love Your Smile",
    artist: "Shanice ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Shanice - I Love Your Smile.mp3",
 timeCategory: "evening"

},











 







{

    name: "Butterfly",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic05.netlify.app/Azymuth - Butterfly.mp3",
      timeCategory: "evening"

},






{

    name: "Last Summer In Rio",
    artist: "Sunny ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic05.netlify.app/Azymuth - Last Summer in Rio.mp3",
        timeCategory: "evening"

},






























{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/New track.mp3",
       timeCategory: "evening"

}, 







{
    name: "   Save Your Soul",
    artist: "Tink ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Tink - Save Your Soul.mp3",
       timeCategory: "evening"

}, 












{
     name: "  Freak Of Nature ",
    artist: "Amir",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Amir - Freak of Nature.mp3",
  timeCategory: "evening"

},












{
     name: "The Boss",
    artist: "Diana Ross ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Diana Ross - The Boss.mp3",
   timeCategory: "evening"

},








{
    name: "Loving You",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Loving You - Michael Jackson.mp3",
  

  timeCategory: "evening"

},


{
    name: " Let Me Show You ",
    artist: " The Jacksons",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Jacksons - Let me show you (Ruud Remix).mp3",
  timeCategory: "evening"

},

{
    name: "Best Of",
    artist: "Sunny Jazz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  timeCategory: "evening"

},











































{
     name: " Don't Be Afraid",
    artist: "Diplo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Diplo & Damian Lazarus - Don't be afraid.mp3",
  timeCategory: "evening"

},


















{
     name: " Don't Forget",
    artist: "Diplo & Miguel ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Diplo & Miguel - Don't forget my love.mp3",
 timeCategory: "evening"

},


{
    name: "Turn The Music Up!",
    artist: "Players Association ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies09.netlify.app/Players Association - Turn The Music Up!.mp3",
    timeCategory: "evening",
    quickFade: true,
    volumeBoost: 0.45,
    playcount: 0
},


{
    name: " Fantastic Voyage",
    artist: "Lakeside  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies09.netlify.app/Lakeside - Fantastic Voyage.mp3",
    timeCategory: "evening",
    quickFade: true,
    volumeBoost: 0.45,
    playcount: 0
},







{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnyhotradio.com/muziek/jingles/sunny dance jingle.mp3",
  timeCategory: "evening"

},













{
    name: "Do Watcha Wanna Do",
    artist: "Neil Rodgers",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Neil Rodgers - Do watcha wanna do.mp3",
  


 timeCategory: "evening"

},






{
    name: "Best Of",
    artist: "Sunny Jazz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
 timeCategory: "evening"

},

 
{
    name: "If Dreams Come True",
    artist: "Ella Fitzgerald",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 4.mp3",
    timeCategory: "evening"

},

 {
    name: "Welcome!",
    artist: "Play Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
   timeCategory: "evening"

},
















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
        timeCategory: "evening"

}, 



{
    name: "You Are Not Alone",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Michael Jackson- You are not alone.mp3",
         timeCategory: "evening"

}, 

{

    name: "Last Summer In Rio",
    artist: "Sunny ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://jazzmusic05.netlify.app/Azymuth - Last Summer in Rio.mp3",
        timeCategory: "evening"

},




{
    name: "In A Sentimental Mood (1961) Live",
    artist: "Sarah Vaughan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sarah vaughn/Sarah Vaughan - In A Sentimental Mood (1961) Live (1964).mp3",
         timeCategory: "evening"

},





































{
     name: "  Again (1980)",
    artist: "The Night People  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/The Night People - Again (1980).mp3",
  timeCategory: "evening"

},




{
     name: "  Street Player ",
    artist: "Chicago  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Chicago -  Street player.mp3",
    timeCategory: "evening",
    volumeBoost: 0.65,
    playcount: 0
},
































































































































//evening-late


















{
     name: "Welcome! evening program",
    artist: "Listen Live Sunny Jazzradio☀️",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
 timeCategory: "evening-late"

},

{
     name: "  Music Sounds Better With You",
    artist: "Stardust ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic09.netlify.app/Stardust - Music Sounds Better With You.mp3",
    timeCategory: "evening-late",
   eq: { bass: +2, mid: 3, treble: +1 } ,
volumeBoost: 0.55,
quickFade: true,
 playcount: 0
},





{
    name: "Rumours",
    artist: "Lizzo",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Lizzo - Rumours.mp3",
      trackDuration: "5:53",
isLoud: true,          
  loudnessValue: 0.80, 
timeCategory: "evening-late"
 
},



{


     name: " Pearls",
    artist: "Jesse Ware ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Jesse Ware - Pearls.mp3",
 timeCategory: "evening-late"
},

 {

    name: "  Danger ",
    artist: "Olivia Dean ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Olivia Dean - Danger.mp3",
  timeCategory: "evening-late"
},

{
     name: "Favourite Type",
    artist: "Roxen ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic08.netlify.app/Roxen - Favourite Type.mp3",
 timeCategory: "evening-late"
},

{
    name: "Vibe",
    artist: "J Brown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/J Brown - Vibe.mp3",
   timeCategory: "evening-late"
},

{
    name: "  We Got A Love Thang",
    artist: "CC Peniston ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/CC Peniston - We Got A Love Thang.mp3",
      timeCategory: "evening-late",
quickFade: true,
  volumeBoost: 0.35,
  playcount: 0
},






{
    name: "Game Of Life (12inch)",
    artist: "Sugar Rainbow",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Sugar rainbow - Game of life.mp3",
    timeCategory: "evening-late"

},
{
     name: " Chained To The Rhythm  ",
    artist: "Katy Perry ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic09.netlify.app/Katy Perry - Chained To The Rhythm.mp3",
    timeCategory: " evening-late",
     quickFade: true,
    volumeBoost: 0.60,
    playcount: 0
},
{
     name: " Free Yourself",
    artist: "Jessie Ware  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Jessie Ware - Free Yourself.mp3",
        timeCategory: "evening-late"
},



{
    name: "Allright",
    artist: "Jamiroquaii",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Jamiroquaii - Allright.mp3",
   timeCategory: "evening-late",
     quickFade: true,
    volumeBoost: 0.75,
    playcount: 0

},


{
    name: "Suburbia",
    artist: "Tove Lo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Tove Lo - Suburbia.mp3",
       timeCategory: "evening-late"
},

{
     name: "  Gangsta's Paradise",
    artist: "Tink  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Tink - Gangsta's Paradise.mp3",
      timeCategory: "evening-late"
},

{
     name: "Love Is The Message",
    artist: "MFSB ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/MFSB - Love Is The Message (12inch).mp3",
       timeCategory: "evening-late",
   eq: { bass: +1, mid: 2, treble: 0 } ,
playcount: 0,
volumeBoost: 0.75,
  quickFade: true
},
  

{
     name: " All Night Long",
    artist: "Mary Jane Girls ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Mary Jane Girls - All Night Long.mp3",
        timeCategory: "evening-late",
playcount: 0,        // start at zero
    volumeBoost: 0.8     // target volume

},


{
     name: "Chinese Whispers",
    artist: "Full Flava ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Full Flava - Chinese Whispers.mp3",
    timeCategory: "evening-late",
    playcount: 0,
    volumeBoost: 0.30
},

{
     name: "Welcome! evening program",
    artist: "Listen Live Sunny Jazzradio☀️",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
       timeCategory: "evening-late"

},

  
{
    name: " The Sound Of Music ",
    artist: "Dayton  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies10.netlify.app/Dayton - The Sound Of Music.mp3",
  timeCategory: "evening-late",
   eq: { bass: 0, mid: 1, treble: +1 } ,
  volumeBoost: 0.35,
quickFade: true

},


{
     name: "Soul Cha Cha",
    artist: "Van McCoy ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Van McCoy - Soul Cha Cha.mp3",
        timeCategory: "evening-late",
     eq: { bass: 2, mid: 3, treble: +1 } ,
volumeBoost: 0.55


},


  {
     name: "Liberian Girl",
    artist: "Michael Jackson ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Michael jackson -Liberian Girl.mp3",
       timeCategory: "evening-late"

},





  {
     name: " Stranger In Moscow",
    artist: "Michael Jackson ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Michael Jackson - stranger in moscow.mp3",
       timeCategory: "evening-late",
playcount: 0,
volumeBoost: 0.10
},




{
    name: "  Keep The Fire Burning",
    artist: " Gwen McCrae",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Gwen McCrae - Keep the fire Burning.mp3",
    timeCategory: "evening-late"

},




{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
   timeCategory: "evening-late"

  },



{
     name: " Manhattan Skyline  ",
    artist: "Orchestra 88",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Manhattan Skyline.mp3",
       timeCategory: "evening-late",
playcount: 0,
volumeBoost: 0.40

}, 










{
     name: "I Can Make You Feel Good ",
    artist: "Shalamar ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Shalamar - I can make you feel good.mp3",
        timeCategory: "evening-late",
playcount: 0,
volumeBoost: 0.20

},





{
    name: " Goldeneye",
    artist: " Tina Turner ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Tina Turner - Goldeneye.mp3",
    timeCategory: "evening-late",
    eq: { bass: 2, mid: 2, treble: +1 } ,
volumeBoost: 0.70
},




{
    name: "  Cry for You ",
    artist: " September  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/September - Cry for You.mp3",
    timeCategory: "evening-late",
  eq: { bass: 1, mid: 0, treble: 1 } ,
    volumeBoost: 0.15
},




{
    name: " Cold Heart",
    artist: "Elton John & Dua Lipa",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Elton & Dua - Cold Heart.mp3",
 timeCategory: "evening-late",
playcount: 0


},















{
    name: " Juicy Fruit",
    artist: "Mtume ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Mtume - Juicy Fruit.mp3",
  timeCategory: "evening-late",
playcount: 0,
volumeBoost: 0.60
},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame.mp3",
  


  timeCategory: "evening-late"


},


{
     name: "Jazz Carnaval",
    artist: "Azymuth",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnydanceoldies08.netlify.app/Azymuth - Jazz carnaval.mp3",
 timeCategory: "evening-late"

},









{
    name: " Risin To The Top",
    artist: "Kenny Burke  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Kenny Burke - Risin to the Top.mp3",
 timeCategory: "evening-late",
playcount: 0,
  eq: { bass: 1, mid: 2, treble: +1 } ,
volumeBoost: 0.60

},




{
     name: " Love Hangover",
    artist: "Diana Ross ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Diana Ross - Love Hangover.mp3",
  timeCategory: "evening-late",
playcount: 0,
volumeBoost: 0.60

},


{
    name: "Spacer (1979)",
    artist: "Sheila B Devotion",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Sheila B Devotion - Spacer.mp3",
 timeCategory: "evening-late",
playcount: 0,
volumeBoost: 0.50
},



{
    name: "Best Of",
    artist: "Sunny Jazz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  timeCategory: "evening-late"


},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
timeCategory: "evening-late"

},




  



{
    name: " Win Or Lose",
    artist: "Earth Wind & Fire ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/E W F - Win or lose.mp3",
       timeCategory: "evening-late",
playcount: 0,
volumeBoost: 0.60

}, 







{
    name: " Corner Of The Earth",
    artist: "Jamiroquai ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Jamiroquai - Corner of the Earth.mp3",
      timeCategory: "evening-late"


}, 












{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
       timeCategory: "evening-late"

}, 








 {
    name: "Silent Way ",
    artist: " Miles Davis ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
      timeCategory: "evening-late"

}, 





{
     name: "Let's Start To Dance (12inch)",
    artist: "Hamilton Bohannon ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies09.netlify.app/Hamilton Bohannon - Let's Start To Dance 12 inch.mp3",
  eq: { bass: 3, mid: 3, treble: +1 } ,
volumeBoost: 0.75,
timeCategory: "evening-late"

},





{
     name: "  Here Comes That Sound ",
    artist: "Lovedeluxe ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies09.netlify.app/Lovedeluxe - Here Comes That Sound.mp3",
  timeCategory: "evening-late",
volumeBoost: 0.70
},












{
     name: "  Sunny Dance",
    artist: "80's Mix  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/80 mix 03.mp3",
   timeCategory: "evening-late"

},


{
     name: " From East to West ",
    artist: "Voyage ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Voyage - From East to West.mp3",
    eq: { bass: 1, mid: 2, treble: 0 } ,
volumeBoost: 0.55,
timeCategory: "evening-late"


},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
   timeCategory: "evening-late"

  },





{

    name: "Am I Blue",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 08.mp3",
   timeCategory: "evening-late"


},



{
    name: " The Nightfly",
    artist: "Donald Fagen ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnydanceoldies08.netlify.app/Donald Fagen - The Nightfly.mp3",
        timeCategory: "evening-late",
playcount: 0,
volumeBoost: 0.70

},





{
    name: " GYC",
    artist: "Donald Fagen ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnydanceoldies08.netlify.app/Donald Fagen - GYC .mp3",
        timeCategory: "evening-late",
volumeBoost: 0.90,
   playcount: 0 
},



{
    name: " New Frontier",
    artist: "Donald Fagen ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnydanceoldies08.netlify.app/Donald Fagen - Nightfly2.mp3",
        timeCategory: "evening-late",
playcount: 0,
volumeBoost: 0.70

},


{
    name: " Ruby Baby",
    artist: "Donald Fagen ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnydanceoldies08.netlify.app/Donald Fagen -  Ruby Baby.mp3",
        timeCategory: "evening-late",
playcount: 0,
volumeBoost: 0.70
},








{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female Dj3.mp3",
     timeCategory: "evening-late"


},



{
    name: " Laxime",
    artist: "Donald Fagen ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnydanceoldies08.netlify.app/Donald Fagen - Maxime.mp3",
       timeCategory: "evening-late",
playcount: 0,
volumeBoost: 0.70

},







{
     name: "EWF",
    artist: "Let Us Groove",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies09.netlify.app/EWF Let's us groove.mp3",
 timeCategory: "evening-late",
playcount: 0,
volumeBoost: 0.70,
 eq: { bass:0, mid: 1, treble: 0 } ,
},






{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio☀️ ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
       timeCategory: "evening-late"


}, 
















];


// --- Purify ritual --- trackList = trackList.map(purifyTrack);
console.log("Purified trackList:", trackList);


// ── Shuffle immediately at startup ──
trackList = fisherYatesShuffle(trackList);
console.log("✨ Shuffled playlist:", trackList.map(t => t.name));






// 3. Logic
function loadPlaylistForCategory(category) {
  const playlist = shuffle(trackList.filter(track => track.timeCategory === category));
  console.log("▶ Now playing category:", category, "Playlist:", playlist.map(t => t.name));
  // Here you’d actually start playback
}

// 4. Runtime
let currentCategory = null;
setInterval(() => {
  const category = getCurrentTimeCategory();
  if (category !== currentCategory) {
    currentCategory = category;
    loadPlaylistForCategory(category);
  }
}, 60 * 1000);











// Get the current time category
const currentTimeCategory = getCurrentTimeCategory();

function filterMp3ByTimeCategory(mp3Files, timeCategory) {
    return mp3Files.filter(mp3 => mp3.timeCategory === timeCategory);
}






// Filter tracks based on the current category
const scheduledMp3Files = filterMp3ByTimeCategory(trackList, currentTimeCategory);

initializePlayCounts(scheduledMp3Files);


// Shuffle the selected tracks
const shuffledTracks = shuffle(scheduledMp3Files);

// Load and play the first track from the shuffled list

// Sort by playcount: least-played first
scheduledMp3Files.sort((a, b) => a.playcount - b.playcount);

if (shuffledTracks.length > 0) {
   


const chosen = shuffledTracks[0];
const idx = scheduledMp3Files.indexOf(chosen);
loadTrack(idx);
 // Load the first track in random order

console.log("Shuffled Track Order:", shuffledTracks.map(track => track.name));




}



trackList.forEach((track, i) => {
  if (!track.name) {
    console.warn("Missing name at index", i, track);
  }
});
















console.table(scheduledMp3Files);
// Check that every row shows a numeric playcount column.







function shuffle(array) {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m]; array[m] = array[i]; array[i] = t;
  }
  return array;
}


// Shuffle track list **on page load**

console.log("Shuffled Track List:", trackList.map(track => track.name)); // Debugging



   // ── Sum all playcounts ──
    function computeTotalPlays() {
      return scheduledMp3Files.reduce((sum, t) => sum + (typeof t.playcount === "number" ? t.playcount : 0), 0);
    }





// --- 1) Helpers ---
function initializePlayCounts(tracks) {
  tracks.forEach(t => {
    if (typeof t.playcount !== "number") t.playcount = 0;
  });
}

function sortTracksByPlayCount(scheduledMp3Files) {
  return [...scheduledMp3Files].sort((a, b) => b.playcount - a.playcount);
}

function getRarelyPlayedTracks(tracks, maxPlays = 3) {
  return tracks.filter(t => t.playcount <= maxPlays);
}



// --- 2) Startup ---


function playRareTrack() {
  let pool = getRarelyPlayedTracks(scheduledMp3Files, 3);

  if (!pool.length) {
    console.warn("Resetting all play counts.");
    initializePlayCounts(scheduledMp3Files);
    pool = [...scheduledMp3Files];
  }

  const choice = pool[Math.floor(Math.random() * pool.length)];
  const idx    = scheduledMp3Files.indexOf(choice);

  if (idx !== -1) {
    loadTrack(idx);
  } else {
    console.error("Track not found in scheduled list:", choice);
  }
}



// 🎚️ Return a base volume depending on the time of day
function getTimeBasedVolume() {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 12) {
    return 0.7; // morning
  } else if (hour >= 12 && hour < 18) {
    return 0.8; // afternoon
  } else if (hour >= 18 && hour < 22) {
    return 0.6; // evening
  } else {
    return 0.5; // night
  }
}














// 🌊 Fade OUT the old track
function quickFadeOut(audio, duration = 1000, callback) {
  if (!audio) return;
  const steps = 20;
  const stepTime = duration / steps;
  const initialVolume = audio.volume;
  let currentStep = 0;

  const fadeInterval = setInterval(() => {
    currentStep++;
    audio.volume = Math.max(0, initialVolume * (1 - currentStep / steps));

    if (currentStep >= steps) {
      clearInterval(fadeInterval);
      audio.pause();
      audio.volume = initialVolume; // reset for next use
      if (typeof callback === "function") callback();
    }
  }, stepTime);
}

// 🌅 Fade IN the new track
function fadeIn(audio, targetVolume = 1, duration = 1000) {
  const steps = 20;
  const stepTime = duration / steps;
  let currentStep = 0;

  audio.volume = 0;

  const fadeInterval = setInterval(() => {
    currentStep++;
    audio.volume = Math.min(targetVolume * (currentStep / steps), targetVolume);

    if (currentStep >= steps) {
      clearInterval(fadeInterval);
    }
  }, stepTime);
}

function cleanURL(url) {
  return url.replace(/ /g, "%20");
}



// 🎷 MAIN LOADTRACK — CLEAN VERSION
function loadTrack(index) {
  const track = scheduledMp3Files[index];

  if (!track) {
    console.error("❌ No track found at index", index);
    return;
  }

  const previousTrack = curr_track;

  // Create new audio element
  curr_track = new Audio(cleanURL(track.path));
  currentTrackIndex = index;

  // 🔊 Volume logic (time-based + boost)
  const base = Number(getTimeBasedVolume());
  const boost = Number(track.volumeBoost);
  const boostSafe = Number.isFinite(boost) ? boost : 0;

  let finalVolume = Math.max(0, Math.min(1, base + boostSafe));

  // Loudness tagging
  const loudThreshold = 0.9;
  track.loudnessValue = finalVolume;
  track.isLoud = finalVolume >= loudThreshold;
  track.wasBoosted = boostSafe > 0;

  if (track.isLoud) {
    console.warn(`🚨 Loud track: ${track.name} | Boosted: ${track.wasBoosted} | Volume: ${finalVolume}`);
  }

  const shouldFade = track.quickFade === true;

  // 🌊 Fade previous track if needed
  if (previousTrack && !previousTrack.paused) {
    if (shouldFade) {
      quickFadeOut(previousTrack, 1000, () => startNewTrack(index, finalVolume));
    } else {
      previousTrack.pause();
      startNewTrack(index, finalVolume);
    }
  } else {
    startNewTrack(index, finalVolume);
  }
}



// 🎷 START NEW TRACK — CLEAN VERSION
function startNewTrack(index, finalVolume) {
  const track = scheduledMp3Files[index];

  // Recreate audio element (important for clean state)
  curr_track = new Audio(cleanURL(track.path));

  // 🎧 Playcount ritual
  curr_track.addEventListener("play", () => {
    track.playcount = Number(track.playcount) || 0;
    track.playcount++;

    // 🌅 Fade-in
    fadeIn(curr_track, finalVolume, 1000);
  });

  console.log("🎷 Loading track:", track.path);

  // 🎨 UI updates
  track_name.textContent = track.name;
  track_artist.textContent = track.artist;
  now_playing.innerHTML =
    `PLAYING <span class="track-number">${index + 1}</span> OF ${scheduledMp3Files.length}`;

  // ⏱️ Seek timer
  clearInterval(updateTimer);
  updateTimer = setInterval(seekUpdate, 1000);

  // 🔁 Auto-next
  curr_track.addEventListener("ended", nextTrack);

  // 🎧 Load audio
  curr_track.load();

  // ✨ Playlist highlight
  curr_track.addEventListener("canplay", () => {
    const allTracks = document.querySelectorAll("ul li");
    if (!allTracks.length) return;

    allTracks.forEach(li => li.classList.remove("blinking"));
    if (allTracks[index]) allTracks[index].classList.add("blinking");
  });

  // 🔊 Dynamic volume balancing
  curr_track.addEventListener("canplaythrough", () => {
    adjustVolumeDynamically(curr_track, track);
  });

  // 🎛️ Connect to your new audio chain (EQ, boost, loudness)
  if (typeof connectToAudioChain === "function") {
    connectToAudioChain(curr_track, track);
  }
}




// 🎵 Reset player values
function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}


function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
playpause_btn.innerHTML = '<img id= "med"  src="images/pause.png">';

}









 
function playTrack() {
    if (!curr_track) {
        console.error("Error: `curr_track` is undefined!");
        return;
    }

    curr_track.play();
    isPlaying = true;

  // Replace the play icon with the pause icon
  playpause_btn.innerHTML = '<img id="media" src="images/pause66.gif">';

 















function fadeOutTrack(audioElement, duration = 2000) {
    if (!audioElement) {
        console.error("Error: `audioElement` is undefined!");
        return;
    }

    let fadeInterval = 50; // Adjust the speed of fade steps
    let fadeStep = audioElement.volume / (duration / fadeInterval); // Volume decrement per step

    let fadeEffect = setInterval(() => {
        if (audioElement.volume > 0) {
            audioElement.volume = Math.max(0, audioElement.volume - fadeStep);
        } else {
            clearInterval(fadeEffect);
            audioElement.pause(); // Stop playback after fade-out completes
        }
    }, fadeInterval);
}

// ✅ Apply fade-out when the track is about to end (e.g., last 1 second)
curr_track.addEventListener("timeupdate", () => {
    if (curr_track.duration - curr_track.currentTime <= 1) {
        fadeOutTrack(curr_track);
    }
});













 







 
 // Highlight the current track in the playlist
  let allTracks = document.querySelectorAll('ul li'); // Get all <li> elements
  allTracks.forEach(track => track.classList.remove('blinking')); // Remove "blinking" from all

  // Add "blinking" class to the current track
  if (allTracks[track_index]) { // Ensure the current track exists in the filtered list
    allTracks[track_index].classList.add('blinking');
  } else {
    console.error("Filtered track not found in the DOM!");
  }
console.log("Calling adjustVolumeDynamically:", curr_track);


adjustVolumeDynamically(curr_track); 
applyBlinkingEffect();
}



















function emphasizeKeywords(text) {
  return text.replace(/(classic|maxi|12inch|\(new\)|\b\d{4}\b)/gi, function(match) {
    const lower = match.toLowerCase();

 if (lower === '(new)') {
  return `
    <span class="new-tag">
      ( <span class="blinking-star">🌟</span> 
        <span class="new-text">NEW</span> 
      <span class="blinking-star">🌟</span> )
    </span>
  `;
}

    if (lower === '12inch') {
      return '<span class="vinyl-icon">💿 12"</span>';
    }
    if (lower === 'maxi') {
      return '<span class="maxi-icon">📀 Maxi</span>';
    }

    return '<em>' + match + '</em>';
  });
}



// ===== Playlist rendering =====
const tracksToDisplayInitially = 10;
const additionalTracksPerClick = 5;
let currentDisplayLimit = tracksToDisplayInitially;

function displaytrackList(limit = currentDisplayLimit) {
  const trackListElement = document.getElementById('track-list');
  trackListElement.innerHTML = ''; // Clear before repopulating

  const limitedTracks = scheduledMp3Files.slice(0, limit);

  limitedTracks.forEach((track) => {
    const lowerCaseName = track.name.toLowerCase();
    const lowerCaseArtist = track.artist.toLowerCase();

    // Skip filtered tracks
    if (lowerCaseName.includes('yyy') || lowerCaseArtist.includes('zzzz')) {
      return;
    }

    const li = document.createElement('li');

    // Golden "by"
    const coloredBy = ' <span class="by-word">by</span> ';

    // Keyword emphasis
    const emphasizedName = emphasizeKeywords(track.name);
    const emphasizedArtist = emphasizeKeywords(track.artist);

    // Duration (your new field!)
    const duration = track.trackDuration || "";

    li.innerHTML = `
      <strong>${emphasizedName}</strong>${coloredBy}${emphasizedArtist}
      <span class="track-duration" style="float:right; opacity:0.7; font-size:0.9em;">
        ${duration}
      </span>
    `;

    trackListElement.appendChild(li);
  });

  // Show/hide "Show More" button
  const showMoreButton = document.getElementById('show-more-button');
  showMoreButton.style.display =
    limit >= scheduledMp3Files.length ? 'none' : 'block';
}



function applyBlinkingEffect() {
  let allTracks = document.querySelectorAll('ul li'); // Get all <li> elements
  allTracks.forEach(track => track.classList.remove('blinking')); // Remove "blinking" from all

  // Add "blinking" class to the current track
  if (allTracks[track_index]) { // Ensure the current track exists in the filtered list
    allTracks[track_index].classList.add('blinking');
  } else {
    console.error("Filtered track not found in the DOM!");
  }
 
}






// Event listener for "Show More" button
document.getElementById('show-more-button').addEventListener('click', () => {
  currentDisplayLimit += additionalTracksPerClick; // Increase the limit
  displaytrackList(); // Refresh the track list

// Highlight the current track in the playlist
  applyBlinkingEffect(); // Ensure blinking effect is reapplied after updating the list









});

// Initial display
displaytrackList(); // Show initial tracks on page load

 





  
let fadeInitiated = false;

curr_track.addEventListener("timeupdate", () => {
    // Only fade tracks longer than 10s, and when near their end
    if (
        !fadeInitiated &&
        curr_track.duration > 10 &&
        curr_track.duration - curr_track.currentTime <= 4
    ) {
        fadeInitiated = true;
        fadeOutTrack(curr_track);
    }
});










function nextTrack() {
  track_index = (track_index + 1) % scheduledMp3Files.length;
  loadTrack(track_index);
  playTrack();
}


	

function seekTo() {
  seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

loadTrack(track_index);

$(document).ready(function(){
  $("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
});



$('.btn').click(function () {
  $(this).toggleClass("click");
});








// Keywords/folders you want to treat as jingles or non-music
const jingleFolders = [
  "jingle",
  "sunny ship",
  "voiceover",
  "pirate background",
  "reklame",
  "discjockeys",
  "effects",
  "games",
  "audio"
];

const getName = t => (t?.name || t?.title || t?.filename || String(t)).trim();
const getPath = t => (t?.path || "").trim().toLowerCase();

const totalTracks = trackList.length;

// Jingles: check if name or path contains any keyword
const jingles = trackList.filter(t => {
  const name = getName(t).toLowerCase();
  const path = getPath(t);
  return jingleFolders.some(keyword =>
    name.includes(keyword) || path.includes(keyword)
  );
});

// Deduplicate helper with logging
function dedupeTracks(tracks) {
  const seen = new Set();
  const duplicates = [];

  const unique = tracks.filter(t => {
    const key = `${getName(t)}-${getPath(t)}`;
    if (seen.has(key)) {
      duplicates.push(getName(t));
      return false;
    }
    seen.add(key);
    return true;
  });

  // Log duplicates
  if (duplicates.length > 0) {
    console.log("Duplicates removed:", duplicates);
  } else {
    console.log("No duplicates found.");
  }

  return unique;
}

// Real tracks are everything else, deduped
const realTracks = dedupeTracks(
  trackList.filter(t => !jingles.includes(t))
);

console.log("Total tracks:", totalTracks);
console.log("Number of jingles/non-music:", jingles.length);
console.log("Number of real tracks (deduped):", realTracks.length);























/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction1() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}















