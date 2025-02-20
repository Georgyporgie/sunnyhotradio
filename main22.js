



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
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },


















































































































 































{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  },


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
  },



















{
    name: "On The Beat",
    artist: "BB & Q Band ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/BB Q Band - On the Beat.mp3",
  },











{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you33.mp3",
  },



{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },










{
    name: "Real Groove",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Kylie Minogue -Real Groove.mp3",
  


},

















{
    name: "Welcome!",
    artist: "Purple Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
  


},





{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
  },



{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/time classic.mp3",
  },

{
    name: "  Born Slippy ",
    artist: "Underworld ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Underworld - born slippy2.mp3",
  },





{
    name: "Born To Be Alive",
    artist: "Patrick Hernandez ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Patrick Hernandez Born to be alive.mp3",
  },



{
    name: "Rain On Me",
    artist: "Gaga & Ariana  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Gaga & Ariana - Rain on me.mp3",
  },

























































{
     name: "  Gangsta's Paradise",
    artist: "Tink  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Tink - Gangsta's Paradise.mp3",
  },




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
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
    path: "https://sunnydancemusic05.netlify.app/Alok - Work With You Love.mp3",
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
    path: "https://sunnydanceoldies02.netlify.app/Strawberry Letter 23.mp3",
  },





{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },


  

















{
    name: " Bounce Skate Roll (12inch) ",
    artist: "Vaughan  Mason & Crew",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Vaughan  Mason & Crew - Bounce skate roll.mp3",
  },


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  },


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
  },



















{
    name: "On The Beat",
    artist: "BB & Q Band ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/BB Q Band - On the Beat.mp3",
  },












{
    name: " Saturday Night (12inch)",
    artist: "T-Connection ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/T-Connection - Saturday Night.mp3",
  },








{
    name: "Spacer",
    artist: "Sheila B Devotion",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Sheila B Devotion - Spacer.mp3",
  },
 












{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet4.mp3",
  },







{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  },


{
    name: "In The Mix",
    artist: "Mix Masters Feat. Mc Action",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Mix masters feat. Mc Action - In the mix.mp3",
  },





 



{
    name: " Another",
    artist: "Muni Long",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Muni Long - Another.mp3",
  


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
    path: "muziek/jingles/Let op.mp3",
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
    path: "muziek/jingles/Sunny radio snippet4.mp3",
  },


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  },

















{
    name: " Scream",
    artist: "Michael Jackson & Janet Jackson  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Michael Jackson , Janet Jackson -  Scream.mp3",
  },


{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/time classic.mp3",
  },




{
    name: "   Woman Of The Ghetto (1969) ",
    artist: "Marlena Shaw ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Marlena Shaw - Woman Of The Ghetto.mp3",
  },











{
     name: "Alarmschijf",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Alarm schijf.mp3",
  },






{
    name: " I Am The Drama  ",
    artist: "Bebe Rexha  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Bebe Rexha - I Am The Drama.mp3",
  },













{
     name: " Cybersonic",
    artist: "Technarchy ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Technarchy - Cybersonic.mp3",
  },







{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/do not turnoff receiver.mp3",
  },












{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },
 




{
    name: "     Human League  ",
    artist: "Human",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/microfoon Human - Human League.mp3",
  },



{
    name: "     Human League  ",
    artist: "Human",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Human - Human League.mp3",
  },


{
    name: "Just Get Ready (12inch) ",
    artist: "Sos Band",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Sos Band - Just get ready (Ben lIebrand remix).mp3",
  },




{
    name: "Loving You",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Loving You - Michael Jackson.mp3",
  


},


{
     name: "    Desire ",
    artist: "Cannons ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Cannons - Desire.mp3",
  },





{
    name: "  Cherie",
    artist: "Darius   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Darius - Cherie.mp3",
  },



{
     name: " Infatuation",
    artist: "SG Lewis ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/SG Lewis - Infatuation.mp3",
  },







{
     name: " Words",
    artist: "Alesso ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Alesso - Words.mp3",
  },
{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/back in time jingle.mp3",
  },

{
    name: "Lady Bug (1978)",
    artist: "Bumblebee Unlimited",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Bumblebee Unlimited - Lady Bug.mp3",
  },

{
     name: "On An On",
    artist: "Armin Van Buuren",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Armin Van Buuren - On An On.mp3",
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
    path: "https://sunnydancemusic04.netlify.app/Full Flava - Betcha would'nt hurt me.mp3",
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
    name: " Deep In Your Love ",
    artist: "Bebe Rexha  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Bebe Rexha & Alok - Deep In Your Love.mp3",
  },

{
    name: "  My Oh My ",
    artist: "Ava Max  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Ava Max - My Oh My.mp3",
  },







{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet4.mp3",
  },





















{
    name: "Do Watcha Wanna Do",
    artist: "Neil Rodgers",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Neil Rodgers - Do watcha wanna do.mp3",
  


},







{
    name: "Free Love",
    artist: "Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Bebe Rexha - Free love.mp3",
  },





{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/time classic.mp3",
  },




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/return classics.mp3",
  },

{
    name: " I Love Your Smile",
    artist: "Shanice ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Shanice - I Love Your Smile.mp3",
  },




{
    name: "Never Too Much",
    artist: "Luther Vandross ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Luther Vandross - Never Too Much.mp3",
  },

 

 


















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },













{
     name: "Chinese Whispers",
    artist: "Full Flava",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Full Flava - Chinese Whispers.mp3",
  },







 




{
    name: "From 9 Untill",
    artist: "Lakeside  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Lakeside - From 9 untill.mp3",
  },





{
    name: "Hurricane",
    artist: "Cannons",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Cannons - Hurricane.mp3",
  },

{
    name: " You Give Me Something",
    artist: "Jamiroquai  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Jamiroquai - You give me something.mp3",
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
    artist: "Post Malone  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Post Malone & The Weeknd - Lose Myself.mp3",
  },


{
    name: "Just For You",
    artist: "Sunny Ship",
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
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle22.mp3",
  },


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


},
{
    name: "Break The Rules",
    artist: "Charli XCX",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Charli XCX - Break the Rules.mp3",
  


},

 







{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
  },

{
  
    name: "A Second To Midnight",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Kylie Minogue &Years & Years  -A second to midnight.mp3",
  },





{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },



 
{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },






 
{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },
 











{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
  },





{
    name: " In My House (1984)",
    artist: "Mary Jane Girls  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Mary Jane Girls - In My House.mp3",
  },






{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  },









 
{
     name: "  Don't Think Twice ",
    artist: "Rita Ora  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Rita Ora - Don't Think Twice.mp3",
  },



{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  },






{
     name: " Time After Time",
    artist: "Pacal Letoublon ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Pacal Letoublon - Time After Time.mp3",
  },












{
    name: " The Age Of Love",
    artist: "Jam & Spoon  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Jam & Spoon - The Age of Love.mp3",
  },





{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  },



{
    name: "Love You Yes",
    artist: "Beverlei Brown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Love you yes- Beverlei Brown.mp3",
  


}, 





{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },




{
    name: " Vogue (12 inch) ",
    artist: "Madonna  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Madonna - Vogue (12 inch).mp3",
  },



{
    name: " What Have You Done",
    artist: "One Tribe ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/One Tribe feat. Gem - What Have You Done.mp3",
  },








{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
  },





{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },





{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
  },



{
    name: " Juicy Fruit",
    artist: "Mtume ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Mtume - Juicy Fruit.mp3",
  


},

{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },



{
    name: "Hallucinate",
    artist: "Dua Lipa  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Dua Lipa - Call my name.mp3",
  },





{
    name: "Welcome!",
    artist: "Purple Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
  


},








{
     name: "  Tension ",
    artist: "Kylie Minogue  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Kylie Minogue - Tension.mp3",
  },







{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },












{
     name: " Don't Be Afraid",
    artist: "Diplo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Diplo & Damian Lazarus - Don't be afraid.mp3",
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
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  },




{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },













{
     name: " Lady",
    artist: "Modjo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Modjo - Lady.mp3",
  },



{
    name: "Welcome!",
    artist: "Listen Live Sunny Dance radio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
  },



































{
  
    name: " The Greatest Dancer (12inch)",
    artist: "Sisters Sledge ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Sisters Sledge - He's The Greatest Dancer (12inch).mp3",
  },




{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/do not turnoff receiver.mp3",
  },



{
    name: " I Get Lonely",
    artist: "Janet Jackson  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Janet Jackson - I Get Lonely.mp3",
  },






{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/return classics.mp3",
  },



{
    name:  "Do You wanna Funk",
    artist: "Sylvester",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Sylvester- Do You wanna Funk.mp3",
  


},









{
    name: "Booty Call",
    artist: "Aronchupa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Aronchupa - Booty Call.mp3",
  },









{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
  },


{
    name: "   I Can Boogie ",
    artist: "Baccara",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Baccara - Yes Sir  I Can Boogie.mp3",
  },








{
    name: "  Crucify",
    artist: "Emma Hewitt ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Emma Hewitt - Crucify (Richi Remix).mp3",
  },

















{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
  },












{
    name: "   On My Love",
    artist: "Zara Larsson ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Zara Larsson - On My Love.mp3",
  },


{
    name: "    Changes ",
    artist: "ZHU ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/ZHU - Changes.mp3",
  },



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },



{
     name: "  Diferente",
    artist: "Steve Aoki  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Steve Aoki - Diferente.mp3",
  },


{
    name: "Take My Breath",
    artist: "The Weeknd",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/The weeknd - Take my breath.mp3",
  },


{
    name: " 10 35",
    artist: "Tate McRae ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Tate McRae - 10 35.mp3",
  },


{
    name: "Rise",
    artist: "Purple disco machine ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Purple disco machine - Rise.mp3",
  },


{
     name: "  All By Myself",
    artist: "Ellie Goulding  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Ellie Goulding - All By Myself.mp3",
  },








{
    name: "   Fake Love",
    artist: "Tink ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Tink - Fake Love.mp3",
  },





{
    name: "  Come and Get It",
    artist: "Ceranda ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Ceranda - Come and Get It.mp3",
  },











{
    name: "Devils Gun (12inch)",
    artist: "CJ & Co  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/CJ & Co - Devils Gun.mp3",
  },
  
 
{
    name: "Gimme Gimme Gimme",
    artist: "Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Bebe Rexha - Gimme gimme gimme.mp3",
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











window.setInterval(function()  {
startTime();
}, 1000);





 $('.btn').click(function () {
            $(this).toggleClass("click");
        });



// Create the ordered list and append it to the body
let ol = document.createElement('ol');
document.body.appendChild(ol);

// Function to create a list item for each track
function createListItem(track) {
  let li = document.createElement('li');

  





// Function to emphasize the words "classic", "maxi", "12inch", and "new" in a given text
  function emphasizeKeywords(text) {
 return text.replace(/(classic|maxi|12inch|new|\b\d{4}\b)/gi, function(match) {
      if (match.toLowerCase() === 'new') {
        return '<em class="blinking-new">' + match + '</em>';
      }
      return '<em>' + match + '</em>';
    });
  }

  let trackInfo = document.createElement('div');
  let emphasizedTrackName = emphasizeKeywords(track.name);
  let emphasizedArtist = emphasizeKeywords(track.artist);

  // Style the word "by" with light blue color
  let coloredBy = ' <span style="color: lightblue;">by</span> ';

  trackInfo.innerHTML = `<strong>${emphasizedTrackName}</strong>${coloredBy}${emphasizedArtist}`;
  li.appendChild(trackInfo);

  
















let audio = document.createElement('audio');
  let source = document.createElement('source');
  source.src = track.path;
  source.type = "audio/mpeg";
  audio.appendChild(source);
  li.appendChild(audio);

  // Event listener to make the track blink when playing
  audio.addEventListener('play', function() {
    li.classList.add('blinking');
  });
  audio.addEventListener('pause', function() {
    li.classList.remove('blinking');
  });
  audio.addEventListener('ended', function() {
    li.classList.remove('blinking');
  });

  return li;
}












// Filter the track list to exclude tracks with 'Sunny' in the artist's name
let filteredTrackList = track_list.filter(track => !track.artist.toLowerCase().includes('sunny'));

// Limit the filtered track list to 20 tracks
let limitedTrackList = filteredTrackList.slice(0, 20);

// Log the limited track list to the console
console.log("Limited track list:", limitedTrackList);

// Add each track to the ordered list
limitedTrackList.forEach(track => {
  ol.appendChild(createListItem(track));
});

// Append the ordered list to the placeholder div
document.getElementById('track-list-container').appendChild(ol);

// Log a message indicating the script has finished running
console.log("Script has finished running.");















//summary 21 - 40


// Create the summary element for tracks 21 to 40
let summaryElement1 = document.createElement('summary');
summaryElement1.textContent = 'tracks 21 to 40';

// Create a details element and append the summary to it
let detailsElement1 = document.createElement('details');
detailsElement1.appendChild(summaryElement1);

// Create the ordered list, set start attribute to 21, and add tracks 21 to 40
let additionalTrackList1 = filteredTrackList.slice(20, 40);
let additionalOl1 = document.createElement('ol');
additionalOl1.setAttribute('start', 21);

additionalTrackList1.forEach(track => {
  additionalOl1.appendChild(createListItem(track));
});

// Append the ordered list to the details element
detailsElement1.appendChild(additionalOl1);

// Append the details element to the placeholder div
document.getElementById('track-list-container').appendChild(detailsElement1);



















// Create the summary element for tracks 41 to 60
let summaryElement2 = document.createElement('summary');
summaryElement2.textContent = 'tracks 41 to 60';

// Create a details element and append the summary to it
let detailsElement2 = document.createElement('details');
detailsElement2.appendChild(summaryElement2);

// Create the ordered list, set start attribute to 41, and add tracks 41 to 60
let additionalTrackList2 = filteredTrackList.slice(40, 60);
let additionalOl2 = document.createElement('ol');
additionalOl2.setAttribute('start', 41);

additionalTrackList2.forEach(track => {
  additionalOl2.appendChild(createListItem(track));
});

// Append the ordered list to the details element
detailsElement2.appendChild(additionalOl2);

// Append the details element to the placeholder div
document.getElementById('track-list-container').appendChild(detailsElement2);



















// Log a message indicating the summaries for additional tracks have been added
console.log("Summaries for tracks 21 to 40 and 41 to 60 have been added.");

