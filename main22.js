


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
    artist: "Listen Live Sunny Dance",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
  },




















































































































































































































































{
    name: "Life For The Weekend",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Life for the weekend- Jingle.mp3",
  },






{
    name: "Classic",
    artist: "Time",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/time classic.mp3",
  },



{
     name: "  Windows ",
    artist: "SIL ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies06/SIL - Windows.mp3",
  },








{
     name: "   The House Of God ",
    artist: "DHS",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies06/DHS - The House Of God.mp3",
  },



{
     name: "  Rubb It In ",
    artist: "Fierce Ruling Diva ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies06/Fierce Ruling Diva - Rubb It In.mp3",
  },







{
     name: "   Papua New Guinea",
    artist: "FS Of London ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies06/FS Of London - Papua New Guinea.mp3",
  },










{
     name: "   Searchin' (1990)",
    artist: "33 Queen ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies06/33 Queen - Searchin' (1990).mp3",
  },






{
    name: "  Magic's Wand (1982) ",
    artist: "Whodini  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies05/Whodini - Magic's Wand.mp3",
  },


{
    name: " Sunrise (12inch)",
    artist: "Simply Red   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies03/Simply Red - Sunrise (Extended).mp3",
  },



{
    name: "  Open Sesame",
    artist: "Leila K ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies06/Leila K - Open Sesame.mp3",
  },


















{
    name: "Sacrifice",
    artist: "Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek02/Bebe Rexha - Sacrifice.mp3",
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
    path: "muziek/oldies05/Snap - The Power.mp3",
  },










{
    name: "  Back In Time",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/back in time jingle.mp3",
  },











{
    name: " It's Like That (1997)",
    artist: "RUN DMC t ",
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
    name: "  Back In Time",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/back in time jingle.mp3",
  },

{
     name: "    Paris Latino",
    artist: "Bandolero ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Bandolero - Paris Latino.mp3",
  },

{
    name: "  Welcome!",
    artist: "Listen Live Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/New track.mp3",
  },


{
    name: "   I Like It",
    artist: "Alesso, Nate Smith ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Alesso, Nate Smith - I Like It.mp3",
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


     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  },



{
    name: "  La Raza ",
    artist: "Kid Frost",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Kid Frost - La Raza 1.mp3",
  },

{
    name: "  Welcome!",
    artist: "Listen Live Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/New track.mp3",
  },


{
    name: " She's Gone Dance On  ",
    artist: "Disclosure  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Disclosure - She's Gone Dance On.mp3",
  },



{
    name: "  Finish Line",
    artist: "Yasmin",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Yasmin- Finish Line.mp3",
  },







{
    name: "   6 AM  ",
    artist: "Channel Tres    ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Channel Tres - 6 AM.mp3",
  },










{
    name: " Honesty",
    artist:  "Nelly Furtado  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Nelly Furtado - Honesty.mp3",
  },








{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
  },









{
    name: " Daisies ",
    artist: "Katy Perry  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Katy Perry - Daisies.mp3",
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
    path: "muziek/oldies02/Miami Sound Machine - Dr Beat.mp3",
  },





 


 










{
    name: " This It What You Came For",
    artist: "Calvin Harris    ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek03/Calvin Harris - This it what you came for.mp3",
  },



{
    name: "Tiktok Remix ",
    artist: "Prada & Cola  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek06/Prada & Cola - Tiktok Remix.mp3",
  },










{
    name: " Ghetto Feeling  ",
    artist: "Man Go Funk ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Man Go Funk - Ghetto Feeling.mp3",
  },
 














{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },
 
















{
    name: "   Save Your Soul",
    artist: "Tink ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Tink - Save Your Soul.mp3",
  },





{
    name: " Back To You ",
    artist: "Lost Frequencies    ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Lost Frequencies - Back To You.mp3",
  },










{
    name: "New To You",
    artist: "Calvin Harris",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek02/Calvin Harris - New to you.mp3",
  },

{
    name: "    Lay Low",
    artist: "Tiësto ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Tiësto - Lay Low.mp3",
  },

{
    name: "   All Nite",
    artist: "Janet Jackson  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Janet Jackson - All Nite.mp3",
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
    path: "muziek/sunny ship/radio dj - just for you.mp3",
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
    name: " Razzmatazz",
    artist: "Quincy Jones& Patti Austin  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies02/Quincy Jones& Patti Austin -  Razzmatazz.mp3",
  },




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },
 




{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you222.mp3",
  },








{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
  


},










{
    name: "Spinning Around",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek01/Kylie Minogue - Spinning Around.mp3",
  },

 

 {
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },

{
    name: "Make It Right",
    artist: "Donna Odain  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek03/Donna Odain - Make it right.mp3",
  },

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny dance jingle.mp3",
  },
{
    name: "Psychofreak",
    artist: "Camila Cabello ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek02/Camila Cabello - Psychofreak.mp3",
  },


{
    name: "     Trick Me ",
    artist: "Kelis ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Kelis - Trick Me.mp3",
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
    path: "muziek/jingles/Sunny radio snippet3.mp3",
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
    path: "muziek/jingles/Let op.mp3",
  },


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },


{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


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
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },


{
    name: "Welcome!",
    artist: "Purple Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
  


},



{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/Purple Disco Machine - Megamix 2023/Purple Disco Machine - Megamix 2023_01.mp3",
  },

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },

{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/Purple Disco Machine - Megamix 2023/Purple Disco Machine - Megamix 2023_03.mp3",
  },



{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/Purple Disco Machine - Megamix 2023/Purple Disco Machine - Megamix 2023_04.mp3",
  },


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },


{
    name: " Cry Baby",
    artist: "Clean Bandit  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Clean Bandit - Cry Baby.mp3",
  },





{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/Purple Disco Machine - Megamix 2023/Purple Disco Machine - Megamix 2023_05.mp3",
  },


{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/Purple Disco Machine - Megamix 2023/Purple Disco Machine - Megamix 2023_06.mp3",
  },

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },




{
    name: "  Welcome!",
    artist: "Listen Live Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/New track.mp3",
  },






{
    name: "  Whatever",
    artist: "Kygo & Ava Max ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Kygo & Ava Max - Whatever.mp3",
  },

{
    name: " You Ain't The Only One",
    artist: "Mary J. Blige  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Mary J. Blige - You Ain't The Only One.mp3",
  },

{
     name: "   Natural Thing  ",
    artist: "Innocence ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies05/Innocence - Natural Thing.mp3",
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
    path: "muziek/oldies03/Joe Smooth - Promised Land.mp3",
  },







{
    name: "Summer Madness (12inch)",
    artist: "Kool And The Gang",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek03/Kool and the gang - Summer Madness.mp3",
  },
















{
    name: "   On My Love",
    artist: "Zara Larsson ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek06/Zara Larsson - On My Love.mp3",
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
    path: "muziek/muziek05/Steve Aoki - Diferente.mp3",
  },


{
    name: "Take My Breath",
    artist: "The Weeknd",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek03/The weeknd - Take my breath.mp3",
  },


{
    name: " 10 35",
    artist: "Tate McRae ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Tate McRae - 10 35.mp3",
  },


{
    name: "Rise",
    artist: "Purple disco machine ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek02/Purple disco machine - Rise.mp3",
  },


{
     name: "  All By Myself",
    artist: "Ellie Goulding  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek04/Ellie Goulding - All By Myself.mp3",
  },








{
    name: "   Fake Love",
    artist: "Tink ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Tink - Fake Love.mp3",
  },





{
    name: "  Come and Get It",
    artist: "Ceranda ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek04/Ceranda - Come and Get It.mp3",
  },





{
    name: "  Back In Time",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/back in time jingle.mp3",
  },

{
     name: "  Say I'm Your Number One ",
    artist: "Princess  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Princess - Say I'm Your Number One.mp3",
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
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
  },




{
    name: "Hideaway",
    artist: "Kiesza  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek02/Kiesza - Hideaway.mp3",
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
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },




{
  
    name: "He's The Greatest Dancer (12inch)",
    artist: "Sisters Sledge ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies05/Sisters Sledge - He's The Greatest Dancer (12inch).mp3",
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
    path: "muziek/muziek06/Janet Jackson - I Get Lonely.mp3",
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
    path: "muziek/muziek01/Aronchupa - Booty Call.mp3",
  },









{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
  },


{
    name: " Yes Sir  I Can Boogie ",
    artist: "Baccara",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies05/Baccara - Yes Sir  I Can Boogie.mp3",
  },








{
    name: "  Crucify",
    artist: "Emma Hewitt ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Emma Hewitt - Crucify (Richi Remix).mp3",
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
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle11.mp3",
  },












 {
    name: "Radiation Level (12inch)",
    artist: "The Sun ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies02/The Sun - Radiation Level.mp3",
  


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
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },












{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },






{
    name: "Kiss Me More",
    artist: "Doja Cat  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek01/Doja Cat - Kiss me more.mp3",
  },



{
    name: "  After Midnight ",
    artist: "Lucas & Steve  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Lucas & Steve - After Midnight.mp3",
  },




{
    name: "Get Together",
    artist: "Bebe Rexha ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek02/Bebe Rexha - Get together.mp3",
  },








{
    name: "So Into You",
    artist: "Jhonni Blaze",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek04/Jhonni Blaze - So into you.mp3",
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
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },


{
    name: " Fast",
    artist: "Saweetie",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek03/Saweetie - Fast.mp3",
  


}, 








{
    name: "   Dopamine ",
    artist: "Purple Disco Machine ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Purple Disco Machine - Dopamine.mp3",
  },













{
    name: " Magic",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek04/Kylie Minogue - Magic.mp3",
  },











{
    name: "Calabria",
    artist: "Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek01/Bebe Rexha - Calabria.mp3",
  },

{
     name: "Alarmschijf",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Alarm schijf.mp3",
  },




{
    name: "  Love Me  ",
    artist: "Inna ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Inna - Love Me.mp3",
  },


{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },



{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },




{
  
    name: "You For Me",
    artist: "Sigala, Rita Ora",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek04/Sigala, Rita Ora - You for me.mp3",
  },

































{
    name: "Beautiful",
    artist: "Snoop Dogg",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek03/Snoop Dogg - Beautiful (Official Music Video) ft. Pharrell Williams.mp3",
  },





{
    name: "Fire For You",
    artist: "Cannons  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek03/Cannons - Fire for You.mp3",
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
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },
 


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },
 



{
    name: "Classic",
    artist: "Time",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/time classic.mp3",
  },



{
    name: "Get Ready ",
    artist: "Rufus & Chaka Kahn  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies03/Rufus & Chaka Kakhn - Get Ready.mp3",
  },






{
    name: "     Young Hearts Run Free  ",
    artist: "Candi Station ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies05/Candi Station - Young Hearts Run Free.mp3",
  },


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  },
















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },

{
    name:  "Vibe Like This",
    artist: "SG Lewis ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/SG Lewis - Vibe Like This.mp3",
  


}, 


{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
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
    path: "muziek/jingles/sunny dance jingle.mp3",
  },














{
    name: "Todays News",
    artist: "Nos Journaal",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


}, 


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle11.mp3",
  },

{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/do not turnoff receiver.mp3",
  },



{
    name: "More More More",
    artist: "Andrea True Connection ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies05/Andrea True Connection - More More More.mp3",
  },





{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },

{
    name: "   Ease On Me",
    artist: "Adele & Beyonce   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Adele & Beyonce -  Ease On Me.mp3",
  },

{
    name: "Pacific State",
    artist: "808 State  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies02/808 state - Pacific State.mp3",
  },








{
    name: "  Sunny Danceradio",
    artist: "return classics",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/back in time jingle.mp3",
  },




 







{
    name: "West End Girls (10'' Mix)",
    artist: "Pet Shop Boys ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies01/Pet Shop Boys - West End Girls (10'' Mix).mp3",
  },




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },





{
    name: "Let's Go Together (12inch)",
    artist: "Change ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies03/Change - Let's go together.mp3",
  },








{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
  },




















{
    name: "   The One ",
    artist: "Inji   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Inji - The One.mp3",
  },


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },





{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/discjockeys/40 in jingle.mp3",
  },


{
     name: "Alarmschijf",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Alarm schijf.mp3",
  },






{
    name: "  Love Me  ",
    artist: "Inna ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek07/Inna - Love Me.mp3",
  },





{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },














{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  },




{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },


{
    name: "  Back In Time",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/back in time jingle.mp3",
  },

{
    name: "Blood On The Dancefloor (12inch)",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies03/Michael Jackson- Blood on the dancefloor.mp3",
  },

















{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },








{
  
    name: "Cloud 9",
    artist: "Jamiroquai",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek03/Jamiroquai - Cloud 9.mp3",
  },







{
    name: "High Times",
    artist: "Jamiroquaii ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies03/Jamiroquaii - High Times.mp3",
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
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },








 
{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
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
     name:  "Another Life",
    artist: "SG Lewis ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/SG Lewis - Another Life.mp3",
  },



{
     name:  "React ",
    artist: "Switch Disco ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Switch Disco - React.mp3",
  },

{
    name: " Hey Hey Original",
    artist: "Dennis Ferrer",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek03/Dennis Ferrer- Hey Hey original.mp3",
  },


{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
  },


{
    name: "Paradise",
    artist: "Medusa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek01/Medusa - Paradise.mp3",
  },









{
    name: "     Groovejet ",
    artist: "Spiller ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Spiller - Groovejet.mp3",
  },




{
     name: "    Water Slide",
    artist: "Janelle Monae",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek06/Janelle Monae - Water Slide.mp3",
  },



{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
  },








{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },



{
    name: "Feel It Still",
    artist: "Portugal The Man",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek02/Portugal the man - Feel it still.mp3",
  },


{
    name: "Mind Up Tonight",
    artist: "Melba Moore",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies02/Melba Moore - Mind up tonight.mp3",
  },


{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you33.mp3",
  },


{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny dance jingle.mp3",
  },


{
    name: "   Love Is My Drug ",
    artist: "Post Malone   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek05/Post Malone - Love Is My Drug.mp3",
  },









{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj6.mp3",
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













