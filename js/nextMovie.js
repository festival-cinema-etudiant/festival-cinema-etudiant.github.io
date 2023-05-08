// Définir la date du jour
const now = new Date().getTime();
const assetsDir = 'assets/img/350x350/';
const moviesName = [
  "Piccolo Corpo",
  "L'improbable voyage d'Harold Fry",
  "Les leçons persanes",
  "Joyland",
  "Charlotte",
  "Hyper Tension",
  "Les enfants du temps",
  "Belfast",
  "Licorice Pizza",
  "I'm your man",
  "Les nuits de Mashhad",
  "Simone"
];
//les films et les images
const moviesMap = new Map();
for (let i = 0; i < moviesName.length; i++) {
  let j = i+1;
  moviesMap.set(moviesName[i], assetsDir+j+".png");
}
//les dates et les films
const dateAndMovies = new Map();
dateAndMovies.set(new Date("May 15, 2023 18:00:00"), "Licorice Pizza");
dateAndMovies.set(new Date("May 16, 2023 16:00:00"), "I'm your man");
dateAndMovies.set(new Date("May 16, 2023 18:00:00"), "Piccolo Corpo");
dateAndMovies.set(new Date("May 16, 2023 20:00:00"), "Joyland");
dateAndMovies.set(new Date("May 17, 2023 18:00:00"), "Hyper Tension");
dateAndMovies.set(new Date("May 19, 2023 16:00:00"), "Charlotte");
dateAndMovies.set(new Date("May 19, 2023 18:00:00"), "Les enfants du temps");
dateAndMovies.set(new Date("May 20, 2023 14:00:00"), "I'm your man");
dateAndMovies.set(new Date("May 20, 2023 16:00:00"), "Joyland");
dateAndMovies.set(new Date("May 20, 2023 18:30:00"), "Simone");
dateAndMovies.set(new Date("May 22, 2023 16:00:00"), "Les leçons persanes");
dateAndMovies.set(new Date("May 22, 2023 18:30:00"), "Charlotte");
dateAndMovies.set(new Date("May 22, 2023 20:30:00"), "Piccolo Corpo");
dateAndMovies.set(new Date("May 23, 2023 16:00:00"), "Simone");
dateAndMovies.set(new Date("May 24, 2023 16:00:00"), "Belfast");
dateAndMovies.set(new Date("May 24, 2023 18:00:00"), "Les nuits de Mashhad");
dateAndMovies.set(new Date("May 25, 2023 18:00:00"), "Belfast");
dateAndMovies.set(new Date("May 25, 2023 20:00:00"), "Les leçons persanes");
dateAndMovies.set(new Date("May 26, 2023 18:00:00"), "Licorice Pizza");
dateAndMovies.set(new Date("May 26, 2023 20:30:00"), "L'improbable voyage d'Harold Fry");

function findNextMovie(date){
  var nextDate = null;
  var nextMovie = null;
  //trouver la date la plus proche
  dateAndMovies.forEach((value, key) => {
    if (date.getTime() < key.getTime() && nextDate == null){
      nextDate = key;
    }
  });
  if (nextDate != null){
    //le film correspondant à la date
    nextMovie = dateAndMovies.get(nextDate);
  }
  return [nextMovie, nextDate];
}

//date du jour
const dDay = new Date();
//récupérer les films qui passent ajd
var todayMovies = new Map();

dateAndMovies.forEach((value, key) => {
  var date = key;
  var movieName = value;
  var day = dDay.getDate();
  var month = dDay.getMonth();
  var year = dDay.getFullYear();
  if (day == date.getDate() && month == date.getMonth()){
    todayMovies.set(movieName, date);
  }
});

//si pas de film aujourd'hui
if (todayMovies.size == 0){
  var nextMovieAndDate = findNextMovie(dDay);
  var nextMovie = nextMovieAndDate[0];
  var nextDate = nextMovieAndDate[1];
  if (nextMovie != null){
    document.getElementsByClassName("boxTitle")[0].innerText = "Prochain film le "+nextDate.getDate()+"/"+(nextDate.getMonth()+1);
    document.getElementById("boxMoviePoster").src = moviesMap.get(nextMovie);
    document.getElementsByClassName("boxInfoTitle")[0].innerText = nextMovie;
    document.getElementsByClassName("boxInfoHour")[0].innerText = nextDate.getHours();
    if (nextDate.getMinutes() != 0){
      document.getElementById("boxInfoMinute").innerText = nextDate.getMinutes();
    }
  }else{
    //pas de film prochainement
    document.getElementsByClassName("boxTitle")[0].innerText = "Pas de film";
    document.getElementById("boxMoviePoster").src = "https://image.winudf.com/v2/image/Y29tLnR1dG96ei5yaWVuX3NjcmVlbl8yXzE1MzA2NTIwMzVfMDcy/screen-2.jpg?fakeurl=1&type=.jpg";
    document.getElementsByClassName("boxInfoTitle")[0].innerText = "Pas de film prochainement";
    document.getElementsByClassName("boxInfoHour")[0].innerText = "0";
    document.getElementById("boxInfoMinute").innerText = 0;
  }
}else{
  
  var i=0;
  var j= todayMovies.size;
  var todayMoviesArray = Array.from(todayMovies);

 setInterval(function(){
    if (i == j){
      i = 0;
    }
    var name = todayMoviesArray[i][0];
    var img = moviesMap.get(todayMoviesArray[i][0]);
    var hour = todayMoviesArray[i][1].getHours();
    var minutes = todayMoviesArray[i][1].getMinutes();
    document.getElementById("boxMoviePoster").src = img;
    document.getElementsByClassName("boxInfoTitle")[0].innerText = name;
    document.getElementsByClassName("boxInfoHour")[0].innerText = hour;
    if (minutes != 0){
      document.getElementById("boxInfoMinute").innerText = minutes;
    }else{
      document.getElementById("boxInfoMinute").innerText = "";
    }
    
    i++;
  }, 3000);
  
}