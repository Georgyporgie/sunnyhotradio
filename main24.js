// Select all the elements in the HTML page and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

document.getElementById("myImage").addEventListener("touchstart", displayMessage);

function displayMessage() {
  document.getElementById("message").innerHTML = "";
}





function getCurrentTimeCategory() {
  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.getDay();

  let category;

  switch (currentDay) {
    case 0: // Sunday
      if (currentHour >= 8 && currentHour < 12) {
        category = "f afternoon";
      } else if (currentHour >= 12 && currentHour < 17) {
        category = "f evening";
      } else if (currentHour >= 17 && currentHour < 21) {
        category = "f evening-late";
      } else if ((currentHour >= 21 && currentHour <= 23) || (currentHour >= 0 && currentHour < 3)) {
        category = "f evening-late";    } else {
        category = " jingle-time";
      }
      break;
      
    case 1: // Monday
      if (currentHour >= 8 && currentHour < 12) {
        category = "morning";
      } else if (currentHour >= 12 && currentHour < 17) {
        category = "evening";
      } else if (currentHour >= 17 && currentHour < 21) {
        category = "afternoon";
      } else if ((currentHour >= 21 && currentHour <= 23) || (currentHour >= 0 && currentHour < 3)) {
        category = "evening-late";
      } else {
        category = "jingle-time";
      }
      break;

    case 2: // Tuesday
      if (currentHour >= 8 && currentHour < 12) {
        category = "morning";
      } else if (currentHour >= 12 && currentHour < 17) {
        category = "evening";
      } else if (currentHour >= 17 && currentHour < 21) {
        category = "afternoon";
      } else if ((currentHour >= 21 && currentHour <= 23) || (currentHour >= 0 && currentHour < 3)) {
        category = "evening-late";
      } else {
        category = "jingle-time";
      }
      break;

    case 3: // Wednesday
      if (currentHour >= 8 && currentHour < 12) {
        category = "morning";
      } else if (currentHour >= 12 && currentHour < 17) {
        category = "afternoon";
      } else if (currentHour >= 17 && currentHour < 21) {
        category = "evening-late";
      } else if ((currentHour >= 21 && currentHour <= 23) || (currentHour >= 0 && currentHour < 3)) {
        category = "evening";
      } else {
        category = "jingle-time";
      }
      break;

    case 4: // Thursday
      if (currentHour >= 8 && currentHour < 12) {
        category = "morning";
      } else if (currentHour >= 12 && currentHour < 17) {
        category = "evening";
      } else if (currentHour >= 17 && currentHour < 21) {
        category = "evening-late";
      } else if ((currentHour >= 21 && currentHour <= 23) || (currentHour >= 0 && currentHour < 3)) {
        category = "afternoon";
      } else {
        category = "jingle-time";
      }
      break;

    case 5: // Friday
      if (currentHour >= 8 && currentHour < 12) {
        category = "evening";
      } else if (currentHour >= 12 && currentHour < 17) {
        category = "morning";
      } else if (currentHour >= 17 && currentHour < 21) {
        category = "afternoon";
      } else if ((currentHour >= 21 && currentHour <= 23) || (currentHour >= 0 && currentHour < 3)) {
        category = "evening-late";
      } else {
        category = "jingle-time";
      }
      break;

    case 6: // Saturday
      if (currentHour >= 8 && currentHour < 12) {
        category = "f morning";
      } else if (currentHour >= 12 && currentHour < 17) {
        category = "f afternoon";
      } else if (currentHour >= 17 && currentHour < 21) {
        category = "f evening-late";
      } else if ((currentHour >= 21 && currentHour <= 23) || (currentHour >= 0 && currentHour < 3)) {
        category = "f evening";
      } else {
        category = "jingle-time";
      }
      break;

    default:
      category = "unknown"; // Fallback case
  }

  return category;




  // Define categories for each day and shuffle them
  const categoriesPerDay = {
    0: shuffle(["f evening","f afternoon","f evening-late","f evening"], 0), // Sunday
    1: shuffle(["morning","afternoon","evening","evening-late"], 1), // Monday
    2: shuffle(["morning","afternoon","evening","evening-late"], 2), // Tuesday
    3: shuffle(["morning","afternoon","evening-late","evening"], 3), // Wednesday
    4: shuffle(["morning","evening","evening-late","afternoon"], 4), // Thursday
    5: shuffle([" evening","afternoon","afternoon","evening-late"], 5), // Friday
    6: shuffle(["f evening","f afternoon","f evening-late","f evening"], 6)  // Saturday
  };

  const shuffledCategories = categoriesPerDay[currentDay];

  // Assign shuffled categories based on time slots
  if (currentHour >= 8 && currentHour < 12) {
    category = shuffledCategories[0];
  } else if (currentHour >= 12 && currentHour < 17) {
    category = shuffledCategories[1];
  } else if (currentHour >= 17 && currentHour < 21) {
    category = shuffledCategories[2];
  } else if ((currentHour >= 21 && currentHour <= 23) || (currentHour >= 0 && currentHour < 3)) {
    category = shuffledCategories[3];
  } else {
    category = shuffledCategories[4]; // Early morning
  }




}


















// Shuffle function using Fisher-Yates algorithm
function shuffle(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}























// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define your track list with time categories
let trackList = [
  



  











































































































































































































































































































{


     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  timeCategory: "morning"
},





















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  timeCategory: "morning"
},



 

































































































{
    name: "Pacific State",
    artist: "808 State  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/808 state - Pacific State.mp3",
      timeCategory: "morning"
 },










 







{
    name: "West End Girls ",
    artist: "Pet Shop Boys ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Pet Shop Boys - West End Girls (10'' Mix).mp3",
      timeCategory: "morning"
 },




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
       timeCategory: "morning"
 },





{
    name: "Let's Go Together (12inch)",
    artist: "Change ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Change - Let's go together.mp3",
       timeCategory: "morning"
 },








{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
       timeCategory: "morning"
 },,





















{
     name: "   Number One ",
    artist: "Princess  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Princess - Say I'm Your Number One.mp3",
     timeCategory: "morning"
 },




{
    name: "Taste Of You",
    artist: "Rezz",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Rezz - Taste of you.mp3",
      timeCategory: "morning"
},






{
     name: " Gone",
    artist: "Noa Kirel  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Noa Korel - Gone.mp3",
      timeCategory: "morning"
},








 
{
    name: " Da Ya Think I'm Sexy ",
    artist: "Rod Stewart  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Rod Stewarrt - Da Ya Think I'm Sexy.mp3",
        timeCategory: "morning"
},

















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
        timeCategory: "morning"
},





{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
       timeCategory: "morning"
},



{
    name: "Dolce Vita (12inch)",
    artist: "Ryan Paris",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Ryan Paris - Dolce Vita.mp3",
  
      timeCategory: "morning"
},










{
    name: "Q & A",
    artist: "Nona  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Nona - Q & A.mp3",
      timeCategory: "morning"
},







{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
       timeCategory: "morning"
},






























{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
       timeCategory: "morning"
},



 

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
      timeCategory: "morning"
},














{
    name: " Black Sun",
    artist: "The Far Out Orchestra ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/The far out monster orchestra - Black sun.mp3",
  

      timeCategory: "morning"
},


{
    name: " Won't Forget You",
    artist: "Shouse",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Shouse - won't forget you.mp3",
        timeCategory: "morning"
},








{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/let's go back.mp3",
        timeCategory: "morning"
},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
       timeCategory: "morning"
},




{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
      timeCategory: "morning"
},













{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
      timeCategory: "morning"
},







 

{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
      timeCategory: "morning"
},

 
















{
    name: "Hours and Hours",
    artist: "Muni Long ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Muni Long - Hours and Hours.mp3",
       timeCategory: "morning"
},





















{
    name: "Spinning Around",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Kylie Minogue - Spinning Around.mp3",
      timeCategory: "morning"
},

 

 {
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
      timeCategory: "morning"
},

{
    name: "Make It Right",
    artist: "Donna Odain  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Donna Odain - Make it right.mp3",
        timeCategory: "morning"
},

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny dance jingle.mp3",
      timeCategory: "morning"
},




{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
        timeCategory: "morning"
},






{
    name: "Stop To Love",
    artist: "Luther Vandross ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Luther Vandross - Stop To Love.mp3",
      timeCategory: "morning"
},
















{
    name: " Love holds No limit",
    artist: "Full Flava  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Full Flava - Love holds no limit.mp3",
      timeCategory: "morning"
},





















{
    name: " Don't Stop (1980)",
    artist: "Yarbrough & Peoples  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Yarbrough & Peoples - Don't Stop The Music.mp3",
       timeCategory: "morning"
},


 
































{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
      timeCategory: "morning"
},



{
    name: "Break My Heart",
    artist: "Dua Lipa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Dua Lipa - Break My Heart.mp3",
      timeCategory: "morning"
},


{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
       timeCategory: "morning"
},





{
    name: "Try",
    artist: "Dua Lipa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Dua Lipa - Try.mp3",
      timeCategory: "morning"
},


{
    
    name: " I Wanna Give You Devotion",
    artist: "Nomad ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Nomad - I Wanna Give You Devotion.mp3",
      timeCategory: "morning"
},



{
    name: "  Flashdance",
    artist: "Irene Cara   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Irene Cara - Flashdance.mp3",
      timeCategory: "morning"
},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
      timeCategory: "morning"
},







  

{
    name: " Betcha Would'nt Hurt Me",
    artist: "Donna Gardier  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Donna Gardier - Betcha would 'nt hurt me.mp3",
      timeCategory: "morning"
},

{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
      timeCategory: "morning"
},






{
     name: "Only You",
    artist: "Alesso & Sentinel ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Alesso & Sentinel - Only You.mp3",
        timeCategory: "morning"
},



































{
    name: "Sunny (Ruud Remix)",
    artist: "Boney M  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Boney M - Sunny.mp3",
          timeCategory: "morning"
},








{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
          timeCategory: "morning"
},








{
    name: "Loving You",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Loving You - Michael Jackson.mp3",
  


        timeCategory: "morning"
},







{
    name: " Bounce Skate Roll (12inch) ",
    artist: "Vaughan  Mason & Crew",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Vaughan  Mason & Crew - Bounce skate roll.mp3",
        timeCategory: "morning"
},


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
        timeCategory: "morning"
},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
         timeCategory: "morning"
},



















{
    name: "On The Beat",
    artist: "BB & Q Band ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/BB Q Band - On the Beat.mp3",
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
    name: "Sacrifice",
    artist: "Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Bebe Rexha - Sacrifice.mp3",
      timeCategory: "morning"


},




{
    name: "  Playgirl (1979)  ",
    artist: "La Velle ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/La Velle - Playgirl.mp3",
    timeCategory: "morning"


},











{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
      timeCategory: "morning"
},






{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
       timeCategory: "morning"
},








{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
      timeCategory: "morning"
},






{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
       timeCategory: "morning"
},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
      timeCategory: "morning"
},

 




















{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
      timeCategory: "morning"
},















{
    name: " It's Like That (1997)",
    artist: "RUN DMC ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/RUN DMC - It's Like That.mp3",
     timeCategory: "morning"


},


{
    name: "How Long",
    artist: "Tove Lo",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Tove Lo - How Long.mp3",
      timeCategory: "morning"
},

{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet4.mp3",
      timeCategory: "morning"
},











{
    name: " Crazy In Love (2003)",
    artist: "Beyonce",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Beyonce - Crazy In Love.mp3",
  


     timeCategory: "morning"


},






{
    name: "  Your Love",
    artist: "Lime ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Lime - Your Love.mp3",
       timeCategory: "morning"


},




{
    name: "Return Of The Mack (12inch) ",
    artist: "Mark Morrison",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Mark Morrison - Return of the mack.mp3",
       timeCategory: "morning"


},













{
    name: " Sex Lies",
    artist: "Latto ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Latto - Sex Lies.mp3",
       timeCategory: "morning"


},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/DJ S.mp3",
      timeCategory: "morning"


},











{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
      timeCategory: "morning"


},


{
    name: "  Beat Dis (1987) ",
    artist: "Bomb The Base  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Bomb The Base - Beat Dis.mp3",
     timeCategory: "morning"


},



{
    name: "  We Got A Love Thang",
    artist: "CC Peniston ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/CC Peniston - We Got A Love Thang.mp3",
      timeCategory: "morning"


},





{
    name: "Autonomy",
    artist: "Bob Harsher ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Bob Harsher - Autonomy.mp3",
       timeCategory: "morning"


},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
       timeCategory: "morning"


},








 









{
    name: "Doing It",
    artist: "Rita Ora",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Rita Ora - Doing It.mp3",
  


     timeCategory: "morning"


},


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle11.mp3",
     timeCategory: "morning"


},










 
{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle22.mp3",
       timeCategory: "morning"


},



 {
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
       timeCategory: "morning"


},


























{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
      timeCategory: "morning"


},





{
    name: "Pump Up The Jam",
    artist: "Technotronic ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Technotronic - Pump Up The Jam.mp3",
      timeCategory: "morning"


},






















{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
       timeCategory: "morning"


},







 





{
    name: "In The Dark",
    artist: "Purple Disco Machine ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Purple disco machine - in the Dark.mp3",
       timeCategory: "morning"


},







{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
     timeCategory: "morning"


},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj6.mp3",
     timeCategory: "morning"


},

{
    name: "Drop It Like It's Hot",
    artist: "Snoop Dogg ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Snoop Dogg - Drop It Like It's Hot (Feat. Pharrell).mp3",
     timeCategory: "morning"


},






 



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
      timeCategory: "morning"


},






 
 

{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you222.mp3",
       timeCategory: "morning"


},



{
     name: "Tell Me What We're Gonna Do",
    artist: "Joss Stone",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Tell Me What We're Gonna Do Now.mp3",
       timeCategory: "morning"


},



{
    name: "Welcome!",
    artist: "Sunny Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
        timeCategory: "morning"


},









{
    name: "  Whatever",
    artist: "Kygo & Ava Max ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Kygo & Ava Max - Whatever.mp3",
       timeCategory: "morning"


},

{
    name: " You Ain't The Only One",
    artist: "Mary J. Blige  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Mary J. Blige - You Ain't The Only One.mp3",
      timeCategory: "morning"


},

{
     name: "   Natural Thing  ",
    artist: "Innocence ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Innocence - Natural Thing.mp3",
      timeCategory: "morning"


},


{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
      timeCategory: "morning"


},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
     timeCategory: "morning"


},


{
    name: "Promised Land (12inch)",
    artist: "Joe Smooth",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Joe Smooth - Promised Land.mp3",
       timeCategory: "morning"


},







{
    name: "Summer Madness (12inch)",
    artist: "Kool And The Gang",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Kool and the gang - Summer Madness.mp3",
      timeCategory: "morning"


},






{
    name: " Just An Illusion (12inch)",
    artist: "Imagination ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Imagination - Just an Illusion 1982.mp3",
  
      timeCategory: "morning"

},

{
    name: "Baby",
    artist: "Charli XCX",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Charli XCX - Baby.mp3",
        timeCategory: "morning"


},

{
    name: " Moth To A Flame",
    artist: "The Weeknd",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/The weeknd - Moth to a flame2.mp3",
        timeCategory: "morning"



},



















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
    timeCategory: "morning"

},







{
    name: "  All Nighter",
    artist: "Tiesto  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Tiesto - All Nighter.mp3",
    timeCategory: "morning"


},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
    timeCategory: "morning"


},





{
    name: "   Disconnect",
    artist: "Becky Hill ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Becky Hill - Disconnect.mp3",
    timeCategory: "morning"

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
  


    timeCategory: "morning"


},







{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you222.mp3",
    timeCategory: "morning"


},








{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
     timeCategory: "morning"


},


{
    name:  "Good Morning",
    artist: "Neil Rodgers  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Neil Rodgers - Good Morning.mp3",
      timeCategory: "morning"


},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
    timeCategory: "morning"


},









{
    name: " Big Fun",
    artist: "Inner City  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Inner City - Big Fun.mp3",
    timeCategory: "morning"


},




{
    name: "  Thinkin' about your love",
    artist: "Skipworth & Turner ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Skipworth & Turner - Thinkin' about your love.mp3",
  


    timeCategory: "morning"


},










{
    name: " Like I like It ",
    artist: " Aurra ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Aurra - Like I like It.mp3",
  


    timeCategory: "morning"


},



{
    name: " All Night Long ",
    artist: "Mary Jane Girls ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Mary Jane Girls - All Night Long.mp3",
  


    timeCategory: "morning"


},
























 




















{
    name: "Enjoy The Silence",
    artist: "Depeche Mode ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Depeche Mode - Enjoy The Silence.mp3",
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
  
    name: "Apologize",
    artist: "Timbaland",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Timbaland - Apologize.mp3",
    timeCategory: "morning"


},

{
    name: "Love Foolosophy",
    artist: "Jamiroquaii",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Jamiroquaii - Love Foolosophy.mp3",
  


    timeCategory: "morning"


},










{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you222.mp3",
      timeCategory: "morning"


},


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
    timeCategory: "morning"


},




{
    name: "Bang Bang",
    artist: "The Knocks ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/The Knocks - Bang Bang.mp3",
     timeCategory: "morning"


},








{
    name: "Chillhouse Del Mar",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/chillhouse del mar01.mp3",
      timeCategory: "morning"


},

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
    timeCategory: "morning"


},







{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
    timeCategory: "morning"


},









 


{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
    timeCategory: "morning"


},


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
      timeCategory: "morning"


},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/do not turnoff receiver.mp3",
    timeCategory: "morning"


},







 
{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
    timeCategory: "morning"


},





{
     name: " Believ ",
    artist: "Acraze ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Acraze - Believe.mp3",
     timeCategory: "morning"


},













{
    name: "Obsessed",
    artist: "Calvin Harris ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Calvin Harris - Obsessed.mp3",
    timeCategory: "morning"


},


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj4.mp3",
      timeCategory: "morning"
},



{
    name: "  She ",
    artist: "Elderbrook Cola    ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Elderbrook Cola - She.mp3",
    timeCategory: "morning"


},

{
    name: " Fly Robin Fly ",
    artist: "Silver Convention",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Silver Convention - Fly Robin Fly.mp3",
     timeCategory: "morning"


},


{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
     timeCategory: "morning"


},


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
     timeCategory: "morning"


},





{
    name: "No One Dies From Love",
    artist: "Tove Lo",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Tove Lo - No one dies from love.mp3",
  
   timeCategory: "morning"


},



{
    name: "Little L",
    artist: "Jamiroquaii",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Jamiroquaii - Little L.mp3",
      timeCategory: "morning"


},









{
    name: " I Can't Wait",
    artist: "NU Shooz ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
         timeCategory: "morning"
},














































{
    name: "Taste Of You",
    artist: "Rezz",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Rezz - Taste of you.mp3",
        timeCategory: "morning"
},





{
    name: "Believe (1998)",
    artist: "Cher",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Cher - Believe.mp3",
        timeCategory: "morning"
},










{
    name: "Stomp! (Album Version) ",
    artist: "The Brothers Johnson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/THE BROTHERS JOHNSON - Stomp! (Album Version) HQ.mp3",
         timeCategory: "morning"
},







{
    name: "Masquerade",
    artist: "Bananarama ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Bananarama - Masquerade.mp3",
         timeCategory: "morning"
},










{
    name: " Hit 'N Run Lover (12inch)",
    artist: "Carol Jiani",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
          timeCategory: "morning"
},


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
          timeCategory: "morning"
},


{
    name: "Money's Too Tight (12inch)",
    artist: "Simply Red",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Simply Red - Money's too tight (to mention).mp3",
      timeCategory: "morning"
},




{
    name: "You Are Not Alone",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Michael Jackson- You are not alone.mp3",
      timeCategory: "morning"
},


{
    name: "Little L",
    artist: "Jamiroquaii",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
            timeCategory: "morning"
},





{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj6.mp3",
      timeCategory: "morning"
},






{
    name: "  Diamonds (12inch)",
    artist: "Herb  Alpert  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Herb  Alpert - Diamonds.mp3",
          timeCategory: "morning"
},












{
    name: "   Keep On Movin'",
    artist: "Soul II Soul ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Soul II Soul - Keep on movin'.mp3",
       timeCategory: "morning"
},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female DJ1best.mp3",
      timeCategory: "morning"
},






{
    name: "Just The Way You Like It (12inch)",
    artist: "Sos Band  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Sos Band Just the way youn like it.mp3",
        timeCategory: "morning"
},








{
     name: "Padam Padam",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://thechime.netlify.app/Half Kylie Minogue - Padam Padam.mp3",
     timeCategory: "morning"
},




{
    name: "Get Lucky (12inch)",
    artist: "Daft Punk ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Daft Punk - Get Lucky.mp3",
           timeCategory: "morning"
},

{
    name: "Pineapple Slice",
    artist: "Tove Lo",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Tove Lo - Pineapple Slice.mp3",
            timeCategory: "morning"
},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
   timeCategory: "morning"


},


{
    name: " Risin To The Top",
    artist: "Kenny Burke  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Kenny Burke - Risin to the Top.mp3",
           timeCategory: "morning"
},




{
    name: " Feed Them",
    artist: "Kelis",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Kelis - Feed Them.mp3",
 timeCategory: "morning"
},



{
    name: "Across 110th Street",
    artist: "Bobby Womack ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Bobby Womack - Across 110th street.mp3",
           timeCategory: "morning"
},



{
    name: "Alice",
    artist: "Lady Gaga   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Lady Gaga - Alice.mp3",
           timeCategory: "morning"
},


{
    name: "   ASMR Lover ",
    artist: "RuPaul ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/RuPaul - ASMR Lover.mp3",
            timeCategory: "morning"
},




{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
        timeCategory: "morning"
},


{
    name: "Groove Is In The Heart",
    artist: "Deee-Lite   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Deee-Lite - Groove Is In The Heart.mp3",
        timeCategory: "morning"
},























































































{
    name: " It's All The Way Live",
    artist: "Lakeside ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Lakeside - It's All The Way Live.mp3",
          timeCategory: "morning"
},









{
    name: "  Sexy (12inch)",
    artist: "MFSB    ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/MFSB - Sexy (12inch).mp3",
    timeCategory: "morning"
},











{
    name: "Groovin' You",
    artist: "Harvey Mason",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Harvey Mason - Groovin' You.mp3",
  


          timeCategory: "morning"
},












{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj2.mp3",
      timeCategory: "morning"
},






{
    name: "Right Here ",
    artist: "SWV ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/SWV - Right Here.mp3",
        timeCategory: "morning"
},



{
    name: "   Lose Myself ",
    artist: "Post Malone  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Post Malone & The Weeknd - Lose Myself.mp3",
    timeCategory: "morning"


},






{
    name: "  Magic's Wand (1982) ",
    artist: "Whodini  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Whodini - Magic's Wand.mp3",
  timeCategory: "morning"
},



{
    name: " In The Forest (1980)",
    artist: " Baby O  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Baby O - In The Forest.mp3",
  


      timeCategory: "morning"
},
{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj2.mp3",
      timeCategory: "morning"
},

{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you333.mp3",
    timeCategory: "morning"


},




{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
    timeCategory: "morning"


},



{
    name: "  Sing It Back ",
    artist: "Moloko ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Moloko - Sing It Back.mp3",
    timeCategory: "morning"


},






{
    name: "Stories",
    artist: "Carleen Anderson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Carleen Anderson - Stories.mp3",
          timeCategory: "morning"
},








{
    name: "Glow Of Love",
    artist: "Change ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Change - Glow Of Love.mp3",
          category: "tuesday-chill",
timeCategory: "morning"
},




{
    name: "Mind Up Tonight",
    artist: "Melba Moore",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Melba Moore - Mind up tonight.mp3",
timeCategory: "morning"
},











{
    name: "  Welcome!",
    artist: "Listen Live Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/New track.mp3",
  timeCategory: "morning"
},










{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
  timeCategory: "morning"
},









































{
    name: "Rasputin",
    artist: "Majestic  & Boney M ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/majestic  & Boney M - Rasputin.mp3",
  timeCategory: "morning"
},







{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
 timeCategory: "morning"
},
 






 


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
 timeCategory: "morning"
},







{
    name: "Unfinished Sympathy (1991)",
    artist: "Massive ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Massive Attack - Unfinished Sympathy.mp3",
 timeCategory: "morning"
},






{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
timeCategory: "morning"
},






{
    name: "  Love Is Back",
    artist: "Celeste ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Celeste - Love Is Back.mp3",
timeCategory: "morning"
},






{
    name: "The Fall",
    artist: "Ship Wrek  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Ship Wrek - The Fall.mp3",
  timeCategory: "morning"
},


{
    name: "Just for You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you222.mp3",
timeCategory: "morning"
},






























{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny radio jingle3.mp3",
 timeCategory: "morning"
},




{
     name: "A Pain That I'm Used To",
    artist: "Depeche Mode",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/A Pain That I'm Used To (Jacques Lu Cont Remix).mp3",
 timeCategory: "morning"
},

{
    name: "Lowdown (12inch)",
    artist: "Boz Scaggs",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Boz Scaggs3 - Lowdown.mp3",
 timeCategory: "morning"
},


{
    name: " Let Me Show You (Ruud Remix)",
    artist: "Jacksons",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Jacksons - Let me show you (Ruud Remix).mp3",
timeCategory: "morning"
},


{
    name: "Spacer",
    artist: "Sheila B Devotion",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Sheila B Devotion - Spacer.mp3",
timeCategory: "morning"
},
 



{
    name: " Win Or Lose",
    artist: "E W F ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/E W F - Win or lose.mp3",
  timeCategory: "morning"
},








{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet4.mp3",
 timeCategory: "morning"
},







{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
 timeCategory: "morning"
},








 




















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  timeCategory: "morning"
},





{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet4.mp3",
 timeCategory: "morning"
},




{
    name: " Pipeline (1977)",
    artist: "Bruce Johnston  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Bruce Johnston- Pipeline.mp3",
 timeCategory: "morning"
},







{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
timeCategory: "morning"
},














{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  timeCategory: "morning"
},











{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
 timeCategory: "morning"
},















 

























{
    name: " All Around The World",
    artist: "Lisa Stansfield  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Lisa Stansfield - All Around the World.mp3",
 timeCategory: "morning"
},







{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/starten met Sunny.mp3",
   category: "monday-chill",   
timeCategory: "morning"
},










{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
       timeCategory: "morning"
},















{
  
    name: "Good Form",
    artist: "Nicki Minaj ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Nicki Minaj - Good Form.mp3",
      timeCategory: "morning"
},









{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
      timeCategory: "morning"
},











{
    name: " Poker Face",
    artist: "Lady Gaga  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Lady Gaga - Poker face.mp3",
       timeCategory: "morning"
},



 
{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
       timeCategory: "morning"
},






{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet4.mp3",
        timeCategory: "morning"
},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
      timeCategory: "morning"
},

 







{
    name: " Waterfall (1994)",
    artist: "Atlantic Ocean  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Atlantic Ocean - Waterfall.mp3",
      timeCategory: "morning"
},









{
    name: "What You Waiting For",
    artist: "Gwen Stefani ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Gwen Stefani - What you waiting for.mp3",
           timeCategory: "morning"
},




{
    name: " People Are People",
    artist: "Depeche Mode ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Depeche mode- People are people.mp3",
           timeCategory: "morning"
},



{
    name: "Mesmerized (12inch)",
    artist: "Freemasons",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Freemasons  - Mesmerized.mp3",
           timeCategory: "morning"
},


{
    name: "Best Of My Love",
    artist: "T-Connection",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/T-Connection - Best of my Love.mp3",
           timeCategory: "morning"
},

























{
    name: "Radiation Level (12inch)",
    artist: "The Sun ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/The Sun - Radiation Level.mp3",
          timeCategory: "morning"
},



{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
          timeCategory: "morning"
},

 










{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
            timeCategory: "morning"
},





{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
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
    name: "   Fake Love",
    artist: "Tink ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Tink - Fake Love.mp3",
      timeCategory: "morning"
},




{
    name: "I Wanna Be Your Lover (12inch)",
    artist: "Prince",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Prince - I wanna be your lover.mp3",
  


      timeCategory: "morning"
},








{
    name: "   Just A Touch (1979) ",
    artist: "Slave ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Slave - Just A Touch (1979).mp3",
       timeCategory: "morning"
},









{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
         timeCategory: "morning"
},




{
    name: "  You Only Love Me",
    artist: "Rita Ora    ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Rita Ora - You Only Love Me.mp3",
          timeCategory: "morning"
},


{
    name: "Super Duper Love",
    artist: "Joss Stone",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Joss Stone - Super Duper Love.mp3",
         timeCategory: "morning"
},


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
         timeCategory: "morning"
},











{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
           timeCategory: "morning"
},




{
    name: "This Is It",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Michael Jackson - This is it.mp3",
        timeCategory: "morning"
},






{
     name: "Funky President (1974)",
    artist: "James Brown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/James Brown - Funky president.mp3",
        timeCategory: "morning"
},















{
    name: "Welcome!",
    artist: "Sunny Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
  


      timeCategory: "morning"
 },


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
      timeCategory: "morning"
 },



 
{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you333.mp3",
        timeCategory: "morning"
 },






{
    name: "   Break My Soul  ",
    artist: "Beyonce ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Beyoncé - Break My Soul.mp3",
      timeCategory: "morning"
 },





 {
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
      timeCategory: "morning"
 },













{
    name: "What Is Love",
    artist: "Deeelite ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Deeelite - What Is Love.mp3",
      timeCategory: "morning"
 },

















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
       timeCategory: "morning"
 },

{
    name: "   Ease On Me",
    artist: "Adele & Beyonce   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Adele & Beyonce -  Ease On Me.mp3",
      timeCategory: "morning"
 },



























































{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
     timeCategory: "afternoon"
},




































































































































{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female DJ1 dance.mp3",
      timeCategory: "afternoon"
},









































































{
    name: "    Let It All Blow  ",
    artist: "Dazz Band",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies08.netlify.app/Dazz Band Let It All Blow.mp3",
   timeCategory: "afternoon"
},




{
    name: "   Automatic",
    artist: "Pointer Sisters ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies08.netlify.app/Pointer Sisters - Automatic.mp3",
   timeCategory: "afternoon"
},





{
    name: "Ain't Nothing Goin'  (1986)",
    artist: "Gwen Guthrie  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Gwen Guthrie- Ain't Nothing Goin' On But The Rent.mp3",
  timeCategory: "afternoon"
},










{
    name: "    Mellow Mellow Right On  ",
    artist: "Lowrell ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Lowrell - Mellow Mellow Right On.mp3",
   timeCategory: "afternoon"
},








{
    name: " Rockit",
    artist: "Herbie Hancock  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Herbie Hancock - Rockit.mp3",
   timeCategory: "afternoon"
},











{
    name: " All Fall Down",
    artist: "Five Star ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Five Star - All Fall Down.mp3",
          timeCategory: "afternoon"
},





{
    name: "  I Want Her",
    artist: "Keith Sweat ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies08.netlify.app/Keith Sweat - I Want Her.mp3",
   timeCategory: "afternoon"
},







{
    name: "Kings & Queens",
    artist: "Ava Max  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Ava Max - Kings & Queens.mp3",
          timeCategory: "afternoon"
},




















{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
            timeCategory: "afternoon"
},

















{
     name: "   Just Be ",
    artist: "Tiesto ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Tiesto - Just Be.mp3",
           timeCategory: "afternoon"
},









{
    name: "  Jump (for my love)",
    artist: "Pointer Sisters  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies08.netlify.app/Pointer Sisters - Jump (for my love).mp3",
   timeCategory: "afternoon"
},



















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
          timeCategory: "afternoon"
},

 


{
     name: "   My Forbidden Lover",
    artist: " Tapps ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Tapps - My Forbidden Lover.mp3",
          timeCategory: "afternoon"
},

  
 













{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
          timeCategory: "afternoon"
},















 

{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you22.mp3",
          timeCategory: "afternoon"
},
























{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
           timeCategory: "afternoon"
},


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/reklame/reklame1.mp3",
          timeCategory: "afternoon"
},


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle11.mp3",
          timeCategory: "afternoon"
},







{
     name: "   Fresh",
    artist: " Kool & The Gang",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Kool & The Gang -  Fresh.mp3",
           timeCategory: "afternoon"
},





{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
          timeCategory: "afternoon"
},


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle11.mp3",
          timeCategory: "afternoon"
},







{
    name: "Welcome!",
    artist: "Sunny Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
          timeCategory: "afternoon"
},





 

{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_07.mp3",
          timeCategory: "afternoon"
},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
          timeCategory: "afternoon"
},




{
    name: "Hideaway",
    artist: "Kiesza  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Kiesza - Hideaway.mp3",
          timeCategory: "afternoon"
},














{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
          timeCategory: "afternoon"
},


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
            timeCategory: "afternoon"
},










  

 

{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
          timeCategory: "afternoon"
},



 

































{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
    timeCategory: "afternoon"
},




{
    name: "  Born Slippy ",
    artist: "Underworld ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Underworld - born slippy2.mp3",
    timeCategory: "afternoon"
},






{
    name: "Real Groove",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Kylie Minogue -Real Groove.mp3",
  


    timeCategory: "afternoon"
},



{
    name: "A Long Walk ",
    artist: "Jill Scott  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Jill Scott A Long Walk.mp3",
    timeCategory: "afternoon"
},





{
    name: " Vertigo",
    artist: "Sophie Ellis Bextor ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Sophie Ellis Bextor - Vertigo.mp3",
    timeCategory: "afternoon"
},

{
    name: " Everything She Wants",
    artist: "Wham  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Wham - Everything She Wants.mp3",
    timeCategory: "afternoon"
},






{
    name: " Do What You Wanna Do ",
    artist: "T - Connection ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/T - Connection - Do What You Wanna Do.mp3",
    timeCategory: "afternoon"
},





{
     name: "Baby Queen",
    artist: "Gorillaz",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://thechime.netlify.app/Half Gorillaz - Baby Queen.mp3",
     timeCategory: "afternoon"
},


{
    name: "Born To Be Alive",
    artist: "Patrick Hernandez ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Patrick Hernandez Born to be alive.mp3",
     timeCategory: "afternoon"
},

{
    name: "Juice",
    artist: "Lizzo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Lizzo2 - Juice.mp3",
    timeCategory: "afternoon"
},




{
    name: " Flawless",
    artist: "The Ones ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/The Ones - Flawless.mp3",
  timeCategory: "afternoon"
},






{
    name: "Rain On Me",
    artist: "Gaga & Ariana  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Gaga & Ariana - Rain on me.mp3",
    timeCategory: "afternoon"
},

















{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
    timeCategory: "afternoon"
},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
    timeCategory: "afternoon"
},


















{
    name: "On The Beat",
    artist: "BB & Q Band ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/BB Q Band - On the Beat.mp3",
    timeCategory: "afternoon"
},












{
    name: " Saturday Night (12inch)",
    artist: "T-Connection ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/T-Connection - Saturday Night.mp3",
     timeCategory: "afternoon"
},










{
    name: " Stellar Funk (1978)",
    artist: "Slave  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Slave - Stellar Funk (1978).mp3",
  


    timeCategory: "afternoon"
},




{
     name:  "Another Life",
    artist: "SG Lewis ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/SG Lewis - Another Life.mp3",
     timeCategory: "afternoon"
},



{
    name: " Don't Call  Me Baby",
    artist: "Madison Avenue  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Madison Avenue - Don't Call  Me Baby.mp3",
    timeCategory: "afternoon"
},



{
    name: " She's Gone Dance On",
    artist: "Disclosure  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Disclosure - She's Gone Dance On.mp3",
     timeCategory: "afternoon"
},

{
    name: "  Finish Line",
    artist: "Yasmin",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Yasmin- Finish Line.mp3",

     timeCategory: "afternoon"
},



{
    name: "   6 AM  ",
    artist: "Channel Tres    ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Channel Tres - 6 AM.mp3",
      timeCategory: "afternoon"
},





{
    name: " Honesty",
    artist:  "Nelly Furtado  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Nelly Furtado - Honesty.mp3",
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
    name: "  Watchin'(2011)",
    artist: "Freemasons  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Freemasons - Watchin'.mp3",
    timeCategory: "afternoon"
},




{
    name: "A Walk In The Park ",
    artist: "Nick Straker ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Nick Straker Band - A walk in the park 7inch.mp3",
    timeCategory: "afternoon"
},





{
    name: "let's go back",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/let's go back.mp3",
   timeCategory: "afternoon"
},


{
    name: " Can't Wait Another Minute ",
    artist: "Five Star ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Five Star - Can't Wait Another Minute.mp3",
  


      timeCategory: "afternoon"
},















{
    name: "Sweet Baby",
    artist: "Macy Gray",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Macy Gray Sweet Baby.mp3",
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
    name: " You Know How To (12inch)",
    artist: "Phyllis Hyman  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Phyllis Hyman - You Know How To Love Me (12inch).mp3",
  timeCategory: "afternoon"
},



{
    name: "   Dopamine ",
    artist: "Purple Disco Machine ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Purple Disco Machine - Dopamine.mp3",
  timeCategory: "afternoon"

 },





{
    name: " Fast",
    artist: "Saweetie",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Saweetie - Fast.mp3",
   timeCategory: "afternoon"

 },








{
    name: " You Are The Universe",
    artist: "Full Flava",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Full Flava - You are the universe.mp3",
  timeCategory: "afternoon"
},



 
{
    name: " Run On Love",
    artist: "Lucas Nord   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Lucas Nord - Run On Love.mp3",
   timeCategory: "afternoon"
},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj5.mp3",
       timeCategory: "afternoon"
},


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  timeCategory: "afternoon"
},



{
    name: "I'll Be Good",
    artist: "Rene &  Angela",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Rene &  Angela - I'll be good.mp3",
  timeCategory: "afternoon"


},


{
    name: "   Creep (1994)  ",
    artist: "TLC ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/TLC - Creep.mp3",
  timeCategory: "afternoon"
},





{
    name: "  Whatta Man (1993)  ",
    artist: "Salt N Pepa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Salt N Pepa - Whatta Man.mp3",
  timeCategory: "afternoon"
},





{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  timeCategory: "afternoon"
},






{
    name: "  Lucky Star (2000)  ",
    artist: "Superfunk ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Superfunk - Lucky Star.mp3",
 timeCategory: "afternoon"
},




{
    name: "   No Scrubs (1999)  ",
    artist: "TLC ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path:"https://sunnyhotradio.com/muziek/oldies07/TLC - No Scrubs.mp3",
  timeCategory: "afternoon"
},






{
    name: "Round Round (2002)",
    artist: "Sugababes",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Sugababes - Round Round.mp3",
     timeCategory: "afternoon"
},
















































{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj6.mp3",
      timeCategory: "afternoon"
},








































































{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  timeCategory: "afternoon"

},

 

{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
     timeCategory: "afternoon"
},





{
    name: "How We Do It",
    artist: "Sean Paul & Pia Mia",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Sean Paul & Pia Mia - How do we do it.mp3",
    timeCategory: "afternoon"
},





































































































































{
    name: "  Another Man (1984)",
    artist: "Barbara Mason",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Barbara Mason - Another Man.mp3",
    timeCategory: "afternoon"
},


{
    name: " Shy Guy (1995)",
    artist: "Diana King  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Diana King - Shy guy.mp3",
    timeCategory: "afternoon"
},

{
    name: " Persuasive",
    artist: "Doechii",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Doechii - Persuasive.mp3",
    timeCategory: "afternoon"
},





{
    name: "Gimme That Funk (1978)",
    artist: "Dennis Coffey  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Dennis Coffey - Gimme That Funk (1978).mp3",
    timeCategory: "afternoon"


},











{
    name: "  Love Me  ",
    artist: "Inna ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Inna - Love Me.mp3",
    timeCategory: "afternoon"
},





{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
   timeCategory: "afternoon"
 },








{
    name: " Fade To Grey",
    artist: "Visage ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Visage - Fade to Grey.mp3",
    timeCategory: "afternoon"
},





{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
    timeCategory: "afternoon"
},







{
   name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you22.mp3",
    timeCategory: "afternoon"
},







{
    name: "Welcome!",
    artist: "Sunny Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
    timeCategory: "afternoon"


},






{
    name: "  On A Ragga Tip",
    artist: "SL2",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/SL2 - On A Ragga Tip.mp3",
   timeCategory: "afternoon"
 },






{
    name: "   Still Believe",
    artist: "Mary J. Blige ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Mary J. Blige - Still Believe In Love.mp3",
  


  timeCategory: "afternoon"
},













{
    name: " Closer",
    artist: "Saweetie ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Saweetie - Closer.mp3",
  timeCategory: "afternoon"
},






{
     name: " Pearls ",
    artist: "Jesse Ware ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Jesse Ware - Pearls.mp3",
   timeCategory: "afternoon"
},




{
     name: "   Giving Me  ",
    artist: "Jazzy  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Jazzy  - Giving Me.mp3",
  timeCategory: "afternoon"
},




{
    name: " I Can't Wait",
    artist: "NU Shooz ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/NU Shooz - I Can't Wait.mp3",
    timeCategory: "afternoon"
},




{
    name: "  Drinkin'",
    artist: "JoelCorry & Rita Ora ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/JoelCorry & Rita Ora - Drinkin'.mp3",
  


     timeCategory: "afternoon"
},

{
    name: "  Past Life ",
    artist: "Jonas Blue ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Jonas Blue - Past Life.mp3",
  


     timeCategory: "afternoon"
},



{
    name: "Hollywood  ",
    artist: "Miami Funk Machine ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Miami Funk Machine - Hollywood.mp3",
     timeCategory: "afternoon"


},





{
    name: "    Starboy ",
    artist: "The Weeknd ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/The Weeknd - Starboy.mp3",
     timeCategory: "afternoon"
},





{
    name: "Welcome!",
    artist: "Sunny Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
  


     timeCategory: "afternoon"


},








{
    name: "Follow Me",
    artist: "Pabllo Vittar ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Pabllo Vittar - Follow Me.mp3",
     timeCategory: "afternoon"
 },




















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
    timeCategory: "afternoon"
 },




{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle22.mp3",
   timeCategory: "afternoon"
 },




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
   timeCategory: "afternoon"
 },






































{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet4.mp3",
    timeCategory: "afternoon"
 },








{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
     timeCategory: "afternoon"
 },



{
    name: "In The Mix",
    artist: "Mix Masters Feat. Mc Action",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Mix masters feat. Mc Action - In the mix.mp3",
   timeCategory: "afternoon"
 },






 



{
    name: " Another",
    artist: "Muni Long",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Muni Long - Another.mp3",
  


   timeCategory: "afternoon"
 },















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
   timeCategory: "afternoon"
 },

 






{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
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
    name: " Scream",
    artist: "Michael Jackson & Janet Jackson  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Michael Jackson , Janet Jackson -  Scream.mp3",
   timeCategory: "afternoon"
 },














{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
   timeCategory: "afternoon"
 },











{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
     timeCategory: "afternoon"
 },

 


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
    timeCategory: "afternoon"
 },

 




































































{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
   timeCategory: "afternoon"
 },









{
    name: "  Another Man (1984)",
    artist: "Barbara Mason",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Barbara Mason - Another Man.mp3",
   timeCategory: "afternoon"
 },


{
    name: " Shy Guy (1995)",
    artist: "Diana King  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Diana King - Shy guy.mp3",
   timeCategory: "afternoon"
 },

{
    name: " Persuasive",
    artist: "Doechii",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Doechii - Persuasive.mp3",
   timeCategory: "afternoon"
 },








{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle22.mp3",
    timeCategory: "afternoon"
 },






{
    name: " I Get Lonely",
    artist: "Janet Jackson  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Janet Jackson - I Get Lonely.mp3",
   timeCategory: "afternoon"
 },










{
    name:  "Do You wanna Funk",
    artist: "Sylvester",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Sylvester- Do You wanna Funk.mp3",
  


   timeCategory: "afternoon"
 },









{
    name: "Booty Call",
    artist: "Aronchupa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Aronchupa - Booty Call.mp3",
   timeCategory: "afternoon"
 },









{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
     timeCategory: "afternoon"
 },


{
    name: " Yes Sir  I Can Boogie ",
    artist: "Baccara",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Baccara - Yes Sir  I Can Boogie.mp3",
     timeCategory: "afternoon"
 },








{
    name: "  Crucify",
    artist: "Emma Hewitt ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Emma Hewitt - Crucify (Richi Remix).mp3",
    timeCategory: "afternoon"
 },

















{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
   timeCategory: "afternoon"
 },














{
    name: "  Changes",
    artist: "ZHU  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/ZHU - Changes.mp3",
     timeCategory: "afternoon"
 },



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
    timeCategory: "afternoon"
 },



{
     name: "  Diferente",
    artist: "Steve Aoki  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Steve Aoki - Diferente.mp3",
   timeCategory: "afternoon"
 },


{
    name: "Take My Breath",
    artist: "The Weeknd",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/The weeknd - Take my breath.mp3",
   timeCategory: "afternoon"
 },





{
     name: "   Dream Of You",
    artist: "Stu Air ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Stu Air - Dream Of You.mp3",
     timeCategory: "afternoon"
},

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
     timeCategory: "afternoon"
},




{
    name: "Satisfaction",
    artist: "Benny Benassi",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Benny Benassi - Satisfaction.mp3",
     timeCategory: "afternoon"
},







{
    name: "Nothing More To Say",
    artist: "Calvin Harris  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Calvin Harris - Nothing more to say.mp3",
       timeCategory: "afternoon"
},















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
      timeCategory: "afternoon"
},




{
    name: "   Jenny",
    artist: "Bandit & Belfort   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Bandit & Belfort - Jenny.mp3",
       timeCategory: "afternoon"
},








{
    name: " Closer To The Floor (new)",
    artist: "Jazzy & Ankhoï ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic08.netlify.app/Jazzy & Ankhoï - Closer To The Floor.mp3",
  timeCategory: "afternoon"
},














{
    name: "No One's Gonna Love You (1984)",
    artist: "SOS Band ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/SOS Band - No One's Gonna Love You (1984).mp3",
    timeCategory: "afternoon"
},

{
     name: " Take Me To The Top",
    artist: "Advance ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Advance - Take me to the top.mp3",
   timeCategory: "afternoon"
},

{
     name: "Oh My",
    artist: "Moby ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Moby - Oh my.mp3",
    timeCategory: "afternoon"
},






{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
   timeCategory: "afternoon"
},



















{
     name: " I Can't Wait",
    artist: "Solardo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Solardo - I Can't Wait.mp3",
    timeCategory: "afternoon"
},

{
     name: " Walking On Sunshine ",
    artist: "Rockers Revenge ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Rockers Revenge - Walking On Sunshine (12inch).mp3",
   timeCategory: "afternoon"
},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
    timeCategory: "afternoon"
},



 












{
    name: " Cold Heart",
    artist: "Elton John & Dua Lipa",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Elton & Dua - Cold Heart.mp3",
   timeCategory: "afternoon"
},










 
{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle22.mp3",
   timeCategory: "afternoon"
},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  

   timeCategory: "afternoon"
},
{
    name: "Break The Rules",
    artist: "Charli XCX",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Charli XCX - Break the Rules.mp3",
  


   timeCategory: "afternoon"
},

 







{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
     timeCategory: "afternoon"
},

{
  
    name: "A Second To Midnight",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Kylie Minogue &Years & Years  -A second to midnight.mp3",
     timeCategory: "afternoon"
},





{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
     timeCategory: "afternoon"
},



 
{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
   timeCategory: "afternoon"
},





 
{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
   timeCategory: "afternoon"
},
 











{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
    timeCategory: "afternoon"
},





{
    name: " In My House (1984)",
    artist: "Mary Jane Girls  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Mary Jane Girls - In My House.mp3",
     timeCategory: "afternoon"
},






{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
   timeCategory: "afternoon"
},









 
{
     name: "  Don't Think Twice ",
    artist: "Rita Ora  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Rita Ora - Don't Think Twice.mp3",
   timeCategory: "afternoon"
},


{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
   timeCategory: "afternoon"
},





{
     name: " Time After Time",
    artist: "Pacal Letoublon ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Pacal Letoublon - Time After Time.mp3",
   timeCategory: "afternoon"
},












{
    name: " The Age Of Love",
    artist: "Jam & Spoon  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Jam & Spoon - The Age of Love.mp3",
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
    name: "Love You Yes",
    artist: "Beverlei Brown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Love you yes- Beverlei Brown.mp3",
  


   timeCategory: "afternoon"
},





{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
    timeCategory: "afternoon"
},




{
    name: " Vogue (12 inch) ",
    artist: "Madonna  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Madonna - Vogue (12 inch).mp3",
   timeCategory: "afternoon"
},



{
    name: " What Have You Done",
    artist: "One Tribe ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/One Tribe feat. Gem - What Have You Done.mp3",
     timeCategory: "afternoon"
},








{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
   timeCategory: "afternoon"
},





{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
   timeCategory: "afternoon"
},





{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
   timeCategory: "afternoon"
},


{
    name: " Juicy Fruit",
    artist: "Mtume ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Mtume - Juicy Fruit.mp3",
  


   timeCategory: "afternoon"
},

{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
    timeCategory: "afternoon"
},



{
    name: "Hallucinate",
    artist: "Dua Lipa  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Dua Lipa - Call my name.mp3",
   timeCategory: "afternoon"
},









{
    name: "Show It To Me",
    artist: "Nightclub ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Nightclub - Show it to me.mp3",
     timeCategory: "afternoon"
},



{
    name: " Bottoms Up 2.0",
    artist: "Keke Palmer",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Keke Palmer - Bottoms up 2.0.mp3",
  


     timeCategory: "afternoon"
},











{
    name: "Hollywood",
    artist: "Madonna ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Madonna - Hollywood.mp3",
       timeCategory: "afternoon"
},



{
    name: "To Be Loved",
    artist: "Lizzo",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Lizzo - To be loved.mp3",
      timeCategory: "afternoon"
},


{
    name: "Chillhouse Del Mar",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/chillhouse del mar02.mp3",
      timeCategory: "afternoon"
},

{
    name: "Chillhouse Del Mar",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/chillhouse del mar03.mp3",
      timeCategory: "afternoon"
},
























{
    name: " Good Luck",
    artist: "Mabel, Jack Jones , Galantis",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Mabel, Jack Jones , Galantis - Good Luck.mp3",
       timeCategory: "afternoon"
},
















{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  

      timeCategory: "afternoon"
},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
      timeCategory: "afternoon"
},












{
    name: "Seven Days ",
    artist: "Jamiroquaii",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Jamiroquaii - Seven Days in sunny  Junet.mp3",
  


      timeCategory: "afternoon"
},

























{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
        timeCategory: "afternoon"
},













{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
       timeCategory: "afternoon"
},
 




{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet4.mp3",
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
    name: " Corner Of The Earth",
    artist: "Jamiroquai ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Jamiroquai - Corner of the Earth.mp3",
       timeCategory: "afternoon"
},















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
   timeCategory: "afternoon"
},

























{
    name: "   Drifting",
    artist: "Tiesto",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Tiesto - Drifting.mp3",
  


   timeCategory: "afternoon"
},


{
    name: "  Now U Do",
    artist: "DJ Seinfeld ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/DJ Seinfeld - Now U Do.mp3",
  


   timeCategory: "afternoon"
},









{
    name: "   True Colors   ",
    artist: "Jalisa Rey ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Jalisa Rey - True Colors.mp3",
    timeCategory: "afternoon"
},







{
    name: "  Can You Feel It (1986)",
    artist: "Mr Fingers ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Mr Fingers - Can you feel it.mp3",
    timeCategory: "afternoon"
},


{
    name: " Gonna Get Over You",
    artist: "Full Flava  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Full Flava - Gonna get over you.mp3",
   timeCategory: "afternoon"
},


{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
    timeCategory: "afternoon"
},


{
    name: " Magic",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Kylie Minogue - Magic.mp3",
   timeCategory: "afternoon"
},











{
    name: "Calabria",
    artist: "Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Bebe Rexha - Calabria.mp3",
   timeCategory: "afternoon"
},
































































































{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
    timeCategory: "evening"
},










{
     name: "   Padam Padam ",
    artist: "Kylie Minogue ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Kylie Minogue - Padam Padam.mp3",
    timeCategory: "evening"
},




{
     name: "  Untz Untz ",
    artist: "Inji ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Inji - Untz Untz.mp3",
    timeCategory: "evening"
},







































































{
    name: " Come Into My Life (1987)",
    artist: "Joyce Sims ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Joyce Sims - Come Into My Life.mp3",
    timeCategory: "evening"
},





{
    name: "Touch Me ",
    artist: "Rui Da Silva (2007)",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
    timeCategory: "evening"
},


























{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you333.mp3",
     timeCategory: "evening"
},






























{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
  


    timeCategory: "evening"
},
















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
      timeCategory: "evening"
},

{
    name: "Welcome!",
    artist: "Sunny Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
  


    timeCategory: "evening"
},


{
    name: " Just got paid",
    artist: "Sigala   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Sigala - Just got paid.mp3",
    timeCategory: "evening"
},

































{
    name: " Into My Body",
    artist: "Upsahl  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Upsahl - Into my body.mp3",
      timeCategory: "evening"
},



{
    name: "  Welcome!",
    artist: "Listen Live Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/New track.mp3",
     timeCategory: "evening"
},




{
    name: "   Woman Of The Ghetto (1969) ",
    artist: "Marlena Shaw ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Marlena Shaw - Woman Of The Ghetto.mp3",
     timeCategory: "evening"
},




























{
     name: " Cybersonic",
    artist: "Technarchy ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Technarchy - Cybersonic.mp3",
      timeCategory: "evening"
},








{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/do not turnoff receiver.mp3",
      timeCategory: "evening"
},













{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
     timeCategory: "evening"
},

 






















{
     name: "(Don't) Give Hate A Chance ",
    artist: "Jamiroquai ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Jamiroquai - (Don't) give hate a chance.mp3",
     timeCategory: "evening"
},














{
    name: "Love On My Mind (2005) ",
    artist: "Freemasons",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Freemasons - Love on my mind.mp3",
     timeCategory: "evening"
},










{
    name: " Dance 1978",
    artist: "Sylvester",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Sylvester- Dance 1978.mp3",
  


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
    name: "  Satellite",
    artist: " Khalid  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Khalid - Satellite.mp3",
     timeCategory: "evening"
},




{
    name: "   Lifetime ",
    artist: "SG Lewis",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/SG Lewis - Lifetime.mp3",
      timeCategory: "evening"
},








































{
    name: "I Wanna Feel",
    artist: "Second City ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Second City - I wanna feel.mp3",
      timeCategory: "evening"
},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
      timeCategory: "evening"
},





























 




{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_05.mp3",
      timeCategory: "evening"
},


{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_06.mp3",
        timeCategory: "evening"
},

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
      timeCategory: "evening"
},
















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny dance jingle.mp3",
      timeCategory: "evening"
},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
       timeCategory: "evening"
},

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
       timeCategory: "evening"
},










{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
       timeCategory: "evening"
},






{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
        timeCategory: "evening"
},







{
    name: "Goosebumps",
    artist: "MO",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/MO - Goosebumps.mp3",
       timeCategory: "evening"
},

















{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
       timeCategory: "evening"
},











{
    name: "No Diggity",
    artist: "Blackstreet ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Blackstreet - No Diggity ft. Dr. Dre, Queen Pen.mp3",
  


      timeCategory: "evening"
},






{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
      timeCategory: "evening"
},
 


















{
    name: " Sweetest Pie",
    artist: "Stallion & Dua Lipa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Stallion & Dua Lipa - Sweetest Pie.mp3",
       timeCategory: "evening"
},





{
    name: "I Need You",
    artist: "Dua Lipa  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Dua Lipa - I need you.mp3",
      timeCategory: "evening"
},




 



 
{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle11.mp3",
      timeCategory: "evening"
},









{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle22.mp3",
      timeCategory: "evening"
},










 





 
{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
       timeCategory: "evening"
},





{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you22.mp3",
        timeCategory: "evening"
},




   {
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
      timeCategory: "evening"
},
 


{
     name: "    Desire ",
    artist: "Cannons ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Cannons - Desire.mp3",
       timeCategory: "evening"
},

























{
    name: "No Bad Vibes",
    artist: "Jazzy   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic07.netlify.app/Jazzy feat. Kilimanjaro - No Bad Vibes.mp3",
     timeCategory: "evening"
},






{
    name: "DNA",
    artist: "Sophie And The Giants ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic07.netlify.app/Sophie AndThe Giants - DNA (feat. MEARSY).mp3",
     timeCategory: "evening"
},
{
    name: "  Welcome!",
    artist: "Listen Live Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/New track.mp3",
      timeCategory: "evening"
},

{
    name: " SevenStars (Dragonfighters)",
    artist: "Quazar  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Quazar - SevenStars (Dragonfighters).mp3",
      timeCategory: "evening"
},




{
    name: " I Am The Drama  ",
    artist: "Bebe Rexha  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Bebe Rexha - I Am The Drama.mp3",
    timeCategory: "evening"
},



{
    name: "Best Things (classic) ",
    artist: " Janet Jackson  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Luther Vandross & Janet Jackson - Best things in life are free.mp3",
    timeCategory: "evening"
},





{
    name: "  Spot A Fake    ",
    artist: "AvA Max",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/AvA Max - Spot A Fake.mp3",
     timeCategory: "evening"
},










{
    name: "  Atomic Playboy",
    artist: "Space Trax ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Space Trax - Atomic Playboy.mp3",
  
    timeCategory: "evening"
},





{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
    timeCategory: "evening"
},
















{
    name: "Do Your Dance (1977)",
    artist: "Rose Royce ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Rose Royce - Do your dance.mp3",
   timeCategory: "evening"
},


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
   timeCategory: "evening"
},

{
    name: "Soul Insurance",
    artist: "Angie Stone ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Angie Stone  Soul Insurance.mp3",
   timeCategory: "evening"
},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj2.mp3",
      timeCategory: "evening"
},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj4.mp3",
      timeCategory: "evening"
},


{
     name: "A Pain That I'm Used To",
    artist: "Depeche Mode",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/A Pain That I'm Used To (Jacques Lu Cont Remix).mp3",
   timeCategory: "evening"
},

{
    name: "Lowdown (12inch)",
    artist: "Boz Scaggs",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Boz Scaggs3 - Lowdown.mp3",
  timeCategory: "evening"
 },










{
    name: "Discoteka",
    artist: "Minelli x Inna ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Minelli x Inna - Discoteka.mp3",
        timeCategory: "evening"
},




{
    name: "  Work It Out ",
    artist: "Miley Cyrus  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Miley Cyrus - Work It Out.mp3",
        timeCategory: "evening"
},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
        timeCategory: "evening"
},







 {
     name: "  Gangsta's Paradise",
    artist: "Tink  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Tink - Gangsta's Paradise.mp3",
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
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
          timeCategory: "evening"
},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj6.mp3",
        timeCategory: "evening"
},


{
    name: "Drop It Like It's Hot",
    artist: "Snoop Dogg ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Snoop Dogg - Drop It Like It's Hot (Feat. Pharrell).mp3",
         timeCategory: "evening"
},


























{
    name: " Horsepower (1991)",
    artist: "Christian Jay Bolland ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Christian Jay Bolland - Horsepower (1991).mp3",
  

     timeCategory: "evening"
},





{
    name: "Fast Love",
    artist: "George Michael",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Fast Love - George Michael.mp3",
   timeCategory: "evening"
},








{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj3.mp3",
      timeCategory: "evening"
},

{
    name: "Passion (1992)",
    artist: "Gat Decor",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Gat Decor - Passion.mp3",
     timeCategory: "evening"
},





{
    name: "  We Got A Love Thang",
    artist: "CC Peniston ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/CC Peniston - We Got A Love Thang.mp3",
     timeCategory: "evening"
},







{
    name: "Pump Up The Jam",
    artist: "Technotronic ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Technotronic - Pump Up The Jam.mp3",
      timeCategory: "evening"
},


{
  
    name: "Slide Away",
    artist: "Miley Cyrus",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Miley Cyrus - Slide Away.mp3",
            timeCategory: "evening"
},


{
    name: "Mesmerized (12inch)",
    artist: "Freemasons",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/more music at the weekend.mp3",
          timeCategory: "evening"
},




{
    name: "Grapefruit",
    artist: "Tove Lo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Tove Lo - Grapefruit.mp3",
          timeCategory: "evening"
},



{
    name: "Medly",
    artist: "Robin S & CC Peniston",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Robin S Crystal Waters & CC Peniston.mp3",
  


          timeCategory: "evening"
},

{
    name: "Golden",
    artist: "Jill Scott  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Jill Scott  Golden.mp3",


          timeCategory: "evening"
},

{
    name: " Technarchy",
    artist: "Cybersonic ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Cybersonic - Technarchy.mp3",
  

        timeCategory: "evening"
},



{
    name: "Rainforest (12inch)",
    artist: "Paul Hardcastle",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Paul Hardcastle - Rainforest.mp3",
        timeCategory: "evening"
},










{
    name: "No Diggity",
    artist: "Blackstreet ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Blackstreet - No Diggity ft. Dr. Dre, Queen Pen.mp3",
  


        timeCategory: "evening"
},






{
    name: " Can You Handle It",
    artist: "Sharon Redd ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Sharon Redd Can you handle it.mp3",
  


         timeCategory: "evening"
},








{
    name: "I Like It (Blowout dub)",
    artist: "Landlord",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Landlord - I like it (Blowout dub).mp3",
  

        timeCategory: "evening"
},

{
    name: "K-Jee",
    artist: "MFSB  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/MFSB - K-Jee.mp3",
         timeCategory: "evening"
},







{
    name: "Tell Me Why",
    artist: "Supermode ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Supermode - Tell me why.mp3",
        timeCategory: "evening"
},





 



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
          timeCategory: "evening"
},







 
 

{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you222.mp3",
        timeCategory: "evening"
},



{
    name: "Summer Madness (12inch)",
    artist: "Kool And The Gang",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Kool and the gang - Summer Madness.mp3",
        timeCategory: "evening"
},






{
    name: " Sexy Thing",
    artist: "Hot Chocolate ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Hot Chocolate - Sexy Thing.mp3",
     timeCategory: "evening"
},


















{
    name: " I Feel It Comin' ",
    artist: "The Weeknd ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/The Weeknd - I Feel It Comin'.mp3",
     timeCategory: "evening"
},



{
    name: "   To Blind To See It",
    artist: "Kym Sims",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Kym Sims - To Blind To See It.mp3",
     timeCategory: "evening"
},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
     timeCategory: "evening"
},







{
    name: " Dancer (1979) ",
    artist: "Gino Soccio ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Gino Soccio - Dancer (1979).mp3",
     timeCategory: "evening"
},





{
    name: "Personal Jesus ",
    artist: "Depeche Mode",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Depeche Mode - Personal Jesus.mp3",
      timeCategory: "evening"
},








{
     name: "Sacrifice",
    artist: "The Weeknd ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/The weeknd - Sacrifice.mp3",
     timeCategory: "evening"
},













{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
      timeCategory: "evening"
},









{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
     timeCategory: "evening"
},








{
    
    name: "Chillhouse Del Mar",
    artist: "Chillhouse",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/chillhouse del mar05.mp3",
     timeCategory: "evening"
},



 
{
    
    name: "Chillhouse Del Mar",
    artist: "Chillhouse",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/chillhouse del mar06.mp3",
       timeCategory: "evening"
},



{
    
    name: "   Always There (1991)",
    artist: "Incognito",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Incognito - Always There.mp3",
      timeCategory: "evening"
},




{
    
    name: " San Salvador (1979)",
    artist: "Azoto ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Azoto - San Salvador.mp3",
      timeCategory: "evening"
},















































{
    name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
       timeCategory: "evening"
},







{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
     timeCategory: "evening"
},


 




{
    name: "  Open Sesame",
    artist: "Leila K ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Leila K - Open Sesame.mp3",
      timeCategory: "evening"
},















,










{
    name: "Better Days",
    artist: "Craig David  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Craig David2 - Better Days.mp3",
     timeCategory: "evening"
},







{
    name: "The Message",
    artist: "Grandmaster Flash ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Grandmaster Flash & The Furious Five - The Message.mp3",
     timeCategory: "evening"
},




{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle22.mp3",
     timeCategory: "evening"
},




{
     name: "Coastin' ",
    artist: "Victoria Monet ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Victoria Monet - Coastin'.mp3",
      timeCategory: "evening"
},






{
    name: "Seven Nation Army",
    artist: " Julian Perreta",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Gaulin & Julian Perreta - Seven nation army.mp3",
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
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
        timeCategory: "evening"
},
 






















{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  timeCategory: "evening"
 },






 

{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  timeCategory: "evening"
 },
 
















{
    name: "Hours and Hours",
    artist: "Muni Long ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Muni Long - Hours and Hours.mp3",
  timeCategory: "evening"
 },



















{
    name: "  Shaft In Africa (1973)",
    artist: "Johnny Pate ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Johnny Pate - Shaft In Africa.mp3",
  
 timeCategory: "evening"

},


























{
    name: "Let The Music Play ",
    artist: "Shannon  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Shannon - Let The Music Play.mp3",
        timeCategory: "evening"
},



{
    name: " Summer",
    artist: "Calvin Harris  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Calvin Harris - Summer.mp3",
        timeCategory: "evening"
},



{
    name: " Sunglasses",
    artist: "Heidi Klum ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
        timeCategory: "evening"
},






{
    name: "Mesmerized (12inch)",
    artist: "Freemasons",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
         timeCategory: "evening"
},









{
    name: "   I'm Gonna Get You",
    artist: "Bizarre Inc. ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Bizarre Inc. - I'm Gonna Get You.mp3",
         timeCategory: "evening"
},







{
    name: "  Give It To Me Baby ",
    artist: "Sunny James ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/micofoon Rick James.mp3",


         timeCategory: "evening"
},




























{
    name: "  Give It To Me Baby",
    artist: "Rick James ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Rick James - Give it to me baby.mp3",


         timeCategory: "evening"
},


{
    name: "The Power",
    artist: "Snap ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Snap - The Power.mp3",
      timeCategory: "evening"
}, 




{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


    timeCategory: "evening"
}, 






{
    name: "  Open Sesame",
    artist: "Leila K ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Leila K - Open Sesame.mp3",
    timeCategory: "evening"
}, 




{
    name: " Freaky Deaky",
    artist: "Tyga & Doja Cat ",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Tyga & Doja Cat - Freaky Deaky.mp3",
     timeCategory: "evening"
}, 












{
    name: "   Could Be Something",
    artist: "Minelli  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Minelli - Could be Something.mp3",
   timeCategory: "evening"
},

{
    name: "When I'm Gone",
    artist: "Alesso & Kathy Perry",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Alesso & Kathy Perry - When I'm gone.mp3",
  timeCategory: "evening"

 },

{
     name: " Used To Know Me",
    artist: "Charli XCX ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Charli XCX - Used to know me.mp3",
   timeCategory: "evening"
},






{
    name: "Too Much Too Late",
    artist: "Full Flava ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Full Flava - Too much too late.mp3",
   timeCategory: "evening"
},










{
    name: " My Head My Heart",
    artist: "Ava Max ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Ava Max - My head my heart.mp3",
    timeCategory: "evening"


},




















































































































{
     name: " Untz Untz",
    artist: "Inji ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://thechime.netlify.app/Half Inji - Untz Untz.mp3",
     timeCategory: "evening"
},






{
     name: " She Can't Love You",
    artist: "Chemise ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Chemise - She Can't Love You.mp3",
     timeCategory: "evening"
},











{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
     timeCategory: "evening"


},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj4.mp3",
      timeCategory: "evening"
},












{
    name: "    She 's On My Mind",
    artist: "Romy  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Romy - She 's On My Mind.mp3",
      timeCategory: "evening"
},




{
    name: "Keep On Moving",
    artist: "Kastuvas",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/kastuvas - Keep on moving.mp3",
       timeCategory: "evening"
},






{
    name: " Feed Them",
    artist: "Kelis",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Kelis - Feed Them.mp3",
        timeCategory: "evening"
},
{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj6.mp3",
      timeCategory: "evening"
},

{
    name: " Just An Illusion (12inch)",
    artist: "Imagination ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Imagination - Just an Illusion 1982.mp3",
  


        timeCategory: "evening"
},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
          timeCategory: "evening"
},



{
    name: "What You Waiting For",
    artist: "Gwen Stefani ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://Sunnydanceoldies04.netlify.app/Gwen Stefani - What you waiting for.mp3",
           timeCategory: "evening"
},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
   timeCategory: "evening"


},


{
    name: "   Fever   ",
    artist: "Charlotte Day Wilson ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Charlotte D. Wilson - Fever (12inch).mp3",
    timeCategory: "evening"


},





 {
    name: " Stars",
    artist: "Pnau & Bebe Rexha ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Pnau & Bebe Rexha - Stars.mp3",
   timeCategory: "evening"


},


{
    
    name: "  All Night Long ",
    artist: "Izzy Bizu",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Izzy Bizu - All Night Long.mp3",
     timeCategory: "evening"


},


{
    name: "   Fool  ",
    artist: "Mr Belt ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Mr Belt - Fool.mp3",
     timeCategory: "evening"


},




{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet4.mp3",
    timeCategory: "evening"


},


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
     timeCategory: "evening"


},




{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
    timeCategory: "evening"


},


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
    timeCategory: "evening"


},


{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_08.mp3",
     timeCategory: "evening"
},


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
     timeCategory: "evening"
},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
     timeCategory: "evening"
},




{
    name: " Daisies ",
    artist: "Katy Perry  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Katy Perry - Daisies.mp3",
    timeCategory: "evening"
},







{
    name: "Dr Beat (12inch)",
    artist: "Miami Sound Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Miami Sound Machine - Dr Beat.mp3",
    timeCategory: "evening"
},





 
{
    name: " Quadrophonia ",
    artist: "Quadrophonia",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Quadrophonia - Quadrophonia (original).mp3",
  


      timeCategory: "evening"
},






 












{
    name: " Dance The Night",
    artist: "Dua Lipa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Dua Lipa - Dance The Night.mp3",
       timeCategory: "evening"
},











 










{
    name: " This It What You ",
    artist: "Calvin Harris    ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Calvin Harris - This it what you came for.mp3",
    timeCategory: "evening"
},



{
    name: "Tiktok Remix ",
    artist: "Prada & Cola  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Prada & Cola - Tiktok Remix.mp3",
    timeCategory: "evening"
},










{
    name: " Ghetto Feeling  ",
    artist: "Man Go Funk ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Man Go Funk - Ghetto Feeling.mp3",
    timeCategory: "evening"
},
 














{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
     timeCategory: "evening"
},





{
    name: "Too Hot (12inch)",
    artist: "Kool and the gang",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Kool and the gang - Too hot.mp3",
    timeCategory: "evening"
},
{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
     timeCategory: "evening"
},








{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
      timeCategory: "evening"
},


































{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/let's go back.mp3",
        timeCategory: "evening"
},


{
     name: "Told You So",
    artist: "Martin Garrix & Jex ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Martin Garrix & Jex - Told You So.mp3",
    timeCategory: "evening"
},




  
{
    name: " Don't Stop ",
    artist: "KID  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/KID - Don't Stop.mp3",
   timeCategory: "evening"
},




{
    name: "Gorgeous",
    artist: "Snoop Dogg, Dr Dre   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Snoop Dogg, Dr Dre - Gorgeous.mp3",
    timeCategory: "evening"
},

{
    name: "   I Like It",
    artist: "Alesso, Nate Smith ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Alesso, Nate Smith - I Like It.mp3",
    timeCategory: "evening"
},





{
     name: "Alarmschijf",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Alarm schijf.mp3",
     timeCategory: "evening"
},




{
  


  name: "Saltwater (12inch)",
    artist: "Chicane  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Chicane - Saltwater.mp3",
     timeCategory: "evening"
},



{
    name: " Miracles (12inch)",
    artist: "Change ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Change - Miracles.mp3",
      timeCategory: "evening"
},



{
    name: " You Cant Hide ",
    artist: "David Joseph  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/David Joseph - You Cant Hide (Your Love From Me).mp3",
     timeCategory: "evening"
},

{
    name: "  Believer",
    artist: "Freemasons  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Freemasons - Believer.mp3",
     timeCategory: "evening"
},


















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
      timeCategory: "evening"
},


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
       timeCategory: "evening"
},
 






















































































































  













 



























{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you22.mp3",
    timeCategory: "evening-late"
},





















































































{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
      timeCategory: "evening-late"
},



















{
    name: "You & Me",
    artist: "Disclosure ",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Disclosure - You & Me.mp3",
    timeCategory: "evening-late"
},





{
    name: "Closer To The Floor",
    artist: "Jazzy & Ankhoï",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Jazzy & Ankhoï - Closer To The Floor.mp3",
    timeCategory: "evening-late"
},











{
     name: " Lady",
    artist: "Modjo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Modjo - Lady.mp3",
 timeCategory: "evening-late"
},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Dance radio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
  timeCategory: "evening-late"
},




































{
  
    name: " The Greatest Dancer (12inch)",
    artist: "Sisters Sledge ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Sisters Sledge - He's The Greatest Dancer (12inch).mp3",
  timeCategory: "evening-late"
},





{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/do not turnoff receiver.mp3",
  timeCategory: "evening-late"
},













{
    name: "I Feel Love (revisit mix)",
    artist: "Donna Summer ",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Donna Summer - I Feel Love (revisit mix).mp3",
    timeCategory: "evening-late"
},





{
    name: "Closer To The Floor",
    artist: "Jazzy & Ankhoï",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Jazzy & Ankhoï - Closer To The Floor.mp3",
    timeCategory: "evening-late"
},



















{
    name: " Better",
    artist: "MK, Burns  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/MK, Burns - Better.mp3",
    timeCategory: "evening-late"
},


{
    name: "Un Momento",
    artist: "Inna  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Inna - Un Momento.mp3",
    timeCategory: "evening-late"
},


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj3.mp3",
    timeCategory: "evening-late"
},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj2.mp3",
      timeCategory: "evening-late"
},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj4.mp3",
      timeCategory: "evening-late"
},






{
    name: "Boogie2nite",
    artist: "Booty Luv",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Booty luv - Boogie2nite.mp3",
  


    timeCategory: "evening-late"
},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
      timeCategory: "evening-late"
},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/DJ S.mp3",
     timeCategory: "evening-late"
},























{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
    timeCategory: "evening-late"
},










{
    name: "Was That All That Was",
    artist: "Carleen Anderson",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Carleen Anderson - Was that all that was.mp3",
  


    timeCategory: "evening-late"
},



 
{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj2.mp3",
      timeCategory: "evening-late"
},






{
    name: "Blinding Lights",
    artist: "The Weeknd  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/The weeknd - Blinding Lights.mp3", 
    timeCategory: "evening-late"
},















{
    name: "How Do I Make You Love Me ",
    artist: "The Weeknd",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/The Weeknd - How Do I make You love me (12inch).mp3",
      timeCategory: "evening-late"
},




























{
     name: "   Desire ",
    artist: "Sam Smith ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Sam Smith - Desire.mp3",
    timeCategory: "evening-late"
},








{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you333.mp3",
     timeCategory: "evening-late"
},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj3.mp3",
      timeCategory: "evening-late"
},




{
    name: " Saturday Night (12inch)",
    artist: "T-Connection ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/T-Connection - Saturday Night.mp3",
      timeCategory: "evening-late"
},











{
    name: "Big Energy",
    artist: "Latto ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Latto - Big Energy.mp3",
    timeCategory: "evening-late"
},

 


{
    
    name: "Deephouse",
    artist: "Vibey",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Vibey03.mp3",
     timeCategory: "evening-late"
},



{
  
    name: "Cloud 9",
    artist: "Jamiroquai",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Jamiroquai - Cloud 9.mp3",
     timeCategory: "evening-late"
},



 
{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
    timeCategory: "evening-late"
},
 


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj2.mp3",
      timeCategory: "evening"
},

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj6.mp3",
      timeCategory: "evening"
},




{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/reklame/reklame.mp3",
    timeCategory: "evening-late"
},










{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
    timeCategory: "evening-late"
},











{
    name: " Chain My Heart",
    artist: "Topic & Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Topic & Bebe Rexha - Chain my heart.mp3",
     timeCategory: "evening-late"
},





{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
    timeCategory: "evening-late"
},


{
    name: " Best Friend ",
    artist: "Saweetie ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Saweetie - Best Friend.mp3",
    timeCategory: "evening-late"
},




{
  
    name: "Family",
    artist: "Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Bebe Rexha - Family.mp3",
     timeCategory: "evening-late"
},

{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
    timeCategory: "evening-late"
},








{
     name: " I'm Ready",
    artist: "Kano ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Kano - I'm Ready.mp3",
     timeCategory: "evening-late"
},


{
     name: "   I Am Allright",
    artist: "Narada Michael Walden  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Narada Michael Walden - Tonight I Am Allright.mp3",
    timeCategory: "evening-late"
},

{
    name: "Classic",
    artist: "The Knocks",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/The Knocks - Classic.mp3",
    timeCategory: "evening-late"
},



{
    name: "Sacrifice",
    artist: "The Weeknd ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/The weeknd - Sacrifice.mp3",
    timeCategory: "evening-late"
},




{
    name: "Good Ones",
    artist: "Charli XCX ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Charli XCX - Good Ones.mp3",
     timeCategory: "evening-late"
},





{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj2.mp3",
      timeCategory: "evening"
},







{
    name: "  Illusion",
    artist: "Dua Lipa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Dua Lipa - Illusion.mp3",
    timeCategory: "evening-late"
},










{
    name: "Touch Me ",
    artist: "Rui Da Silva (2007)",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Rui da Silva - Touch Me.mp3",
  


    timeCategory: "evening-late"
},



{
  
    name: "Don't Be Shy",
    artist: "Dj Tiesto 7 Karol G",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Dj Tiesto 7 Karol G - Don't be shy.mp3",
    timeCategory: "evening-late"
},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


    timeCategory: "evening-late"
},


{
     name: "   Freak Me Now ",
    artist: "Jessie Ware ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Jessie Ware - Freak Me Now.mp3",
     timeCategory: "evening-late"
},


{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
    timeCategory: "evening-late"
},

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj3.mp3",
      timeCategory: "evening"
},




{
    name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
    timeCategory: "evening-late"
},



{
  
    name: "1999",
    artist: "Troye Sivan ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Troye Sivan - 1999.mp3",
    timeCategory: "evening-late"
},







{
    name: "Never Can Say Goodbye (12inch)",
    artist: "Communards",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Communards - Never can say goodbye 12inch.mp3",
    timeCategory: "evening-late"
},



{
    name: "Welcome!",
    artist: "Sunny Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
  


    timeCategory: "evening-late"
},



{
     name: "  Love On You",
    artist: "Jason Warrior  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Jason Warrior - Love On You.mp3",
     timeCategory: "evening-late"
},







{
    name: "    End Of An Era  ",
    artist: "Dua Lipa",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Dua Lipa - End Of An Era.mp3",
    timeCategory: "evening-late"
},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
      timeCategory: "evening-late"
},










{
    name: "   One More Time (2001)",
    artist: "Daft Punk  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Daft Punk - One More Time.mp3",
     timeCategory: "evening-late"
},





{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj5.mp3",
      timeCategory: "evening"
},








{
    name: "My Love",
    artist: "Route 94 ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Route 94 - My Love.mp3",
    timeCategory: "evening"
},




{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
    timeCategory: "evening"
},







{
    name: " I Hear Music",
    artist: "Unlimited Touch ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Unlimited Touch - I hear music.mp3",
     timeCategory: "evening"
},





{
    name: "Ain't Got No Dished ",
    artist: "Purple Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Purple Disco Machine - Ain't got no dished remix.mp3",
  

    timeCategory: "evening"
},



{
    name: " You gotta be (1994)",
    artist: "Des'ree  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Des'ree - You gotta be.mp3",
      timeCategory: "evening"
},










{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle11.mp3",
      timeCategory: "evening"
},





{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle22.mp3",
    timeCategory: "evening"
},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
     timeCategory: "evening"
},






 
{
    name: " Playbox",
    artist: "Purple Disco Machine  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Purple disco machine - Playbox.mp3",
    timeCategory: "evening"
},












{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
     timeCategory: "evening"
},



{
    name: "Welcome!",
    artist: "Sunny Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
  


    timeCategory: "evening"
},








{
     name: "  Tension ",
    artist: "Kylie Minogue  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Kylie Minogue - Tension.mp3",
     timeCategory: "evening"
},







{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
    timeCategory: "evening"
},





{
    name: "    Baby Queen",
    artist: "Gorillaz ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Gorillaz - Baby Queen.mp3",
    timeCategory: "evening"
},



















{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle22.mp3",
    timeCategory: "evening"
},
































{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
     timeCategory: "evening"
},




{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
     timeCategory: "evening"
},













{
     name: " Lady",
    artist: "Modjo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Modjo - Lady.mp3",
     timeCategory: "evening"
},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Dance radio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
    timeCategory: "evening"
},















































{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
     timeCategory: "evening"
},

{
    name: "Soul Insurance",
    artist: "Angie Stone ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Angie Stone  Soul Insurance.mp3",
    timeCategory: "evening"
},







   {
     name: "   I Like (12inch)",
    artist: "Young & Company  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Young & Company - I Like (12i nch).mp3",
     timeCategory: "evening"
},

{
     name: "  Windows ",
    artist: "SIL ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/SIL - Windows.mp3",
    timeCategory: "evening"
},

{
     name: "   The House Of God ",
    artist: "DHS",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/DHS - The House Of God.mp3",
    timeCategory: "evening"
},

{
     name: "    I Want You ",
    artist: "DJ Carl Cox",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/DJ Carl Cox - I Want You.mp3",
    timeCategory: "evening"
},

{
     name: "   Compnded ",
    artist: "DJ Edge ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/DJ Edge - Compnded.mp3",
    timeCategory: "evening"
},

{
     name: "  Rubb It In ",
    artist: "Fierce Ruling Diva ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Fierce Ruling Diva - Rubb It In.mp3",
    timeCategory: "evening"
},


{
     name: "   Searchin' (1990)",
    artist: "33 Queen ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/33 Queen - Searchin' (1990).mp3",
    timeCategory: "evening"
},




{
     name: "    Paris Latino",
    artist: "Bandolero ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Bandolero - Paris Latino.mp3",
    timeCategory: "evening"
},


{
     name: "    Street Dance ",
    artist: "Break Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Break Machine - Street Dance.mp3",
    timeCategory: "evening"
},





{
     name: "  Raise Me",
    artist: "Bizarre Inc  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Bizarre Inc - Raise Me.mp3",
    timeCategory: "evening"
},




{
     name: "  X Static",
    artist: "Bizarre Inc  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Bizarre Inc - X Static.mp3",
    timeCategory: "evening"
},






 {
     name: " Papua New Guinea ",
    artist: "FS Of London  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/FS Of London - Papua New Guinea.mp3",
    timeCategory: "evening"
},




















{
     name: "Jazz Carnaval",
    artist: "Azymuth",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnydanceoldies08.netlify.app/Azymuth - Jazz carnaval.mp3",
 timeCategory: "evening"

},




{
    name: " Forever ",
    artist: "A Van Buuren & Goodboys ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/A Van Buuren & Goodboys - Forever.mp3",
            timeCategory: "evening"
},


{
    name: " Daddy Cool",
    artist: "Boney M ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Boney M - Daddy Cool.mp3",
            timeCategory: "evening"
},








{
    name: "Bond Theme 77",
    artist: "James Bond",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/James Bond - Bond theme 77.mp3",
            timeCategory: "evening"
},




 
{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
             timeCategory: "evening"
},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
             timeCategory: "evening"
},
 

{
    name: "    Dance Dance   ",
    artist: "Gabry Ponte ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Gabry Ponte - Dance Dance.mp3",
             timeCategory: "evening"
},




{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you222.mp3",
            timeCategory: "evening"
},









{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
            timeCategory: "evening"
},








{
    name: "   Control ",
    artist: "Janet Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Janet Jackson - Control.mp3",
             timeCategory: "evening"
},


















{
    name: "   On My Love",
    artist: "Zara Larsson ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Zara Larsson - On My Love.mp3",
     timeCategory: "evening"
 },









{
    name: "  Keep The Fire Burnin'",
    artist: "Freemasons ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Freemasons - Keep the fire burnin'.mp3",
    timeCategory: "evening"
},






{
    name: "  Come and Get It",
    artist: "Ceranda ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Ceranda - Come and Get It.mp3",
      timeCategory: "evening"
},











{
    name: "  Illusion",
    artist: "Dua Lipa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Dua Lipa - Illusion.mp3",
       timeCategory: "evening"
},


{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
      timeCategory: "evening"
},
{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
        timeCategory: "evening"
},









{
    name: "Do It  (Boosted)",
    artist: "Peoples Choice",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Peoples choice Do it anyway you wanna boosted.mp3",
  


      timeCategory: "evening"
},























{
    name: " Sunglasses",
    artist: "Heidi Klum ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
    timeCategory: "evening"
},










{
    name: "Mesmerized (12inch)",
    artist: "Freemasons",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
    timeCategory: "evening"
},

 







{
    name: "   I'm Gonna Get You",
    artist: "Bizarre Inc. ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Bizarre Inc. - I'm Gonna Get You.mp3",
      timeCategory: "evening"
},






{
    name: " DD ",
    artist: "DD House  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/DD House - DD.mp3",
     timeCategory: "evening"
},




















































































































































{
    name: "The Weekend (2004)",
    artist: "Michael Gray  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Michael Gray - The weekend.mp3",
     timeCategory: "evening-late"
},




{
    name: "   The Love Parade  ",
    artist: "Da Hool ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Da Hool - Meet Her At The Love Parade.mp3",
    timeCategory: "evening-late"
},


 
{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you333.mp3",
    timeCategory: "evening-late"
},






{
    name: "   Break My Soul  ",
    artist: "Beyonce ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Beyoncé - Break My Soul.mp3",
     timeCategory: "evening-late"
},





 {
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
      timeCategory: "evening-late"
},













{
    name: "What Is Love",
    artist: "Deeelite ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Deeelite - What Is Love.mp3",
     timeCategory: "evening-late"
},














{
    name: "  Theme From S Express",
    artist: "S Express ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/S Express - Theme From S Express.mp3",
     timeCategory: "evening-late"
},




{
    name: "Body Motion",
    artist: "Sadomasy  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Sadomasy - Body Motion.mp3",
     timeCategory: "evening-late"
},














{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
     timeCategory: "evening-late"
},














{
  
    name: "Good Form",
    artist: "Nicki Minaj ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Nicki Minaj - Good Form.mp3",
     timeCategory: "evening-late"
},









{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
     timeCategory: "evening-late"
},










{
    name: " Poker Face",
    artist: "Lady Gaga  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Lady Gaga - Poker face.mp3",
     timeCategory: "evening-late"
},


 
{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
      timeCategory: "evening-late"
},



























{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj5.mp3",
      timeCategory: "evening-late"
},


  
{
    name: "     Young Hearts  (classic)  ",
    artist: "Candi Station ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Candi Station - Young Hearts Run Free.mp3",
      timeCategory: "evening-late"
},

{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
       timeCategory: "evening-late"
},


















{
    name: "  Paul Van Dyk",
    artist: "For An Angel ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/For an Ange l- Paul van Dyk.mp3",
     timeCategory: "evening-late"
},





{
    name: " Too Funky (12inch)",
    artist: "George Michael  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/George Michael - Too Funky.mp3",
    timeCategory: "evening-late"
},



{
    name: "  Rain Down Love",
    artist: "Siedah Garret ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Siedah Garret - Rain down Love.mp3",
    timeCategory: "evening-late"
},









{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
    timeCategory: "evening-late"
},






























































































{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
    timeCategory: "jingle-time"
},
{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
    timeCategory: "jingle-time"
},




{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
    timeCategory: "jingle-time"
},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
    timeCategory: "jingle-time"
},

{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
    timeCategory: "jingle-time"
},


{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
    timeCategory: "jingle-time"
},

{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
    timeCategory: "jingle-time"
},


{
    name: "Just for You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
    timeCategory: "jingle-time"
},



 
{
    name: "Just for You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you22.mp3",
    timeCategory: "jingle-time"
},















{
    name: "Welcome!",
    artist: "Sunny Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
  


    timeCategory: "jingle-time"
},













































































{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle11.mp3",
     timeCategory: "evening-late"
},

{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/do not turnoff receiver.mp3",
    timeCategory: "evening-late"
},






{
    name: "  Don't Mess With My Man",
    artist: "Lucy Pearl ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Lucy Pearl - Don't Mess With My Man.mp3",
    timeCategory: "evening-late"
},








{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
    timeCategory: "evening-late"
},







{
    name: "    Nothing Left To Loose ",
    artist: "Everything But The Girl  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Everything But The Girl - Nothing Left To Loose.mp3",
    timeCategory: "evening-late"
},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
     timeCategory: "evening-late"
},











{
  


  name: "Energy  52 (12inch)",
    artist: "Cafe Del Mar ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Cafe del Mar - Energy  52.mp3",
    timeCategory: "evening-late"
},















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
    timeCategory: "evening-late"
},






{
    name: "Shy",
    artist: "Kid Guente  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Kid Guente - Shy.mp3",
      timeCategory: "evening-late"
},










{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
     timeCategory: "evening-late"
},


{
    name: "   The Finest   ",
    artist: "SOS Band ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/SOS Band - The Finest (DJ'S Remix).mp3",
    timeCategory: "evening-late"
},













{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
     timeCategory: "evening-late"
},


{
    name: " Good Life (12inch)",
    artist: "Inner City  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Inner City - Good Life.mp3",
     timeCategory: "evening-late"
},








{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
    timeCategory: "evening-late"
},














{
    name: " Oh Sheila",
    artist: "Ready For The World ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Ready For The World - Oh Sheila.mp3",
  
   timeCategory: "evening-late"
},




{
    name: "Beautiful",
    artist: "Snoop Dogg",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Snoop Dogg - Beautiful (Official Music Video) ft. Pharrell Williams.mp3",
     timeCategory: "evening-late"
},





{
    name: "Fire For You",
    artist: "Cannons  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Cannons - Fire for You.mp3",
    timeCategory: "evening-late"
},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
    timeCategory: "evening-late"
},







{
    name: "Pretty Girls",
    artist: "Will Smith",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Will Smith - Pretty Girls.mp3",
     timeCategory: "evening-late"
},





{
    name: "Rumours",
    artist: "Lizzo",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Lizzo - Rumours.mp3",
     timeCategory: "evening-late"
},







{
    name: " Still Bad",
    artist: "Lizzo",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Lizzo - Still Bad.mp3",
     timeCategory: "evening-late"
},






{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
     timeCategory: "evening-late"
},






{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
     timeCategory: "evening-late"
},






{
    name: " All For You",
    artist: "Janet Jackson  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Janet Jackson - All for you.mp3",
    timeCategory: "evening-late"
},




{
    name: "Switch",
    artist: "Iggy Azalea ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Iggy Azalea - Switch.mp3",
    timeCategory: "evening-late"
},



{
    name: "Make Me Feel Good",
    artist: "Belters Only Feat. Jazzy",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Belters only feat. Jazzy - make me feel good.mp3",
    timeCategory: "evening-late"
},









{
    name: "  Cuff It  ",
    artist: "Beyonce ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Beyoncé - Cuff It.mp3",
     timeCategory: "evening-late"
},





{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
    timeCategory: "evening-late"
},


  





{
    name: "  Nights Over Egypt ",
    artist: "Jones Girls ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Jones Girls - Nights Over Egypt.mp3",
    timeCategory: "evening-late"
},




{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you22.mp3",
    timeCategory: "evening-late"
},














{
     name: "  Deephouse ",
    artist: "Vibey ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Vibey02.mp3",
    timeCategory: "evening-late"
},












{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
    timeCategory: "evening-late"
},












{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
     timeCategory: "evening-late"
},



{
    name: "Just for You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
     timeCategory: "evening-late"
},



 













{
    name: " Oh Sheila",
    artist: "Ready For The World ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Ready For The World - Oh Sheila.mp3",
  


    timeCategory: "evening-late"
},


{
    name: "Welcome!",
    artist: "Sunny Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
  


    timeCategory: "evening-late"
},





{
    name: " Hip Hop Lollipop",
    artist: "Bootsy Collins",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Bootsy Collins, Fantaazma - Hip Hop Lollipop.mp3",
    timeCategory: "evening-late"
},


{
    name: "Body Motion",
    artist: "Sadomasy  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Sadomasy - Body Motion.mp3",
       timeCategory: "evening-late"
},




{
    name: "Hypnotize",
    artist: "The Notorious B.I.G  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Hypnotize--The Notorious B.I.G..mp3",
       timeCategory: "evening-late"
},

{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
      timeCategory: "evening-late"
},

{
     name: " Free Yourself",
    artist: "Jessie Ware  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Jessie Ware - Free Yourself.mp3",
      timeCategory: "evening-late"
},


























{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
       timeCategory: "evening-late"
},


{
    name: " Good Life (12inch)",
    artist: "Inner City  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Inner City - Good Life.mp3",
       timeCategory: "evening-late"
},








{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
      timeCategory: "evening-late"
},








{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
      timeCategory: "evening-late"
},









{
    name: "Takes A Little Time",
    artist: "Total Contrast ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Total Contrast - Takes a little time.mp3",
      timeCategory: "evening-late"
},






{
    name: " Like That",
    artist: "Doja Cat",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Doja Cat - Like That.mp3",
      timeCategory: "evening-late"
},
















{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
       timeCategory: "evening-late"
},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
        timeCategory: "evening-late"
},





   












{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
    timeCategory: "evening-late"
},










{
     name:  "React ",
    artist: "Switch Disco ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Switch Disco - React.mp3",
      timeCategory: "evening-late"
},


{
    name: " Hey Hey Original",
    artist: "Dennis Ferrer",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Dennis Ferrer- Hey Hey original.mp3",
    timeCategory: "evening-late"
},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
    timeCategory: "evening-late"
},



{
    name: "Paradise",
    artist: "Medusa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Medusa - Paradise.mp3",
   timeCategory: "evening-late"
},











{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
    timeCategory: "evening-late"
},














{
    name: " Empty Promises",
    artist: "Jazzy ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Jazzy - Empty Promises.mp3",
    timeCategory: "evening-late"
},






{
    name: "  Ask And You Shall Receive",
    artist: "Rita Ora ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Rita Ora - Ask And You Shall Receive.mp3",
      timeCategory: "evening-late"
},


 


 
{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle22.mp3",
      timeCategory: "evening-late"
},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
    timeCategory: "evening-late"
},






{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
    timeCategory: "evening-late"
},

 {
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
    timeCategory: "evening-late"
},





{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
    timeCategory: "evening-late"
},













{
    name: " Truth Or Dare",
    artist: "Tyla  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Tyla - Truth Or Dare.mp3",
   timeCategory: "evening-late"
},





























 









{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
   timeCategory: "evening-late"
},







{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
   timeCategory: "evening-late"
},














{
     name: "  Deephouse ",
    artist: "Vibey ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Vibey01.mp3",
     timeCategory: "evening-late"
},



{
     name: " Time After Time",
    artist: "Pacal Letoublon ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Pacal Letoublon - Time After Time.mp3",
   timeCategory: "evening-late"
},



{
    name: " Car Keys",
    artist: "Alok & Ava Max    ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Alok & Ava Max - Car Keys.mp3",
   timeCategory: "evening-late"
},




{
     name: "  Welcome To The Opera",
    artist: "Anyma  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Anyma & Grimes - Welcome To The Opera.mp3",
   timeCategory: "evening-late"
},


{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
    timeCategory: "evening-late"
},





{
    name: " Ffun",
    artist: "Con Funk Shun",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Con Funk Shun- Ffun.mp3",
   timeCategory: "evening-late"
},




{
    name: " New Moon",
    artist: "Mo",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Mo - New Moon.mp3",
    timeCategory: "evening-late"
},




{
     name: "  Houdini",
    artist: "Dua Lipa  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Dua Lipa - Houdini.mp3",
     timeCategory: "evening-late"
},


{
    name: "Midnight Sky",
    artist: "Miley Cyrus ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Miley Cyrus - Midnight Sky.mp3",
   timeCategory: "evening-late"
},

{
    name: " Stay With Me",
    artist: "Calvin Harris",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Calvin Harris - Stay with me.mp3",
     timeCategory: "evening-late"
},





{
    name:  "Vibe Like This",
    artist: "SG Lewis ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/SG Lewis - Vibe Like This.mp3",
  


      timeCategory: "evening-late"
},


{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
      timeCategory: "evening-late"
},






























{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle22.mp3",
      timeCategory: "evening-late"
},

















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
      timeCategory: "evening-late"
},











{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj5.mp3",
      timeCategory: "evening-late"
},


  


{
    name: "   One More Time",
    artist: "Daft Punk  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://Sunnydanceoldies04.netlify.app/Daft Punk - One More Time.mp3",
      timeCategory: "evening-late"
},






{
    name: "Best Things  ",
    artist: "Luther Vandross ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://Sunnydanceoldies04.netlify.app/Luther Vandross & Janet Jackson - Best things in life are free.mp3",
      timeCategory: "evening-late"
},







{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny radio jingle3.mp3",
      timeCategory: "evening-late"
},



{
    name: "Booty Call",
    artist: "Aronchupa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Aronchupa - Booty Call.mp3",
 timeCategory: "evening-late"
},


{
    name: "Use Me  (12inch)",
    artist: "Paul Simpson Connection",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Paul Simpson connection - Use me Loose.mp3",
  


},









{
    name: " Too Much Too Late",
    artist: "Dee Johnson   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Dee Johnson - Too much too late.mp3",
  },



{
     name: "Medicine Song (1984)",
    artist: " Stephanie Mills",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Stephanie Mills - The Medicine Song.mp3",
  },





{
    name: "   Good Good",
    artist: "Usher ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Usher - Good Good.mp3",
  

timeCategory: "evening-late"
},






{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
 timeCategory: "evening-late"
},








{
     name: " Don't Look Any Further ",
    artist: "Dennis Edwards  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Dennis Edwards - Don't Look Any Further.mp3",
  timeCategory: "evening-late"
},

{
    name: "  Swim ",
    artist: "Becky Hill ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Becky Hill - Swim.mp3",
 timeCategory: "evening-late"
},




{
    name: " Music Is My Way Of Life",
    artist: "Full Flava ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Music is my way of life - Full flava.mp3",
  timeCategory: "evening-late"
},





{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
 timeCategory: "evening-late"
},


{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  timeCategory: "evening-late"
},


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny dance jingle.mp3",
  timeCategory: "evening-late"
},


{
    name: "  Work With You Love ",
    artist: "Alok    ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Alok - Work With You Love.mp3",
   timeCategory: "evening-late"
},



{
    name: "   After Hours ",
    artist: "DVBBS   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/DVBBS - After Hours.mp3",
 timeCategory: "evening-late"
},



{
    name: " Live To Tell (1986) ",
    artist: "Madonna  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Madonna - Live To Tell (1986).mp3",
 timeCategory: "evening-late"
},



{
    name: "Better Than Ever",
    artist: "Nona",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Nona - Beter than ever.mp3",
  timeCategory: "evening-late"
},



















{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
  timeCategory: "evening-late"
},







{  
    name: "You Rock My World",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Michael Jackson - You rock my world.mp3",
 timeCategory: "evening-late"
},




































{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny radio jingle4.mp3",
 timeCategory: "evening-late"
},


{
    name: "    Dance (Do What You Wanna Do) ",
    artist: "Sun  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Sun - Dance (Do What You Wanna Do).mp3",
 timeCategory: "evening-late"
},











 

































{
    name: "Welcome!",
    artist: "Sunny Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
  


 timeCategory: "evening-late"
},










{
     name: "  Tension ",
    artist: "Kylie Minogue  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Kylie Minogue - Tension.mp3",
  timeCategory: "evening-late"
},








{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
   timeCategory: "evening-late"
},













{
     name: " Don't Be Afraid",
    artist: "Diplo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Diplo & Damian Lazarus - Don't be afraid.mp3",
   timeCategory: "evening-late"
},














{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle22.mp3",
   timeCategory: "evening-late"
},

































{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
 timeCategory: "evening-late"
},





{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
 timeCategory: "evening-late"
},















{
    name: "   The One ",
    artist: "Inji   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Inji - The One.mp3",
   timeCategory: "evening-late"
},















{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
      timeCategory: "evening-late"
},





{
     name: "Loving You",
    artist: "The Cannons ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/The Cannons - Loving You.mp3",
        timeCategory: "evening-late"
},









{
    name: " SevenStars (Dragonfighters)",
    artist: "Quazar  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Quazar - SevenStars (Dragonfighters).mp3",
    timeCategory: "evening-late"
},




{
    name: " Girls On My Mind (1985) ",
    artist: "Fatback ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Fatback - Girls On My Mind.mp3",
  timeCategory: "evening-late"
},





{
    name: " Backstrokin'(1980) ",
    artist: "Fatback ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Fatback - Backstrokin'.mp3",
  timeCategory: "evening-late"
},


{
    name: "Ain't Nothing Goin'  (1986)",
    artist: "Gwen Guthrie  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Gwen Guthrie- Ain't Nothing Goin' On But The Rent.mp3",
  timeCategory: "evening-late"
},







{
    name: "Psychofreak",
    artist: "Camila Cabello ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Camila Cabello - Psychofreak.mp3",
      timeCategory: "evening-late"
},


{
    name: "     Trick Me ",
    artist: "Kelis ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Kelis - Trick Me.mp3",
      timeCategory: "evening-late"
},




{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet4.mp3",
      timeCategory: "evening-late"
},



{
    name: " Free ",
    artist: "Ultra Naté ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Ultra Naté - Free.mp3",
  


      timeCategory: "evening-late"
},

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
      timeCategory: "evening-late"
},




{
    name: " All Night Long",
    artist: "Splendor ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Splendor - All night long.mp3",
  


      timeCategory: "evening-late"
},





{
    name: "Your Addiction",
    artist: "Nightclub ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Nightclub - Your Addiction.mp3",
      timeCategory: "evening-late"
},

{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
      timeCategory: "evening-late"
},












{
    name: "    Nanana   ",
    artist: "Peggy Gou  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Peggy Gou - Nanana.mp3",
       timeCategory: "evening-late"
},




{
    name: "  The Lost Room  ",
    artist: "Pet Shop Boys  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Pet Shop Boys - The Lost Room.mp3",
      timeCategory: "evening-late"
},

















 


 








{
     name: " Do it to it",
    artist: "Acraze",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Acraze - Do it to it.mp3",
      timeCategory: "evening-late"
},














{
    name: " Wild Girls",
    artist: "Klymaxx",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Wild Girls - Klymaxx.mp3",
  


      timeCategory: "evening-late"
},



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
      timeCategory: "evening-late"
},










{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
      timeCategory: "evening-late"
},


{
    name: "    The Right Time  ",
    artist: "Lisa Stansfield ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Lisa Stansfield - This Is The Right Time (US Version).mp3",
      timeCategory: "evening-late"
},

















{
    
    name: "Deephouse",
    artist: "Vibey",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Vibey04.mp3",
      timeCategory: "evening-late"
},












{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
       timeCategory: "evening-late"
},

{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/DJ S.mp3",
      timeCategory: "evening-late"
},

{
  


  name: " Yaaah (12inch) ",
    artist: "D-Shake",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/D-Shake - Techno Trance Yaaah.mp3",
      timeCategory: "evening-late"
},





{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/reklame/reklame1.mp3",
       timeCategory: "evening-late"
},



















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
       timeCategory: "evening-late"
},




{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
       timeCategory: "evening-late"
},


{
    name: "Dolce Vita (12inch)",
    artist: "Ryan Paris",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Ryan Paris - Dolce Vita.mp3",
  
},


{
    name: "New To You",
    artist: "Calvin Harris",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Calvin Harris - New to you.mp3",
        timeCategory: "evening-late"
},

{
    name: "    Lay Low",
    artist: "Tiesto ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Tiësto - Lay Low.mp3",
       timeCategory: "evening-late"
},

{
    name: "   All Nite",
    artist: "Janet Jackson  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Janet Jackson - All Nite.mp3",
       timeCategory: "evening-late"
},


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
      timeCategory: "evening-late"
},
{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
      timeCategory: "evening-late"
},

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
      timeCategory: "evening-late"
},


















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj2.mp3",
      timeCategory: "evening-late"
},











{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  timeCategory: "evening-late"
},






{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle22.mp3",
   timeCategory: "evening-late"
},









{
    name: "     Human League  ",
    artist: "Human",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Human - Human League.mp3",
      timeCategory: "evening-late"
},


{
    name: "Just Get Ready (12inch) ",
    artist: "Sos Band",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Sos Band - Just get ready (Ben lIebrand remix).mp3",
      timeCategory: "evening-late"
},











 
{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny dance jingle.mp3",
     timeCategory: "evening-late"
},
 














{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
     timeCategory: "evening-late"
},



{
    name: "  Another Chance  ",
    artist: "Roger Sanchez  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Roger Sanchez - Another Chance.mp3",
      timeCategory: "evening-late"
},

















{
     name: " DJ Take Control ",
    artist: "SL2  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/SL2 - DJ Take Control.mp3",
  
    timeCategory: "evening-late"


},





{
     name: "  Houdini (maxi)",
    artist: "Dua Lipa  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Dua Lipa - Houdin1 (maxi).mp3",
  timeCategory: "evening-late"

},







{
    name: "The Weekend",
    artist: "Michael Gray  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  timeCategory: "evening-late"

},










{
    name: "   Paradise",
    artist: "Sophie And The Giants   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Sophie And The Giants - Paradise.mp3",
  timeCategory: "evening-late"

},









{
    name: "  Danger ",
    artist: "Olivia Dean ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
   timeCategory: "evening-late"

},



































{
    name: "Juice",
    artist: "Lizzo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Lizzo2 - Juice.mp3",
    timeCategory: "evening-late"
},









 






{
    name: " You Are My Melody  ",
    artist: "Change  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Change - You Are My Melody.mp3",
    timeCategory: "evening-late"


},



{
    name: "  Thinkin' about your love",
    artist: "Skipworth & Turner ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Skipworth & Turner - Thinkin' about your love.mp3",
  timeCategory: "evening-late"


},










{
    name: "I Wish",
    artist: "Joel Corry",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Joel Corry - I wish.mp3",
  timeCategory: "evening-late"

},



{
    name: " I Am The Drama  ",
    artist: "Bebe Rexha  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you22.mp3",
  timeCategory: "evening-late"

},





{
    name: "  Energy Flash ",
    artist: "Joey Beltram  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Joey Beltram - Energy Flash.mp3",
  
  timeCategory: "evening-late"

},


{
    name: " Sun Is Shining ",
    artist: " Funkstar Deluxe ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Sun is shining - Funkstar deluxe.mp3",
  
  timeCategory: "evening-late"

},




{
    name: " Open your mind",
    artist: "Usura ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Usura - Open your mind.mp3",
    timeCategory: "evening-late"


},



{
     name: "   The Power",
    artist: " Snap",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://thechime.netlify.app/Half Snap - The Power.mp3",
     timeCategory: "evening-late"
},


















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  timeCategory: "evening-late"


},
 
{
    name: "     Groovejet ",
    artist: "Spiller ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Spiller - Groovejet.mp3",
      timeCategory: "evening-late"
},






{
    name: "  La Raza ",
    artist: "Kid Frost",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Kid Frost - La Raza 1.mp3",
       timeCategory: "evening-late"
},









{
    name: "  20 hz  ",
    artist: " Capricorn  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Capricorn - 20 hz.mp3",
  
  timeCategory: "evening-late"

},


 











{
     name: " Don't Be Afraid",
    artist: "Diplo & Damian Lazarus ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Diplo & Damian Lazarus - Don't be afraid.mp3",
  timeCategory: "evening-late"

},




{
    name: "Praising You",
    artist: "Rita Ora ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Rita Ora - Praising You.mp3",
  


  timeCategory: "evening-late"

},





{
    name: "Nothing But You",
    artist: "Paul Van Dyk",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
  timeCategory: "evening-late"

},




{
     name: "    Water Slide",
    artist: "Janelle Monae",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Janelle Monae - Water Slide.mp3",
     timeCategory: "evening-late"
},


{
    name: " Who Is She 2 U",
    artist: "Brandy",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Brandy - Who is she 2 U.mp3",
  


  timeCategory: "evening-late"

},

{
    name: " Happy Ending",
    artist: "Kelela ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Kelela - Happy Ending.mp3",
 
      timeCategory: "evening-late"
 },


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj5.mp3",
      timeCategory: "evening-late"
},

{
    name: "  Sandstorm",
    artist: "Darude",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Darude - Sandstorm.mp3",
  timeCategory: "evening-late"

},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj5.mp3",
      timeCategory: "evening-late"
},





{
    name: "Get Lucky (12inch)",
    artist: "Daft Punk ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Daft Punk - Get Lucky.mp3",
  timeCategory: "evening-late"

},





{
     name: " Gone",
    artist: "Noa Kirel  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Noa Korel - Gone.mp3",
  timeCategory: "evening-late"

},




{
    name: "Game Of Life (12inch)",
    artist: "Sugar Rainbow",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Sugar rainbow - Game of life.mp3",
    timeCategory: "evening-late"

},

















{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
    timeCategory: "evening-late"
},















{
    name: "  Confused ",
    artist: "Minelli ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Minelli - Confused.mp3",
  timeCategory: "evening-late"

},





  


{
    name: "  Brazil ",
    artist: "Spectrum ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Spectrum - Brazil.mp3",
    timeCategory: "evening-late"

},





{
    name: " French Kiss (1989)",
    artist: "Lil Louis   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Lil Louis - French Kiss.mp3",
    timeCategory: "evening-late"


},



{
    name: " French Kiss (1989)",
    artist: "Lil Louis   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Lil Louis - French Kiss.mp3",
    timeCategory: "evening-late"


},


{
    name: " Go (1991)",
    artist: "Moby",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic08.netlify.app/Moby - Go 1991.mp3",
    timeCategory: "evening-late"


},




{
    name: " Murphys Law",
    artist: "Cheri ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Cheri -Murphys Law.mp3",
    timeCategory: "evening-late"


},

{
    name: "  Popcorn Makers",
    artist: "Popcorn ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Popcorn - Popcorn Makers.mp3",
    timeCategory: "evening-late"


},




{
    name: "Enjoy The Silence",
    artist: "Depeche Mode ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Depeche Mode - Enjoy The Silence.mp3",
    timeCategory: "evening-late"
},
  





{
    name: "Die In The Disco",
    artist: "Nightclub",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Nightclub - Die in the Disco.mp3",
  


  timeCategory: "evening-late"
}, 











{
    name: " Shoot Your Shot (1982) ",
    artist: "Divine   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Divine - Shoot Your Shot (1982).mp3",
   timeCategory: "evening-late"
},






{
    name: " Blue",
    artist: "Miley Cyrus & Bebe Rexha  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Miley Cyrus & Bebe Rexha- Blue.mp3",
  timeCategory: "evening-late"
},












 







{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you33.mp3",
    timeCategory: "evening-late"
},




{
    name: "    Seven Stars",
    artist: "Quazar ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Quazar - Seven Stars.mp3",
  

  timeCategory: "evening-late"
},




{
    name: "  Lfo",
    artist: "Lfo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies08.netlify.app/Lfo - Lfo.mp3",
  

  timeCategory: "evening-late"
},






{
    name: " Right Here",
    artist: "Jesse Glyne ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies08.netlify.app/Jesse Glyne - right here.mp3",
  

  timeCategory: "evening-late"
},















{
    name: " Like I like It ",
    artist: " Aurra ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Aurra - Like I like It.mp3",
  timeCategory: "evening-late"


},

{
    name: " 19 ",
    artist: " Paul Hardcastle ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/19 - Paul Hardcastle.mp3",
    timeCategory: "evening-late"


},


{
    name: " All Night Long ",
    artist: "Mary Jane Girls ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Mary Jane Girls - All Night Long.mp3",
    timeCategory: "evening-late"


},




 

{
    name: " Searchin'  ",
    artist: "Hazel Dean ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Hazel Dean - Searchin'.mp3",
    timeCategory: "evening-late"


},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
    timeCategory: "evening-late"


},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female DJ1 dance.mp3",
      timeCategory: "evening-late"
},



{
    name: "Polynomial C",
    artist: "Aphex Twin ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Aphex Twin - Polynomial C.mp3",
   timeCategory: "evening-late"
},








{
     name:  "Fever ",
    artist: "Charlotte Day Wilson ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Charlotte Day Wilson - Fever.mp3",
   timeCategory: "evening-late"
},

{
    name: "    Nothing Left To Loose ",
    artist: "Everything But The Girl  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Everything But The Girl - Caution To The Wind.mp3",
  timeCategory: "evening-late"
},
 
{
    name: "   Love Is My Drug ",
    artist: "Post Malone   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Post Malone - Love Is My Drug.mp3",
  timeCategory: "evening-late"
},


{
    name: "  Hangin' On A String (classic)  ",
    artist: "Loose Ends  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Loose Ends - Hangin' On A String (12inch).mp3",
   timeCategory: "evening-late"
},




{
     name: "Freak Of Nature",
    artist: "Amir",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Amir - Freak of Nature.mp3",
  timeCategory: "evening-late"
},




{
    name: "   Ugly Ego (classic)",
    artist: "Cameo  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Cameo - Ugly Ego.mp3",
   timeCategory: "evening-late"
},




{
    name: "Fall",
    artist: "Full Flava",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Full Flava - Fall.mp3",
  


  timeCategory: "evening-late"
},

{
    name: "   Murder On The Dancefloor  ",
    artist: "Sophie Bextor ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Sophie Ellis-Bextor - Murder On The Dancefloor.mp3",
   timeCategory: "evening-late"
},




{
     name: " Still",
    artist: "Dr Dre feat. Snoop Dogg  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Dr Dre feat. Snoop Dogg - Still.mp3",
   timeCategory: "evening-late"
},


{
     name: "Experience",
    artist: "Victoria Monet ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Victoria Monet - Experience.mp3",
    timeCategory: "evening-late"
},







 {
     name: "  Promise Me",
    artist: "Rose Gray  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Rose Gray - Promise Me.mp3",
   timeCategory: "evening-late"
},






{
    name: "It's Allright (12inch)",
    artist: "NV",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/NV- it's allright.mp3",
  timeCategory: "evening-late"
},










{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
    timeCategory: "evening-late"
},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  timeCategory: "evening-late"
},

{
    name: " You See The Trouble  ",
    artist: "Black Legend ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/You see the trouble with me - Black Legend.mp3",
    timeCategory: "evening-late"
},




{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  timeCategory: "evening-late"
},








{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
   timeCategory: "evening-late"
},









{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  timeCategory: "evening-late"
},

{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
   timeCategory: "evening-late"
},

{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  timeCategory: "evening-late"
}, 





{
    name: "Run",
    artist: "Becky Hill",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Becky Hill - Run.mp3",
  timeCategory: "evening-late"
},





{
    name: "  Right My Wrongs",
    artist: "Jastin Martin ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Jastin Martin - Right My Wrongs.mp3",
   timeCategory: "evening-late"
},





 
{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
   timeCategory: "evening-late"
},

{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/do not turnoff receiver.mp3",
   timeCategory: "evening-late"
},





{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
   timeCategory: "evening-late"
},




{
    name: "  Stakker Humanoid (1988) ",
    artist: "Humanoid",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Humanoid - Stakker Humanoid.mp3",
   timeCategory: "evening-late"
},





 

{
    name: "  Contact  ",
    artist: "Kelela  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Kelela - Contact.mp3",
   timeCategory: "evening-late"
},







{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
    timeCategory: "evening-late"
},
{
    name: "Welcome!",
    artist: "Sunny Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
  


  timeCategory: "evening-late"
},



{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_01.mp3",
    timeCategory: "evening-late"
},

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
   timeCategory: "evening-late"
},

{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_03.mp3",
   timeCategory: "evening-late"
},



{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_04.mp3",
  timeCategory: "evening-late"
},


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
   timeCategory: "evening-late"
},


{
    name: " Cry Baby",
    artist: "Clean Bandit  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Clean Bandit - Cry Baby.mp3",
  },


{
    name: "The Amsterdam IT(classic) ",
    artist: "90 s House",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/House01.mp3",
   timeCategory: "evening-late"
},

 
{
    name: "The Amsterdam IT (classic)",
    artist: "90 s House",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/House02.mp3",
   timeCategory: "evening-late"
},




{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
  timeCategory: "evening-late"
},


{
    name: "The Amsterdam IT (classic)",
    artist: "90 s House",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/House03.mp3",
  timeCategory: "evening-late"
},

{
    name: "The Amsterdam IT (classic) ",
    artist: "90 s House",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/House04.mp3",
  timeCategory: "evening-late"
},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
  timeCategory: "evening-late"
},


{
    name: " 10 35",
    artist: "Tate McRae ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Tate McRae - 10 35.mp3",
  timeCategory: "evening-late"
},


{
    name: "Rise",
    artist: "Purple disco machine ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Purple disco machine - Rise.mp3",
  timeCategory: "evening-late"
},


{
     name: "  All By Myself",
    artist: "Ellie Goulding  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Ellie Goulding - All By Myself.mp3",
  timeCategory: "evening-late"
},



{
    name: "The Amsterdam IT (classic)",
    artist: "90 s House",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/House05.mp3",
  timeCategory: "evening-late"
},


{
    name: "The Amsterdam IT (classic)",
    artist: "90 s House",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/House06.mp3",
  timeCategory: "evening-late"
},

{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj6.mp3",
  timeCategory: "evening-late"
},





{
    name: "The Amsterdam IT",
    artist: "90 s House",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/House07.mp3",
   timeCategory: "evening-late"
},


{
    name: "The Amsterdam IT",
    artist: "90 s House",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/House08.mp3",
   timeCategory: "evening-late"
},




{
    name: " Why Can't We Start Again",
    artist: "How & Little ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/How & Little - Why Can't We Start Again.mp3",
   timeCategory: "evening-late"
},








{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
    timeCategory: "evening-late"
},

{
    name: " Turn On Tune In  ",
    artist: "Freak Power ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Freak Power - Turn On Tune In Cop Out.mp3",
   timeCategory: "evening-late"
},

















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  timeCategory: "evening-late"
},





{
    name: "Chillhouse Del Mar",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/chillhouse del mar04.mp3",
    timeCategory: "evening-late"
},











{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
   timeCategory: "evening-late"
},







{
    name: "Miss A Thing",
    artist: "Kylie Minogue   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Kylie Minogue - Miss a thing.mp3",
    timeCategory: "evening-late"
},









{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
   timeCategory: "evening-late"
},
 




{
    name: "Love Come Down (classic)",
    artist: "Evelyn King ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Evelyn King - Love come down.mp3",
  timeCategory: "evening-late"
},




{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/reklame/reklame1.mp3",
   timeCategory: "evening-late"
},












{
    name: "One Kiss",
    artist: "Dua lipa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Dua lipa - One Kiss.mp3",
   timeCategory: "evening-late"
},


{
    name: "Allright",
    artist: "Jamiroquaii",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Jamiroquaii - Allright.mp3",
   timeCategory: "evening-late"
},






 







{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you33.mp3",
   timeCategory: "evening-late"
},







{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you33.mp3",
   timeCategory: "evening-late"
},















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
    timeCategory: "evening-late"
},
 





{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/reklame/reklame.mp3",
   timeCategory: "evening-late"
},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
    timeCategory: "evening-late"
},
 
















{
    name: "   Save Your Soul",
    artist: "Tink ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Tink - Save Your Soul.mp3",
  timeCategory: "evening-late"
},





{
    name: " Back To You ",
    artist: "Lost Frequencies    ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Lost Frequencies - Back To You.mp3",
    timeCategory: "evening-late"
},




{
    name: "Midnight Sun",
    artist: "Zara Larsson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Zara Larsson - Midnight Sun.mp3",
    timeCategory: "evening-late"
},


{
    name: "I fell In Love",
    artist: "Alok & Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Alok & Kylie Minogue- I fell In Love.mp3",
    timeCategory: "evening-late"
},









{
     name: " Cybersonic",
    artist: "Technarchy ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Technarchy - Cybersonic.mp3",
   timeCategory: "evening-late"
},



{
     name: "   My House Is Your",
    artist: "The Break Boys",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/The Break Boys - My House Is Your House.mp3",
   timeCategory: "evening-late"
},


{
     name: "  Android",
    artist: "The Prodigy ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/The Prodigy - Android.mp3",
    timeCategory: "evening-late"
},


{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/do not turnoff receiver.mp3",
   timeCategory: "evening-late"
},




{
     name: " The Art Of ",
    artist: "The Suburban Knight  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/The Suburban Knight - The Art Of Stalking.mp3",
    timeCategory: "evening-late"
},








{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
      timeCategory: "evening-late"
},
 









{
    name: "  Theme From S Express",
    artist: "S Express ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/S Express - Theme From S Express.mp3",
      timeCategory: "evening-late"
 },















































































{
    name: "    Seven Stars",
    artist: "Quazar ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Quazar - Seven Stars.mp3",
  

  timeCategory: "evening-late"
},










{
    name: " Funkytown (1980)",
    artist: "Lipps Inc. ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Lipps Inc. - Funkytown (1980).mp3",
  timeCategory: "evening-late"
},












{
    name: "Looking Now",
    artist: "Bebe Rexha   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Bebe Rexha - Looking now.mp3",
  timeCategory: "evening-late"
},







{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  timeCategory: "evening-late"
},
 



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  timeCategory: "evening-late"
},





{
    name: "Lifetimes ",
    artist: "Katy Perry ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic07.netlify.app/Katy Perry - Lifetimes.mp3",
  


  timeCategory: "evening-late"
},






















{
    name: "Bad Company",
    artist: "Purple Disco Machine ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Purple Disco Machine - Bad Company.mp3",
  timeCategory: "evening-late"
},



{
     name: " Don't Forget",
    artist: "Diplo & Miguel ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Diplo & Miguel - Don't forget my love.mp3",
    timeCategory: "evening-late"
},


{
    name: "Running Up That Hill (12inch)",
    artist: "Kate Bush ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Kate Bush - Running up that hill (12inch).mp3",
  timeCategory: "evening-late"
},










{
    name: "Real Groove",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Kylie Minogue -Real Groove.mp3",
  


    timeCategory: "evening-late"
},













{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
     timeCategory: "evening-late"
},







{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
     timeCategory: "evening-late"
},

































































{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
    timeCategory: "evening-late"
},






{
    name: "Chillhouse Del Mar",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/chillhouse del mar04.mp3",
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
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
      timeCategory: "evening-late"
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
    timeCategory: "evening-late"
},



{
    name: "  Work With You Love ",
    artist: "Alok    ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Alok - Work With You Love.mp3",
    timeCategory: "evening-late"
},




{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
     timeCategory: "evening-late"
},











{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
     timeCategory: "evening-late"
},


  



































{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
        timeCategory: "evening-late"
},


{
    name: "Suburbia",
    artist: "Tove Lo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Tove Lo - Suburbia.mp3",
       timeCategory: "evening-late"
},
{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


      timeCategory: "evening-late"
},

{
    name: "Grandmaster Flash ",
    artist: "White  Lines ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/White  Lines - Grandmaster Flash & the furious five.mp3",
      timeCategory: "evening-late"
},

{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/reklame/reklame1.mp3",
      timeCategory: "evening-late"
},


{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet4.mp3",
        timeCategory: "evening-late"
},



{
    name: "Sunday Night",
    artist: "Holy Molly x Lizot ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Holy Molly x Lizot - Sunday Night.mp3",
       timeCategory: "evening-late"
},










{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
       timeCategory: "evening-late"
},

{
     name: " Free Yourself",
    artist: "Jessie Ware  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Jessie Ware - Free Yourself.mp3",
        timeCategory: "evening-late"
},



















{
    name: " I Am The Drama  ",
    artist: "Bebe Rexha  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Bebe Rexha - I Am The Drama.mp3",
  
      timeCategory: "evening-late"
},
{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
      timeCategory: "evening-late"
},







































































{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you333.mp3",
   timeCategory: "f afternoon"
},




{
    name: "Pacific State",
    artist: "808 State  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/808 state - Pacific State.mp3",
      timeCategory: "f afternoon"
 },








{
    name: "Taste Of You",
    artist: "Rezz",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Rezz - Taste of you.mp3",
       timeCategory: "f afternoon"

},










{
    name: "West End Girls ",
    artist: "Pet Shop Boys ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Pet Shop Boys - West End Girls (10'' Mix).mp3",
      timeCategory: "f afternoon"

 },





{
    name: "  Flashdance",
    artist: "Irene Cara   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Irene Cara - Flashdance.mp3",
     timeCategory: "f afternoon"

},




{
    name: " Bounce Skate Roll (12inch) ",
    artist: "Vaughan  Mason & Crew",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Vaughan  Mason & Crew - Bounce skate roll.mp3",
       timeCategory: "f afternoon"

},





{
    name: "Sacrifice",
    artist: "Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Bebe Rexha - Sacrifice.mp3",
         timeCategory: "f afternoon"


},


{
    name: "  Playgirl (1979)  ",
    artist: "La Velle ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/La Velle - Playgirl.mp3",
      timeCategory: "f afternoon"


},





{
    name: " 10 35",
    artist: "Tate McRae ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Tate McRae - 10 35.mp3",
      timeCategory: "f afternoon"
},


{
    name: "Rise",
    artist: "Purple disco machine ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Purple disco machine - Rise.mp3",
     timeCategory: "f afternoon"
},


{
     name: "  All By Myself",
    artist: "Ellie Goulding  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Ellie Goulding - All By Myself.mp3",
    timeCategory: "f afternoon"
},








{
    name: "   Fake Love",
    artist: "Tink ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Tink - Fake Love.mp3",
    timeCategory: "f afternoon"
},





{
    name: "  Come and Get It",
    artist: "Ceranda ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Ceranda - Come and Get It.mp3",
    timeCategory: "f afternoon"
},





{
    name: " Closer To The Floor (new)",
    artist: "Jazzy & Ankhoï ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic08.netlify.app/Jazzy & Ankhoï - Closer To The Floor.mp3",
  timeCategory: "f afternoon"
},




{
    name: "Devils Gun (12inch)",
    artist: "CJ & Co  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/CJ & Co - Devils Gun.mp3",
     timeCategory: "f afternoon"
},
  
 
{
    name: "Gimme Gimme Gimme",
    artist: "Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Bebe Rexha - Gimme gimme gimme.mp3",
    timeCategory: "f afternoon"
},












{
    name: "  Illusion",
    artist: "Dua Lipa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Dua Lipa - Illusion.mp3",
     timeCategory: "f afternoon"
},


{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
      timeCategory: "f afternoon"
},
{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
    timeCategory: "f afternoon"
},



 



{
    name: " Happy Ending",
    artist: "Kelela ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Kelela - Happy Ending.mp3",
    timeCategory: "f afternoon"
},

{
    name: "Welcome!",
    artist: "Sunny Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
    timeCategory: "f afternoon"
},


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
      timeCategory: "f afternoon"
},


{
    name: "Gonna Get Over You",
    artist: "Beverlei Brown ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Gonna get over you - Beverlei Brown.mp3",
    timeCategory: "f afternoon"
},












{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
    timeCategory: "f afternoon"
},
 


















{
    name: " Sweetest Pie",
    artist: "Stallion & Dua Lipa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Stallion & Dua Lipa - Sweetest Pie.mp3",
    timeCategory: "f afternoon"
},








{
    name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
     timeCategory: "f afternoon"
},











{
    name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
    timeCategory: "f afternoon"
},










{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle22.mp3",
    timeCategory: "f afternoon"
},






{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
     timeCategory: "f afternoon"
},









{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
     timeCategory: "f afternoon"
},


  






 

 


{
    name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
     timeCategory: "f afternoon"
},


{
    
    name: "Chillhouse Del Mar",
    artist: "Chillhouse",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/chillhouse del mar07.mp3",
     timeCategory: "f afternoon"
},






{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
    timeCategory: "f afternoon"
},

{
    name: "   I Can Boogie ",
    artist: "Baccara",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Baccara - Yes Sir  I Can Boogie.mp3",
     timeCategory: "f afternoon"
},








{
    name: "  Crucify",
    artist: "Emma Hewitt ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Emma Hewitt - Crucify (Richi Remix).mp3",
    timeCategory: "f afternoon"
},

















{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
     timeCategory: "f afternoon"
},












{
    name: "   On My Love",
    artist: "Zara Larsson ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Zara Larsson - On My Love.mp3",
    timeCategory: "f afternoon"
},


{
    name: "    Changes ",
    artist: "ZHU ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/ZHU - Changes.mp3",
    timeCategory: "f afternoon"
},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
      timeCategory: "f afternoon"
},



{
     name: "  Diferente",
    artist: "Steve Aoki  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Steve Aoki - Diferente.mp3",
     timeCategory: "f afternoon"
},


{
    name: "Take My Breath",
    artist: "The Weeknd",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/The weeknd - Take my breath.mp3",
    timeCategory: "f afternoon"
},







{
    name: " I Am The Drama  ",
    artist: "Bebe Rexha  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Bebe Rexha - I Am The Drama.mp3",
  
      timeCategory: "f afternoon"

},
{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
      timeCategory: "f afternoon"

},












{
    name: "  Work With You Love ",
    artist: "Alok    ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Alok - Work With You Love.mp3",
    timeCategory: "f afternoon"

},




{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
     timeCategory: "f afternoon"

},











{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
     timeCategory: "f afternoon"

},


  



































{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
        timeCategory: "f afternoon"

},


{
    name: "Suburbia",
    artist: "Tove Lo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Tove Lo - Suburbia.mp3",
       timeCategory: "f afternoon"

},
{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


       timeCategory: "f afternoon"

},

{
    name: "Grandmaster Flash ",
    artist: "White  Lines ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/White  Lines - Grandmaster Flash & the furious five.mp3",
      timeCategory: "f afternoon"

},

{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/reklame/reklame1.mp3",
      timeCategory: "f afternoon"

},


{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet4.mp3",
        timeCategory: "f afternoon"

},



{
    name: "Sunday Night",
    artist: "Holy Molly x Lizot ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Holy Molly x Lizot - Sunday Night.mp3",
       timeCategory: "f afternoon"

},










{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
       timeCategory: "f afternoon"

},

{
     name: " Free Yourself",
    artist: "Jessie Ware  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Jessie Ware - Free Yourself.mp3",
        timeCategory: "f afternoon"

},











{
    name: "    Seven Stars",
    artist: "Quazar ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Quazar - Seven Stars.mp3",
  

  timeCategory: "f afternoon"

},










{
    name: " Funkytown (1980)",
    artist: "Lipps Inc. ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Lipps Inc. - Funkytown (1980).mp3",
  timeCategory: "f afternoon"

},





{
    name: "Looking Now",
    artist: "Bebe Rexha   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Bebe Rexha - Looking now.mp3",
   timeCategory: "f afternoon"

},



{
    name: " The Chime",
    artist: "Orbital ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic08.netlify.app/Orbital- The Chime.mp3",
   timeCategory: "f afternoon"

},



{
    name: "Looking Now",
    artist: "Bebe Rexha   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Bebe Rexha - Looking now.mp3",
   timeCategory: "f afternoon"

},







{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
   timeCategory: "f afternoon"

},
 



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
   timeCategory: "f afternoon"

},





{
    name: "Lifetimes ",
    artist: "Katy Perry ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic07.netlify.app/Katy Perry - Lifetimes.mp3",
  


  timeCategory: "f afternoon"

},







{
    name: "Ain't Nothing Goin'  (1986)",
    artist: "Gwen Guthrie  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Gwen Guthrie- Ain't Nothing Goin' On But The Rent.mp3",
  timeCategory: "f afternoon"
},
















{
    name: "Bad Company",
    artist: "Purple Disco Machine ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Purple Disco Machine - Bad Company.mp3",
   timeCategory: "f afternoon"

},



{
     name: " Don't Forget",
    artist: "Diplo & Miguel ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Diplo & Miguel - Don't forget my love.mp3",
     timeCategory: "f afternoon"

},


{
    name: "Running Up That Hill (12inch)",
    artist: "Kate Bush ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Kate Bush - Running up that hill (12inch).mp3",
   timeCategory: "f afternoon"

},














































{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
timeCategory: "f evening"
},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/DJ S.mp3",
 timeCategory: "f evening"
},




{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
  timeCategory: "f evening"
},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj6.mp3",
timeCategory: "f evening"
},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
 timeCategory: "f evening"
},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
  timeCategory: "f evening"
},



{
    name: "Goosebumps",
    artist: "MO",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/MO - Goosebumps.mp3",
timeCategory: "f evening"
},







{
    name: "Blinding Lights",
    artist: "The Weeknd  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/The weeknd - Blinding Lights.mp3", 
  timeCategory: "f evening"
},



{
    name: "Hello Hello",
    artist: "Inna x Melon ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Inna x Melon - Hello Hello.mp3",
timeCategory: "f evening"
},




{
    
    name: "Deephouse",
    artist: "Vibey",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Vibey05.mp3",
  timeCategory: "f evening"
},



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  timeCategory: "f evening"
},



{
     name: "That Feels Good",
    artist: "Jesse Ware",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Jesse Ware - That Feels Good.mp3",
  timeCategory: "f evening"
},



{
    name: "In The Mix",
    artist: "Mix Masters Feat. Mc Action",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Mix masters feat. Mc Action - In the mix.mp3",
  timeCategory: "f evening"
},








{
    name: "Boogie2nite",
    artist: "Booty Luv",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Booty luv - Boogie2nite.mp3",
  timeCategory: "f evening"
},


{
    name: "   One In A Million ",
    artist: "Bebe Rexha ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Bebe Rexha - One In A Million.mp3",
 timeCategory: "f evening"
},






{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny dance jingle.mp3",
  timeCategory: "f evening"
},







{
  
    name: " Nouveau Disco 01 ",
    artist: "Mix Central  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Mix Central - Nouveau Disco 01.mp3",
  timeCategory: "f evening"
},






{
  
    name: " Nouveau Disco 02 ",
    artist: "Mix Central  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Mix Central - Nouveau Disco 02.mp3",
 timeCategory: "f evening"
},











{
  
    name: " Nouveau Disco 03 ",
    artist: "Mix Central  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Mix Central - Nouveau Disco 03.mp3",
 timeCategory: "f evening"
},




{
  
    name: " Nouveau Disco 04 ",
    artist: "Mix Central  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Mix Central - Nouveau Disco 04.mp3",
timeCategory: "f evening"
},




{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
timeCategory: "f evening"
},

{
  
    name: " Nouveau Disco 05 ",
    artist: "Mix Central  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Mix Central - Nouveau Disco 05.mp3",
timeCategory: "f evening"
},































{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/let's go back.mp3",
        timeCategory: "f evening"
},


{
     name: "Told You So",
    artist: "Martin Garrix & Jex",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Martin Garrix & Jex - Told You So.mp3",
    timeCategory: "f evening"
},




  
{
    name: " Don't Stop ",
    artist: "KID  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/KID - Don't Stop.mp3",
   timeCategory: "f evening"
},




{
    name: "Gorgeous",
    artist: "Snoop Dogg, Dr Dre",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Snoop Dogg, Dr Dre - Gorgeous.mp3",
    timeCategory: "f evening"
},

{
    name: "   I Like It",
    artist: "Alesso, Nate Smith ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Alesso, Nate Smith - I Like It.mp3",
    timeCategory: "f evening"
},


{
    name: "I Feel Love (revisit mix)",
    artist: "Donna Summer ",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Donna Summer - I Feel Love (revisit mix).mp3",
    timeCategory: "f evening"
},













{
    name: "Obsessed",
    artist: "Calvin Harris ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Calvin Harris - Obsessed.mp3",
    timeCategory: "morning"


},




{
    name: "  She ",
    artist: "Elderbrook Cola    ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Elderbrook Cola - She.mp3",
    timeCategory: "morning"


},




{
    name: "Alice",
    artist: "Lady Gaga   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Lady Gaga - Alice.mp3",
           timeCategory: "morning"
},



{
    name: " It's All The Way Live",
    artist: "Lakeside ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Lakeside - It's All The Way Live.mp3",
          timeCategory: "morning"
},





{
    name: "Right Here ",
    artist: "SWV ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/SWV - Right Here.mp3",
        timeCategory: "morning"
},





{
    name: " In The Forest (1980)",
    artist: " Baby O  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Baby O - In The Forest.mp3",
  


      timeCategory: "morning"
},







{
    name: "Rasputin",
    artist: "Majestic  & Boney M ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/majestic  & Boney M - Rasputin.mp3",
  timeCategory: "f evening"
},




{
    name: "The Fall",
    artist: "Ship Wrek  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Ship Wrek - The Fall.mp3",
  timeCategory: "f evening"

},




{
    name: " Pipeline (1977)",
    artist: "Bruce Johnston  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Bruce Johnston- Pipeline.mp3",
timeCategory: "f evening"
},





{
  
    name: "Good Form",
    artist: "Nicki Minaj ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Nicki Minaj - Good Form.mp3",
     timeCategory: "f evening"

},










{
    name: " Better",
    artist: "MK, Burns  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/MK, Burns - Better.mp3",
    timeCategory: "f evening"
},


{
    name: "Un Momento",
    artist: "Inna  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Inna - Un Momento.mp3",
    timeCategory: "f evening"
},


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj3.mp3",
    timeCategory: "f evening"
},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj2.mp3",
      timeCategory: "f evening"
},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/Female Dj4.mp3",
      timeCategory: "f evening"
},






{
    name: "Boogie2nite",
    artist: "Booty Luv",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Booty luv - Boogie2nite.mp3",
  


    timeCategory: "f evening"
},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
      timeCategory: "f evening"
},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/DJ S.mp3",
     timeCategory: "f evening"

},








{
    name: "    Mellow Mellow Right On  ",
    artist: "Lowrell ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Lowrell - Mellow Mellow Right On.mp3",
   timeCategory: "f evening"

},








{
    name: " Rockit",
    artist: "Herbie Hancock  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Herbie Hancock - Rockit.mp3",
    timeCategory: "f evening"

},









{
    name: " All Fall Down",
    artist: "Five Star ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Five Star - All Fall Down.mp3",
          timeCategory: "f evening"

},


{
    name: "Kings & Queens",
    artist: "Ava Max  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Ava Max - Kings & Queens.mp3",
           timeCategory: "f evening"

},




















{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
            timeCategory: "f evening"
},

















{
     name: "   Just Be ",
    artist: "Tiesto ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Tiesto - Just Be.mp3",
           timeCategory: "f evening"
},








{
     name: " Gone",
    artist: "Noa Kirel  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Noa Korel - Gone.mp3",
      timeCategory: "f evening"

},






{
    name: "Q & A",
    artist: "Nona  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Nona - Q & A.mp3",
      timeCategory: "f evening"

},




{
    name: "Spinning Around",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Kylie Minogue - Spinning Around.mp3",
      timeCategory: "f evening"

},






{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
      timeCategory: "f evening"

},



{
    name: "Break My Heart",
    artist: "Dua Lipa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Dua Lipa - Break My Heart.mp3",
       timeCategory: "f evening"

},


{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
        timeCategory: "f evening"

},






{
    name: "Try",
    artist: "Dua Lipa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Dua Lipa - Try.mp3",
      timeCategory: "f evening"

},


{
    
    name: " I Wanna Give You Devotion",
    artist: "Nomad ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Nomad - I Wanna Give You Devotion.mp3",
      timeCategory: "f evening"

},



{
    name: "  Flashdance",
    artist: "Irene Cara   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Irene Cara - Flashdance.mp3",
       timeCategory: "f evening"

},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
      timeCategory: "f evening"

},







{
     name: "Only You",
    artist: "Alesso & Sentinel ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Alesso & Sentinel - Only You.mp3",
        timeCategory: "f evening"

},











































{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
          timeCategory: "f evening"

},








{
    name: "Loving You",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Loving You - Michael Jackson.mp3",
          timeCategory: "f evening"

},




{
    name: " It's Like That (1997)",
    artist: "RUN DMC ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/RUN DMC - It's Like That.mp3",
     timeCategory: "f evening"



},


{
    name: "How Long",
    artist: "Tove Lo",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Tove Lo - How Long.mp3",
      timeCategory: "f evening"

},

{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet4.mp3",
      timeCategory: "f evening"

},











{
    name: " Crazy In Love (2003)",
    artist: "Beyonce",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Beyonce - Crazy In Love.mp3",
   timeCategory: "f evening"


},






{
    name: "  Your Love",
    artist: "Lime ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Lime - Your Love.mp3",
       timeCategory: "f evening"



},




{
    name: "Return Of The Mack (12inch) ",
    artist: "Mark Morrison",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Mark Morrison - Return of the mack.mp3",
       timeCategory: "f evening"


},













{
    name: " Sex Lies",
    artist: "Latto ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Latto - Sex Lies.mp3",
       timeCategory: "f evening"
},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/DJ S.mp3",
       timeCategory: "f evening"



},











{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
      timeCategory: "f evening"



},


{
    name: "  Beat Dis (1987) ",
    artist: "Bomb The Base  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Bomb The Base - Beat Dis.mp3",
     timeCategory: "f evening"



},



{
    name: "  We Got A Love Thang",
    artist: "CC Peniston ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/CC Peniston - We Got A Love Thang.mp3",
      timeCategory: "f evening"



},





{
    name: "Autonomy",
    artist: "Bob Harsher ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Bob Harsher - Autonomy.mp3",
       timeCategory: "f evening"



},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
       timeCategory: "f evening"
},








 









{
    name: "Doing It",
    artist: "Rita Ora",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Rita Ora - Doing It.mp3",
   timeCategory: "f evening"
},


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle11.mp3",
      timeCategory: "f evening"



},










 
{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle22.mp3",
        timeCategory: "f evening"



},



 {
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
       timeCategory: "f evening"


},









{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
      timeCategory: "f evening"



},



































































































{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
    timeCategory: "f evening-late"
},














{
     name: "Beautiful People ",
    artist: "David Guetta Ft. Sia & Rihanna (new)",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic08.netlify.app/David Guetta Ft. Sia & Rihanna - Beautiful People.mp3",
    timeCategory: "f evening-late"
},



{
     name: " Anxiety ",
    artist: "Doechii (new)",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic08.netlify.app/Doechii - Anxiety.mp3",
    timeCategory: "f evening-late"
},








{
     name: " Handlebars",
    artist: "Jennie & Dua Lipa (new)",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic08.netlify.app/Jennie & Dua Lipa - Handlebars.mp3",
    timeCategory: "f evening-late"
},






{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic08.netlify.app/Lola Young - One Thing.mp3",
 timeCategory: "f evening-late"
},




{
     name: "Favourite Type",
    artist: "Roxen (new)",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic08.netlify.app/Roxen - Favourite Type.mp3",
 timeCategory: "f evening-late"
},




{
     name: " Beautiful People ",
    artist: "Sia David Guetta (new)",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic08.netlify.app/Sia David Guetta - Beautiful People.mp3",
 timeCategory: "f evening-late"
},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
 timeCategory: "f evening-late"
},





























{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
 timeCategory: "f evening-late"
},







{
     name: " Rush",
    artist: "Troye Sivan  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Troye Sivan - Rush.mp3",
  timeCategory: "f evening-late"
},



{
     name: " Horny",
    artist: "Mouse T ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Mouse T - Horny.mp3",
 timeCategory: "f evening-late"
},


































{
     name: "     Me So Horny (1989)",
    artist: "2 Live Crew  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/2 Live Crew - Me So H.mp3",
 timeCategory: "f evening-late"
},



{
    name: "   Ship wrek ",
    artist: "MLA ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/MLA - Ship wrek.mp3",
   timeCategory: "f evening-late"
},

{
    name: " Saturday Night (12inch)",
    artist: "T-Connection ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/T-Connection - Saturday Night.mp3",
 timeCategory: "f evening-late"
},









{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
 timeCategory: "f evening-late"
},





{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_05.mp3",
   timeCategory: "f evening-late"
},


{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_06.mp3",
 timeCategory: "f evening-late"
},
{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
 timeCategory: "f evening-late"
},



{
    name: "If You Don't Wanna Leave Me",
    artist: "Dua Lipa",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Dua Lipa - If you don't wanna leave me.mp3",
  


 timeCategory: "f evening-late"
},



{
    name: " Lighter ",
    artist: "Paris Hilton   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Paris Hilton - Lighter.mp3",

 timeCategory: "f evening-late"
},














{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/do not turnoff receiver.mp3",
  timeCategory: "f evening-late"
},



 


{
  
    name: "Drive",
    artist: "Clean Bandit",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Clean Bandit - Drive.mp3",
 timeCategory: "f evening-late"
},




{
    name: "The Weekend",
    artist: "Michael Gray  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://Sunnydanceoldies04.netlify.app/Michael Gray - The weekend.mp3",
 timeCategory: "f evening-late"
},




{
    name: "  Paul Van Dyk",
    artist: "For An Angel ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://Sunnydanceoldies04.netlify.app/For an Ange l- Paul van Dyk.mp3",
 timeCategory: "f evening-late"
},







{
    name: "  Rain Down Love",
    artist: "Siedah Garret ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://Sunnydanceoldies04.netlify.app/Siedah Garret - Rain down Love.mp3",
 timeCategory: "f evening-late"
},











{
    name: "Mesmerized (12inch)",
    artist: "Freemasons",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://Sunnydanceoldies04.netlify.app/Freemasons  - Mesmerized.mp3",
   timeCategory: "f evening-late"
},

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
 timeCategory: "f evening-late"
},

{
    name: "  Megamix",
    artist: "Janet Jackson   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Janet Jackson - Megamix2 (Luke).mp3",
 timeCategory: "f evening-late"
},

{
    name: " Sunglasses",
    artist: "Heidi Klum ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Heidi Klum - Sunglasses At Night.mp3",
  


 timeCategory: "f evening-late"
},











{


     name: " Pearls",
    artist: "Jesse Ware ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Jesse Ware - Pearls.mp3",
 timeCategory: "f evening-late"
},









 {

    name: "  Danger ",
    artist: "Olivia Dean ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Olivia Dean - Danger.mp3",
  timeCategory: "f evening-late"
},


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
 timeCategory: "f evening-late"
},







{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
   timeCategory: "f evening-late"
},

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
 timeCategory: "f evening-late"
},


{
    name: "The Motto",
    artist: "Tiesto & Ava Max",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Tiesto & Ava Max - the Motto.mp3",
  timeCategory: "f evening-late"
},



{
    name: "Save Your Tears",
    artist: "Ariane Grande ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Ariane Grande - Save your Tears.mp3",
  timeCategory: "f evening-late"
},






{
     name: "Be The One ",
    artist: "Dua Lipa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Dua Lipa - Be the One.mp3",
 timeCategory: "f evening-late"
},


{
    name: "Vibe",
    artist: "J Brown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/J Brown - Vibe.mp3",
   timeCategory: "f evening-late"
},



















{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle22.mp3",
  timeCategory: "f evening-late"
},

 





{
    name: "Marss (12inch, 1987)",
    artist: "Pump Up The Volume",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Marss Pump up the volume.mp3",
  


 timeCategory: "f evening-late"
},






{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
   timeCategory: "f evening-late"
},





{
    name: "Love Tonight",
    artist: "Shouse",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Shouse - Love tonight.mp3",
 timeCategory: "f evening-late"
},




{
    name: "Nothing But You",
    artist: "Paul Van Dyk",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Paul van Dyk - Nothing but you.mp3",
   timeCategory: "f evening-late"
},







{
    name: " About them time",
    artist: "Lizzo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Lizzo - About them time.mp3",
 timeCategory: "f evening-late"
},


{
    name: "I Need You",
    artist: "Dua Lipa  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Dua Lipa - I need you.mp3",
  timeCategory: "f evening-late"
},





 



 
{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle11.mp3",
 timeCategory: "f evening-late"
},








{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle22.mp3",
 timeCategory: "f evening-late"
},




















{
     name: " Oh Yeah",
    artist: "Yello ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Yello - Oh Yeah.mp3",
   timeCategory: "f evening-late"
},













{
    name: "You & Me",
    artist: "Disclosure ",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Disclosure - You & Me.mp3",
    timeCategory: "f evening-late"
},









{
    name: "Rumours",
    artist: "Lizzo",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Lizzo - Rumours.mp3",
     timeCategory: "f evening-late"
},





{
    name: "Pretty Girls",
    artist: "Will Smith",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Will Smith - Pretty Girls.mp3",
     timeCategory: "f evening-late"
},









{
    name: "Midnight Sun",
    artist: "Zara Larsson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Zara Larsson - Midnight Sun.mp3",
    timeCategory: "f evening-late"
},


{
    name: "I fell In Love",
    artist: "Alok & Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Alok & Kylie Minogue- I fell In Love.mp3",
    timeCategory: "f evening-late"
},






{
    name: " Black Sun",
    artist: "The Far Out Orchestra ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/The far out monster orchestra - Black sun.mp3",
  

      timeCategory: "f evening-late"
},




{
    name: "Break My Heart",
    artist: "Dua Lipa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Dua Lipa - Break My Heart.mp3",
     timeCategory: "f evening-late"

},





{
     name: "Only You",
    artist: "Alesso & Sentinel ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Alesso & Sentinel - Only You.mp3",
        timeCategory: "f evening-late"

},





{
    name: "Sacrifice",
    artist: "Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Bebe Rexha - Sacrifice.mp3",
      timeCategory: "f evening-late"



},



{
    name: "Return Of The Mack (12inch) ",
    artist: "Mark Morrison",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Mark Morrison - Return of the mack.mp3",
      timeCategory: "f evening-late"



},




{
    name: " Sex Lies",
    artist: "Latto ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Latto - Sex Lies.mp3",
       timeCategory: "f evening-late"


},





{
    name: "Autonomy",
    artist: "Bob Harsher ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Bob Harsher - Autonomy.mp3",
      timeCategory: "f evening-late"


},




{
    name: "Doing It",
    artist: "Rita Ora",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Rita Ora - Doing It.mp3",
  


     timeCategory: "f evening-late"



},


{
    name: " You Ain't The Only One",
    artist: "Mary J. Blige  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Mary J. Blige - You Ain't The Only One.mp3",
     timeCategory: "f evening-late"


},












{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
    timeCategory: "f evening-late"

},







{
    name: "  All Nighter",
    artist: "Tiesto  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Tiesto - All Nighter.mp3",
    timeCategory: "f evening-late"



},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
    timeCategory: "f evening-late"



},





{
    name: "   Disconnect",
    artist: "Becky Hill ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Becky Hill - Disconnect.mp3",
   timeCategory: "f evening-late"


},




{
    name: " Big Fun",
    artist: "Inner City  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Inner City - Big Fun.mp3",
   timeCategory: "f evening-late"



},































































];




































































// Get the current time category
const currentTimeCategory = getCurrentTimeCategory();

function filterMp3ByTimeCategory(mp3Files, timeCategory) {
    return mp3Files.filter(mp3 => mp3.timeCategory === timeCategory);
}






// Filter tracks based on the current category
const scheduledMp3Files = filterMp3ByTimeCategory(trackList, currentTimeCategory);

// Shuffle the selected tracks
const shuffledTracks = shuffle(scheduledMp3Files);

// Load and play the first track from the shuffled list

// Sort by playcount: least-played first
scheduledMp3Files.sort((a, b) => a.playcount - b.playcount);

if (shuffledTracks.length > 0) {
   


 loadTrack(0);  // Load the first track in random order

console.log("Shuffled Track Order:", shuffledTracks.map(track => track.name));




}



function loadTrack(track_index) {
    const track = scheduledMp3Files[track_index];

    if (!scheduledMp3Files || !track) {
        console.error("Error: No track found at index", track_index);
        return;
    }

    curr_track = new Audio(track.path);
      curr_track.addEventListener("play", () => {
        track.playcount = Number(track.playcount) || 0;
        track.playcount++;
        console.log(
          "🎧 Playcount updated:", track.name,
          "| Total plays:", computeTotalPlays()
       

 );
 

});












    // ✅ Ensure `curr_track` exists before proceeding
    if (!curr_track) {
        console.error("Error: `curr_track` is undefined!");
        return;
    }

    console.log("Loading track:", scheduledMp3Files[track_index].path);

    // ✅ Update track details
    track_art.style.backgroundImage = "url(" + scheduledMp3Files[track_index].image + ")";
    track_name.textContent = scheduledMp3Files[track_index].name;
    track_artist.textContent = scheduledMp3Files[track_index].artist;
    now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + scheduledMp3Files.length;

    // ✅ Ensure seek timer is reset
    clearInterval(updateTimer);
    updateTimer = setInterval(seekUpdate, 1000);

    // ✅ Move to next track when current finishes playing
    curr_track.addEventListener("ended", nextTrack);

    // ✅ Apply random background color
    random_bg_color();

    // ✅ Load track before applying event listeners
    curr_track.load();


function incrementPlayCount(track) {
  track.playcount = (track.playcount || 0) + 1;
}





curr_track.addEventListener("canplay", () => {
    // ✅ Attempt to highlight current track visually
    const allTracks = document.querySelectorAll('ul li');

    // Check if DOM elements exist
    if (!allTracks || allTracks.length === 0) {
        console.warn("No track items found in DOM—did you forget to render them?");
        return;
    }

    // Clear all blinking states
    allTracks.forEach(track => track.classList.remove('blinking'));

    // Safely apply blinking effect to current track
    if (track_index >= 0 && track_index < allTracks.length) {
        console.log("Highlighting track via autoplay:", allTracks[track_index]);
        allTracks[track_index].classList.add('blinking');
    } else {
        console.warn(`Track index ${track_index} is out of bounds for DOM tracks (${allTracks.length} items found).`);
    }
});



    







// ✅ Ensure dynamic volume balancing applies after full load
    curr_track.addEventListener("canplaythrough", () => {
        console.log("✅ canplaythrough event fired—applying volume adjustment...");
        adjustVolumeDynamically(curr_track);
    });
}



const sortedByPlaycount = [...scheduledMp3Files].sort((a, b) => b.playcount - a.playcount);
console.log("Sorted by playcount:", sortedByPlaycount.map(t => `${t.name}: ${t.playcount}`));






   // ── Sum all playcounts ──
    function computeTotalPlays() {
      return scheduledMp3Files.reduce((sum, t) => sum + (typeof t.playcount === "number" ? t.playcount : 0), 0);
    }



console.log("Playcount Order:", scheduledMp3Files.map(t => `${t.name}: ${t.playcount}`));




console.log("Playcounts:", scheduledMp3Files.map(t =>
  `${t.name}: ${typeof t.playcount === "number" ? t.playcount : 0}`
));










function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Shuffle track list **on page load**
trackList = shuffle(trackList);
console.log("Shuffled Track List:", trackList.map(track => track.name)); // Debugging










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

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
playpause_btn.innerHTML = '<img id= "med"  src="images/pause1.gif">';

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
























    const tracksToDisplayInitially = 10; // Number of tracks initially visible
    const additionalTracksPerClick = 5; // Number of tracks to load per click
    let currentDisplayLimit = tracksToDisplayInitially;

   function displaytrackList(limit = currentDisplayLimit) {
  const trackListElement = document.getElementById('track-list-container');
  trackListElement.innerHTML = ''; // Clear the list before repopulating

  const limitedTracks = scheduledMp3Files.slice(0, limit); // Get limited number of tracks

  limitedTracks.forEach((track) => {
    const lowerCaseName = track.name.toLowerCase();
    const lowerCaseArtist = track.artist.toLowerCase();

    if (!lowerCaseName.includes('yyy') && !lowerCaseArtist.includes('zzzz')) {
      const li = document.createElement('li');
      li.textContent = `${track.name} - ${track.artist}`;
      trackListElement.appendChild(li);
    
}
  });

 

  // Hide the "Show More" button if all tracks are displayed
  const showMoreButton = document.getElementById('show-more-button');
  if (limit >= scheduledMp3Files.length) {
    showMoreButton.style.display = 'none'; console.log('Button clicked!');
  }
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
    let nextIndex = track_index + 1;

    if (typeof nextIndex === "number" && nextIndex >= 0 && nextIndex < scheduledMp3Files.length) {
        track_index = nextIndex;
        loadTrack(track_index);
        playTrack();
     
} else {
        console.warn("🚧 No next track available—playlist end reached.");
        // Optionally loop back to first track or stay put:
       track_index = 0;
       loadTrack(track_index);
       playTrack();
    }
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









// --- 1) Helpers ---
function initializePlayCounts(tracks) {
  tracks.forEach(t => {
    if (typeof t.playcount !== "number") t.playcount = 0;
  });
}

function sortTracksByPlayCount(tracks) {
  return [...tracks].sort((a, b) => b.playcount - a.playcount);
}

function getRarelyPlayedTracks(tracks, maxPlays = 3) {
  return tracks.filter(t => t.playcount <= maxPlays);
}



// --- 2) Startup ---
initializePlayCounts(trackList);

// --- 3) Selection & Playback ---
function playRareTrack() {
  let pool = getRarelyPlayedTracks(trackList, 3);

  if (!pool.length) {
    console.warn("Resetting all play counts.");
    initializePlayCounts(trackList);
    pool = [...trackList];
  }

  const choice = pool[Math.floor(Math.random() * pool.length)];
  const idx    = trackList.indexOf(choice);

  // loadTrack should handle audio.src, play, etc.
 
}

// Call it whenever you need a new “rare” track
playRareTrack();




trackList.forEach((track, i) => {
  if (!track.name) {
    console.warn("Missing name at index", i, track);
  }
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










