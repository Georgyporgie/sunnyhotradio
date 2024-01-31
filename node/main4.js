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
 


function nextTrack() {
  // Go back to the first track if the
  // current one is the last in the track list
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
 
  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}




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
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1.mp3",
  },










  {
    name: "Tonight On Sunny!",
    artist: "Miles Davis - In A Silent Way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },



{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/New track.mp3",
  },

{
    name: "Volume 4",
    artist: "Hotel Costes",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/hotel costes 4/Costes01.mp3",
  },



{
    name: "Volume 4",
    artist: "Hotel Costes",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/hotel costes 4/Costes02.mp3",
  },





{
    name: "Volume 4",
    artist: "Hotel Costes",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/hotel costes 4/Costes03.mp3",
  },




{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ4.mp3",
  },



























{
    name: "Que Bonito",
    artist: "Café del Mar, José Padilla  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },




{
    name: "Volume 4",
    artist: "Hotel Costes",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/hotel costes 4/Costes04.mp3",
  },








{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


},



{
    name: "Volume 4",
    artist: "Hotel Costes",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/hotel costes 4/Costes05.mp3",
  },



















{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  },











   









{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sunny ship/starten met Sunny.mp3",
  },






{
    name: "Volume 4",
    artist: "Hotel Costes",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/hotel costes 4/Costes06.mp3",
  },



{
    name: "Volume 4",
    artist: "Hotel Costes",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/hotel costes 4/Costes07.mp3",
  },

{
    name: "Volume 4",
    artist: "Hotel Costes",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/hotel costes 4/Costes08.mp3",
  },
  



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  },








 {
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
  


},    


{
    name: "My Mama Don't Told Me",
    artist: "Dinah Washington  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  },


{
    name: "Teach Me Tonight ",
    artist: "Al Jarreau",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },





{
    name: "If Dreams Come True",
    artist: "Ella Fitzgerald",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 4.mp3",
  },













  










{
    name: "Todays News",
    artist: "Nos Journaal",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


},


{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin9 .mp3",
  },


 



{
    name: "Three Little Words",
    artist: "Best of ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 16.mp3",
  },
   {
     name: "ClassicJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },

{
    name: "ClassicJazz",
    artist: "Best Of ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of Jazz Divas s- Vol. 15.mp3",
  },
 



{
    name: "Now They Call It Swing",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.24.mp3",
  },



 {
    name: "Tonight On Sunny!",
    artist: "Miles Davis - In A Silent Way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },


{
    name: "Arkansa Blues",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Best of classicJazz singin7 .mp3",
  },





 {
    name: "Cresecent",
    artist: "John Coltrane ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/John Coltrane - Cresecent05.mp3",
  },






{
    name: "Breakin' Away",
    artist: "Al Jarreau",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },



{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/New track.mp3",
  },
 




  {
     name: " Lounge",
    artist: "Avalon",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/avalon/Avalon2 - Lounge.mp3",
  },



  {
     name: " Lounge",
    artist: "Avalon",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/avalon/Avalon3 - Lounge.mp3",
  },


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ5.mp3",
  },

{
    name: "My Mama Don't Told Me",
    artist: "Dinah Washington  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },



  {
     name: " Lounge",
    artist: "Avalon",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/avalon/Avalon4 - Lounge.mp3",
  },



  {
     name: " Lounge",
    artist: "Avalon",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/avalon/Avalon5 - Lounge.mp3",
  },


 {
    name: "Tonight On Sunny!",
    artist: "Miles Davis - In a silent way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },



  {
     name: " Lounge",
    artist: "Avalon",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/avalon/Avalon6 - Lounge.mp3",
  },


  {
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
  },




{
     name: " Lounge",
    artist: "Avalon",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/avalon/Avalon7 - Lounge.mp3",
  },




{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
  },


 {
    name: "Tonight On Sunny!",
    artist: "Miles Davis - In a silent way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },



{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/New track.mp3",
  },

{
    name: "  Birdland (1979)",
    artist: "Manhattan Transfer",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Manhattan Transfer - Birdland (1979).mp3",
  },

  {
     name: " Lounge",
    artist: "Avalon",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/avalon/Avalon1- Lounge.mp3",
  },

{
    name: "One Fortune",
    artist: "Stan Getz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/Stan Getz - One Fortune.mp3",
  },


{
    name: "I Love You ",
    artist: "Zoot Sims ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Zoot sims - I love you .mp3",
  },


{

    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Trumpet jazz 4.mp3",
  },




{
    name: "My Mama Don't Told Me",
    artist: "Dinah Washington  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },





 

{
    name: "My Mama Don't Told Me",
    artist: "Dinah Washington  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  },




{
    name: "My Man ",
    artist: "Ella Fitzgerald",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 19.mp3",
  },

{
    name: "You Trust In Me",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 18.mp3",
  },
{
    name: "Love Me Or Leave Me",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divas s- Vol. 17.mp3",
  },



{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.5.mp3",
  },



{

    name: "Body & Soul",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas11.mp3",
  },



{

    name: "Bei Mir",
    artist: "Ella Fitzgerald",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 19.mp3",
  },









{
    name: "My Mama Don't Told Me",
    artist: "Dinah Washington  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  },


{

    name: "Goodnight My Love",
    artist: "Ella Fitzgerald",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 13.mp3",
  },


  {
    name: "Tonight On Sunny!",
    artist: "Miles Davis - In a silent way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },



{

    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Trumpet jazz 9.mp3",
  },


{
    name: "My Mama Don't Told Me",
    artist: "Dinah Washington  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },


{
    name: "Who Wants Love",
    artist: "Billy Holiday ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.16.mp3",
  },


{
    name: "Who Wants Love",
    artist: "Billy Holiday ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.17.mp3",
  },




{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Best of classicJazz singin1 .mp3",
  },




{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },













{

    name: "Am I Blue",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 08.mp3",
  },



{

    name: "All My Life",
    artist: "Ella Fitzgerald",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 07.mp3",
  },

{
    name: "One Banana",
    artist: "Benny Goodman  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Benny Goodman - One banana.mp3",
  },

{
    name: "My Mama Don't Told Me",
    artist: "Dinah Washington  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },




{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  },




{

    name: "Georgia",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz9.mp3",
  },


{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  },









{
    name: "Birmingham",
    artist: "Mildred Bailey ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin16 .mp3",
  },




{

    name: " Springtime In Your Heart (1934)",
    artist: "Al Bowlly ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Al Bowlly - Springtime In Your Heart.mp3",
  },


{
    name: "If Dreams Come True",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.22.mp3",
  },




{
    name: "Lester Young",
    artist: "Oscar Peterson",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Oscar Peterson 10.mp3",
  },


{
    name: "Lester Young",
    artist: "Oscar Peterson",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Oscar Peterson 11.mp3",
  },



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ5.mp3",
  },


{
    name: "Hope For",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.3.mp3",
  },



{
    name: "On The Sentimental Side",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.23.mp3",
  },


{
    name: "I Must Have That Man",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.4.mp3",
  },

{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
  },
{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/benny numan swing.mp3",
  },

   {
    name: "Tonight On Sunny!",
    artist: "  Miles Davis - In A Silent Way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },















{
    name: " Land Of....",
    artist: "St Germain",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/St. Germain - Land of....mp3",
  },














{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.6.mp3",
  },

  {
    name: "Tonight On Sunny!",
    artist: "Miles Davis - In A Silent Way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },













{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
  },






{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },





{
    name: "Joy ",
    artist: "Dinah Washington ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Dinah Washington - Joy.mp3",
  },


 {

    name: "If You Go You'Re Way",
    artist: "Ella Fitzgerald",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 10.mp3",
  },




{

    name: "Pick Me Up Daddy",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 09.mp3",
  },






 


{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bebop/silent way 03.mp3",
  


}, 

    



{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  },





 {
    name: "ClassicJazz",
    artist: "Best of ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 10.mp3",
  },

{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
  },
 
   {  
    name: "Fly Me To The Moon",
    artist: "Frank Sinatra",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Fly me to the moon.mp3",
  },
 
  

{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 9.mp3",
  },


{
    name: "Teach Me Tonight ",
    artist: "Al Jarreau",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },


{
    name: "My Mama Don't Told Me",
    artist: "Dinah Washington  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  },


{
  


  name: "ClassicJazz ",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },


{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },






























{
    name: "Que Bonito",
    artist: "Café del Mar, José Padilla  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },




{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
  },

















{
    name: " The Way You Look Tonight",
    artist: "Frank Sinatra ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Frank Sinatra - The Way You Look Tonight.mp3",
  },



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
  },














{
    name: "Todays News",
    artist: "Nos Journaal ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  },
{
    name: "Teach Me Tonight ",
    artist: "Al Jarreau",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },

 



{
    name: "Lost In You",
    artist: "Tammy Whynet ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Tammy Whynet - Lost in you.mp3",
  },



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  },








 {
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame.mp3",
  


},    




{
    name: "Teach Me Tonight ",
    artist: "Al Jarreau",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },



 

{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
  },





{
    name: "Strange Fruit",
    artist: "Billie Holiday ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin15 .mp3",
  },


{
    name: "Prisoner Of Love",
    artist: "Mildred Bailey ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin14 .mp3",
  },
  

  {
    name: "Tonighton Sunny!",
    artist: "Miles Davis - In A Silent Way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },


{
    name: "Teach Me Tonight ",
    artist: "Al Jarreau",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },




    



{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  },



{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sunny ship/starten met Sunny.mp3",
  },



 


{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },
  
 {
    name: "Indra",
    artist: "Thievery Corporation ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Thievery Corporation - Indra.mp3",
  },











{
    name: "Brrr",
    artist: "Zoot Sims ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Zoot sims - Brrr.mp3",
  },

{
    name: "Nobody Cares",
    artist: "Earl Klugh",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Earl Klugh - Nobody cares.mp3",
  },


{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  },



{
    name: "My Mama Don't Told Me  ",
    artist: "Dinah Washington  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  },


{
    name: "Made About You",
    artist: "Tammy Whynet ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/Tammy Whynet - Made about you .mp3",
  },
   {
     name: "ClassicJazz ",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },


{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Yellow basket.mp3",
  },

{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Trumpet jazz.mp3",
  },












   
{

    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/jazz divas 02.mp3",
  },






{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


}, 

 {
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
  


},    

{

    name: "Mimosa",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/latin/Azymuth  - Mimosa.mp3",
  },



{

    name: "Butterfly",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/latin/Azymuth - Butterfly.mp3",
  },



{

    name: "Last Summer In Rio",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/latin/Azymuth - Last Summer in Rio.mp3",
  },


{

    name: "Last Summer In Rio",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  },











{
    name: "Teach Me Tonight ",
    artist: "Al Jarreau",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },




{
    name: "Welcome!",
    artist: "Play Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },
 



 








 {
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },



{
    name: "My Mama Don'T Told Me",
    artist: "Dinah Washington  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  },





  {
    name: "Tonight On Sunny!",
    artist: "Miles Davis - In A Silent Way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },


{
    name: "Cresecent",
    artist: "John Coltrane ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/John Coltrane - Cresecent04.mp3",
  },

 


 {
    name: "Our Love",
    artist: "Louis Armstrong ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Louis Armstrong - Our Love.mp3",
  },

 

  {
    name: "Boo Boo",
    artist: "Ella Fitzgerald ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Ella Fitzgerald - Boo boo.mp3",
  },


  
 {
    name: "Tonight On Sunny!",
    artist: "Miles Davis - In A Silent Way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },



{
    name: "ClassicJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 20.mp3",
  },


{

    name: "God Bless The Child",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 06.mp3",
  },

{

    name: "God bless the child",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 05.mp3",
  },






{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
  },



















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj1.mp3",
  },


{

    name: "Wonderful world",
    artist: "Louis Armstrong",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Wonderful world.mp3",
  },


{
     name: "ClassicJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },
 




{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/jazz divas 03.mp3",
  },


{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.20.mp3",
  },



{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.10.mp3",
  },


{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.18.mp3",
  },



{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 2.mp3",
  },


{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin5 .mp3",
  },

 
{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  },








 {
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
  


},    



 {
    name: "Tonight On Sunny!",
    artist: "Miles Davis - In A Silent Way",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },
 




{
    name: "ClassicJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.13.mp3",
  },


{
    name: "ClassicJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.14.mp3",
  },

 {
    name: "ClassicJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 13.mp3",
  },
 
{
    name: "ClassicJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.15.mp3",
  },

{
    name: "ClassicJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 11.mp3",
  },



{
    name: "Lester Young",
    artist: "Oscar Peterson",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Oscar Peterson 01.mp3",
  },



{
    name: "Lester Young",
    artist: "Oscar Peterson",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Oscar Peterson 02.mp3",
  },


{

    name: "Fly Over The Horizon",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/latin/Azymuth - Fly over the horizon.mp3",
  },





{

    name: " Biaozinho Carioca",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/latin/Azymuth - Biaozinho Carioca.mp3",
  },


{

    name: "  Orange Clouds",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/latin/Azymuth - Orange Clouds.mp3",
  },


{

    name: "  Orange Clouds",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },



  {
     name: "ClassicJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },


{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Nina Simone birds.mp3",
  },



{
    name: "ClassicJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 3.mp3",
  },



{
    name: "ClassicJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 5.mp3",
  },


{
    name: "ClassicJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 6.mp3",
  },


{
    name: "ClassicJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 8.mp3",
  },




{
    name: "ClassicJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 7.mp3",
  },

{
    name: "ClassicJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.19.mp3",
  },




{
    name: "Tammy Whynet ",
    artist: "You Love Me",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/Tammy Whynet - You love me.mp3",
  },

{

    name: " Antes Que Esqueca",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/latin/Azymuth - Antes que esqueca.mp3",
  },





{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Dansez maintenant.mp3",
  },
 







{

    name: "Ain T Got That Swing",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz14.mp3",
  },



{

    name: "Ain T Got That Swing",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz15.mp3",
  },



{

    name: "Ain T Got That Swing",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz2.mp3",
  },




{

    name: "Ain T Got That Swing",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/ain t got that swing.mp3",
  },


{

    name: "Hotel Del Mar",
    artist: "Chillout Lounge",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Hotel del Mar06.mp3",
  },



{

    name: "M. Dupont",
    artist: "The Dining Rooms ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/The Dining Rooms - M. Dupont.mp3",
  },
 









{
    name: "ClassicJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.8.mp3",
  },




{
    name: "ClassicJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.9.mp3",
  },



{

    name: "Summertime",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 14.mp3",
  },

{

    name: "I Cry For You",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 18.mp3",
  },


{
    name: "Todays News",
    artist: "Nos Journaal",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


},



 {
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
  


},    






{
    name: "Fever ",
    artist: "Peggy Lee",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Peggy Lee - Fever.mp3",
  },



{
    name: "My Mama Don't Told Me",
    artist: "Dinah Washington  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles//smooth jazz jingle.mp3",
  },




{
    name: "Foolish Heart",
    artist: "Brenda Lee ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Brenda Lee - Foolish heart.mp3",
  },


{
    name: "Turkish Fruit",
    artist: "Benny Goodman  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Turkish fruit.mp3",
  },






{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },

{

    name: "The man I Love",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 15.mp3",
  },













  





 








{
    name: "Do Right",
    artist: "Benny Goodman ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Do right.mp3",
  },







{
    name: "Cresecent",
    artist: "John Coltrane ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/John Coltrane - Cresecent01.mp3",
  },


 {
    name: "Cresecent",
    artist: "John Coltrane ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/John Coltrane - Cresecent02.mp3",
  },



 
 {
    name: "Cresecent",
    artist: "John Coltrane ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/John Coltrane - Cresecent03.mp3",
  },






{
    name: "Sing Sing Sing ",
    artist: "Benny Goodman ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Sing sing sing.mp3",
  },



 

  {
    name: "Best Of King Of Swing",
    artist: "Benny Goodman ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Benny Goodman - Best of King of Swing.mp3",
  },


{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },




{

    name: "Anything But Love",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz16.mp3",
  },

{
  


  name: "ClassicJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },



{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  },


{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Best of10.mp3",
  },

{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Best of11.mp3",
  },






{

    name: "Sun Goddess",
    artist: "EWF & Ramsey Lewis",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/soulful/RAMSEY LEWIS - EARTH WIND FIRE - Sun Goddess.mp3",
  },


{
    name: "Baubles, Bangles And Beads (live 1964)",
    artist: "Sarah Vaughan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sarah vaughn/Sarah Vaughan - Baubles, Bangles And Beads (live 1964).mp3",
  },



{
    name: " Honeysuckle Rose (live 1964)",
    artist: "Sarah Vaughan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sarah vaughn/Sarah Vaughan - Honeysuckle Rose - ( live 1964).mp3",
  },


{

    name: "Blue Skies (1927)",
    artist: "Josephine Baker  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Josephine Baker - Blue Skies (1927).mp3",
  },




{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
  },








{
    name: " Bewitched (1956)",
    artist: "Ella Fitzgerald ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Ella Fitzgerald - Bewitched (1956).mp3",
  },




{
    name: "In A Sentimental Mood (1961) Live",
    artist: "Sarah Vaughan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sarah vaughn/Sarah Vaughan - In A Sentimental Mood (1961) Live (1964).mp3",
  },


{
    name: "Misty Live (1964)",
    artist: "Sarah Vaughan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sarah vaughn/Sarah Vaughan - Misty Live (1964).mp3",
  },


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
  },









{
    name: "Somewhere Over The Rainbow (live from Holland) (1958)",
    artist: "Sarah Vaughan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sarah vaughn/Sarah Vaughan - Somewhere Over The Rainbow (live from Holland) (1958).mp3",
  },











{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  },




{
    name: "I ll Get By (1937)",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.7.mp3",
  },



{
    name: "Silent Way (1969)",
    artist: "Miles Davis",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/silent way 02.mp3",
  


},





{

    name: "Ain't Misbehavin' (1945)",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Benny Goodman - Best of3.mp3",
  },


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ2.mp3",
  },



{
    name: "Benny Goodman - Best Of ",
    artist: "Benny Goodman ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Benny Goodman - Best of4.mp3",
  },

{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  },











{
    name: "I Wish You ",
    artist: "Peggy Lee",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Peggy Lee - I wish you.mp3",
  },







{
    name: "Left Where I Was ",
    artist: "John Coltrane  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/John Coltrane - Left where I was.mp3",
  },





{
    name: "Que Bonito",
    artist: "Café del Mar, José Padilla  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },







{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
  },












{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
  },



{
    name: "Lester Young",
    artist: "Oscar Peterson",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Oscar Peterson 07.mp3",
  },



{
    name: "Lester Young",
    artist: "Oscar Peterson",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Oscar Peterson 08.mp3",
  },





{
    name: "Lester Young",
    artist: "Oscar Peterson",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Oscar Peterson 09.mp3",
  },




{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ4.mp3",
  },



























{
    name: "Que Bonito",
    artist: "Café del Mar, José Padilla  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },




{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },








{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


},



{
  


  name: "ClassicJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },



















{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  },











   









{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sunny ship/starten met Sunny.mp3",
  },






{
    name: "Tender Lips",
    artist: "Billy Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.12.mp3",
  },




{

    name: "Georgia",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas17.mp3",
  },





{

    name: "Willow Tree",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/jazz divas 04.mp3",
  },





{
    name: "I Got It Bad",
    artist: "Ella Fitzgerald ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Best of classicJazz singin17 .mp3",
  },


{
    name: "Que Bonito",
    artist: "Café del Mar, José Padilla  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },







{
    name: "Never Be The Same",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.11.mp3",
  },


{
    name: "In A Silent Way",
    artist: "Miles Davis",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bebop/silent way 04.mp3",
  


}, 




{

    name: "ClassicJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/jazz divas 01.mp3",
  },































{
    name: "Que Bonito",
    artist: "Café del Mar, José Padilla  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },


{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz7.mp3",
  },



 {
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Best of classicJazz singin2 .mp3",
  },
  

{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin3 .mp3",
  },

{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },








   {  
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 14.mp3",
  },


    {
    name: "Welcome!",
    artist: "Play Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },
  
 {
    name: "Welcome!",
    artist: "Sunny Radio  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },


{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/are of mine.mp3",
  },

{
    name: "CLassicJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/sweet sue.mp3",
  },
  


{
    name: "ClassicJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Trumpet jazz 3.mp3",
  },
  













{

    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/Trumpet jazz 6.mp3",
  },



{
    name: "My Mama Don't Told Me",
    artist: "Dinah Washington  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Dinah Washington - My mama don't told me.mp3",
  },


{
    name: "Midway ",
    artist: "Brenda Lee  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Brenda Lee - Midway.mp3",
  },



{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


}, 




{
    name: "ClassicJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },








{

    name: "Rocking Chair",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas12.mp3",
  },
  



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  },








 {
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
  


},    


{
    name: "My Mama Don't Told Me",
    artist: "Dinah Washington  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  },


{
    name: "Teach Me Tonight ",
    artist: "Al Jarreau",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },





{
    name: "If Dreams Come True",
    artist: "Ella Fitzgerald",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 4.mp3",
  },

 {
    name: "Welcome!",
    artist: "Play Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },
  
 {
    name: "Welcome!",
    artist: "Sunny Radio  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },



{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  },



{

    name: "Aura",
    artist: "Olli Ahvenlahti  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/soulful/Olli Ahvenlahti - Aura - 1976.mp3",
  },




{

    name: " Centrifugal Force",
    artist: "John Klemmer ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/soulful/John Klemmer - Centrifugal Force - 1972.mp3",
  },



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },



{

    name: " Tutu",
    artist: "Miles Davis ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/soulful/Miles Davis - Tutu (That's What Happened - Live In Germany 1987).mp3",
  },



{

    name: " Fortune's Child",
    artist: "Nat Adderley ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/soulful/Nat Adderley - Fortune's Child - 1979.mp3",
  },




   {
    name: "ClassicJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },


    



 

















 
{
    name: "Vagabond",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz6.mp3",
  },
   {
    name: "ClassicJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },

{
    name: "Tea For Two",
    artist: "Ella Fitzgerald",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz7.mp3",
  },


{
    name: "My Mama Don't Told Me",
    artist: "Dinah Washington  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  },





 
{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },






  {  name: "Jazz Icons",
    artist: "Count Basie (live) 1962",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },









   





















{
     name: "Jazz Icons",
    artist: "Count Basie (live) 1962",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },





{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


}, 
 

 {
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
  


},    





{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },
  
 {
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },


{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },

{

    name: "Hotel Del Mar",
    artist: "Chillout lounge",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Hotel del Mar05.mp3",
  }, 

{

    name: "All Of Me",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz17.mp3",
  },


 

  {
    name: "Tonighton Sunny!",
    artist: "Miles Davis - In A Silent Way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },
  
 {
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },







{

    name: "Best Of",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Benny Goodman - Best of.mp3",
  },




{

   name: "Today Only On Sunny!",
    artist: "Miles Davis - In A Silent Way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bebop/silent way 01.mp3",
  },





{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Benny Goodman - Best of5.mp3",
  },


{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Best of6.mp3",
  },

{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Best of7.mp3",
  },


{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Best of8.mp3",
  },

{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Best of9.mp3",
  },


{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  },

{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


}, 
 



 {
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame.mp3",
  


},    

{
    name: "Tonighton Sunny!",
    artist: "Miles Davis - In A Silent Way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },
  




 
















{
    name: "My Mama Don't Told Me",
    artist: "Dinah Washington  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  },

   
  {
    name: "Yesterday",
    artist: "Billie Holiday ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin6 .mp3",
  },


{

    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 16.mp3",
  },







{
  


  name: "ClassicJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },

  




{

    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Trumpet jazz 8.mp3",
  },


{


    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Trumpet jazz 7.mp3",
  },














{
    name: "I Was A Fool ",
    artist: "Chet Baker ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Chet Baker - I was a fool.mp3",
  },

{
    name: " Just A Gigolo",
    artist: "Louis Prima ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Louis Prima - just a gigolo.mp3",
  },






{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/ain t got that swing.mp3",
  },



{
    name: "Get Ready For Love ",
    artist: "Zoot Sims",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Zoot Sims - Get Ready for Love.mp3",
  },


{
    name: "Teach Me Tonight ",
    artist: "Al Jarreau",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },


{
    name: "My Mama Don't Told Me",
    artist: "Dinah Washington  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  },

{
    name: "Rose Rouge",
    artist: "St Germain",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/St Germain - Rose Rouge.mp3",
  },



{
    name: "Rose Rouge",
    artist: "St Germain",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  },

 {  
    name: "Schoolboy Pie",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin13 .mp3",
  },
   



{  
    name: "See Me Laughing",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin12 .mp3",
  },
 
     {
    name: "Tonight On Sunny!",
    artist: "Miles Davis - In a silent way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },
 


{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  },




{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


}, 











{
    name: "Ain't Got Rhythm",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Billy Holiday & Lester Young vol.1.mp3",
  },
  

{
    name: "Pennys From Heaven",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.21.mp3",
  },


 {
   name: "Kisses Used To Be",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.2.mp3",
  },


{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  },


{

    name: "Jazzy Beats",
    artist: "Lounge Beats",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Lounge Beats01.mp3",
  },



{

    name: "Jazzy Beats",
    artist: "Lounge Beats",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Lounge Beats02.mp3",
  },


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ5.mp3",
  },


{

    name: "Jazzy Beats",
    artist: "Lounge Beats",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Lounge Beats03.mp3",
  },


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  },








 {
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame.mp3",
  


},


{

    name: "Jazzy Beats",
    artist: "Lounge Beats",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Lounge Beats04.mp3",
  },


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ2.mp3",
  },


{

    name: "Jazzy Beats",
    artist: "Lounge Beats",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Lounge Beats05.mp3",
  },



{

    name: "Jazzy Beats",
    artist: "Lounge Beats",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Lounge Beats06.mp3",
  },



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ3.mp3",
  },



{

    name: "Hotel Del Mar",
    artist: "Chillout Lounge",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Hotel del Mar03.mp3",
  },
  


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ4.mp3",
  },



{

    name: "Hotel Del Mar",
    artist: "Chillout Lounge",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Hotel del Mar04.mp3",
  },

{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ3.mp3",
  },


{
    name: "Welcome!",
    artist: "Play Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },
  
 {
    name: "Welcome!",
    artist: "Sunny Radio  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },



{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1.mp3",
  },





{

    name: "Hotel Del Mar",
    artist: "Chillout Lounge",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Hotel del Mar01.mp3",
  },



{
    name: "Surpise Surprise ",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz8.mp3",
  },


{

    name: "Hotel del Mar",
    artist: "Chillout Lounge",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Hotel del Mar02.mp3",
  },


 




{
     name: "ClassicJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },



{
    name: "ClassicJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin8 .mp3",
  },





{
    name: "Teach Me Tonight ",
    artist: "Al Jarreau",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },








{
    name: "ClassicJazz",
    artist: "Best Of ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin11 .mp3",
  },



 
  {
    name: "ClassicJazz",
    artist: "Best Of ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin10 .mp3",
  },
   {
     name: "ClassicJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },





{


    name: "Stairway To The Stars",
    artist: "Ella Fitzgerald",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of jazz13.mp3",
  },

{

    name: "Strange Fruit",
    artist: "Billie Holiday",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of jazz12.mp3",
  },

 {
    name: "Welcome!",
    artist: "Play Sunny jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },
  
 {
    name: "Welcome!",
    artist: "Sunny radio  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },

{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sunny ship/starten met Sunny.mp3",
  },





{

    name: "My Baby Just Cares For Me ",
    artist: "Nina Simone",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of jazz10.mp3",
  },


{
    name: "My Mama Don't Told Me",
    artist: "Dinah Washington  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  },








{
    name: "BoogieWoogie",
    artist: "Earl Klugh  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Earl Klugh - BoogieWoogie.mp3",
  },





{

    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/Trumpet jazz 5.mp3",
  },



{
    name: "Teach Me Tonight ",
    artist: "Al Jarreau",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },

{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },
  

{
    name: "Swing Out ",
    artist: "Benny Goodman  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Swing.mp3",
  },

{
    name: "Swing Out ",
    artist: "Benny Goodman  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Swing out.mp3",
  },

 {
    name: "Welcome!",
    artist: "Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  },


 






{
    name: "Marktplaats Song",
    artist: "Hotel Costes",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Hotel Costes - Marktplaats song.mp3",
  },






{
    name: "Rose Rouge",
    artist: "St Germain",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },





 


 {
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },



  {
    name: "Tonighton Sunny!",
    artist: "Miles Davis - In A Silent Way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },




 



{
    name: "Lester Young",
    artist: "Oscar Peterson",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Oscar Peterson 03.mp3",
  },



{
    name: "Lester Young",
    artist: "Oscar Peterson",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Oscar Peterson 04.mp3",
  },


{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  },




{

    name: "Body & Soul",
    artist: "Frank Sinatra",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz18.mp3",
  },



{

    name: "Cheeck To Cheeck",
    artist: "Ella & Louis",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of jazz11.mp3",
  },


{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


},

  
 {
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
  


},    








{
    name: "ClassicJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin4 .mp3",
  },







{
    name: "Don' T Let Go ",
    artist: "Ella Fitzgerald ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Ella Fitzgerald - Don' t let go.mp3",
  },

{
    name: "Magic",
    artist: "Dinah Washington ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Dinah Washington - Magic.mp3",
  },









{
    name: "Lester Young",
    artist: "Oscar Peterson",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Oscar Peterson 05.mp3",
  },





{
    name: "Lester Young",
    artist: "Oscar Peterson",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Oscar Peterson 06.mp3",
  },



{
    name: "Que Bonito",
    artist: "Café del Mar, José Padilla  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  },



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ2.mp3",
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
  
}
 
// Function to reset all values to their default
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}



function playpauseTrack() {
  // Switch between playing and pausing
  // depending on the current state
  if (!isPlaying) playTrack();
  else pauseTrack() ;
}
 
function playTrack() {
  // Play the loaded track
  curr_track.play();
  isPlaying = true;
 
  // Replace icon with the pause icon
  playpause_btn.innerHTML = '<img id= "med"  src="images/pause button6.png">';
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
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
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


document.getElementById("myImage")
 .addEventListener("touchstart",
  displayMessage);

function displayMessage() {
 document.getElementById("message")
  .innerHTML = "DJ Sapphire welcomes you to Smooth JazzRadio! <br>Have a pleasant evening we're starting with The Avalon Lounge!";
}


document.getElementById("hero-image")
 .addEventListener("touchstart",
  showMessage);

function showMessage() {
 document.getElementById("count")
  .innerHTML = "";
}



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
}, 1);




