



 // Select all the elements in the HTML page
// and assign them to a variable
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









// Create the audio element for the player
let curr_track = document.createElement('audio');
 
// Define the list of tracks that have to be played
let track_list = [

























{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },


































































































































































































































































































































{
    name: "   Creep (1994)  ",
    artist: "TLC ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/TLC - Creep.mp3",
  },



{
    name: "  Whatta Man (1993)  ",
    artist: "Salt N Pepa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Salt N Pepa - Whatta Man.mp3",
  },


{
    name: " In The Forest (1980)",
    artist: " Baby O  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },




{
    name: "  Lucky Star (2000)  ",
    artist: "Superfunk ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Superfunk - Lucky Star.mp3",
  },


{
    name: "   No Scrubs (1999)  ",
    artist: "TLC ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/TLC - No Scrubs.mp3",
  },


{
    name: " Blue",
    artist: "Miley Cyrus & Bebe Rexha  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Miley Cyrus & Bebe Rexha- Blue.mp3",
  },










{
    name: "How We Do It",
    artist: "Sean Paul & Pia Mia",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Sean Paul & Pia Mia - How do we do it.mp3",
  


}, 






 
{
    name: " Fly Robin Fly ",
    artist: "Silver Convention",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you33.mp3",
  },




{
    name: "    Seven Stars",
    artist: "Quazar ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Quazar - Seven Stars.mp3",
  


},






{
    name: "   Still Believe",
    artist: "Mary J. Blige ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Mary J. Blige - Still Believe In Love.mp3",
  


},



{
    name: "   Could Be Something",
    artist: "Minelli  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Minelli - Could be Something.mp3",
  },






{
    name: "  Straight Ahead ",
    artist: "Nick Straker Band ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/return classics.mp3",
  },

{
    name: " Don't Stop ",
    artist: "KID  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/KID - Don't Stop.mp3",
  },





{
    name: " Shoot Your Shot (1982) ",
    artist: "Divine   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Divine - Shoot Your Shot (1982).mp3",
  },
  


{
    name: " SevenStars (Dragonfighters)",
    artist: "Quazar  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Quazar - SevenStars (Dragonfighters).mp3",
  },

{
    name: " Girls On My Mind (1985) ",
    artist: "Fatback ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Fatback - Girls On My Mind.mp3",
  },





{
    name: " Backstrokin'(1980) ",
    artist: "Fatback ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Fatback - Backstrokin'.mp3",
  },


{
    name: "Ain't Nothing Goin'  (1986)",
    artist: "Gwen Guthrie  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Gwen Guthrie- Ain't Nothing Goin' On But The Rent.mp3",
  },





{
    name: " Funkytown (1980)",
    artist: "Lipps Inc. ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Lipps Inc. - Funkytown (1980).mp3",
  },





{
    name: "Die In The Disco",
    artist: "Nightclub",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Nightclub - Die in the Disco.mp3",
  


}, 











{
    name: "   Sunny Disco ",
    artist: "Discomix 70",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Discomix 70.mp3",
  },



{
    name: "   Sunny Disco ",
    artist: "Discomix 70",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Discomix 70 2.mp3",
  },




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
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
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },
 















{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you222.mp3",
  },












{
    name: " Flawless",
    artist: "The Ones ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/The Ones - Flawless.mp3",
  },






{
    name: " Closer",
    artist: "Saweetie ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Saweetie - Closer.mp3",
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
    path: "muziek/sunny ship/radio dj - just for you333.mp3",
  },



{
     name: " DJ Take Control ",
    artist: "SL2  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/SL2 - DJ Take Control.mp3",
  },


{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },






{
    name: "Obsessed",
    artist: "Calvin Harris ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Calvin Harris - Obsessed.mp3",
  },


{
    name: "  She ",
    artist: "Elderbrook Cola    ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Elderbrook Cola - She.mp3",
  },





{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
  },








{
    name: "Little L",
    artist: "Jamiroquaii",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Jamiroquaii - Little L.mp3",
  


},


{
    name: " My Head My Heart",
    artist: "Ava Max ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Ava Max - My head my heart.mp3",
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
    path: "muziek/jingles/sunny dance jingle.mp3",
  },






{
    name: "No One Dies From Love",
    artist: "Tove Lo",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Tove Lo - No one dies from love.mp3",
  


},


{
    name: " You Know How To (12inch)",
    artist: "Phyllis Hyman  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Phyllis Hyman - You Know How To Love Me (12inch).mp3",
  },




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },


{
    name: "I'll Be Good",
    artist: "Rene &  Angela",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Rene &  Angela - I'll be good.mp3",
  },


{
    name: "   Creep (1994)  ",
    artist: "TLC ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/TLC - Creep.mp3",
  },



{
    name: "  Whatta Man (1993)  ",
    artist: "Salt N Pepa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Salt N Pepa - Whatta Man.mp3",
  },



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },




{
    name: "  Lucky Star (2000)  ",
    artist: "Superfunk ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Superfunk - Lucky Star.mp3",
  },


{
    name: "   No Scrubs (1999)  ",
    artist: "TLC ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/TLC - No Scrubs.mp3",
  },


{
    name: " Blue",
    artist: "Miley Cyrus & Bebe Rexha  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Miley Cyrus & Bebe Rexha- Blue.mp3",
  },










{
    name: "How We Do It",
    artist: "Sean Paul & Pia Mia",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Sean Paul & Pia Mia - How do we do it.mp3",
  


}, 







{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you33.mp3",
  },











{
    name: "   Still Believe",
    artist: "Mary J. Blige ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Mary J. Blige - Still Believe In Love.mp3",
  


},



{
    name: "   Could Be Something",
    artist: "Minelli  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Minelli - Could be Something.mp3",
  },






{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/return classics.mp3",
  },

{
    name: " Don't Stop ",
    artist: "KID  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/KID - Don't Stop.mp3",
  },





{
    name: " Shoot Your Shot (1982) ",
    artist: "Divine   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Divine - Shoot Your Shot (1982).mp3",
  },
  





{
    name: "Die In The Disco",
    artist: "Nightclub",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Nightclub - Die in the Disco.mp3",
  


}, 











{
    name: "   Sunny Disco ",
    artist: "Discomix 70",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Discomix 70.mp3",
  },



{
    name: "   Sunny Disco ",
    artist: "Discomix 70",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Discomix 70 2.mp3",
  },
































































































{
    name: "Right Here ",
    artist: "SWV ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/SWV - Right Here.mp3",
  },





{
    name: "   Fever   ",
    artist: "Charlotte Day Wilson ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Charlotte D. Wilson - Fever (12inch).mp3",
  },




 {
    name: " Stars",
    artist: "Pnau & Bebe Rexha ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Pnau & Bebe Rexha - Stars.mp3",
  },

{
    
    name: "  All Night Long ",
    artist: "Izzy Bizu",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Izzy Bizu - All Night Long.mp3",
  },

{
    name: "   Fool  ",
    artist: "Mr Belt ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Mr Belt - Fool.mp3",
  },





{
    name: " Too Funky (12inch)",
    artist: "George Michael  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/George Michael - Too Funky.mp3",
  },



{
    name: "  Rain Down Love",
    artist: "Siedah Garret ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Siedah Garret - Rain down Love.mp3",
  },




{
    name: "What You Waiting For",
    artist: "Gwen Stefani ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Gwen Stefani - What you waiting for.mp3",
  },




{
    name: " People Are People",
    artist: "Depeche Mode ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Depeche mode- People are people.mp3",
  },



{
    name: "Mesmerized (12inch)",
    artist: "Freemasons",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Freemasons  - Mesmerized.mp3",
  },


{
    name: "Best Of My Love",
    artist: "T-Connection",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/T-Connection - Best of my Love.mp3",
  },




{
  
    name: "Don't Be Shy",
    artist: "Dj Tiesto 7 Karol G",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Dj Tiesto 7 Karol G - Don't be shy.mp3",
  },



{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


},


{
     name: "   Freak Me Now ",
    artist: "Jessie Ware ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Jessie Ware - Freak Me Now.mp3",
  },


{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },




{
    name: "A Walk In The Park ",
    artist: "Nick Straker ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Nick Straker Band - A walk in the park 7inch.mp3",
  },

{
    name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
  },


{
    name: "Rasputin",
    artist: "Majestic  & Boney M ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/majestic  & Boney M - Rasputin.mp3",
  },







{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },
 






 {
    name: " Quadrophonia ",
    artist: "Quadrophonia",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Quadrophonia - Quadrophonia (original).mp3",
  


},


{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },



 












{
    name: " Dance The Night",
    artist: "Dua Lipa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Dua Lipa - Dance The Night.mp3",
  },



{
    name: " Wild Girls",
    artist: "Klymaxx",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Wild Girls - Klymaxx.mp3",
  


},



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },










{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },


{
    name: "    The Right Time  ",
    artist: "Lisa Stansfield ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Lisa Stansfield - This Is The Right Time (US Version).mp3",
  },




{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },










{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
  },


{
    name: "Suburbia",
    artist: "Tove Lo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Tove Lo - Suburbia.mp3",
  },
{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


},

{
    name: "Grandmaster Flash ",
    artist: "White  Lines ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/White  Lines - Grandmaster Flash & the furious five.mp3",
  },

{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/reklame/reklame1.mp3",
  },


{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet4.mp3",
  },



{
    name: "Sunday Night",
    artist: "Holy Molly x Lizot ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Holy Molly x Lizot - Sunday Night.mp3",
  },










{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
  },

{
     name: " Free Yourself",
    artist: "Jessie Ware  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Jessie Ware - Free Yourself.mp3",
  },



















{
    name: " I Am The Drama  ",
    artist: "Bebe Rexha  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Bebe Rexha - I Am The Drama.mp3",
  },


{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },








{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
  },






{
     name: "Loving You",
    artist: "The Cannons ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/The Cannons - Loving You.mp3",
  },







{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
  },

{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_08.mp3",
  },


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },



{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
  },




{
    name: " Daisies ",
    artist: "Katy Perry  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Katy Perry - Daisies.mp3",
  },


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/return classics.mp3",
  },




{
    name: "Dr Beat (12inch)",
    artist: "Miami Sound Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Miami Sound Machine - Dr Beat.mp3",
  },





 


 










{
    name: " This It What You ",
    artist: "Calvin Harris    ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Calvin Harris - This it what you came for.mp3",
  },



{
    name: "Tiktok Remix ",
    artist: "Prada & Cola  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic06.netlify.app/Prada & Cola - Tiktok Remix.mp3",
  },










{
    name: " Ghetto Feeling  ",
    artist: "Man Go Funk ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Man Go Funk - Ghetto Feeling.mp3",
  },
 














{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },









];















document.getElementById("max")
 .addEventListener("touchstart",
  displayName);

function displayName() {
 document.getElementById("bebe")
  .innerHTML = "Hi We're SG Lewis and Janelle Monae, we're happy to be here on Sunny!";
}
















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
  curr_track.src = filteredTrackList[track_index].path; // Set the track source
  curr_track.play();
  isPlaying = true;


  // Replace the play icon with the pause icon
  playpause_btn.innerHTML = '<img id="media" src="images/pause1.gif">';

  // Highlight the current track in the playlist
  let allTracks = document.querySelectorAll('ol li'); // Get all <li> elements
  allTracks.forEach(track => track.classList.remove('blinking')); // Remove "blinking" from all

  // Add "blinking" class to the current track
  if (allTracks[track_index]) { // Ensure the current track exists in the filtered list
    allTracks[track_index].classList.add('blinking');
  } else {
    console.error("Filtered track not found in the DOM!");
  }
}



function playpauseTrack() {
  
// Play the loaded track
  if (!isPlaying) playTrack();
  else pauseTrack() ;
 
  // Replace icon with the pause icon
  playpause_btn.innerHTML = '<img id= "med"  src="images/pause button.png">';
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
  let coloredBy = ' <span style="color: goldenrod;">by</span> ';

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
let filteredTrackList = track_list.filter(track => !track.artist.toLowerCase().includes('piem'));

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






// Create the summary element for tracks 61 to 80
let summaryElement3 = document.createElement('summary');
summaryElement3.textContent = 'tracks 61 to 80';

// Create a details element and append the summary to it
let detailsElement3 = document.createElement('details');
detailsElement3.appendChild(summaryElement3);

// Create the ordered list, set start attribute to 41, and add tracks 41 to 60
let additionalTrackList3 = filteredTrackList.slice(60, 80);
let additionalOl3 = document.createElement('ol');
additionalOl3.setAttribute('start', 61);

additionalTrackList3.forEach(track => {
  additionalOl3.appendChild(createListItem(track));
});

// Append the ordered list to the details element
detailsElement3.appendChild(additionalOl3);

// Append the details element to the placeholder div
document.getElementById('track-list-container').appendChild(detailsElement3);




// Create the summary element for tracks 81 to 100
let summaryElement4 = document.createElement('summary');
summaryElement4.textContent = 'tracks 81 to 100';

// Create a details element and append the summary to it
let detailsElement4 = document.createElement('details');
detailsElement4.appendChild(summaryElement4);

// Create the ordered list, set start attribute to 41, and add tracks 41 to 60
let additionalTrackList4 = filteredTrackList.slice(81, 101);
let additionalOl4 = document.createElement('ol');
additionalOl4.setAttribute('start', 81);

additionalTrackList4.forEach(track => {
  additionalOl4.appendChild(createListItem(track));
});

// Append the ordered list to the details element
detailsElement4.appendChild(additionalOl4);

// Append the details element to the placeholder div
document.getElementById('track-list-container').appendChild(detailsElement4);













// Log a message indicating the summaries for additional tracks have been added
console.log("Summaries for tracks 21 to 40 and 41 to 60 have been added.");











document.querySelector('li').classList.add('blinking-new');






// Function to analyze and normalize volume werkt misschien!!!!!


const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const track = audioContext.createMediaElementSource(audioElement);

// Create an analyser node
const analyser = audioContext.createAnalyser();

// Create a gain node to normalize volume
const gainNode = audioContext.createGain();

// Connect the nodes in the correct order
track.connect(gainNode);
gainNode.connect(analyser);
analyser.connect(audioContext.destination);

// Set up the analyser
analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

// Function to get the average volume
function getAverageVolume(array) {
  let values = 0;
  for (let i = 0; i < array.length; i++) {
    values += array[i];
  }
  return values / array.length;
}

// Function to normalize volume
function normalizeVolume() {
  analyser.getByteFrequencyData(dataArray);
  const volume = getAverageVolume(dataArray);

  // Adjust the gain to normalize volume
  gainNode.gain.value = 1 / (volume || 1); // Avoid division by zero
}

// Call the normalizeVolume function periodically
setInterval(normalizeVolume, 1000);


