



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


// Function to get the current time category
function getCurrentTimeCategory() {
  const currentHour = new Date().getHours();
  if (currentHour >= 5 && currentHour < 12) {
    return "afternoon";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "morning";
  } 
else if (currentHour >= 17 && currentHour < 21) {
    return "evening-late";
  } 

else {
    return "evening";
  }
}






// Create the audio element for the player
let curr_track = document.createElement('audio');
 
// Define the list of tracks that have to be played
let track_list = [

























{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },














































































































































































































{
    name: " Big Fun",
    artist: "Inner City  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Inner City - Big Fun.mp3",
  },




{
    name: "  Thinkin' about your love",
    artist: "Skipworth & Turner ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Skipworth & Turner - Thinkin' about your love.mp3",
  


},







{
    name: " Higher State Of Consciousness",
    artist: "Josh Wink  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Josh Wink - Higher state of consciousness.mp3",
  


},


{
    name: " Like I like It ",
    artist: " Aurra ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Aurra - Like I like It.mp3",
  


},

{
    name: " 19 ",
    artist: " Paul Hardcastle ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/19 - Paul Hardcastle.mp3",
  


},


{
    name: " All Night Long ",
    artist: "Mary Jane Girls ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Mary Jane Girls - All Night Long.mp3",
  


},



{
    name: " You Are My Melody  ",
    artist: "Change  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Change - You Are My Melody.mp3",
  


},

{
    name: " Searchin'  ",
    artist: "Hazel Dean ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Hazel Dean - Searchin'.mp3",
  


},



{
    name: "  20 hz  ",
    artist: " Capricorn  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Capricorn - 20 hz.mp3",
  


},


{
    name: "  Lfo ",
    artist: "Lfo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Lfo - Lfo.mp3",
  


},

{
    name: "  Energy Flash ",
    artist: "Joey Beltram  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Joey Beltram - Energy Flash.mp3",
  


},


{
    name: " Sun Is Shining ",
    artist: " Funkstar Deluxe ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Sun is shining - Funkstar deluxe.mp3",
  


},


{
    name: " Murphys Law",
    artist: "Cheri ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Cheri -Murphys Law.mp3",
  


},



{
    name: " Open your mind",
    artist: "Usura ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Usura - Open your mind.mp3",
  


},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },
 






{
    name: "  Brazil ",
    artist: "Spectrum ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Spectrum - Brazil.mp3",
  


},




{
    name: " French Kiss (1989)",
    artist: "Lil Louis   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Lil Louis - French Kiss.mp3",
  


},




{
    name: "  Popcorn Makers",
    artist: "Popcorn ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Popcorn - Popcorn Makers.mp3",
  


},




{
    name: "Enjoy The Silence",
    artist: "Depeche Mode ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Depeche Mode - Enjoy The Silence.mp3",
  },



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  },







{
  
    name: "Apologize",
    artist: "Timbaland",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Timbaland - Apologize.mp3",
  },

{
    name: "Love Foolosophy",
    artist: "Jamiroquaii",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Jamiroquaii - Love Foolosophy.mp3",
  


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
    path: "https://sunny-dancemusic02.netlify.app/The Knocks - Bang Bang.mp3",
  },








{
    name: "Chillhouse Del Mar",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/chillhouse del mar01.mp3",
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
    path: "muziek/jingles/Let op.mp3",
  },




{
    name: "Round And Round",
    artist: "Full Flava ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Full Flava - Round and round.mp3",
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
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/do not turnoff receiver.mp3",
  },







 
{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },






{
     name: " Believ ",
    artist: "Acraze ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Acraze - Believe.mp3",
  },


{
    name: "A Long Walk ",
    artist: "Jill Scott  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Jill Scott A Long Walk.mp3",
  },








{
     name: "Only You",
    artist: "Alesso & Sentinel ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Alesso & Sentinel - Only You.mp3",
  },


{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/time classic.mp3",
  },


{
    name: "  Magic's Wand (1982) ",
    artist: "Whodini  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Whodini - Magic's Wand.mp3",
  },


{
    name: " Sunrise (12inch)",
    artist: "Simply Red   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Simply Red - Sunrise (Extended).mp3",
  },



{
    name: "  Open Sesame",
    artist: "Leila K ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Leila K - Open Sesame.mp3",
  },


















{
    name: "Sacrifice",
    artist: "Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Bebe Rexha - Sacrifice.mp3",
  },



{
    name: "  Playgirl (1979)  ",
    artist: "La Velle ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/La Velle - Playgirl.mp3",
  },







{
    name: "The Power",
    artist: "Snap ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Snap - The Power.mp3",
  },










{
    name: "  Back In Time",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/back in time jingle.mp3",
  },











{
    name: " It's Like That (1997)",
    artist: "RUN DMC ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/RUN DMC - It's Like That.mp3",
  },










{
    name: " Crazy In Love (2003)",
    artist: "Beyonce",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Beyonce - Crazy In Love.mp3",
  


},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/time classic.mp3",
  },


{
    name: "  Your Love",
    artist: "Lime ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Lime - Your Love.mp3",
  },




{
    name: "Return Of The Mack (12inch) ",
    artist: "Mark Morrison",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Mark Morrison - Return of the mack.mp3",
  },










{
    name: " Freaky Deaky",
    artist: "Tyga & Doja Cat ",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Tyga & Doja Cat - Freaky Deaky.mp3",
  },


{
    name: " Sex Lies",
    artist: "Latto ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Latto - Sex Lies.mp3",
  },


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/DJ S.mp3",
  },





{
    name: "Passion (1992)",
    artist: "Gat Decor",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Gat Decor - Passion.mp3",
  },





{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },


{
    name: "  Beat Dis (1987) ",
    artist: "Bomb The Base  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Bomb The Base - Beat Dis.mp3",
  },



{
    name: "  We Got A Love Thang",
    artist: "CC Peniston ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/CC Peniston - We Got A Love Thang.mp3",
  },





{
    name: "Autonomy",
    artist: "Bob Harsher ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Bob Harsher - Autonomy.mp3",
  },



{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
  },








 


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/return classics.mp3",
  },






{
    name: "Doing It",
    artist: "Rita Ora",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Rita Ora - Doing It.mp3",
  


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
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },


























{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },





{
    name: "Pump Up The Jam",
    artist: "Technotronic ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Technotronic - Pump Up The Jam.mp3",
  },




{
    name: " Horsepower (1991)",
    artist: "Christian Jay Bolland ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Christian Jay Bolland - Horsepower (1991).mp3",
  


},


{
    name: " Technarchy",
    artist: "Cybersonic ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Cybersonic - Technarchy.mp3",
  


},





{
    name: "  Work It Out ",
    artist: "Miley Cyrus  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Miley Cyrus - Work It Out.mp3",
  },










{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
  },







 





{
    name: "In The Dark",
    artist: "Purple Disco Machine ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Purple disco machine - in the Dark.mp3",
  },







{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
  },


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj6.mp3",
  },

{
    name: "Drop It Like It's Hot",
    artist: "Snoop Dogg ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Snoop Dogg - Drop It Like It's Hot (Feat. Pharrell).mp3",
  },

{
    name: "Tell Me Why",
    artist: "Supermode ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Supermode - Tell me why.mp3",
  },




 



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },






 
 

{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you222.mp3",
  },



{
     name: "Tell Me What We're Gonna Do",
    artist: "Joss Stone",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Tell Me What We're Gonna Do Now.mp3",
  },



{
    name: "Welcome!",
    artist: "Sunny Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
    },









{
    name: "  Whatever",
    artist: "Kygo & Ava Max ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Kygo & Ava Max - Whatever.mp3",
  },

{
    name: " You Ain't The Only One",
    artist: "Mary J. Blige  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Mary J. Blige - You Ain't The Only One.mp3",
  },

{
     name: "   Natural Thing  ",
    artist: "Innocence ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Innocence - Natural Thing.mp3",
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
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },


{
    name: "Promised Land (12inch)",
    artist: "Joe Smooth",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Joe Smooth - Promised Land.mp3",
  },







{
    name: "Summer Madness (12inch)",
    artist: "Kool And The Gang",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Kool and the gang - Summer Madness.mp3",
  },




























{
    name: "Sunny (Ruud Remix)",
    artist: "Boney M  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Boney M - Sunny.mp3",
  },








{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },
 








{
    name: "Loving You",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Loving You - Michael Jackson.mp3",
  


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
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  },






{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
  },



{
    name: "Welcome!",
    artist: "Sunny Disco Machine",
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
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },





{
    name: "Chillhouse Del Mar",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/chillhouse del mar04.mp3",
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
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },


  






{
    name: " Can You Handle It",
    artist: "Sharon Redd ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Sharon Redd Can you handle it.mp3",
  


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
    name: " Stellar Funk (1978)",
    artist: "Slave  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Slave - Stellar Funk (1978).mp3",
  


},








{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },
 






{
    name: "  Welcome!",
    artist: "Listen Live Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/New track.mp3",
  },




{
     name: "Told You So (new)",
    artist: "Martin Garrix & Jex ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Martin Garrix & Jex - Told You So.mp3",
  },














{
    name: "  Gorgeous (new)",
    artist: "Snoop Dogg, Dr Dre   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Snoop Dogg, Dr Dre - Gorgeous.mp3",
  },

{
    name: "   I Like It",
    artist: "Alesso, Nate Smith ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Alesso, Nate Smith - I Like It.mp3",
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
    path: "https://sunnydancemusic07.netlify.app/Bebe Rexha - I Am The Drama.mp3",
  },








{
    name: "  Spot A Fake    ",
    artist: "AvA Max",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/AvA Max - Spot A Fake.mp3",
  },



{
    name: "Best Things (classic) ",
    artist: " Janet Jackson  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Luther Vandross & Janet Jackson - Best things in life are free.mp3",
  },




{
  


  name: "Saltwater (12inch)",
    artist: "Chicane  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Chicane - Saltwater.mp3"
  },



{
    name: " Miracles (12inch)",
    artist: "Change ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Change - Miracles.mp3",
  },



{
    name: " You Cant Hide ",
    artist: "David Joseph  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/David Joseph - You Cant Hide (Your Love From Me).mp3",
  },

{
    name: "  Believer",
    artist: "Freemasons  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Freemasons - Believer.mp3",
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
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },
 








{
    name: "  Welcome!",
    artist: "Listen Live Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/New track.mp3",
  },



{
    name: " No Bad Vibes (new) ",
    artist: "Jazzy   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic07.netlify.app/Jazzy feat. Kilimanjaro - No Bad Vibes.mp3",
  },






{
    name: "  DNA (new)",
    artist: "Sophie And The Giants ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://dancemusic07.netlify.app/Sophie AndThe Giants - DNA (feat. MEARSY).mp3",
  },

{
    name: "  Welcome!",
    artist: "Listen Live Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/New track.mp3",
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
  playpause_btn.innerHTML = '<img id="media" src="images/pause66.gif">';

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
  playpause_btn.innerHTML = '<img id= "med"  src="images/pause.png">';
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
















